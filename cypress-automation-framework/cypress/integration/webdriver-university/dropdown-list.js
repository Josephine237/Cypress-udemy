/// <reference types="Cypress" />           
        // toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

        describe('Interact with dropdown lists via wbdriveruni', () => {
            it('Select specific values via select dropdown lists', () => {
                cy.visit('https://www.webdriveruniversity.com/')
                cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

                // selektování podle value
                cy.get('#dropdowm-menu-1').select('c#')
                cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')

                // můžeme také selectovat podle textu tam bude pak asertace pomocí contains
                cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')  
                
                
                // challenge
                cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')

                cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')

            });
    
        });