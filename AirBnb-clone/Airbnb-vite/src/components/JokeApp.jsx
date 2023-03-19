import React from "react"
// import {Joke} from "./index";
import Joke from "./Joke"
import jokesData from "./jokesData"


// 虎ハック　動画でのArticle.js
// 塗り絵した後✍️💅🎨

// function JokeApp() {

// // const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

//     const jokeElements = jokesData.map(joke => 
//         // 🙋‍♀️
//         // return <Joke
//         // setup={<p>${joke}</p>}  />

//         // 👩‍🎓
//          <Joke setup={joke.setup} punchline={joke.punchline} /> 
//     )



//     return (
//         <div>
//         {/* <Joke 
//         nme ="A"
//         type="merry"
//         isPun={true}
//         upvotes={10}
//         downvotes={2}
//         comments={[{author: "", body: "", title: ""}]}

//         />
        
//         <Joke 
//         name ="B"
//         type="synical"/>
        
//         <Joke 
//         name ="C"
//         type="foolish"/>
        
//         <Joke 
//         name ="D"
//         type="self-depricate"
//         />
        
//         <Joke 
//         name ="E"
//         type="intelligent"/> */}

//         {jokeElements}

//         </div>

//     )
// };

// export default JokeApp



export default function JokeApp() {
    const jokeElements = jokesData.map((joke, pos) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} key={joke.id}/>
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
          
