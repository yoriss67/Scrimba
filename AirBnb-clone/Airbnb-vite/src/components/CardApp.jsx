import React from "react"
// import Card from "./Card"

// import CARDS from '/images/cards'
import {Card} from "../index"
import cardData from "../cardData"

console.log(cardData)



// export default function CardApp() {
//     return (
//         <div className='card-container'>

//         <Card   
//         coverImg={CARDS.card1}
//         rating={cardData.id}
//         reviewCount={6}
//         location="USA"
//         title="Life Lessons with Katie Zaferes"
//         price={136}        />

//         <Card   
//         img={CARDS.card2}
//         rating={5.0}
//         reviewCount={30}
//         location="USA"
//         title="Learn wedding photography"
//         price={125}
//         />

//         <Card   
//         img={CARDS.card3}
//         rating={4.8}
//         reviewCount={2}
//         location="USA"
//         title="Group Mountain Biking"
//         price={50}
//         /> 

//         </div>

//     )
// }




export default function CardApp() {
    const cardElements = cardData.map((card) => {
        return (
        <Card 
        // 🤔要る？
        // 👩‍🎓22 いる！
        key={card.id}
        // 成功！
        // coverImg={card.coverImg}  
        // // 成功！
        // rating={card.stats.rating}
        // // 成功！
        // reviewCount={card.stats.reviewCount}
        // // 成功！
        // location={card.location}
        // // 成功！
        // title={card.title}
        // // 成功！
        // price={card.price} 
        
        // // 23
        // openSpots={card.openSpots}

        // 24 👩‍🎓これだけに省略！WOW
        {...card}
        />

        )
    })
    return (
        <div className="card-container">
            {cardElements}
        </div>
    )
}
     
