Feature: Test settings functionality

  #Not feasible as test will need to enter OTP everytime
  #Background: User log in with valid credentials
  #Given user navigate to the login page
  #When user enters valid phone no and OTP
  #Then user should be logged in
  
  Scenario Outline: Check edit name functionality for valid name
    Given user is on settings page
    When user enters valid <name>
    Then name of the user is changed

    Examples: 
      | name             |
      | Aditya           |
      | Aditya Nagargoje |

  Scenario Outline: Check for error message when invalid name entered
    When user enters invalid <name>
    Then name is not updated
    And error message is displayed

    Examples: 
      | name                              |
      | 7058036500                        |
      | Aditya$                           |
      | Aaaadddddddiiiiiiiittttttyyyyaaaa |

  Scenario: Check edit username functionality for valid username
    When user enters valid and unique
    Then username is updated

  #aditya6226
  Scenario: Check for error message when common or invalid username entered
    When user enters invalid or common username
    Then username is not updated
    And error message displayed

  #aditya
  #Aaaadddddddiiiiiiiittttttyyyyaaaa
  Scenario: Verification of edit email functionality
    When user enters email
    Then OTP is sent on email
    And on entering correct OTP, email is changed

  Scenario: Verification of edit email functionality with wrong OTP
    When user enters email
    Then OTP is sent on email
    And on entering incorrect OTP, email is not changed
    And error message displayed

  Scenario: Verification of edit mobile number functionality
    When user enters mobile number
    Then OTP is sent on mobile number
    And on entering correct OTP, mobile number is changed

  Scenario: Verification of edit mobile number functionality with wrong OTP
    When user enters mobile number
    Then OTP is sent on mobile number
    And on entering incorrect OTP, mobile number is not changed
    And error message displayed

  Scenario: Verification of edit state of residence
    When user selects a state
    Then state of residence is updated
  #Resend OTP functionality test
