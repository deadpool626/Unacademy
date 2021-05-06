$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Career.feature");
formatter.feature({
  "line": 1,
  "name": "Test careers functionality",
  "description": "Description: It will check if filters, clear filter and search job title functionality",
  "id": "test-careers-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#To check if location filter works properly"
    }
  ],
  "line": 6,
  "name": "Check results by selecting Location filter",
  "description": "",
  "id": "test-careers-functionality;check-results-by-selecting-location-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Location"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on careers page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user selects a location",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "jobs available at the location are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CareerStepDef.user_is_on_careers_page()"
});
formatter.result({
  "duration": 11343380800,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.user_selects_a_location()"
});
formatter.result({
  "duration": 2254338100,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.results_are_updated_according_to_the_selected_location()"
});
formatter.result({
  "duration": 1426962900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#To check if department filter works properly"
    }
  ],
  "line": 13,
  "name": "Check results by selecting Department filter",
  "description": "",
  "id": "test-careers-functionality;check-results-by-selecting-department-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Department"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on careers page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user selects a department",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "job title shown only for the department",
  "keyword": "Then "
});
formatter.match({
  "location": "CareerStepDef.user_is_on_careers_page()"
});
formatter.result({
  "duration": 8975894000,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.user_selects_a_department()"
});
formatter.result({
  "duration": 26704752200,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.results_are_updated_according_to_the_selected_department()"
});
formatter.result({
  "duration": 220774500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 18,
      "value": "#To check if work type filter works properly"
    }
  ],
  "line": 20,
  "name": "Check results by selecting Work Type filter",
  "description": "",
  "id": "test-careers-functionality;check-results-by-selecting-work-type-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@WorkType"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is on careers page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user selects a work type",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "titles with selected Work Type are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CareerStepDef.user_is_on_careers_page()"
});
formatter.result({
  "duration": 9513782200,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.user_selects_a_work_type()"
});
formatter.result({
  "duration": 3289086800,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.results_are_updated_according_to_the_selected_work_type()"
});
formatter.result({
  "duration": 1346434000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "#To check whether filter functionality works when each of them is selected"
    }
  ],
  "line": 27,
  "name": "Check results by selecting Location, Department, Work Type filter",
  "description": "",
  "id": "test-careers-functionality;check-results-by-selecting-location,-department,-work-type-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@AllFilters"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user is on careers page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user selects any location, department, work type",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "results are updated",
  "keyword": "Then "
});
formatter.match({
  "location": "CareerStepDef.user_is_on_careers_page()"
});
formatter.result({
  "duration": 8867198100,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.user_selects_any_location_department_work_type()"
});
formatter.result({
  "duration": 8327617000,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.results_are_updated_according_to_the_selected_location_department_work_type()"
});
formatter.result({
  "duration": 4464016600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "#To check if user is able to clear applied filters"
    }
  ],
  "line": 34,
  "name": "Check clear filters functionality",
  "description": "",
  "id": "test-careers-functionality;check-clear-filters-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@ClearFilter"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user is on careers page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "user have selected some filters",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user clicks on clear filters",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "all jobs are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CareerStepDef.user_is_on_careers_page()"
});
formatter.result({
  "duration": 8013569400,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.user_have_selected_some_filters()"
});
formatter.result({
  "duration": 8347810700,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.user_clicks_on_clear_filters()"
});
formatter.result({
  "duration": 149262500,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.all_jobs_are_displayed()"
});
formatter.result({
  "duration": 262730600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 40,
      "value": "#To check if only provided job titles are displayed"
    }
  ],
  "line": 42,
  "name": "Check search functionality",
  "description": "",
  "id": "test-careers-functionality;check-search-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@SearchValid"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "user is on careers page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "user inputs a particular job title",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "respective job is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CareerStepDef.user_is_on_careers_page()"
});
formatter.result({
  "duration": 8616577200,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.user_inputs_a_particular_job_title()"
});
formatter.result({
  "duration": 454310000,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.respective_job_is_displayed()"
});
formatter.result({
  "duration": 4254233500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 47,
      "value": "#To check for error message when user provides invalid input"
    }
  ],
  "line": 49,
  "name": "Check search functionality for invalid inputs",
  "description": "",
  "id": "test-careers-functionality;check-search-functionality-for-invalid-inputs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@SearchInvalid"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user is on careers page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "user inputs irrelevant keywords",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CareerStepDef.user_is_on_careers_page()"
});
formatter.result({
  "duration": 8899535000,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.user_inputs_irrelevant_keywords()"
});
formatter.result({
  "duration": 329935300,
  "status": "passed"
});
formatter.match({
  "location": "CareerStepDef.error_message_displayed()"
});
formatter.result({
  "duration": 4359626500,
  "status": "passed"
});
});