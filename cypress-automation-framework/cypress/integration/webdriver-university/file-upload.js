/// <reference types="Cypress" />
// toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

describe("Test file upload via webdriveruni", () => {
    it("Upload the file....", () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        // musíme jsi nainstalovat package na file-upload npm install --save-dev cypress-file-upload

        // a do složky support, commands musím přidat toto import 'cypress-file-upload';

        cy.fixture("laptop.png", "base64").then(fileContent => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "laptop.png", 
                    mimeType: "image/png",
                },
                {
                    uploadType: "imput"
                }
            )
        })
        cy.get('#submit-button').click();
  
    });

    it("Upload no file...", () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        cy.get('#submit-button').click();
    })
  });


