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
            img: blogProject,
            projectUrl: 'https://cms-blog-frix.onrender.com'
        },
        {
            name: 'BingeBuddy',
            github: 'https://github.com/erickrenaud05/BingeBuddy1.0',
            img: BingeBuddy,
            projectUrl: 'https://erickrenaud05.github.io/BingeBuddy1.0'
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
                    {projects.map((project)=><Card key={project.name} name={project.name} github={project.github} img={project.img} projectUrl={project.projectUrl}/>)}
                </div>
            </div>
        </>
    )
}

export default Portfolio