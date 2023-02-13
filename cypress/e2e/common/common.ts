import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
//import { activeLink, link } from "../../support/pageObjects/commonObjects";
When ("I visit the Main Page", ()=>{
     cy.visit("/");
});
    
Then ("I Clicked on Offline Multiplayer mode",()=>{
     cy.get("a").eq(1).click();
     
});
And("I should see Offline Multiplayer mode open",()=>{
     cy.get("#board").should("be.visible");
});


When ("I click First it should be x",()=>{
     cy.get(".cell").eq(1).click().should("be.visible");
  
});
Then ("I click for Circle",()=>{
    cy.get(".cell").eq(0).click().get(".circle").should("be.visible");
});
