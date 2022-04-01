/// <reference types="Cypress" />           
        // toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

        describe('Handeling IFrame & Moduls', () => {
            it('Handle webdriveruni iframe and modul', () => {
                cy.visit('www.webdriveruniversity.com')
                cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})

                cy.get('#frame').then($frame => {
                    const body = $frame.contents().find('body')
                    cy.wrap(body).as('iframe')
                })

                cy.get('@iframe').find('#button-find-out-more').click()       // pokud používáme alias musíme u něja pak uvést symbol zavináče @
                cy.get('@iframe').find('#myModal').as('modal')

                cy.get('@modal').should(($expectedText) => {
                    const text = $expectedText.text()
                    expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
                })

                cy.get('@modal').contains('Close').click()


            })
    
        });
        
