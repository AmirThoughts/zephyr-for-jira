@BDDSTORY-MZT-2
Feature: Create my info page
  As a PO,
  I want my info page to be developed
  So that the user can see their personal info.

  Background:
    Given I am on the login page
    When  I login to the application
    Then  I verify successful login

  @BDDTEST-MZT-4
  Scenario: WEB - My Info - Checking personal details section
    When I click on the my info link
    Then I verify the personal details section
    And  I logout from the application

  @BDDTEST-MZT-5
  Scenario: WEB - My Info - Checking custom fields section
    When I click on the my info link
    Then I verify the custom fields section
    And  I logout from the application

  @BDDTEST-MZT-6
  Scenario: WEB - My Info - Checking attachments section
    When I click on the my info link
    Then I verify the attachments section
    And  I logout from the application