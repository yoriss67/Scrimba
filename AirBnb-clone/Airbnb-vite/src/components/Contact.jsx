import React from "react"
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



// function Contact({img, name, phone, email}) {
//        /**
//      * Challenge: Fix the code below to use the `props`
//      * object values in place of the hardcoded values below
//      */
//       // Challenge: fix the bug, now that we've destructured the props object

//   return (
   
//       <div className="contact-card">
//     <img src={img}/>
//     <h3>{name}</h3>
//     <div className="info-group">
//         <FontAwesomeIcon icon={faPhone} />
//         <p>{phone}</p>
//     </div>
//     <div className="info-group">
//     <FontAwesomeIcon icon={faEnvelope} />
//         <p>{email } </p>
//     </div>
// </div>

//   )
// }


function Contact(props) {
  /**
* Challenge: Fix the code below to use the `props`
* object values in place of the hardcoded values below
*/
 // Challenge: fix the bug, now that we've destructured the props object

return (

 <div className="contact-card">
<img src={props.contact.img}/>
<h3>{props.contact.name}</h3>
<div className="info-group">
   <FontAwesomeIcon icon={faPhone} />
   <p>{props.contact.phone}</p>
</div>
<div className="info-group">
<FontAwesomeIcon icon={faEnvelope} />
   <p>{props.contact.email} </p>
</div>
</div>

)
}




export default Contact