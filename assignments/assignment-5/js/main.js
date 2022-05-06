// function checkCase(text)
// {   

//     var counter = 0;
//     var letters = 0;
//     var lowercase = 0;
//     var uppercase = 0;
//     var spaces = 0;
//     var words = 0;


//     for(; counter < text.length; counter++)
//     {
//         if(isUpperCase(text.charAt(counter))) {uppercase ++; letters++;}
//         if(isLowerCase(text.charAt(counter))) {lowercase ++; letters++;} 
//         if((text.charAt(counter) == " ") && (counter < text.length))
//         {
//             spaces += 1;
//             words += 1;
//         }
//         if((text.charAt(counter) == ".") || (text.charAt(text(counter)) == ",")) continue;
//     }
//     return  [letters, lowercase, uppercase, spaces, words];
// }

// function isUpperCase(character)
// {
//     if(character == character.toUpperCase) return true;
//     else return false;
// }

// function isLowerCase(character)
// {
//     if(character == character.toLowerCase) return true;
//     else return false;
// }