import React from "react"


// 骨👩‍🔬🌌🪐
function Joke(props) {
    console.log(props.comments)

    // return (
    //     <div>
    //     {props.name ? <h4>Hi, I'm {props.name} !</h4> : <h4>default name</h4>}
    //     <p> I like {props.type} jokes. </p>
    //     </div>
    // )

    // 👩‍🎓
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}

export default Joke