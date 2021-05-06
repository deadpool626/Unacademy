Feature: Test careers functionality
  Description: It will check if filters, clear filter and search job title functionality

  #To check if location filter works properly
  @Location
  Scenario: Check results by selecting Location filter
    Given user is on careers page
    When user selects a location
    Then jobs available at the location are displayed

  #To check if department filter works properly
  @Department
  Scenario: Check results by selecting Department filter
    Given user is on careers page
    When user selects a department
    Then job title shown only for the department

  #To check if work type filter works properly
  @WorkType
  Scenario: Check results by selecting Work Type filter
    Given user is on careers page
    When user selects a work type
    Then titles with selected Work Type are displayed

  #To check whether filter functionality works when each of them is selected
  @AllFilters
  Scenario: Check results by selecting Location, Department, Work Type filter
    Given user is on careers page
    When user selects any location, department, work type
    Then results are updated

  #To check if user is able to clear applied filters
  @ClearFilter
  Scenario: Check clear filters functionality
    Given user is on careers page
    And user have selected some filters
    When user clicks on clear filters
    Then all jobs are displayed

  #To check if only provided job titles are displayed
  @SearchValid
  Scenario: Check search functionality
    Given user is on careers page
    When user inputs a particular job title
    Then respective job is displayed

  #To check for error message when user provides invalid input
  @SearchInvalid
  Scenario: Check search functionality for invalid inputs
    Given user is on careers page
    When user inputs irrelevant keywords
    Then error message displayed
