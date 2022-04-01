/// <reference types="Cypress" />           

describe('Should login to the page', () => {
   
    it('Validate properties of the Contact Us Page', () => { 
        cy.visit('http://www.webdriveruniversity.com/Login-Portal/index.html')
       
        cy.get('#text').type('Jenny')
        cy.get('#password').type('test1234')
        cy.get('#login-button').click()

                        
    });

      
});