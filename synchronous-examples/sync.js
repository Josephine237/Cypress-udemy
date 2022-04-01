let test1 = function() {
    console.log('Code Starts here!');

    alert('This is an Alert!');     // zbylý kod je závisly na tomto příkazu, synchronní kod jde postupně, takže dokud nepotvrdím na alerti Ok, tak se zbylý kod neukáže

    console.log('code Ends here!');
};

let test2 = function () {
    console.log('Please notice me!');
};

test1();
test2();