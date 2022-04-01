/// <reference types="Cypress" />           
        // toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

        describe('Verify radio buttons via webdriveruni', () => {

            before(() => {
                cy.visit('https://www.webdriveruniversity.com/')
                cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
            })

            it('Check specific radio buttons', () => {
                
                // cy.get('#radio-buttons').find("[type='radio'] ").click({multiple:true})     // když tady dám click({multiple:true}), tak to zkusí kliknout na všech 5 radio buttons
                cy.get('#radio-buttons').find("[type='radio'] ").first().check()
                // cy.get('#radio-buttons').find("[type='radio'] ").eq(2).check()              // tady nám to vybere yellow, protože radio buttons jsou indexované od nuly

                // asertace 
                cy.get('#radio-buttons').find("[type='radio'] ").should('be.checked')
            });


            it('Validate the states of specific radio buttons ', () => {            // button Cabbage je disabled, nejde na něj kliknout
                
                cy.get("[value='lettuce']").should('not.be.checked')
                cy.get("[value='pumpkin']").should('be.checked')
                
                cy.get("[value='lettuce']").check()
                cy.get("[value='lettuce']").should('be.checked')
                cy.get("[value='pumpkin']").should('not.be.checked')

                cy.get("[value='cabbage']").should('be.disabled')    
            });
    
        });