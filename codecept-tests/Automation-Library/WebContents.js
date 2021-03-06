module.exports = {

    ConventionType: [
        "Ad", "Ad Group", "Ad Set", "Advertiser", "Audience", "Campaign", "Creative", "Insertion Order", "Line Item", "Other", "Package", "Placement"
    ],

    AllChannels:{
      digitalChannels:["All digital channels","Ad Serving","Display","E-Commerce","Gaming","Programmatic","Search","Social","Video"],
      nonDigitalChannels:['All non-digital channels','Email','OOH','Print','Production','Radio','TV'],
      otherChannel:'Other'
    },
    SuccessMessage: {
        fieldSavedSuccessfully: 'field saved successfully',
        ConventionSavedSuccessfully: 'naming convention saved successfully',
        fieldDeletedSuccessfully: 'deleted Successfully',
        fieldDependencySavedSuccessfully: 'Field Dependency saved successfully',
        dependencyDeletionRequestCreated: 'dependency Deletion Request Created',
        publishedSuccessfully: "published successfully",
    },

    TableName: {
        draft: 'DRAFT',
        publish: 'LIVE',
        deletionRequest: 'Deletion Request',
        fieldDependency: 'Field dependencies',
        conventions: 'Conventions',
        fields: 'Fields',
    },

    PageHeaders: {
        addConvention: 'Add Naming Convention',
        addField: 'Add a draft client field',
        nameGenerator: ' Taxonomy Name Generator',
        dashboard: 'Taxonomy Manager',
        upload: 'Taxonomy Bulk Data Loader',
        publishDrafts: 'Publish Drafts',
        fieldDependency: 'Add field dependency draft(s)',
        deletionRequest: 'Add field dependency deletion request',
        editFieldDependency: 'Edit field dependency draft',
        editField: 'Edit a draft client field',
        editConvention: 'Edit draft naming convention',
    },

    pageSubHeading: {
        controllingField: 'When CONTROLLING field',
        dependentField: 'DEPENDENT field',
        isEqualTo: 'is equal to',
        onlyAllow: 'only allow',
        categoryOfNamingConvention: '  Category of naming convention',
        selectChannelForNC: 'Select the channel for this naming convention',
        selectNamingConventionType: 'Select the naming convention type',
        configureNamingConvention: ' Configure your naming convention',
        selectDefaultDelimiter: ' Select the default delimiter to separate the fields',
        selectField: ' Select number of fields for this convention',
        selectFieldType: 'Select field type',
        selectListType: 'Select type of the list',
        applyRules: 'Apply rules',
        characterUsage: 'Character usage',
        caseSenstivity: 'Case senstivity',
        addSpecialCharacters: 'Add special characters or character combination that should be excluded',
        enterTheValues: 'Enter the values',
        nameGeneratorInfo: 'Please select the taxonomy you would like to generate the naming convention string for.',
        fieldDescription: 'Give it a name',
    },

    Buttons: {
        publishDrafts: 'Publish Drafts',
        addNew: 'Add Client Field',
        editDraft: 'Edit Draft',
        addField:'Add Client Field',
        addConvention: 'Add Naming Convention',
        addFieldDependency: 'Add Field Dependency',
        saveDraft: 'Save as draft',
        cancel: 'Cancel',
        createANewDraft: 'Create a new Draft',
        generateNameString: 'Generate Name String',
        export: 'Export',
        generateTrafficSheet: 'Generate Traffic Sheet',
        saveDraftAndAddAnother: 'SAVE DRAFT AND ADD ANOTHER',
        saveAsDraft: 'Save as draft',
        ok: 'Ok',
        stayOnPage: 'Stay on page',
        yesCancel: "Yes, Cancel",
        deleteDraft: "Delete draft",
        close: 'Close',
    },

    ValidationMessage: {
        duplicateFieldDependency: 'Field dependency with same rule already exists.',
        pleaseAddDescription: 'Please add description.',
        controllingFieldValidation: '*Please select a controlling field.',
        dependentFieldValidation: '*Please select a dependent field.',
        dependentFieldValues: 'Please select some values for dependent field .',
        fieldNameRequired: 'Field name cannot be empty',
        descriptionRequired: 'Description cannot be empty',
        invalidDateFormat: 'Invalid Date Format',
        dateCurrentOrFuture: 'Date should be of current or future',
        maximalDate: 'Date should not be after maximal date',
        maxDescriptionChar: 'Description should not be more than 100 characters',
        maxFieldChar: '*Field Name should not be more than 250 characters',
        delimiterRequired: 'Delimiter cannot be empty.',
        channelRequired: 'Please select channel.',
        alreadyHaveConvention: '* You already have a convention with the same name',
         valueMissing: 'Value cannot be empty',
        // valueMissing:"Error: value cannot be empty",
         codeMissing: 'Code cannot be empty',
        alreadyHaveField: 'You already have a field with the same name',
        valuesRequiredInTable: 'There should be at least one entry in the table',
        maxNotLessThenMin: 'Maximum number of characters cannot be less than minimum number of characters',
        minimumLimit: 'Minimum Character  value cannot be less than 1',
        maxLimit: 'Value exceeded limit of 250',
        MaxNotLessThan1: 'Maximum Character  value cannot be less than 1',
        hiddenFieldInNormalConventionSection:'This field is used as a hidden field. Please first remove it from the Hidden Fields section if you want to add it to the naming convention'
    },

    RadioButtons: {
        listOfValues: 'List of values',
        freeFormTextValue: 'Freeform Text Value ',
        valueOnly: 'Value only',
        codeValue: 'Code and value',
        allCharacters: 'All characters',
        alphanumeric: 'Alphanumeric',
        numeric: 'Numeric',
        alphabetic: 'Alphabetic',
        noRules: 'Not case sensitive',
        uppercase: 'Uppercase (ABC)',
        lowercase: 'Lowercase (abc)',
        sentenceCase: 'Sentence case (Abc)',
        titleCase: 'Title case (Abc Bcd)',
        allChannels: 'All Digital Channels',
        specificChannels: 'Specific Channels',
        then: 'THEN (select dependent field)',
        and: 'AND (select another controlling field)',
    },

    checkBox: {
        allowSpaces: 'Allow Spaces',
        display: 'Display',
        social: 'Social',
        search: 'Search',
        video: 'Video',
    },

    popUpMessage: {
        continue: "Do you wish to continue?",
        cancelConformation: "Do you wish to cancel?",
        changesConformation: "Changes made to this field dependency will not be saved.",
        changeMessage: "Changes made to this page will not be saved.",
        doYouWishToContinue: "Other Field Dependency is being edited. Do you wish to continue?",
        invalidValues: 'Invalid values found',
        duplicateValues: 'Duplicate values found',
        selectedNotCompliant: "Values selected not compliant with dependency rule",
        conflictPopUp: "Conflict Rules",
        conflictPopUpInfo: "There are conflicting rules for this field.  Please contact your Taxonomy Administrator.",
        selectedNotCompliantInfo(fieldName) {
            return "Value selected for " + fieldName + " violates the dependency rule. Please select compliant values or contact your taxonomy admin for more info.";
        },
        Error: "Error",
        ErrorMessage: "This value is used in one or more field conditions. Please remove the value from all field conditions before deleting the value.",
        Dependencies: "Field Conditions",
        releaseNote: "Please write a short description of what’s in this release",
    },

    tabs: {
        conventionTab: 'Conventions',
        fieldTab: 'Fields',
        fieldDependencyTab: 'Field Dependencies',
    },

    urls: {
        privacyPolicyUrl: "https://www.dentsuaegisnetwork.com/uk/en/policies/privacy-policy",
    },

    endpoints: {
        nameGenerator: '/taxonomy/name-generator',
        dashboard: '/taxonomy/v1/TxmDashboard',
        publishDraft: '/taxonomy/v1/publish',
    },

    userRolePath: {
        loginUser: ''
    },

  live:{
    fieldParagraph: "Here you find the published Client Fields that are live and being used in other apps within the Media Ecosystem",
    conventionParagraph: "Here you find the published Naming Conventions that are live and being used in other apps within the Media Ecosystem",
    dependencyParagraph: "Here you find the published Field Conditions that are live and being used in other apps within the Media Ecosystem",
  },

  draft:{
    fieldParagraph: "Here you find the Client Fields that are either in progress or ready to publish",
    conventionParagraph: "Here you find the Naming Conventions that are either in progress or ready to publish",
    dependencyParagraph: "Here you find the Field Conditions that are either in progress or ready to publish",
  },

  conventionPage: {
    heading: ["The basics",
      "What's it for, the type and when to go live",
      "Give it a name",
      "Give it a short description",
      "Live date (optional)",
      "Purpose",
      "Where's it going to be used and what for",
      "Select the channels for this naming convention",
      "Select the naming convention type",
      "Configuration",
      "Set and arrange your fields and delimiters",
      "Select the default delimiters to separate fields",
      "Search and order your fields for this Naming Convention",
      "Hidden fields (optional)",
      "How are they used?"
    ],

    checkBox: [
      "All digital channels",
      "Display",
      "Social",
      "Search",
      "Video",
    ],

    description: [
      "Make sure it's under 250 characters, unique and easy to distinguish from other conventions",
      "Set this if you want it to be live on a specific date (will be available 00hrs UTC - NOT your local time). Otherwise this will be immediately available once published",
      "Be specific - to help others know what this means as it will be used in other apps, such as the Taxonomy Name Generator",
      "These are data fields that don't appear in your name strings but help keep them accurate. They are optional in Taxonomy Manager but, if included, will be mandatory in other Media Ecosystem apps like Name Generator.",
      "They provide extra metadata that allows you to capture related information (e.g. external IDs) that can be used in other apps further down the line. They can also be used as controlling fields in Field ",
    ],

    readyToRetireDescription:[
      "Mark this naming convention as ready to retire",
      "If you no longer require this convention, mark it as ready to retire here, provide a live date if required and confirm the deletion in the publishing manager.",
      "Live date (optional)",
      "Set this if you want it to be live on a specific date (will be available      at 00:00hrs UTC - NOT your local time). Otherwise this will be immediately available once published",
    ],

  },

  fieldPage: {
    heading: ["The basics",
      "Name, description and effective date",
      "Give it a name",
      "Give it a short description",
      "Effective date(optional)",
      "Select the type of field",
      "Formatting rules",
      "Type of field, rules for the value and excluded characters",
      "Character Usage",
      "Select case sensitivity",
      "Add special characters or character combination that should be excluded",
      "Spaces in the values",
    ],

    description: [
      "Make sure it's under XX characters, unique and easy to distinguish from other fields",
      "If effective date is specified, the field is activated at 0000hrs UTC (not your local time). When effective date is not specified, the field is activated immediately when published.",
      "This needs to be super helpful in describing the exact purpose of this field to avoid confusion (as this will be used as hint text in other applications like the Name Generator)",
      "* No need to enter naming convention delimiter characters to be excluded. These will be automatically configured.",
      "Minimum number of characters (1)",
      "Maximum number of characters (250)",
    ],

    placeholders: [
      "Click to enter a field name",
      "Click to enter a description",
      "Click to enter date",
      "click to enter minimum",
      "Click to enter max",
    ],

    checkboxForRules: [
      'All characters',
      'Alphanumeric',
      'Numeric',
      'Alphabetic',
      'No rules',
      'Uppercase',
      'Lower case',
      'Sentence case',
      'Title case',
    ],

    checkBox: [
      'List of values',
      'Freeform values',
      'Include a code?',
    ]


  },

  publishingManager:{
      publishParagraph:"Here is where you can publish items so they become live and available in other apps within the Media Ecosystem",
      retireParagraph: "Here is where you can retire items so they are no longer available in other apps within the Media Ecosystem"
  },

    dashboardLinkButton:["client fields","naming conventions","field conditions","ready to publish","ready to retire"],


    trafficSheetColumn: [
        "",
        "Vendor contact",
        "Vendor contact email",
        "Supplier Name (Prisma)",
        "Site Name",
        "Package Name",
        "Placement Name",
        "Dimensions",
        "Start Date",
        "End Date",
        "Cost Structure",
        "Units",
        "Rate",
        "Cost",
        "Verification Layer",
        "Ad Choices",
        "Ad Choices Pay model",
        "Survey Layer",
        "Rotation Type",
        "Rotation",
        "Creative Name 1",
        "Click-Through URL 1",
        "Creative Start Date",
        "Creative End Date",
        "Creative Name 2",
        "Click-Through URL 2",
        "Creative Start Date",
        "Creative End Date",
        "Creative Name 3",
        "Click-Through URL 3",
        "Creative Start Date",
        "Creative End Date"
    ],

    trafficSheetHeaders: [
        "Advertiser Name",
        "Campaign Name",
        "External ID",
        "URL Suffix (UTM, etc)",
        "Campaign Type",
        "Campaign ID",
        "Campaign Start Date",
        "Campaign End Date",
        "Revision Number",
        "Revision Date",
        "Verification Partner",
        "Account Planner",
        "Email",
        "Telephone Number/Extension",
        "Notes"
    ],

    trafficSheetField: [
        "Field",
        "Advertiser Name",
        "Campaign Name",
        "External ID",
        "URL suffix (UTM, etc)",
        "Campaign Type",
        "Campaign ID",
        "Campaign Start Date:",
        "Campaign End Date:",
        "Revision",
        "Revision Date",
        "Verification Partner",
        "Account Planner",
        "Email",
        "Telephone Number/Extension",
        "Notes"
    ],
    trafficSheetFieldVendor: [
        "Vendor contact",
        "Vendor contact email",
        "Supplier Name (Prisma)",
        "Site Name",
        "Package Name",
        "Placement Name",
        "Dimensions",
        "Start Date",
        "End Date",
        "Cost Structure",
        "Units",
        "Rate",
        "Cost",
        "Verification Layer",
        "Ad Choice",
        "Ad Choice Pay model",
        "Survey Layer",
        "Rotation Type",
        "Rotation",
        "Creative Name 1",
        "Click-Through URL 1",
        "Creative Start Date",
        "Creative End Date",
        "Creative Name 2",
        "Click-Through URL 2",
        "Creative Start Date",
        "Creative End Date",
        "Creative Name 3",
        "Click-Through URL 3",
        "Creative Start Date",
        "Creative End Date",
    ],

    trafficSheetDefinition: [
        "Definition",
        "Advertiser name within Ad Sever",
        "Name of the campaign",
        "An ID that is used to identify the campaign; It could be a billing ID, Purchase Order ID, Client Authorised ID, etc",
        "URL macros added to the end of URLs that will help with Google Analytics/UTMs/Adobe Analytics/Etc",
        "Listing out if the campaign is Display, Search or Social",
        "Campaign ID from Ad Server (where available)",
        "Start Date of the Campaign",
        "End Date of the Campaign",
        "Revision number of the traffic sheet",
        "Date of traffic sheet revision",
        "Identifying the type of Verification Partner: IAS, MOAT, etc",
        "Name of planner or activation person",
        "Planner/Activation email",
        "Planner/Activation Phone number",
        "Additional notes",
    ],
    trafficSheetDefinitionVendor: [
        "Contact name of the vendor/publisher",
        "Email of the vendor/publisher the tags will need to be sent to",
        "Name of the supplier within Prisma - if you are not using Prisma leave blank",
        "Name of the Site/Vendor the placement is booked with",
        "Name of the package that is being trafficked - if applicable",
        "Name of the placement that is being trafficked",
        "Ad size of the placement/creative",
        "Placement Start Date",
        "Placement End Date",
        "How this placement is planned and bought; Cost per Click (CPC), Cost per Thousand (CPM), etc",
        "Number of units being booked for the placement",
        "Price of units being booked for the placement",
        "Total cost of the placement",
        "Identifying the type of verification used: Monitoring or Blocking",
        "Identifying the Ad Choice Vendor used",
        "Identifying the Ad Choice Pay model: Agency or Publisher",
        "Identify at the Survey Provider implemented: MBD, Survata, etc",
        "Identifying the type of rotation of the creative for placement; Even, Weighted, Sequential",
        "Rotation value of creative for this placement to ad ops ensure the correct creatives are being trafficked out; 50%/50%, 20%/20%/60%",
        "Name of Creative 1",
        "URL of Creative 1",
        "Start date of Creative 1",
        "End date of Creative 1",
        "Name of Creative 2",
        "URL of Creative 2",
        "Start date of Creative 2",
        "End date of Creative 2",
        "Name of Creative 3",
        "URL of Creative 3",
        "Start date of Creative 3",
        "End date of Creative 3",
    ],

  fieldDependencyPage: {
    contents: ["The basics",
      "Description and effective date",
      "Give it a short description",
      "This needs to be super helpful in describing the exact purpose of this convention to avoid confusion (as this will\n" +
      "        be used as hint text in other applications like the Name Generator)",
      "Effective date (optional)",
      "If effective date is specified, the dependency is activated at 0000hrs UTC (not your local time).\n" +
      "    When effective date is not specified, the convention is activated immediately when published.",
      "Dependency builder",
      "Create your rule using the dropdowns",
      "When the condition is met the value will become visible in the name generator."
    ],

    placeholder:["Click to enter a description",
      "Click to enter date"
    ],
  },


};
