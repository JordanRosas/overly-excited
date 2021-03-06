// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp +=  " " + theWordArray[i];
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)

/*==========================================Some Words are more exciting=================================================== */

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*If the current value of `i` divided by 3 has no
        remainder, add an exclamation point to the end of
        the word and then concatenate it to `buildMeUp`*/
        if( i !== 0 && i % 3 === 0 ){ 
            buildMeUp += " " + theWordArray[i] + "!"
        /* Otherwise, just concatenate the word itself.*/
        }else{
            buildMeUp +=  " " + theWordArray[i];
        }
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
}
addExcitement(sentence)

/*==================================Function arguments============================================*/

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, customSymbol) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*If the current value of `i` divided by 3 has no
        remainder, add an exclamation point to the end of
        the word and then concatenate it to `buildMeUp`*/
        if( i !== 0 && i % 3 === 0 ){ 
            buildMeUp += theWordArray[i] + (customSymbol)
        /* Otherwise, just concatenate the word itself.*/
        }else{
            buildMeUp += theWordArray[i] + " ";
        }
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
}
addExcitement(sentence, "* ")

/*==================================arrow Function.============================================*/

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let addExcitement = (theWordArray, s) => {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*If the current value of `i` divided by 3 has no
        remainder, add an exclamation point to the end of
        the word and then concatenate it to `buildMeUp`*/
        if( i !== 0 && i % 3 === 0 ){ 
            buildMeUp += theWordArray[i] + (s)
        /* Otherwise, just concatenate the word itself.*/
        }else{
            buildMeUp += theWordArray[i] + " ";
        }
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
}
addExcitement(sentence, "? ")