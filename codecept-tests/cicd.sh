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
jobName="cicd demo"
jobDescription="cicd using cucumber"
automation framework="Cucumber"
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
#resultpath="@C:\Users\sku\Documents\Personal\zephyr-for-jira\codecept-tests"

result= "$(cat headers | head -n 1)"
echo $result

