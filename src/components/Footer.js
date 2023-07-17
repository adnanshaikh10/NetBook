import Logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="logoTwo">
                    <a href="/home"><img src={Logo} alt="Netbook Logo" /></a>
                    <h2>Netbook</h2>
                </div>
                <div className="menuTwo">
                    <ul><a href="/home">Home</a></ul>
                    <ul><a href="/resources">Resources</a></ul>
                    <ul><a href="/community">Community</a></ul>
                    <ul><a href="/members">Members</a></ul>
                </div>
                <div className="socials">
                    <a href="http://twitter.com"><img className="social" src={twitter} alt="Twitter Logo"/></a>
                    <a href="http://instagram.com"><img className="social" src={instagram} alt="Instagram Logo"/></a>
                    <a href="http://facebook.com"><img className="social" src={facebook} alt="Facebook Logo"/></a>
                    <a href="http://linkedin.com"><img className="social" src={linkedin} alt="LinkedIn Logo"/></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;