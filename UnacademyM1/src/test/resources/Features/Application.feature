Feature: Test apply to job functionality

  @ValidApplication
  Scenario: Check apply now functionality
    Given user has selected a job
    When user clicks on apply now
    And enters valid data
    Then application is submitted

  @InvalidNumber
  Scenario Outline: Check submission on invalid mobile number
    Given user has selected a job
    And clicked on apply now
    When user enters an invalid <mobile number>
    Then user clicks on submit button
    And invalid phone number is displyed
    Examples:
	|mobile number|
	|1234567890|
	|2345678901|
	|7234567890|

  @InvalidLocation
  Scenario Outline: Check submission on invalid location
    Given user has selected a job
    And clicked on apply now
    When user enters invalid as <location>
    Then user clicks on submit button
    And Location is not valid message is displayed
Examples:
|location|
|()*&|
|12345|
|Aba/123|
|Aurangabad|

  @InvalidRelExperience
  Scenario Outline: Check submission on invalid relevant experience
    Given user has selected a job
    And clicked on apply now
    When user enters invalid the<relevant experience>
    Then user clicks on submit button
    And Invalid relative experience message should be displayed
Examples:
|relevant experience|
|100|
|0|
|21|
|5|