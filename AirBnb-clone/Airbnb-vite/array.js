/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here

const multiple = nums.map(x => x * x);



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

// ガイド様
// https://flexiple.com/javascript/javascript-capitalize-first-letter/
const capitalNames = names.map(x => x.charAt(0).toUpperCase() + x.slice(1))




/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ['Bulbasaur', "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here



// // https://stackoverflow.com/questions/8609170/how-to-wrap-each-word-of-an-element-in-a-span-tag
// /**
//  * Wraps a string around each word
//  *
//  * @param {string} str The string to transform
//  * @param {string} tmpl Template that gets interpolated
//  * @returns {string} The given input splitted by words
//  */
// function wrapWords(str, tmpl) {
//     return str.replace(/\w+/g, tmpl || "<span>$&</span>");
//   }

//   console.log(wrapWords(pokemon))


const array = document.getElementById('array')
//   Chat GPT
// 😭mapのparamに来る物についての理解がなかった
function wrapWords(str) {
    return "<p>" + str + "</p>";
}

const wrappedPokemon = pokemon.map(wrapWords);
console.log(wrappedPokemon); 


// 👩‍🎓
// const paragraphs = pokemon.map((mon) => {
//     return `<p>${mon}</p>`
// })

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)


array.innerHTML = paragraphs



// ーーーーーーーーーーーーーーーーー
const response = await openai.createImageEdit(
    fs.createReadStream("sunlit_lounge.png"),
    fs.createReadStream("mask.png"),
    "A sunlit indoor lounge area with a pool containing a flamingo",
    1,
    "1024x1024"
  );
  image_url = response.data.data[0].url;

  
  

