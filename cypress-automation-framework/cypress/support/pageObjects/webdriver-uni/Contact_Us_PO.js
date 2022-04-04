class Contact_Us_PO {
    contactForm_Submission (firstName, lastName, email, comment, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"').type(email);
        cy.get('[name="message"]').type(comment); 
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate)        // todle je super, když mam u každého testu jinou asertaci s jiným selektorem, tak použiju toto, a do funkce pak dám název selektoru který chci

    }
}   

export default Contact_Us_PO;