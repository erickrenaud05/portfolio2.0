import githubLogo from '../assets/GitHub-Logo.png'
import './Footer.css'

function Footer(){
    return(
        <>
        <div class="footer">
            <a href="https://github.com/erickrenaud05" target="_blank"><img src={githubLogo} alt="Github logo" /></a>
        </div>
        </>
    )
}

export default Footer