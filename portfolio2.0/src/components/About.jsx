import './About.css'
import Avatar from '../assets/myAvatar.png'

function About(){
    return (
        <div>
            <h3>About Me</h3>
            <img src={Avatar} alt="My avatar"></img>
            <p>
                Hi, my name is Erick. I'm a fullstack developer with a passion for learning.
            </p>
        </div>
)
}

export default About