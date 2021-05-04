Feature: Test apply to job functionality


Scenario: Check apply now functionality
    Given user has selected a job
    When user clicks on apply now
    And enters valid data
    Then application is submitted
    
    Scenario: Check submission on invalid mobile number
    Given user has selected a job
    And clicked on apply now
    When user enters invalid mobile number
    Then user clicks on submit button
    And error is displyed
    
    Scenario: Check submission on invalid location
    Given user has selected a job
    And clicked on apply now
    When user enters invalid location
    Then user clicks on submit button
    And error is displyed
    
    Scenario: Check submission on invalid relevant experience
    Given user has selected a job
    And clicked on apply now
    When user enters invalid relevant experience
    Then user clicks on submit button
    And error is displyed
