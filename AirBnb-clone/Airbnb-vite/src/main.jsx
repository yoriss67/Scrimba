import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'

// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Card from './components/Card'

// import App from './components/ContactApp'
// import Contact from './components/Contact'
import {Navbar, Hero, CardApp, ContactApp, JokeApp} from "./index"
// import Arrays from './Arrays'


// 15
/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

// 21
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/
ReactDOM.createRoot(document.getElementById('root')).render(
<div className='topdiv'>
<Navbar />
<Hero />
<CardApp />
{/* <App /> */}


<ContactApp />
<JokeApp />

{/* <Arrays /> */}
</div>
  )
