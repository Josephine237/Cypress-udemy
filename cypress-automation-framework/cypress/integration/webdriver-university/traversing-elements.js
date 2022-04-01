/// <reference types="Cypress" />           
        // toto je kod, který musíme vždy umístit nahoru pokud chceme psát cypress. Je to proto, aby počítač rozuměl, které příkazy má brát př: pokud tam toto nedáme a budeme chtít napsat cy. tak se nám to změní na crypto

        describe('Traversing DOM elements in Cypress', () => {

           beforeEach(() => {
            cy.visit('https://www.webdriveruniversity.com/')
            cy.get('#data-table').invoke('removeAttr', 'target').click({force:true})
           });

            it('children() to get the children of DOM element', () => {
                cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')
          
            });

            it('closest() to validate the closet ancestor DOM element', () => {
                cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group') // list-group, tady nemusím specifikovat, že je to classa
            });


            it('eq() retrieve a specific element based on index', () => {
                // toto .traversal-drinks-list > *  (hlavně toto > *) nám říká vyber všechny elementy z této classy
                cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk')      // tady jako parametr do eq dáme INDEX takže když dáme 2 vybere nám to položku milk
            });


            it('filter() to retrive DOM elements that match a specific selector', () => {
                cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1')
            });


            it('find() to retrive DOM elements of a given selector', () => {
                cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)
            });


            it('first() to retrive the first DOM element within elements', () => {
                // td = table data
                // th = table header
                cy.get('.traversal-table >tbody >tr > td').first().should('contain', 'Andy')      // najdi první element based on our results náš selektor má 6 shod a my chceme první
            });


            it('last() to retrive the last DOM element within elements', () => {
                cy.get('.traversal-table >tbody >tr > td').last().should('contain', 'Scott')        // tady to funguje stejně najde mi to na selektor šest výslednků a pomocí last vybere ten poslední
            });


            it('nextAll() to get all of the next siblings DOM elements within elements', () => {
                cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', '3')   
                // číslo 3 určuje počet "sourozenců", kteří jsou vedle něj ALE pozor vezme to jen elementy, kteří jsou dál od něj, třeba coffee které je před Tea to nezapočítá
          
            });

            it('nextUntil() to get all of the next siblings DOM elements within elements until another element', () => {
                cy.get('#coffee').nextUntil('#milk')
          
            });

            it('not() to remove DOM element(s) from the set of elements', () => {
                cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled')
                
            });

            it('parent() to get parent DOM element of elements', () => {
                cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet')
          
            });

            it('parents() to get parents DOM element of elements', () => {
                cy.get('.traversal-cite').parents().should('match', 'blockquote')
            });

            it('prev() to get the previous sibling DOM element within elements', () => {
                cy.get('#sugar').prev().contains('Espresso')
          
            });

            it('prevAll() to get the previous sibling DOM element within elements', () => {
                cy.get('.sales').prevAll().should('have.length', 2)
                // dvojku dáváme proto, že nad sales jsou dva další specifické linky
          
            });

            it('prevUntil() to get the previous sibling DOM element within elements until other element', () => {
                cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
                 // položky mezi dvěma id mezi veggie a fruits
          
            });

            it('siblings() to get all siblings DOM elements of elements', () => {
                cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3)
          
            });
        });

