"use strict";

let test1 = function() {
    setTimeout(function() {
        console.log('Code Start here!');
                                // asynchrroní kod, je tu nastavený čas pomocí druhé funkce, takže tady se předtím než zmáčkneme ok u alertu zobrází v konzoli i text funkce test2 
        alert('This is an Alert!');     // druhá funkce test2 neníé blokována tou první funkcí

        console.log('Code ends here!');
    }, 3000);
};

let test2 = function() {
    console.log("Please notice me!");
};

test1();
test2();