Když spustím chromeWeb app tak nahoře mam možnost settings a pak zvolím configuration, tam najdu všechnu konfiguraci jako:  chromeWebSecurity, nebo třeba defaultCommandTimeout atd

toto defaultní nastavení můžeme přepsat ve file cypress.json a pozor za posledním nikdy neděláme čarku, to ukáže chybu, čátku za příkazem jen tehdy, když tam pak píšeme další, takže POZOR, když začnu psát další příkaz, tak musím dát čárku za ten minulý!

to co je přepsané pak vidíme v configuration modře podbarvené

když chceme ignorovat nějaké file tak to taky píšeme do cypress.json, např: "ignoreTestFiles": "*.js" todle bude ignorovat všechny testy s příponou .js
např: "ignoreTestFiles": "**/others/*" toto mi bude ignorovat celou složku others

enviromenty píšu také do cypress.json a do testů pak píšu Cypress.env(") POZOR Cypress s velkým C

pokud mam enviromenty, tak můžu pak měnit enviromenty pomocí volání v terminálu...např: já tam mam first_name John, kdybych to chtěla na Tima tak napíšu        ./node_moduleds/.bin/cypress run --browser chrome --spec cypress/integration/webdriver-uni/contact-us.js --first_name=Tim

v cypres.json, můžu taky dát baseUrl POZOR když napíšu URL (velká písmena, tak to nefunguju) pokud zadám baseUrl v cypressu.json, tak pak můžu v testu url adresu nahradit tímto "/"

Dynamic Global Url: napsáno pomocí env cypress.json  


PAGE OBJECTS:
