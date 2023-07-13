import Logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="logo">
                    <img src={Logo} alt="Netbook Logo" />
                    <h2>Netbook</h2>
                </div>
                <div className="menu">
                    <ul><a href="/home">Home</a></ul>
                    <ul className="options"><a href="/resources">Resources</a></ul>
                    <ul><a href="/community">Community</a></ul>
                    <ul><a href="/members">Members</a></ul>
                </div>
                <div className="socials">
                    <img src="#" alt="Twitter Logo" />
                    <img src="#" alt="Instagram Logo" />
                    <img src="#" alt="Facebook Logo" />
                    <img src="#" alt="LinkedIn Logo" />
                </div>
            </div>
        </footer>
    )
}
export default Footer;