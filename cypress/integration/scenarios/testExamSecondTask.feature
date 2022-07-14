Feature: Check price visibility douglas

  Scenario: Get the current price (not the “before” price) of items with a tag "Neu" on top of them.
    Given I open 'https://www.douglas.de/de/c/parfum/01' page
    Then I check that price is displayed for product with the 'NEU' tag for Douglas site
