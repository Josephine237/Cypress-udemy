// /// <reference types="Cypress" />           
//         // toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

// describe('Test Contact Us form via WebdriverUni', () => {
//     before(function() {
//         cy.fixture('example.json').then(function(data) {
//             // this.data = data;         // pokud by toto nefungovala, dá se to napsat i takhle
//             globalThis.data = data;             // tady by asi šlo použít i to co, jsme dělali s Damiánem, pomocí import
//         })
//     })

//     it('Should be able to submit a successful submission via contact us form', () => {
//         // cypress code
//         // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');       // todle nás odkaže přímo na stránku contact-us, pokud na tuto stránku chceme přejít z hlavní stránky, musíme to rozdělit

//         cy.visit('http://www.webdriveruniversity.com');
//         cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});     // okno se mi otevře v novém okně, když tam ale přidám invoke('removeAttr' + název atributu) tak už mi to bude vyskakovat v tom stejném okně

//                 // cypress nepovoluje multiple browser tabs
//                 // v devTools toto způsobuje, že tam máme target="_blank" abychom se toho zbavili, použijeme jQuery removeAttr() method

//         //Assertace
//         cy.document().should('have.property', "charset").and('eq', 'UTF-8') // eq je zkratka pro equal
//         cy.title().should('include', 'WebDriver | Contact Us');     // asertace na to, jaký titul/nápis má stránka v záložce prohlížeče....kouknu na to v konzoli v head                                                              // include - nemusí obsahovat celý text, tady assertace bude fungovat i když tam nechám třeba jen první slovo Webdriver
//         cy.url().should('include', 'contactus');

//         cy.get('[name="first_name"]').type(data.first_name);
//         cy.get('[name="last_name"]').type(data.last_name);
//         cy.get('[name="email"').type(data.email);
//         cy.get('[name="message"]').type('Hello, I am Jenny, and I learn cypress.');     // tady by šel i selektor textarea.feedback-input
//         cy.get('[type="submit"]').click();
//         //Assertace
//         cy.get('h1').should('have.text', "Thank You for your Message!")
//     });

//     it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
//         // cypress code
//         cy.visit('http://www.webdriveruniversity.com');
//         cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})

//         cy.get('[name="first_name"]').type("Jenny");
//         cy.get('[name="last_name"]').type("Smith");
//         cy.get('[name="message"]').type('Hello, I am Jenny, and I learn cypress.');
//         cy.get('[type="submit"]').click();
//         cy.get('body').contains('Error: all fields are required')       // CONTAINS command, to je dobré, protože text obsahuje dvě věty, na dvou řádkách, my jsi vybereme jen jeden

//     });

// });

        // !!! ZDE JE TO ZAPSÁNO POMOCÍ FUNKCE !!!

/// <reference types="Cypress" />    
import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'    
            // to ../ jde o level VÝŠŠE!!! Takže z nášeho testu se tímto ../ dostaneme do složky integration a dalším ../ do složky cypress, kde už je složka support, kde je pak náš PO
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO' 

        describe('Test Contact Us form via WebdriverUni', () => {
            const homepage_PO = new HomePage_PO();
            const contact_Us_PO = new Contact_Us_PO(); 

            before(function() {
                cy.fixture('example.json').then(function(data) {
                    globalThis.data = data;             
                })
            })

            beforeEach(() => {

                // cy.visit('http://www.webdriveruniversity.com');
                // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})

                // cy.visit(Cypress.env("webdriveruni_homapage" + "/Contact-Us/contactus.html"))        // hmmm todle nefunguje

                homepage_PO.visitHomepage();
                homepage_PO.clickOn_ContactUs_Button()
            })
        
            it('Should be able to submit a successful submission via contact us form', () => {
                cy.document().should('have.property', "charset").and('eq', 'UTF-8') // eq je zkratka pro equal
                cy.title().should('include', 'WebDriver | Contact Us');     // asertace na to, jaký titul/nápis má stránka v záložce prohlížeče....kouknu na to v konzoli v head                                                             
                cy.url().should('include', 'contactus');
       
            // !!! Takhle to funguje jen pomocí commandu
                // cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, 'Hello, I am Jenny, and I learn cypress.', 'h1', "Thank You for your Message!")
                //                                         // Cypress.env("") to používám enviroment variables ze složky cypress.json

            // !!! Když jsi dám command do page objectu, tak to napíšu takto
                // const contact_Us_PO = new Contact_Us_PO();          // jelikož to máme u obou testů, můžeme to dát jen jednou nahoru do decribe bloku
                contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, 'Hello, I am Jenny, and I learn cypress.', 'h1', "Thank You for your Message!");
            });
        
            it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
            // Takhle to jde když jsi dám funkci do commandu
                // cy.webdriverUni_ContactForm_Submission("Jenny", "Smith", " ", 'Hello, I am Jenny, and I learn cypress.', 'body', 'Error: Invalid email address');
                        // Tady v testu jsem vynechala položku email, takže když něco chci vynechat, tak to ve funkce nahradím uvozovkami s mezerouz (" ") 

            // Když chci PO jako z minulého testu napíšu to takto constantu u ž mam nahoře v decribe      
                contact_Us_PO.contactForm_Submission("Jenny", "Smith", " ", 'Hello, I am Jenny, and I learn cypress.', 'body', 'Error: Invalid email address');
            });
        
        });


/**
        Takhle by to pak vypadalo jen s použitím PO
        /// <reference types="Cypress" />    
        import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'    
        import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO' 

        describe('Test Contact Us form via WebdriverUni', () => {
            const homepage_PO = new HomePage_PO();
            const contact_Us_PO = new Contact_Us_PO(); 

            before(function() {
                cy.fixture('example.json').then(function(data) {
                    globalThis.data = data;             
                })
            })

            beforeEach(() => {
                homepage_PO.visitHomepage();
                homepage_PO.clickOn_ContactUs_Button()
            })
        
            it('Should be able to submit a successful submission via contact us form', () => {
                cy.document().should('have.property', "charset").and('eq', 'UTF-8') 
                cy.title().should('include', 'WebDriver | Contact Us');                                               
                cy.url().should('include', 'contactus');
       
                contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, 'Hello, I am Jenny, and I learn cypress.', 'h1', "Thank You for your Message!");
            });
        
            it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {   
                contact_Us_PO.contactForm_Submission("Jenny", "Smith", " ", 'Hello, I am Jenny, and I learn cypress.', 'body', 'Error: Invalid email address');
            });
        
        });

 */