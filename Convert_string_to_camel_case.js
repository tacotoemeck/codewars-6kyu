// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

    // 

    function toCamelCase(str){
        let arr = Array.from(str);
         for ( let i = 0; i < arr.length; i++) {
            if ( arr[i] == '-' || arr[i] == '_' ) {
                arr[i] = '';
                arr[i+1] = arr[i+1].toUpperCase()
            }
         }
         return arr.join('')
         }
         
         toCamelCase("the-stealth-warrior")