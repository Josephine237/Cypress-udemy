Když spustím chromeWeb app tak nahoře mam možnost settings a pak zvolím configuration, tam najdu všechnu konfiguraci jako:  chromeWebSecurity, nebo třeba defaultCommandTimeout atd

toto defaultní nastavení můžeme přepsat ve file cypress.json a pozor za posledním nikdy neděláme čarku, to ukáže chybu, čátku za příkazem jen tehdy, když tam pak píšeme další, takže POZOR, když začnu psát další příkaz, tak musím dát čárku za ten minulý!

přepsání defaultních hodnot v cypress.json ovlivní celý cypress soubor, pokud chceme ovlivnit jen jeden command, tak to můžeme přidat do specifického cammandu, třeba v page objectech 
např: cy.visit(Cypress.env("webdriveruni_homapage"), {timeout: 60000});

nebo to můžu přidat za describe, pak ovlivním celý test
třeba timeout můžeme dát i do assertace např: cy.get($selector).contains(textToLocate, {timeout: 60000})

to co je přepsané pak vidíme v configuration modře podbarvené

když chceme ignorovat nějaké file tak to taky píšeme do cypress.json, např: "ignoreTestFiles": "*.js" todle bude ignorovat všechny testy s příponou .js
např: "ignoreTestFiles": "**/others/*" toto mi bude ignorovat celou složku others

enviromenty píšu také do cypress.json a do testů pak píšu Cypress.env(") POZOR Cypress s velkým C

pokud mam enviromenty, tak můžu pak měnit enviromenty pomocí volání v terminálu...např: já tam mam first_name John, kdybych to chtěla na Tima tak napíšu        ./node_moduleds/.bin/cypress run --browser chrome --spec cypress/integration/webdriver-uni/contact-us.js --first_name=Tim

v cypres.json, můžu taky dát baseUrl POZOR když napíšu URL (velká písmena, tak to nefunguju) pokud zadám baseUrl v cypressu.json, tak pak můžu v testu url adresu nahradit tímto "/"

Dynamic Global Url: napsáno pomocí env cypress.json  

WAIT: kdybychom ale měli dávat wait 3000 do každého testu a měli jich třeba 200, tak bychom nedělali nic jiného než čekali, takže většinou se používá wait for exist nebo tak něco

