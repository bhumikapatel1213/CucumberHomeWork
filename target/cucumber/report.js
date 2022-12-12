$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BankCash.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankCashFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"\u003cusername\u003e\" in \"Username\" field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the \"\u003cpassword\u003e\" in \"Password\" field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003caccountTitle\u003e\" in \"AccountTitle\" page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003cdescription\u003e\" in \"AccountDescription\" page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003cinitialBalance\u003e\" in \"InitialBalance\" page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003caccountNumber\u003e\" in \"AccountNumber\" page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003ccontactPerson\u003e\" in \"ContactPerson\" page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cPhone\u003e\" in \"PhoneNumber\" page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in \"BankingURL\" page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Checking",
        "Salary",
        "$3450",
        "23454167",
        "876987456",
        "2345",
        "www.yahoo.com"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6837214900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@BankCashFeature"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"demo@techfios.com\" in \"Username\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the \"abc123\" in \"Password\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"Checking\" in \"AccountTitle\" page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"Salary\" in \"AccountDescription\" page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"$3450\" in \"InitialBalance\" page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"23454167\" in \"AccountNumber\" page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"876987456\" in \"ContactPerson\" page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"2345\" in \"PhoneNumber\" page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters \"www.yahoo.com\" in \"BankingURL\" page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 486152400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "Username",
      "offset": 40
    }
  ],
  "location": "LoginStepDef.user_enters_the_in_field(String,String)"
});
formatter.result({
  "duration": 221513600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    },
    {
      "val": "Password",
      "offset": 29
    }
  ],
  "location": "LoginStepDef.user_enters_the_in_field(String,String)"
});
formatter.result({
  "duration": 188423400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.user_clicks_on(String)"
});
formatter.result({
  "duration": 1660104400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 15954500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.user_clicks_on(String)"
});
formatter.result({
  "duration": 645001100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.user_clicks_on(String)"
});
formatter.result({
  "duration": 1259213100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking",
      "offset": 13
    },
    {
      "val": "AccountTitle",
      "offset": 27
    }
  ],
  "location": "LoginStepDef.user_enters_in_page(String,String)"
});
formatter.result({
  "duration": 326887300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Salary",
      "offset": 13
    },
    {
      "val": "AccountDescription",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_in_page(String,String)"
});
formatter.result({
  "duration": 136032000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$3450",
      "offset": 13
    },
    {
      "val": "InitialBalance",
      "offset": 24
    }
  ],
  "location": "LoginStepDef.user_enters_in_page(String,String)"
});
formatter.result({
  "duration": 215168000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23454167",
      "offset": 13
    },
    {
      "val": "AccountNumber",
      "offset": 27
    }
  ],
  "location": "LoginStepDef.user_enters_in_page(String,String)"
});
formatter.result({
  "duration": 197463800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "876987456",
      "offset": 13
    },
    {
      "val": "ContactPerson",
      "offset": 28
    }
  ],
  "location": "LoginStepDef.user_enters_in_page(String,String)"
});
formatter.result({
  "duration": 189803700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2345",
      "offset": 13
    },
    {
      "val": "PhoneNumber",
      "offset": 23
    }
  ],
  "location": "LoginStepDef.user_enters_in_page(String,String)"
});
formatter.result({
  "duration": 126726300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.yahoo.com",
      "offset": 13
    },
    {
      "val": "BankingURL",
      "offset": 32
    }
  ],
  "location": "LoginStepDef.user_enters_in_page(String,String)"
});
formatter.result({
  "duration": 184389000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.user_clicks_on(String)"
});
formatter.result({
  "duration": 984995700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 248249600,
  "status": "passed"
});
});