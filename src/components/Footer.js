import '../styles/components/Footer.css';


function Footer () {
    return (
        <div className='footer'>
            <section className='top-footer'>
                <div className='address'>
                    <h2>address</h2>
                    <p>San Vicente del Raspeig</p>
                    <p>Alicante</p>
                    <p>Spain</p>
                </div>
                <div className='social'>
                <h2>social</h2>
                    <ul>
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className='contact'>
                    <h2>contact</h2>
                    <ul>
                        <li>Phone</li>
                        <li>Email</li>
                    </ul>
                </div>
            </section>
            <section className='bottom-footer'>
                <p className='copyrigth'> &copy;2022 <span className='brand'>the fox dev</span> All rights reserved</p>
                <p className='message'>Made with &#128151; and React</p>
            </section>
        </div>)
    }

    export default Footer;