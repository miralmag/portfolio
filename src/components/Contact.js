import '../styles/components/Contact.css'


function Contact () {
    return (
        <div className='contact'>
            <h2 className='title'>
                contact me
            </h2>
            <p className='contact-text'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ut et voluptates repudiandae sint et molestiae non recusandae.</p>
            <form className='form' method='post' action='send.php'>
                <p>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' id='name'></input>
                </p>
                <p>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' name='email' id='email'></input>
                </p>
                <p>
                    <label htmlFor='subject'>Subject:</label>
                    <input type='text' name='subject' id='subject'></input>
                </p>
                <p>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' id='message' cols='45' rows='10'></textarea>
                </p>
                <div className='button-section'>
                <button className='button'><i class="fa-solid fa-envelope"></i>submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;