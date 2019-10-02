// We've begun receiving transmissions from Planet Gibber again after many decades of silence. Unfortunately, this time they've been all garbled up!

// Luckily, linguists were able to figure out the rules of Gibberish the last time we heard from them. They've given us a guide on how to identify the actual bits of language from the random data in the strings we receive.

// In order to parse the Gibberish from the... well, gibberish, we'll need to follow these rules:

// Gibberish, as we read it, only contains letters: remove all non-letter characters (including spaces)
// Gibberish is only made up of 5 letter words: separate this into words that are all 5 letters long - no trailing words with fewer than 5 letters!
// Gibberish word are all capitalised: so capitalise all the words (sort of like German nouns)
// Some of the transmissions are only garbled data. If you are given an empty string or a string that doesn't contain any letters, then please return an empty string at the end.

// Even if you can't read the Gibberish, that's okay as long as you've formatted it according to the language rules!

// Good luck :)



function cleanItUp(str) {

    if (str.length == '') return ""
  
    let tempStr = str.match(/[a-z]/gi);

    if (tempStr == null) { return ""} 
    
    else { tempStr = tempStr
    .join('')
    .toLowerCase()
    .slice(0,tempStr.length - (tempStr.length % 5))
    .match(/.{1,5}(?=(.{5})+(?!.))|.{1,5}$/g)

    if (tempStr == null) return ""
    else { return tempStr
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
            };
        };
    };
  
    cleanItUp('$"£$dfsd$%')
