/// <reference types="Cypress" />
// toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

describe("Test Datepicker via webdriveruni", () => {
  it("Select date fron the datepicker", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("#datepicker").click();

   //  let date = new Date();
   //  date.setDate(date.getDate());
   //  cy.log(date.getDate()); // get current day dnes je 30.3

   //  let date2 = new Date();
   //  date2.setDate(date.getDate() + 5); // když chceme jiné datum, tak dáme dnešní den, plus počet dnů k datumu které chceme
   //  cy.log(date2.getDate()); // zde tedy dostanemue dnešní den + 5 => dnes máme 30.3 => dostaneme 4.4

    var date = new Date();
    date.setDate(date.getDate() + 26); // tady měníme kolik dnů chceme přidat

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });
    var futureDay = date.getDate();

    cy.log("Future year to select: " + futureYear); // dnes máme 30.3 ale máme tam napsáno plus 2, takže se nám zobrazí 1 duben 2022
    cy.log("Future month to select: " + futureMonth); // pokud nahoru dáme date.getDate() + 360 ukáže nám to 25.3.2022
    cy.log("Future day to select: " + futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then((currentDate) => {
          // //jsou tam tři datepicker-switch selektory, tím, že tam hodím first(), tak mi to hodí ten první
          if (!currentDate.text().includes(futureYear)) {
            // !vykřičník znamená, že pokud NEOBSAHUJE futureYear
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                // !vykřičník znamená, že pokud NEOBSAHUJE futureYear
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });                   /// MĚ TO NEFUNGUJE, NEZASTAVÍ SE MI TO, ANI KDYŽ SMUSÍTM JEHO KOD !!!!!!
    }

    function selectFutureDay() {
      cy.get('[class="day"]').contains(futureDay).click();
   }
    selectMonthAndYear();
    selectFutureDay();
  });
});



// /// <reference types="cypress" />

// describe("Test Datepicker via webdriveruni", () => {
//    it("Select date from the datepicker", () => {
//        cy.visit("http://www.webdriveruniversity.com")
//        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
//        cy.get('#datepicker').click();

//        // let date = new Date();
//        // date.setDate(date.getDate())
//        // cy.log(date.getDate()) //get current day i.e. 22

//        // let date2 = new Date();
//        // date2.setDate(date.getDate() + 5)
//        // cy.log(date2.getDate()) //get current day i.e. 22 + 5 = 27

//        var date = new Date();
//        date.setDate(date.getDate() + 300);

//        var futureYear = date.getFullYear();
//        var futureMonth = date.toLocaleString("default", {month: "long"});
//        var futureDay = date.getDate();

//        cy.log("Future year to select: " + futureYear);
//        cy.log("Future month to select: " + futureMonth);
//        cy.log("Future day to select: " + futureDay);

//        function selectMonthAndYear() {
//            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
//                if(!currentDate.text().includes(futureYear)) {
//                    cy.get('.next').first().click();
//                    selectMonthAndYear();
//                }
//            }).then(() => {
//                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
//                    if(!currentDate.text().includes(futureMonth)) {
//                        cy.get('.next').first().click();
//                        selectMonthAndYear();
//                    }
//                })
//            })
//        }

//        selectMonthAndYear();
//    });
// })