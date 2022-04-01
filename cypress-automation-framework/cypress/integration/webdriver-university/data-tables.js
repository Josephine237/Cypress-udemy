/// <reference types="Cypress" />           
        // toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

        describe('Handling data via webdriveruni', () => {

            beforeEach(() => {
             cy.visit('https://www.webdriveruniversity.com/')
             cy.get('#data-table').invoke('removeAttr', 'target').click({force:true})
            });
 
             it('Calculate and assert the total age of all users', () => {
                 var userDeatails = [];
                 let numb = 0;
                cy.get('#thumbnail-1 td').each(($el, index, $list) => {
                    userDeatails[index] = $el.text()
                }).then(() => {
                    var i;
                    for(i = 0; i < userDeatails.length; i++) {
                        if(Number(userDeatails[i])) {
                            numb += Number(userDeatails[i])
                        }
                        // cy.log(userDeatails[i])
                    }
                    cy.log('Found total age: ' + numb)      // bez asertace se mi to nezobrazí ten celkový počet
                    expect(numb).to.eq(322)
                })
             });

             it('Calculate and assert the age of a given user bassed on last name', () => {
                 // tr = table row
                 cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
                     const text = $el.text()
                     if(text.includes("Woods")) {
                         cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                             const userAge = age.text();
                             expect(userAge).to.equal("80"); 
                         })
                     }
                 })
           
            });
         });