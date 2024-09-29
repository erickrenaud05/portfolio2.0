import githubLogo from '../assets/GitHub-Logo.png'
import './Card.css'

function Card(props){

    const style = {
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return(
        <div className="card" style={style}>
            <div className='cardContent'>
                <h2 className="cardName">{props.name}<a href={props.github} target="_blank"><img src={githubLogo} alt="Github logo" /></a></h2>
            </div>
            
        </div>
    )
}

export default Card