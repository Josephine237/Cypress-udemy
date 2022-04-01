// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// Checkboxes - webdriveruni
Cypress.Commands.add("navigateTo_Webdriveruni_Homepage", () => {
    cy.visit("/")
})

Cypress.Commands.add("navigateTo_Webdriveruni_Checkbox_Page", () => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html")
})

// Iterate-over-elements
Cypress.Commands.add("selectProduct", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {    
        if($el.text().includes(productName)) {
            cy.wrap($el).click()
        }    
    })
});

// Add multiple items to basket
Cypress.Commands.add("addProductToBasket", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text() === productName) {
            cy.log($el.text())
            cy.get('.productcart').eq(index).click();
        }
    })
})

// Contact-us webdriverUni
Cypress.Commands.add("webdriverUni_ContactForm_Submission", (firstName, lastName, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"').type(email);
    cy.get('[name="message"]').type(comment); 
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate)        // todle je super, když mam u každého testu jinou asertaci s jiným selektorem, tak použiju toto, a do funkce pak dám název selektoru který chci
})



// import cypress from 'cypress';
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
