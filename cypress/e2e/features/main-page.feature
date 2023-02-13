Feature: Main Page 

Scenario: Verify if two types of modes are available on the Main Page.
    When I visit the Main Page
    Then I should see '2' types of modes 

Scenario: Verify if Clicking on Offline Multiplayer should go to that particular mode
     When I visit the Main Page
     Then I Clicked on Offline Multiplayer mode 
     And I should see Offline Multiplayer mode open

Scenario: Verify The first move should always be for X
     When I visit the Main Page
     Then I Clicked on Offline Multiplayer mode 
     And I should see Offline Multiplayer mode open
     When I click First it should be x
    
Scenario: Verify The Second move is o
     When I visit the Main Page
     Then I Clicked on Offline Multiplayer mode 
     And I should see Offline Multiplayer mode open
     When  I click First it should be x
     Then I click for Circle


  Scenario:Verify that both X and O are visible in the UI once they are marked on the table.
     When I visit the Main Page
     Then I Clicked on Offline Multiplayer mode 
     And I should see Offline Multiplayer mode open
     And both x and Cicle should be visible in the UI once they are marked on the table

 Scenario: Verify that one should not be able to click on an already marked cell again
     When I visit the Main Page
     Then I Clicked on Offline Multiplayer mode 
     And I should see Offline Multiplayer mode open
     When I click First it should be x
     Then I click for Circle
     When one shell is already marked then should not able to click on it again

 Scenario: Play three games, where the first game is tied, the second is won by X and the last is won by Circle
     When I visit the Main Page
     Then I Clicked on Offline Multiplayer mode 
     And I should see Offline Multiplayer mode open
     When I Play first game it should be tied
     When I Play Second game it should be win by X
      When I Play Second game it should be win by y


 
  Scenario:Verify that you are able to see the Restart game once the game is over
     When I visit the Main Page
     Then I Clicked on Offline Multiplayer mode 
     And I should see Offline Multiplayer mode open
     When game end I should see Restart button