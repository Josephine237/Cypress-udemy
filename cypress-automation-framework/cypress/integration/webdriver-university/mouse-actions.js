/// <reference types="Cypress" />           
        // toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

        describe('Test mouse actions', () => {
            it('Scroll element into view', () => {
                cy.visit('http://www.webdriveruniversity.com');
                cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})      // scrollIntoView, nám to zascrolluje dolů na element
      

            });


            it('I should be able to drag and drop a draggable item', () => {
                cy.visit('http://www.webdriveruniversity.com');
                cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})  // scrollIntoView, nám to zascrolluje dolů na element
                
                cy.get('#draggable').trigger('mousedown', {which: 1})  // kliknu na box 

                cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})     // přenesu box, nad další box, a tam ho pustím

            });


            it('I should be able to perform a double mouse click', () => {
                cy.visit('http://www.webdriveruniversity.com');
                cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true}) 

                cy.get('#double-click').dblclick();
            
            });

            it('I should be able to hold down the left mouse click button on a given element', () => {
                cy.visit('http://www.webdriveruniversity.com');
                cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true}) 

                cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
                    expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
                })
            
            });
        
        
        });
