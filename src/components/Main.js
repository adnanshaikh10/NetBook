import imageLeft from "../assets/imageLeft.png";
import imageTop from "../assets/imageTop.png";
import imageBottom from "../assets/imageBottom.png";


const Main = () => {
    return (
        <div className="aboutUs">
            <div className="aboutText">
                <h5>What's Netbooks</h5>
                <h3>Why Join Netbook's Social Network?</h3>
                <p className="bodyText"> Recent surveys have indicated that small businesses recognize the need they have to connect with the consumer.</p>
                <div className="aboutList">
                    <ul>
                        <li>Groups</li>
                        <li>Messages</li>
                        <li>Share</li>
                    </ul>
                </div>
            </div>
            <div className="aboutImage">
                <img src={imageLeft} className="imageLeft" alt="Group of people working on a table that has multiple laptops and tablets on it" />
                <div className="imagePosition">
                    <img src={imageTop} className="imageTop" alt="male sitting with cup of tea and laptop on table" />
                    <img className="imageBottom" src={imageBottom} alt="bundle of ethernet cords connect the the base of module" />
                </div>
            </div>
        </div>
    )
}

export default Main;