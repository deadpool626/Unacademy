Feature: Test apply to job functionality
  Description: To check if user is able to submit application and certain constraints are applied on inputs

  #To check if valid data is accepted
  @ValidApplication
  Scenario: Check apply now functionality
    Given user has selected a job
    When user clicks on apply now
    And enters valid data
    Then application is submitted

  #To check if error message is shown on entering invalid First Name and Last Name
  #Using "Scenario Outline"
  @InvalidName
  Scenario Outline: Check submission on invalid FirstName
    Given user has selected a job
    And clicked on apply now
    When user enters a fn<firstname> and ln<lastname>
    Then user clicks on submit button
    And invalid first name and last name is displyed

    Examples: 
      | firstname                          |  | lastname                           |
      |                         1234567890 |  |                         1234567890 |
      | Aditya@%                           |  | Surname@%                          |
      | abcdefghijklmnopqrstuvwxyzABCDEFGH |  | abcdefghijklmnopqrstuvwxyzABCDEFGH |
      | Aditya                             |  | Nagargoje                          |

  #To check if error message is shown on entering invalid Phone Number
  #Using "Scenario Outline"
  @InvalidNumber
  Scenario Outline: Check submission on invalid mobile number
    Given user has selected a job
    And clicked on apply now
    When user enters an invalid <mobile number>
    Then user clicks on submit button
    And invalid phone number is displyed

    Examples: 
      | mobile number |
      |    1234567890 |
      |    2345678901 |
      |    7234567890 |

  #To check if error message is shown on entering invalid Location
  #Using "Scenario Outline"
  @InvalidLocation
  Scenario Outline: Check submission on invalid location
    Given user has selected a job
    And clicked on apply now
    When user enters invalid as <location>
    Then user clicks on submit button
    And Location is not valid message is displayed

    Examples: 
      | location                           |
      | ()*&                               |
      |                              12345 |
      | Aba/123                            |
      | Aurangabad                         |
      | `                                  |
      | abcdefghijklmnopqrstuvwxyzABCDEFGH |

  #To check if error message is shown on entering invalid Relevant Experience
  #Using "Scenario Outline"
  @InvalidRelExperience
  Scenario Outline: Check submission on invalid relevant experience
    Given user has selected a job
    And clicked on apply now
    When user enters invalid the<relevant experience>
    Then user clicks on submit button
    And Invalid relative experience message should be displayed

    Examples: 
      | relevant experience |
      |                 100 |
      |                   0 |
      |                  21 |
      |                   5 |
