import React from 'react'

// import star from './assets/Star 1.png'
// import swimmer from './assets/swimmer.png'
// import wedding from './assets/wedding.png'
// import mountainBike from './assets/mountain-bike.png'


// import * as images from './assets/*.png'

// 🤔roundabout?
import Star from '/images/Star 1.png'

/*
Challenge: Build the Card component
For now, hard-code in the data (like
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images
folder for your use
- Make sure to include:
- image
- star icon (star.png), rating, and review count
- title
- cost/person
- The main purpose of this challenge is to show you where our limitations
currently are, so don't worry about the fact that you're hard-coding all
this data into the component.
*/

export default function Card (props) {
// console.log(props.openSpots)

let badgeText
if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
} else if (props.location === "Online") {
    badgeText = "ONLINE"
}


return (
<div className="card">
    {/* Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value */}
    
    {/* 🤬最初は「props.openSpots」じゃない！！！！ */}
    {badgeText  && <div className="card--badge">{badgeText} </div> }

    <img className='card--image' src={props.coverImg} alt="" />


    <div className="card--stats">
        <img src={Star} className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
    </div>
    <p className="card--title">{props.title} </p>
    <p className="card--price"><span className="bold">From ${props.price} </span>/ person</p>
</div>
)
}

