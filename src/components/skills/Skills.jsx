import React from 'react'
import './Skills.css'

import LogoGuithub from '../../assets/LogoGuithub.png';
import LogoHtmlCss from '../../assets/LogoHtmlCss.png';
import LogoJs from '../../assets/LogoJs.png';
import LogoMySql from '../../assets/LogoMySql.png';
import LogoReact from '../../assets/LogoReact.png';
import LogoNodeJs from '../../assets/LogoNodeJs.png';


const Skills = () => {
  return (
    <div className='Skills'>
        <div className="paraSkills">
        <p> &#8249;Skills /&#8250;</p>
        </div>
        <div>
            <div className="react"  data-aos="fade-right" data-aos-delay="500">
                <img src={LogoReact} alt="React.js"  className="logo" />
            </div>

            <div className="htmlCssJs"  data-aos="fade-left" data-aos-delay="500">
                <img src={LogoHtmlCss} alt="Html Css"  className="logo" />
                <img src={LogoJs} alt="JavaScript"  className="logo" />
            </div>

            <div className="nodeSql"  data-aos="fade-right" data-aos-delay="500">
                <img src={LogoNodeJs} alt="Node.js"  className="logo" />
                <img src={LogoMySql} alt="MySql"  className="logo" />
            </div>

            <div className="guithub"  data-aos="fade-left" data-aos-delay="500">
                <img src={LogoGuithub} alt="Guithub"  className="logo" />
            </div>
        </div>
    </div>
  )
}

export default Skills