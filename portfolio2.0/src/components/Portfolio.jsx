import Card from './Card'
import './Portfolio.css'
import blogProject from '../assets/blogProject.jpeg'
import BingeBuddy from '../assets/BingeBuddy.jpeg'
import backend from '../assets/backend.jpg'

function Portfolio(){

    const projects = [
        {
            name: 'Cms-Style-Blog',
            github: 'https://github.com/erickrenaud05/CMS-blog',
            img: blogProject
        },
        {
            name: 'BingeBuddy',
            github: 'https://github.com/erickrenaud05/BingeBuddy1.0',
            img: BingeBuddy
        },
        {
            name: 'e-CommerceBackend',
            github: 'https://github.com/erickrenaud05/E-commerceBackEnd',
            img: backend
        }
    ]

    return (
        <>
            <div>
                <h3>Portfolio</h3>
                <div className="container">          
                    {projects.map((project)=><Card key={project.name} name={project.name} github={project.github} img={project.img}/>)}
                </div>
            </div>
        </>
    )
}

export default Portfolio