/// <reference types="Cypress" />         

        describe('Test Contact Us form via Automation Test Store', () => {

            before(function() {
                cy.fixture('userDetails.json').as("user")
            })

            it('Should be able to submit a successful submission via contact us form', () => {
                // cypress code
                cy.visit('https://www.automationteststore.com/')

                // cy.get('.info_links_footer > :nth-child(5) > a').click()

                    // pomocí xpath lze tento řádek napsat takto
                    //cy.xpath("//a[contains(@href, 'contact')]").click()
                    //Nechápu, proč mi nefunguje tento xpath '(//*[text()='Contact Us'])[2]'

                    // a ještě to můžu upravit takto, aby to bylo hezké
                cy.get("a[href$='contact']").click().then(function(linkText){
                    cy.log('Clicked on link using text: ' + linkText.text())
                });

                cy.get('@user').then((user) => {
                    cy.get('#ContactUsFrm_first_name').type(user.first_name)
                    cy.get('#ContactUsFrm_email').type(user.email)
                })

                // Assertace, můžu taky ověřít že je v konzoli napsáno email (atribut) ověřuji, že atribut name, má hodnotu email
                cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')

                cy.get('#ContactUsFrm_enquiry').type('You page is great.')
                // cy.get('.col-md-6 > .btn').click()
                    //taky můžeme to napsat i takto, aby to bylo alespon trochu hezčí :)
                cy.get("button[title='Submit']").click()

                //Assertace
                cy.get('.mb40 > :nth-child(3)').should('have.text', "Your enquiry has been successfully sent to the store owner!")
                
                console.log("Test has completed!")  // console.log je none cypress command => v cypress chromu se nezobrazí, pokud jsi ale spustíme devtools, tak v konzoli uvidíme tento vzkaz vypsaný na první řádce
                    // pokud chceme v cypressu zobrazit nějakou správu použijeme příkaz cy.log('message')

                    cy.log('Ciao Shelly!')      // toto uvidíme pak na konci v cypress chromu
                             
            });
               
        });