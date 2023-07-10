import Logo from "../assets/logo.png";


const Header = () => {
    return (
        <header>
            <nav className="navigation">
                <div className="logo">
                    <img src={Logo} alt="Netbook Logo"/>
                    <h2>Netbook</h2>
                </div>
                <div className="menu">
                    <ul><a href="#">Home</a></ul>
                    <ul className="options"><a href="#">Community&#8964;</a></ul>
                    <ul><a href="#">Blog</a></ul>
                    <ul><a href="#">Events</a></ul>
                </div>
                <div className="auth">
                    <form action="/search" method="GET">
                    <input type="text" name="query" placeholder=" &#128269; Search Here..."/>
                    </form>
                    <button className="loginButton"> Log In </button>
                </div>
            </nav>
            <div className="heroSection">
                <div className="heroText">
                    <h4>Netbook community</h4>
                    <h1>your solutions for community!</h1>
                    <p> More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
                    <div className="heroButtons">
                        <button>About More</button>
                        <button> Invite Friend</button>
                    </div>
                </div>
                <div className="heroImage">
                    <img src="#" alt="" />
                    <img src="#" alt="" />
                    <img src="#" alt="" />
                </div>
            </div>
            
        </header>
    )
}

export default Header;