import '../styles/components/Contact.css'


function Contact () {
    return (
        <div id='contact' className='contact'>
            <h2 className='title'>
                contact me
            </h2>
            <p className='contact-text'>Feel free to leave a message!</p>
            <form className='form' method='post' action='send.php'>
                <p>
                    <label className='label' htmlFor='name'>Name*</label>
                    <input className='input' type='text' name='name' id='name' required placeholder='Mr. Fox'></input>
                </p>
                <p>
                    <label className='label' htmlFor='email'>Email*</label>
                    <input className='input' type='text' name='email' id='email' placeholder='foxdeveloper@gmail.com' required></input>
                </p>
                <p>
                    <label className='label' htmlFor='subject'>Subject</label>
                    <input className='input' type='text' name='subject' id='subject' ></input>
                </p>
                <p>
                    <label className='label' htmlFor='message'>Message*</label>
                    <textarea className='input' name='message' id='message' cols='45' rows='10' required ></textarea>
                </p>
                <div className='button-section'>
                <button className='button'><i class="fa-solid fa-envelope"></i>submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;