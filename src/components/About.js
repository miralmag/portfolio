import '../styles/components/About.css';
import foxStack from '../images/fox-stack.png';


function AboutMe () {
    return (
        <div id='about' className='about'>
            <h2 className='title'>about the fox dev</h2>
            <p className='message'>Hi! This is Míriam Almagro and I'm a front-end developer. &#128075;</p>
            <p className='message'>Former audiovisual translator, passionate about communication, creativity and new technologies. I define myself as hard worker, naturally curious and involved. Always willing to learn, I'm open to work in dynamic environments with new challenges to achieve.</p>
            <p className='message'>And yes, I also love foxes.</p>
            <p className='message'>Here is my stack:</p>
            <img className="stack" src={foxStack} alt="stack" />
        </div>
    )
}

export default AboutMe;