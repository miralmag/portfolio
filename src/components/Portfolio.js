import '../styles/components/Portfolio.css';
import openSpaces from '../images/open-spaces.mp4';
import harryPotter from '../images/harry-potter.mp4';
import stranger from '../images/stranger-coders.mp4';


function Portfolio () {
    return (
        <div id='portfolio' className='portfolio'>
            <h2 className='title'>portfolio</h2>
            <div className='video-wrapper'>
            <article>
            <video className="video" src={openSpaces} width="320" height="240">
            </video>
            <div className='icon'>
                <i className="fa-brands fa-html5 first"></i>
                <i className="fa-brands fa-sass second"></i>
            </div>
            <p className='video-title'>Open Spaces</p>
            </article>

            <article>
            <video className="video" src={harryPotter} width="320" height="240">
            </video>
            <div className='icon'><i className="fa-brands fa-html5 first" ></i></div>
            <div className='icon'><i className="fa-brands fa-react second"></i></div>
            <div className='icon'><i className="fa-brands fa-css3-alt third"></i></div>
            <p className='video-title'>Harry Potter Browser</p>
            </article>

            <article>
            <video className="video" src={stranger} width="320" height="240">
            </video>
            <div className='icon'><i className="fa-brands fa-html5 first"></i></div>
            <div className='icon'><i className="fa-brands fa-css3-alt second"></i></div>
            <p className='video-title'>Stranger Coders</p>
            </article>
            </div>
        </div>
    )
}

export default Portfolio;