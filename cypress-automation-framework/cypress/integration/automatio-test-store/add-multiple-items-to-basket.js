/// <reference types="cypress" /> 
import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'          

describe('Add multiple items to basket', () => {
    const autoStore_Homepage_PO = new AutoStore_Homepage_PO()
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO()

    before(() => {
        cy.fixture("products").then((data) => {
            globalThis.data = data;     // mě this.data nefunguje, musím používat globalThis.data
        })
    })

    beforeEach(() => {
        cy.clearLocalStorage();     // takhle před každým testem všechno vyčistíme
        cy.clearCookies();

        autoStore_Homepage_PO.accessHomepage();
        autoStore_Homepage_PO.clickOn_HairCare_Button();
    })
   
    it('Add specific items to basket', () => { 

    // Todle přesuneme do PO
        // globalThis.data.productName.forEach(function(element) {
        //     cy.addProductToBasket(element)
        // })
        // cy.get('.dropdown-toggle > .fa').click();    
        
        autoStore_HairCare_PO.addHairCareProductsToBasket();
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