$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Application.feature");
formatter.feature({
  "line": 1,
  "name": "Test apply to job functionality",
  "description": "",
  "id": "test-apply-to-job-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Check apply now functionality",
  "description": "",
  "id": "test-apply-to-job-functionality;check-apply-now-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@ValidApplication"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on apply now",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enters valid data",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "application is submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 17645962100,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_apply_now()"
});
formatter.result({
  "duration": 3322759500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.enters_valid_data()"
});
formatter.result({
  "duration": 21982355000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.application_is_submitted()"
});
formatter.result({
  "duration": 10384402400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Check submission on invalid mobile number",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-mobile-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@InvalidNumber"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters an invalid \u003cmobile number\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "invalid phone number is displyed",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-mobile-number;",
  "rows": [
    {
      "cells": [
        "mobile number"
      ],
      "line": 18,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-mobile-number;;1"
    },
    {
      "cells": [
        "1234567890"
      ],
      "line": 19,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-mobile-number;;2"
    },
    {
      "cells": [
        "2345678901"
      ],
      "line": 20,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-mobile-number;;3"
    },
    {
      "cells": [
        "7234567890"
      ],
      "line": 21,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-mobile-number;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Check submission on invalid mobile number",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-mobile-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@InvalidNumber"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters an invalid 1234567890",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "invalid phone number is displyed",
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 15125392800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3303089500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 23
    }
  ],
  "location": "ApplicationStepDef.user_enters_an_invalid(String)"
});
formatter.result({
  "duration": 4526669100,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3647499500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.error_is_displyed()"
});
formatter.result({
  "duration": 105664300,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat stepDefinition.ApplicationStepDef.error_is_displyed(ApplicationStepDef.java:106)\r\n\tat ✽.And invalid phone number is displyed(src/test/resources/Features/Application.feature:16)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 20,
  "name": "Check submission on invalid mobile number",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-mobile-number;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@InvalidNumber"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters an invalid 2345678901",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "invalid phone number is displyed",
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 16956406800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3358048800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2345678901",
      "offset": 23
    }
  ],
  "location": "ApplicationStepDef.user_enters_an_invalid(String)"
});
formatter.result({
  "duration": 4439027800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3709844600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.error_is_displyed()"
});
formatter.result({
  "duration": 37236100,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat stepDefinition.ApplicationStepDef.error_is_displyed(ApplicationStepDef.java:106)\r\n\tat ✽.And invalid phone number is displyed(src/test/resources/Features/Application.feature:16)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "Check submission on invalid mobile number",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-mobile-number;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@InvalidNumber"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters an invalid 7234567890",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "invalid phone number is displyed",
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 17471494000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3244089200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7234567890",
      "offset": 23
    }
  ],
  "location": "ApplicationStepDef.user_enters_an_invalid(String)"
});
formatter.result({
  "duration": 4595380900,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3737695100,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.error_is_displyed()"
});
formatter.result({
  "duration": 364739000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Check submission on invalid location",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-location",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@InvalidLocation"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters invalid as \u003clocation\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Location is not valid message is displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-location;",
  "rows": [
    {
      "cells": [
        "location"
      ],
      "line": 31,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-location;;1"
    },
    {
      "cells": [
        "()*\u0026"
      ],
      "line": 32,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-location;;2"
    },
    {
      "cells": [
        "12345"
      ],
      "line": 33,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-location;;3"
    },
    {
      "cells": [
        "Aba/123"
      ],
      "line": 34,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-location;;4"
    },
    {
      "cells": [
        "Aurangabad"
      ],
      "line": 35,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-location;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Check submission on invalid location",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-location;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@InvalidLocation"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters invalid as ()*\u0026",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Location is not valid message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 17263411900,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3287735600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ()*\u0026",
      "offset": 22
    }
  ],
  "location": "ApplicationStepDef.user_enters_invalid_as(String)"
});
formatter.result({
  "duration": 3391801800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3732183700,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.location_is_not_valid_message_is_displayed()"
});
formatter.result({
  "duration": 79502500,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat stepDefinition.ApplicationStepDef.location_is_not_valid_message_is_displayed(ApplicationStepDef.java:128)\r\n\tat ✽.And Location is not valid message is displayed(src/test/resources/Features/Application.feature:29)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 33,
  "name": "Check submission on invalid location",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-location;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@InvalidLocation"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters invalid as 12345",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Location is not valid message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 17936773700,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3446392400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 12345",
      "offset": 22
    }
  ],
  "location": "ApplicationStepDef.user_enters_invalid_as(String)"
});
formatter.result({
  "duration": 3609279700,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3816571700,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.location_is_not_valid_message_is_displayed()"
});
formatter.result({
  "duration": 31993300,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat stepDefinition.ApplicationStepDef.location_is_not_valid_message_is_displayed(ApplicationStepDef.java:128)\r\n\tat ✽.And Location is not valid message is displayed(src/test/resources/Features/Application.feature:29)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 34,
  "name": "Check submission on invalid location",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-location;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@InvalidLocation"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters invalid as Aba/123",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Location is not valid message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 17721835400,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3384338200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Aba/123",
      "offset": 22
    }
  ],
  "location": "ApplicationStepDef.user_enters_invalid_as(String)"
});
formatter.result({
  "duration": 3518502500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3746941600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.location_is_not_valid_message_is_displayed()"
});
formatter.result({
  "duration": 55259300,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat stepDefinition.ApplicationStepDef.location_is_not_valid_message_is_displayed(ApplicationStepDef.java:128)\r\n\tat ✽.And Location is not valid message is displayed(src/test/resources/Features/Application.feature:29)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 35,
  "name": "Check submission on invalid location",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-location;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@InvalidLocation"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters invalid as Aurangabad",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Location is not valid message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 17483163400,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3264296700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Aurangabad",
      "offset": 22
    }
  ],
  "location": "ApplicationStepDef.user_enters_invalid_as(String)"
});
formatter.result({
  "duration": 3450551200,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3727332000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.location_is_not_valid_message_is_displayed()"
});
formatter.result({
  "duration": 401391000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Check submission on invalid relevant experience",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-relevant-experience",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@InvalidRelExperience"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user enters invalid the\u003crelevant experience\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Invalid relative experience message should be displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-relevant-experience;",
  "rows": [
    {
      "cells": [
        "relevant experience"
      ],
      "line": 45,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-relevant-experience;;1"
    },
    {
      "cells": [
        "100"
      ],
      "line": 46,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-relevant-experience;;2"
    },
    {
      "cells": [
        "0"
      ],
      "line": 47,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-relevant-experience;;3"
    },
    {
      "cells": [
        "21"
      ],
      "line": 48,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-relevant-experience;;4"
    },
    {
      "cells": [
        "5"
      ],
      "line": 49,
      "id": "test-apply-to-job-functionality;check-submission-on-invalid-relevant-experience;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "Check submission on invalid relevant experience",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-relevant-experience;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@InvalidRelExperience"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user enters invalid the100",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Invalid relative experience message should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 16440510300,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3327142800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 23
    }
  ],
  "location": "ApplicationStepDef.user_enters_invalid_the(String)"
});
formatter.result({
  "duration": 3444271900,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3730679200,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.invalid_relative_experience_message_should_be_displayed()"
});
formatter.result({
  "duration": 58700100,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat stepDefinition.ApplicationStepDef.invalid_relative_experience_message_should_be_displayed(ApplicationStepDef.java:150)\r\n\tat ✽.And Invalid relative experience message should be displayed(src/test/resources/Features/Application.feature:43)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 47,
  "name": "Check submission on invalid relevant experience",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-relevant-experience;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@InvalidRelExperience"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user enters invalid the0",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Invalid relative experience message should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 17893827400,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3370081300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 23
    }
  ],
  "location": "ApplicationStepDef.user_enters_invalid_the(String)"
});
formatter.result({
  "duration": 3266963000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3768004700,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.invalid_relative_experience_message_should_be_displayed()"
});
formatter.result({
  "duration": 340638700,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Check submission on invalid relevant experience",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-relevant-experience;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@InvalidRelExperience"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user enters invalid the21",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Invalid relative experience message should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 15598863100,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3383670700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 23
    }
  ],
  "location": "ApplicationStepDef.user_enters_invalid_the(String)"
});
formatter.result({
  "duration": 3371228600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3747723100,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.invalid_relative_experience_message_should_be_displayed()"
});
formatter.result({
  "duration": 94873500,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat stepDefinition.ApplicationStepDef.invalid_relative_experience_message_should_be_displayed(ApplicationStepDef.java:150)\r\n\tat ✽.And Invalid relative experience message should be displayed(src/test/resources/Features/Application.feature:43)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 49,
  "name": "Check submission on invalid relevant experience",
  "description": "",
  "id": "test-apply-to-job-functionality;check-submission-on-invalid-relevant-experience;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@InvalidRelExperience"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user has selected a job",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "clicked on apply now",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user enters invalid the5",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Invalid relative experience message should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationStepDef.user_has_selected_a_job()"
});
formatter.result({
  "duration": 17196506800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3262409900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 23
    }
  ],
  "location": "ApplicationStepDef.user_enters_invalid_the(String)"
});
formatter.result({
  "duration": 3349590600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3777233000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.invalid_relative_experience_message_should_be_displayed()"
});
formatter.result({
  "duration": 324647200,
  "status": "passed"
});
});