import imageLeft from "../assets/imageLeft.png";
import imageTop from "../assets/imageTop.png";
import imageBottom from "../assets/imageBottom.png";


const Main = () => {
    return (
        <div className="wrapper">
            <div className="aboutUs">
                <div className="aboutText">
                    <h5>What's Netbook?</h5>
                    <h3>Why Join Netbook's Social Network?</h3>
                    <p className="aboutDescription"> Recent surveys have indicated that small businesses recognize the need they have to connect with the consumer.</p>
                    <div className="aboutList">
                        <ul>
                            <li>Groups</li>
                            <li>Messages</li>
                            <li>Share</li>
                        </ul>
                    </div>
                </div>
                <div className="aboutImage">
                    <img src={imageLeft} className="imageLeft" width={310} height={400} alt="Group of people working on a table that has multiple laptops and tablets on it" />
                    <div className="imagePosition">
                        <img src={imageTop} className="imageTop" alt="male sitting with cup of tea and laptop on table" />
                        <img className="imageBottom" src={imageBottom} alt="bundle of ethernet cords connect the the base of module" />
                    </div>
                </div>
            </div>
            <div className="acheivements">
                <div className="ratings">
                    <div className="cardTitle">
                        <img src="#" alt="star icon" />
                        <h4>4.8 Rating</h4>
                    </div>
                    <div className="membersContainer">
                        <div className="membersPhoto">
                            <img src="#" alt="small profile of Allen" />
                            <img src="#" alt="small profile of Samantha" />
                            <img src="#" alt="small profile of Jared" />
                        </div>
                        <div className="members">
                            <p><span className="color">+836k </span>Members</p>
                        </div>
                    </div>
                    <div className="cardText">
                        <p>More than 2 billion people all over the world use socibooks to stay in touch with friends.</p>
                        <div className="cardArrow">
                            <p className="color">join our community</p>
                            <img className="color" src="#" alt="arrow icon" />
                        </div>
                    </div>
                </div>
                <div className="awards">
                    <div className="cardTitle">
                        <img src="#" alt="trophy icon" />
                        <h4>Awwwards</h4>
                    </div>
                    <div className="awardsContainer">
                        <div className="awardsPhoto">
                            <img src="#" alt="small profile of Allen" />
                        </div>
                        <div className="award">
                            <p>Best of <span className="color">2021 </span>on Github</p>
                        </div>
                    </div>
                    <div className="cardText">
                        <p>More than 2 billion people all over the world use socibooks to stay in touch with friends.</p>
                        <div className="cardArrow">
                            <p>go to awards</p>
                            <img src="#" alt="arrow icon" />
                        </div>
                    </div>
                </div>
                <div className="acheivement">
                    <div className="aboutText">
                        <h5>Our Acheivements</h5>
                        <h3>we are connecting you to the digital life.</h3>
                        <p className="aboutDescription"> The scope of Social Media becomes crucial to help businesses to directly engage with their needs and wants.</p>
                        <div className="discoverButton">
                            <button>Discover Me
                                <img src="#" alt="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;