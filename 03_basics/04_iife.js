// Immediately Invoked Function Expression (IIFE) -- Immediately execute / Sometimes problems happen when too many variables are added to the global scope.
// To avoid this, we use IIFE  to keep variables separate and not affect the global scope


(function monster(){   // named IIFE
    console.log(`DB CONNECTED`);
    
})(); // when we 2 IIFE write than use semicolon to end.



( (name) => {  // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ('nisha')