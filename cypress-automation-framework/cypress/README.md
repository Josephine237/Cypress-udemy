Otevření cypressu v chrome modu

./node_modules/.bin/cypress open

cypress-xpath install
    npm:    npm install -D cypress-xpath
    yarn:   yarn add cypress-xpath --dev

    potom ještě musíme do složky support index.js přidat tento kod
    require("cypress-xpath");

chai assertion library je rozdělená na assertace pro BDD a TDD
https://docs.cypress.io/guides/references/assertions#Chai

https://www.chaijs.com

    BDD - expect / should
            foo.should.be.a('string');
            foo.should.have.lengthOf(3);

            expect(foo).to.be.a('string');
            expect(foo).to.have.lenghtOf(3);

    TDD - assert
            assert.typeOf(foo, 'string');
            assert.lengthOf(foo, 3);

 