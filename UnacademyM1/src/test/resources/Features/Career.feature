@StartCareer
Feature: Test careers functionality

  @Location
  Scenario: Check results by selecting Location filter
    Given user is on careers page
    When user selects a location
    Then jobs available at the location are displayed

  @Department
  Scenario: Check results by selecting Department filter
    Given user is on careers page
    When user selects a department
    Then job title shown only for the department

  @WorkType
  Scenario: Check results by selecting Work Type filter
    Given user is on careers page
    When user selects a work type
    Then titles with selected Work Type are displayed

  @AllFilters
  Scenario: Check results by selecting Location, Department, Work Type filter
    Given user is on careers page
    When user selects any location, department, work type
    Then results are updated

  #according to the selected location, department, work type
  @ClearFilter
  Scenario: Check clear filters functionality
    Given user have selected some filters
    When user clicks on clear filters
    Then all jobs are displayed

  @SearchValid
  Scenario: Check search functionality
    When user inputs a particular job title
    Then respective job is displayed

  @SearchInvalid
  Scenario: Check search functionality for invalid inputs
    When user inputs irrelevant keywords
    Then error message displayed
