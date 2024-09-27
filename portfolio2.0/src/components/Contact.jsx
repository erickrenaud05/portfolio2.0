import './Contact.css'

function Contact(){
    return (
        <form action="">
            <label htmlFor="nameInput" >Name:</label>
            <input type="text" id="nameInput" className='textInput' required={true}/>
            <label htmlFor="emailInput">Email:</label>
            <input type="email" id="emailInput" className='textInput' required={true}/>
            <label htmlFor="messageInput">Message:</label>
            <textarea type="textArea" id="messageInput"  required={true}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Contact