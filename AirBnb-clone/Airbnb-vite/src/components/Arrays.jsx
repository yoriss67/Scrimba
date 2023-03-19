import React from "react"

/*
Challenge: turn the strings in the array into <h3> elements instead
*/

export default function Arrays() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]


    const paragraphs = colors.map(color => `<p>${color}</p>`)


    return (
        <div>
            {/* <h1 style={{ color: 'olive', lineHeight : 10, padding: 20 }}>{colors}</h1> */}
            {paragraphs}
        </div>
    )
}