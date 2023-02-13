///   <reference types="cypress" />
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { any } from "cypress/types/bluebird";
import { when } from "cypress/types/jquery";
import { eq } from "cypress/types/lodash";

Then ("I should see {string} types of modes",(length:string)=>{
      cy.get("h2").should("have.length",length);})

And ("both x and Cicle should be visible in the UI once they are marked on the table",()=>{
     cy.get(".cell").eq(1).click();
     cy.get(".cell").eq(0).click();
     cy.get(".cell").eq(1).should("be.visible");
     cy.get(".cell").eq(0).should("be.visible");
    });
 
When("one shell is already marked then should not able to click on it again", () => {
    cy.get(".cell").eq(1).should("have.css","cursor","not-allowed");});
   

When ("I Play first game it should be tied",()=>{
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(2).click();
    cy.get(".cell").eq(3).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(6).click();
    cy.get(".cell").eq(5).click();
    cy.get(".cell").eq(8).click();
    cy.get(".cell").eq(7).click();
    cy.get("#winningMessage").should("be.visible");  
    });


When ("I Play Second game it should be win by X",()=>{
    cy.get("#restartButton").click();
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(2).click();
    cy.get(".cell").eq(3).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(5).click();
    cy.get(".cell").eq(6).click();
    cy.get("#winningMessage").should("be.visible");
    });

When ("I Play Second game it should be win by y",()=>{
    cy.get("#restartButton").click();
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(2).click();
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(3).click();
    cy.get(".cell").eq(5).click();
    cy.get(".cell").eq(8).click();
    cy.get(".cell").eq(6).click();
    cy.get("#winningMessage").should("be.visible");
      });

When ("game end I should see Restart button",()=>{
    for(var i=0;i<=9;i++){
    cy.get("div").eq(i).click(); }
    cy.get("#restartButton").should("be.visible");
    });




   