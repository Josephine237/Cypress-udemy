/// <reference types="cypress" />           

        // toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

        describe('Verify checkboxes via webdriveruni', () => {

            beforeEach(() => {
                // cy.visit("/")       // toto mohu použít, protože v cypress.json mam zadanou baseUrl pokud jsi to hodím do commands, tak pak použiji: =>
                cy.navigateTo_Webdriveruni_Checkbox_Page()
                cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons')
            })

            // Tady jsou dva způsoby, buďto jsi udělám fci/command jen na hlalvní stránku a dopíšu tam další řádek,kam chci navigovat (viz zakomentováno níže) nebo udělám command rovnou s navigací, viz výšše

            // beforeEach(() => {
            //     cy.visit("/")       // toto mohu použít, protože v cypress.json mam zadanou baseUrl pokud jsi to hodím do commands, tak pak použiji: =>
            //     cy.navigateTo_Webdriveruni_Homepage()
            //     cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
            //     cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons')
            // })

            it('Check and validate chceckbox', () => {

                // cy.get('#checkboxes > :nth-child(1) > input').check()                        // zaškrtnutí checkboxu
                cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')      // asertace, že je chcekbox zaškrtnutý
                                                                                                // když dám should('not.be.checked') ověřuji, že neni zaškrtnutý
                cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
                cy.get('@option-1').check()
                cy.get('@option-1').check().should('be.checked')
            });


            it('Unheck and validate chceckbox', () => {

                cy.get(':nth-child(5) > input').as('option-3')
                cy.get('@option-3').uncheck()
                cy.get('@option-3').uncheck().should('not.be.checked')

            });


            it('Check multiple checkboxes', () => {
          
                 // musíme najít selektor pro všechny čtyři checkboxy - input[type='checkbox']
                 cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')

            });
    
        });