import React from 'react'
import javascriptIcon from '../assets/icon/icon-javscript.svg'
import nodejsIcon from '../assets/icon/icon-nodejs.svg'
import iconexpress from '../assets/icon/icon-express.svg'
import iconmongodb from '../assets/icon/icon-mongodb.svg'
import iconfigma from '../assets/icon/icon-figma.svg'
import icontailwind from '../assets/icon/icon-tailwindcss.svg'
import iconreact from '../assets/icon/icon-react.svg'
import icongit from '../assets/icon/icon-git.svg'
import '../assets/css/skills/skills.css'

function Skills() {
  return (
    <div>
          {/* <!-- Skills section start  --> */}
   <section id="skills" className="skills  container">
        <div className="title">
            <h2>Skills</h2>
            <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="skills-content">
            <div className="content_one skills-icon">
                <div className="icon"><img src={javascriptIcon} alt=""/>
                <p className="icon-title">Javascript</p>
                </div>
                <div className="icon"><img src={nodejsIcon} alt=""/>
                    <p className="icon-title">Node JS</p>
                </div>
                <div className="icon"><img src={iconexpress} alt=""/>
                    <p className="icon-title">Express JS</p>
                </div>
                <div className="icon"><img src={iconmongodb} alt=""/>
                    <p className="icon-title">MongoDB</p>
                </div>
                <div className="icon"><img src={iconfigma} alt=""/>
                    <p className="icon-title">Figma</p>
                </div>
                <div className="icon"><img src={icontailwind} alt=""/>
                    <p className="icon-title">TailwindCSS</p>
                </div>
                <div className="icon"><img src={iconreact} alt=""/>
                    <p className="icon-title">React JS</p>
                </div>
                <div className="icon"><img src={icongit} alt=""/>
                    <p className="icon-title">Git</p>
                </div>

            </div>
            {/* <!-- <div className="content_two skills-icon">
               this div for add antoher skill

            </div> --> */}
        </div>
   </section>
    </div>
  )
}

export default Skills