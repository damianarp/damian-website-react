import './header.css';
import photo from '../../assets/damian-photo-min.webp';

const Header = () => {

    return (
        <div className='dami__header'  id='home'>
            <div className='dami__header-content section__padding' >
                <h1 className='gradient__text'>
                    I'm <span className='gradient__span'>Damián Arp,</span>
                </h1>
                <h1 className='gradient__text'>
                    I'm a Web Developer.
                </h1>
                <p>
                    Full Stack Developer with 2+ years of hands-on experience designing, developing, and implementing applications and solutions using a wide range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full Stack Developer.
                </p>
                <div className='dami__header-content__input'>
                    <input placeholder="Let's work together!" disabled />
                    <button type='button'>
                        <p><a href="contactme"></a>Contact Me!</p>
                    </button>
                </div>
            </div>
            <div className='dami__header-image'>
                <img src={photo} alt='Damian face'/>
            </div>
        </div>
    )
}

export default Header;