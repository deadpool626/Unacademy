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
  "duration": 14872221400,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_apply_now()"
});
formatter.result({
  "duration": 3349812500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.enters_valid_data()"
});
formatter.result({
  "duration": 22087456800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.application_is_submitted()"
});
formatter.result({
  "duration": 10452797000,
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
  "duration": 14389676300,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3285900200,
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
  "duration": 4673461800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3752315800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.error_is_displyed()"
});
formatter.result({
  "duration": 210082300,
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
  "duration": 15628866800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3322685700,
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
  "duration": 4432093000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3658172400,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.error_is_displyed()"
});
formatter.result({
  "duration": 52537700,
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
  "duration": 17238277500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3373716800,
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
  "duration": 4629213200,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3764926600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.error_is_displyed()"
});
formatter.result({
  "duration": 329011700,
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
  "duration": 14511638200,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3228039100,
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
  "duration": 3463684600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3707099400,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.location_is_not_valid_message_is_displayed()"
});
formatter.result({
  "duration": 36682500,
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
  "duration": 17521437500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3370424000,
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
  "duration": 3506827600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3833003100,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.location_is_not_valid_message_is_displayed()"
});
formatter.result({
  "duration": 64868400,
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
  "duration": 16330207500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3426547600,
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
  "duration": 3575547900,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3771988300,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.location_is_not_valid_message_is_displayed()"
});
formatter.result({
  "duration": 65442600,
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
  "duration": 16098709000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3328223300,
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
  "duration": 3808598400,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3754398600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.location_is_not_valid_message_is_displayed()"
});
formatter.result({
  "duration": 319886200,
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
  "duration": 15988328100,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3259549000,
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
  "duration": 3370668200,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3706090100,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.invalid_relative_experience_message_should_be_displayed()"
});
formatter.result({
  "duration": 58635700,
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
  "duration": 15788106400,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3244599600,
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
  "duration": 3260285000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3782560000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.invalid_relative_experience_message_should_be_displayed()"
});
formatter.result({
  "duration": 382410600,
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
  "duration": 15365364900,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3304154400,
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
  "duration": 3331723000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3845468800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.invalid_relative_experience_message_should_be_displayed()"
});
formatter.result({
  "duration": 50670600,
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
  "duration": 16534944700,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.clicked_on_apply_now()"
});
formatter.result({
  "duration": 3277971500,
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
  "duration": 3370317100,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 3722611300,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationStepDef.invalid_relative_experience_message_should_be_displayed()"
});
formatter.result({
  "duration": 398190000,
  "status": "passed"
});
});