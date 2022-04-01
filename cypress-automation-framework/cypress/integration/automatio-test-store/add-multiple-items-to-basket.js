/// <reference types="Cypress" />           

describe('Add multiple items to basket', () => {

    before(() => {
        cy.fixture("products").then((data) => {
            globalThis.data = data;     // mě this.data nefunguje, musím používat globalThis.data
        })
    })

    beforeEach(() => {
        cy.visit('https://automationteststore.com')
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
    })
   
    it('Add specific items to basket', () => { 
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click();                    
    });
});

/// !!! NEVIDIM to v košíku, takže to moc nefunguje, ani když zkopíruji jeho řešení, viz dole 

// /// <reference types="cypress" />

// describe("Add multiple items to basket", () => {
//     before(function () {
//       cy.fixture("products").then(function (data) {
//         globalThis.data = data;
//       });
//     });
  
//     beforeEach(function () {
//       cy.visit("https://automationteststore.com/");
//       cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
//     });
//     it("Add specific items to basket", () => {
//         globalThis.data.productName.forEach(function(element) {
//             cy.addProductToBasket(element)
//         })
//         cy.get('.dropdown-toggle > .fa').click();
//     });
//   });