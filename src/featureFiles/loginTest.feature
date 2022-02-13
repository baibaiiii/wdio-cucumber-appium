Feature: Login Test For

  @iosApp
  Scenario: Launch Settings app of an iPad
    Given I launch the  app of iPad
    Then I should see the  label
    Then I can select namespace
    And I can click login button


