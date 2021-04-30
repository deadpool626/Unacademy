Feature: Test careers functionality

  Scenario: Check results by selecting filters
    Given user is on careers page
    When user selects different filters
    Then results are updated daccording to filters

  Scenario: Check clear filters functionality
    Given user have selected some filters
    When user clicks on clear filters
    Then all jobs are displayed

  Scenario: Check search functionality
    When user inputs a particular job title
    Then respective job is displayed

  Scenario: Check apply now functionality
    Given user has selected a job
    When user clicks on apply now
    And enters valid data
    Then application is submitted
