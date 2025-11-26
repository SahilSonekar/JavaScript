// Imidiately Invoked Function Expression

(function chai() {
    // Named IIFE
    console.log("DB Connected");
}) ();

// Befor writing next iife function code we must use ; as it will cause error because javascrpt doesnt know when to stop

(() => {
    console.log(`DB Connected Two`);
}) ();
// global scope ke pollution se problem hoti hai toh jo bhi uske variables hai ya jo bhi kuch vaha declare hai uske pollution ko hatane ke liye iife ka use kiya hai 

( (name) => {
    console.log(`DB Connected Two ${name}`);
}) ("Sahil")