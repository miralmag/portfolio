import '../styles/components/Header.css';
import Logo from '../images/fox-logo.png'

function Header () {
    return (
        <header>
		    <div className='wrapper'>
            <div className='logo'>
                <img src={Logo} title="FoxDev" alt="FoxDev logo" className='logo-img'/>
				{/* <h1>the fox dev</h1> */}
				</div>

			    <nav className='main-nav' >
                    <div className='hamburguer'>
                        <a href="#" className='ham-button'><i className="fa-solid fa-bars"></i></a>
                    </div>
						<ul className="menu-list">
							<li><a href="#about">about</a></li>
							<li><a href="#services">services</a></li>
							<li><a href="#portfolio">portfolio</a></li>
							<li><a href="#contact">contact</a></li>
						</ul>

                        <div className="socials">
				<ul className="column">
					<li><a href="#"><i className="fa-brands fa-github"></i></a></li>
					<li><a href="#"><i className="fa-solid fa-envelope"></i></a></li>
				</ul>
						<ul className="column">
							<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
						</ul>
			</div>
				</nav>
        
            
            </div>
        </header>
    );
}

export default Header;