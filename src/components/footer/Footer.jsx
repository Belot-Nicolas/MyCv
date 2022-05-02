import React from 'react'
import './Footer.css'

import IconeEmail from '../../assets/icone/IconeEmail.png'
import IconeGuit from '../../assets/icone/IconeGuit.png'
import IconeLinkedin from '../../assets/icone/IconeLinkedin.png'
import IconePhone from '../../assets/icone/IconePhone.png'


const Footer = () => {
  return (
    <div className="Footer">
        <div className="phone elementFooter">
            <img src={IconePhone} alt="phone" className='icone' />
         <p>06-47-93-69-95 </p>
         </div>
         <div className="email elementFooter">
            <img src={IconeEmail} alt="email" className='icone' />
           <a href="mailto:BELOTnicolas@hotmail.fr" className='link'><p>BELOTnicolas@hotmail.fr</p></a> 
         </div>

         <div className="linkedin elementFooter">
        <img src={IconeLinkedin} alt="linkedin" className='icone' />
        <a href="https://www.linkedin.com/in/nicolas-belot-749a52226/" className='link'>Linkedin</a>
         </div>

         <div className="git elementFooter">
            <img src={IconeGuit} alt="github" className='icone' />
            <a href="https://github.com/Belot-Nicolas?tab=repositories" className='link'>GuitHub</a>
         </div>
    </div>
  )
}

export default Footer