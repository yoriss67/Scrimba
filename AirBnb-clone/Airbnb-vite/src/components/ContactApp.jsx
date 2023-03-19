// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }












// Build an AirBnb Experiences clone の
// 8 Aside: JS inside JSX

import React from "react"

// function App() {
//     const date = new Date()
//     // const hours = date.getHours() % 12
//     const hours = date.getHours()

//     const minutes = date.getMinutes()

//     // 🙋‍♀️
//     // let greeting = ''
    
//     // const greetingFn = () => {
//     //     if (hours >= 12) {
//     //         greeting = 'Afternoon'
//     //     } else {
//     //         greeting = 'morning'
//     //     }
//     // }
//     // greetingFn();
//     // 🙋‍♀️



//     // 👩‍🎓
//     // 📄 = '' いらない
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     // 👩‍🎓

//         /**
//      * Challenge: fix the h1 below to use the timeOfDay
//      * string we determined in the code above
//      */
    
    
//     return (
//         <h1>Good {timeOfDay}! It's {hours} : {minutes} now</h1>
//     )
// }







// 9

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/
// import * as images from './assets/*.jpg'
// import bird1 from './assets/bird1.jpg'


// Chat GPT
// 🤔画像でなはなくまとめてるjsはrelative path?
import BIRDS from '../../public/images/birds';

// 🤔いや、画像は/images/....でもrelativeでもできる
import birdOne from '../../public/images/bird1.jpg';


import {Contact} from "../index"
import contactData from "../contactData"



{/* ここでそれぞれ違う色をつける感じ */}

export default function ContactApp() {
    const contactElements = contactData.map((contact) => {
        console.log(contact)

    return (

            <Contact
            key={contact.id}

            contact={contact}
            />
            
    )
})
    return (
        <div className="contacts">
            {contactElements}
        </div>
    )


}




