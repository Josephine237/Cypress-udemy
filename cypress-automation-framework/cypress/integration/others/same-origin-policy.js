/// <reference types="Cypress" />           
        // toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

        describe('Cypress web security', () => {
            it('Validate visiting two different domains', () => {
                cy.visit('https://www.webdriveruniversity.com/')
                cy.visit('https://automationteststore.com/')        
                    // todle vyhodí erroe failed because you are attempting to visit a URL that is of a different origin.

            });
        
            it('Validate visiting two different domains', () => {
                cy.visit('https://www.webdriveruniversity.com/')
                cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
            });
        
        });         // TYTO PROBLÉMY se dají vyřešit pomocí chrmoWebSecurity to false ve složce cypress.json, tím se vyřeší i cookies
                    // pokud to zadám do cypress.json, tak druhý test mi projde