Feature: Check price visibility

  Scenario: Get the current price of items that have the tag "Live advice" (or any other tag), in English, on top of them.
    Given I open 'https://www.saturn.de/de/campaign/angebote-smartphones' page
    Then I check that price is displayed for product with the 'Live-Beratung' tag for Saturn site
