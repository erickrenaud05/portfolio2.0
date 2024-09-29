import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import NotFound from './NotFound';


function Body(props){
    switch (props.page) {
        case '1':
            return (
                <About/>
            )
        case '2':
            return (
                <Contact/>
            )
        case '3':
            return (
                <Portfolio/>
            )
        case '4':
            return (
                <Resume/>
            )
        default:
            return (
                <NotFound/>
            );
    }
}

export default Body;