/// <reference types="Cypress" />           

describe('Iterate over elements', () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com')
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
    })
   
    it('Log information of all hair care products', () => { 
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log('Index: ' + index + " : " + $el.text())      // takhle se nám v cypress chromu vypíší všechny nadpisy v .prdocutname
     
          });
                        
    });

    it('Add specific product to basket ', () => { 

        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {     // tady jsi pak zkusíme ještě přidat if statement
        //     if($el.text().includes('Curls to straight Shampoo')) {
        //         cy.wrap($el).click()
        //     }    
     
        //   });        

        // !!! Toto, jelikož se mi to furt opakuje můžu nahradit funkcí v cypress.commands

        cy.selectProduct('Curls to straight Shampoo');
                        
    }); 

    it('Add specific product to basket 2', () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')

    })
    // !!! Tady se výborně hodí custom commands, protože na eshopu máme hromadu produktů, takže na jejich ověření bude ta funkce pořád stejná   
});