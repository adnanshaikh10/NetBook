import Logo from "../assets/logo.png";
import avaterOne from "../assets/avater.png";
import avaterTwo from "../assets/avaterTwo.png";
import avaterThree from "../assets/avaterThree.png";
import triangle from "../assets/triangle.png";
import caret from "../assets/caretDown.svg";

const Header = () => {
    return (
        <header className="gradientBackground">
            <div className="wrapper">
                <nav className="navigation">
                    <div className="menuToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="specialMedia">
                        <div className="logo">
                            <a href="/home"><img src={Logo} alt="Netbook Logo" /></a>
                            <h2>Netbook</h2>
                        </div>
                        <ul className="menu">
                            <li><a href="/home">Home</a></li>
                            <li className="options"><a href="/community">Community</a><img src={caret} alt="caret icon" /></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/events">Events</a></li>
                        </ul>
                    </div>
                    <div className="auth">
                        <form action="/search" method="GET">
                            <input type="text" name="query" placeholder=" &#128269; Search Here..." />
                        </form>
                        <button className="loginButton"> Log In </button>
                    </div>
                </nav>
                <div className="heroSection">
                    <div className="heroText">
                        <button className="subtitle">Netbook community</button>
                        <h1>your solutions for community!</h1>
                        <p className="bodyText"> More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
                        <div className="heroButtons">
                            <button className="generalButton">About More</button>
                            <button className="generalButton"> Invite Friend</button>
                        </div>
                    </div>
                    <div className="heroImage">
                        <img src={avaterOne} className="avaterOne" alt="character model of a woman looking right in a blue shirt and scarf" />
                        <img src={avaterThree} height={270} className="avaterThree" alt="character model of a man looking left in a yellow jacket" />
                        <img className="avaterTwo" src={avaterTwo} alt="character model of a man looking left in a blue sweatshirt" />
                        <img src={triangle} height={375} className="triangle" alt="background dashed triangle connecting pictures" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;