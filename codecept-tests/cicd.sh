#bin/sh
#title        :cicd.sh
#description  : This script will publish the automation results to Zephyr JIRA Cloud
#author       : Amir
#date         : 13012021
#version      : 1.0
#usage        : sh cicd.sh


###################################config######################################
accessKey= "MGE4MWI2NjktYjg5OS0zZDdmLTg5YzItMmI5YTY2MjJiZjk4IDVhOWZjNjhlYzQ0NjcyMmI0MGFjODYxZSBVU0VSX0RFRkFVTFRfTkFNRQ"

secretKey= "jnScPq3Bow_3IkJEKsmjdj8QtpSAOFlreCeVrYvnLUM"

accountId= "5a9fc68ec446722b40ac861e"

zephyrBaseUrl= "https://prod-api.zephyr4jiracloud.com/connect/"

echo "creating jwt generation for zephyr for jira cloud authenttication"

echo "accessKey is \n"
echo $accessKey

echo "secretKey is \n"
echo $secretKey

echo "accountId is \n"
echo $accountId

echo "zephyrBaseUrl is \n"
echo $zephyrBaseUrl

echo "generating jwt \n"

curl -o headers -s -d '{ "accessKey": "'"$accessKey"'", "secretKey": "'"$secretKey"'", "accountId": "'"$accountId"'", "zephyrBaseUrl": "'"$zephyrBaseUrl"'",
"expirationTime": 36000}' -H "Content-Type: application/json" -XPOST https://prod-vortexapi.zephyr4jiracloud.com/api/v1/jwt/generate

jwt= "$(cat headers | head -n 1)"

echo "generated token is \n"
echo $jwt


#################################save and execute the job############################################

#To use save and execute the job api script uncomment line no 74 to 78 and comment line no 85 to 88


#Job information
#JobName="cicd demo"$ (date + "%Y-%m-%d %T")
jobName="ZephyrWithJIRA"
jobDescription="cicd using cucumber"
automationFramework="Cucumber"
projectKey="BDD"
versionName="Unscheduled"


#Cycle details
cycleName="Test Cycle 1"
createNewCycle="false"
appendDateTimeInCycleName="false"

#folder details
folderName="Regression"
createNewFolder="true"
appendDateTimeInFolderName="true"
assigneeUser="5a9fc68ec446722b40ac861e"

#results file path
#for windows path 'result/path=@\"C:/myfile.xml\"'
resultpath="@C:\Users\sku\Documents\Personal\zephyr-for-jira\codecept-tests\result.json"

echo "save and execute the job"


curl -o headers -s -v
-H 'authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uc21hcnRiZWFyLmN1Y3VtYmVyIiwiYXVkIjoiY2kiLCJjb250ZXh0Ijp7ImxpdmluZ19kb2NfaWQiOjE1MTl9LCJpYXQiOjE2MTA1MzY2ODV9.T2h1TybKVhoWNDsorWYTCpuY-JIiTU443pAZhYqeTWQ' \
-H 'content-type: multipart/form-data' \
-F results_file=@results.json \
-F language=js
-XPOST https://c4j.cucumber.io/ci/rest/api/results \

curl -o headers -s -v -H "accessKey: $accessKey" -H "jwt: $jwt" -H "Content-Type: multiple/form-data" -H "Content-Type: application/json" -F "jobName=$jobName"
-F "jobDescription=$jobDescription" -F "automationFramework=$automationFramework" -F "projectKey=$projectKey" -F "versionName=$versionName" -F "cycleName=$cycleName"
-F "createNewCycle=$createNewCycle" -F "appendDateTimeInCycleName=$appendDateTimeInCycleName" -F "folderName=$folderName" -F "createNewFolder=$createNewFolder"
-F "appendDateTimeInFolderName=$appendDateTimeInFolderName" -F "assigneeUser=$assigneeUser" -F "file=$resultpath" -XPOST
https://prod-vortexapi.zephyr4jiracloud.com/api/v1/automation/job/saveAndExecute

result="$(cat headers | head -n 1)"
echo $result
