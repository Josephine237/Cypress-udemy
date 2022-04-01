/// <reference types="Cypress" />          
        // toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

        describe('Validate webdriveruni homepage links', () => {
            it('Confirm links redirect to the correct page', () => {
                cy.visit('https://www.webdriveruniversity.com/')
                cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
          
                cy.url().should('include', 'contactus');

                cy.go('back');       // to nás hodí zpět na homepage
                cy.reload();
                // cy.reload(true)     // reload without using CACHE!
                cy.url().should('include', 'https://www.webdriveruniversity.com/')


                cy.go('forward');     // to nás hodí vpřed na ontact us page
                cy.url().should('include', 'contactus');
                cy.go('back');
                
                cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
                cy.url().should('include', 'Login-Portal');
                cy.go('back');

                cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true});
                cy.url().should('include', 'To-Do-List');
                cy.go('back')


            });
        }); 

           