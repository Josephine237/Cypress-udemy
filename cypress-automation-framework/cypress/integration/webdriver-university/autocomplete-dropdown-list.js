/// <reference types="Cypress" />           
        // toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

        describe('Verify Autocomplete dropdown lists via webdriveruni', () => {
            it('Select specific product via autocomplete list', () => {
                cy.visit('https://www.webdriveruniversity.com/')
                cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
         
                cy.url().should('include', 'autocomplete-textfield')

                cy.get('#myInput').type('A')
                cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                    const prod = $el.text();            // JQuery metoda k extrahování textu
                    const ProductToSelect = 'Avacado';

                    if (prod === ProductToSelect) {
                        // $el.click();     // je to přeškrtnuté, protože je to deprecater = zastaralé, test ale projde dá se to vyřešit viz další řádek
                        $el.trigger('click');

                        cy.get('#submit-button').click();
                        cy.url().should('include', ProductToSelect)
                    }
                }).then(() => {
                    cy.get('#myInput').type('g')
                    cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                    const prod = $el.text();            // JQuery metoda k extrahování textu
                    const ProductToSelect = 'Grapes';

                    if (prod === ProductToSelect) {
                        $el.click();        // je to zastaravé, proto je to přeškrtnuté, dá se to vyřešet že napíšeme $el.trigger('click)

                        cy.get('#submit-button').click();
                        cy.url().should('include', ProductToSelect)
                    }

                })

            });
        
        });
    });