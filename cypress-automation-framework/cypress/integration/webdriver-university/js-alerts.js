/// <reference types="Cypress" />
// toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

describe("Handle js alerts", () => {
  // Alert, kde je jen jedna možnost ok
  it("Confirm js alert contains the correct text", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.url().should("include", "Popup-Alerts");

    cy.get("#button1").click();
    // asertace na alert window
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  // Alert, kde je více tlačítek, musíme manuálně kliknout - kliknu na OK
  it("Validate js confirm alert box works correctly when clicking ok", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.url().should("include", "Popup-Alerts");

    cy.get("#button4").click(); // JS automaticky klikne na ok button

    cy.on("windows: alert", (str) => {      // tady bych taky klidně mohla použít window:confirm
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  // Alert, kde je více tlačítek, musím manuálně kliknout - kliknu na cancel.
  it("Validate js confirm alert box works correctly when clicking cancel", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true});

    cy.url().should('include', 'Popup-Alerts');

    cy.get('#button4').click();
    
    cy.on('window:confirm', (str) => {      // pokud chci false, musím použít window: confirm
        return false;
    });
    cy.get('#confirm-alert-text').contains('You pressed Cancel!')

  });


  it("Validate js confirm alert box using a stub", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true});

    const stub = cy.stub()
    cy.on('window:confirm', stub)

    cy.get('#button4').click().then(() => {     // použití promise
        expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(() => {                             // můžeme přidat i další promise
        return true;
    }).then(() => {
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
    
  });

});
