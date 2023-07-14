import imageLeft from "../assets/imageLeft.png";
import imageTop from "../assets/imageTop.png";
import imageBottom from "../assets/imageBottom.png";
import starIcon from "../assets/star.svg";
import photoOne from "../assets/smallPhotoOne.png";
import photoTwo from "../assets/smallPhotoTwo.png";
import photoThree from "../assets/smallPhotoThree.png";
import arrow from "../assets/arrowRightSmall.svg";
import blueArrow from "../assets/blueArrow.svg";
import trophyIcon from "../assets/trophy.svg";
import githubImage from "../assets/github.png";
import bigArrow from "../assets/arrowRightBig.svg";
import imageOne from "../assets/imageOne.png";
import imageTwo from "../assets/imageTwo.png";
import imageThree from "../assets/imageThree.png";
import imageFour from "../assets/imageFour.png";
import imageBackground from "../assets/profileBackground.svg";

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
                    <div className="cardTitleOne">
                        <img src={starIcon} alt="star icon" />
                        <h4>4.8 Rating</h4>
                    </div>
                    <div className="membersContainer">
                        <div className="membersPhoto">
                            <img src={photoOne} alt="small profile of Allen" />
                            <img src={photoTwo} alt="small profile of Samantha" />
                            <img src={photoThree} alt="small profile of Jared" />
                        </div>
                        <div className="members">
                            <p><span className="color">+836k </span>Members</p>
                        </div>
                    </div>
                    <div className="cardText">
                        <p className="ratingText">More than 2 billion people all over the world use socibooks to stay in touch with friends.</p>
                        <div className="cardArrow">
                            <a href="/community" className="color">join our community
                                <img src={blueArrow} alt="arrow icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="awards">
                    <div className="cardTitleTwo">
                        <img src={trophyIcon} alt="trophy icon" />
                        <h4>Awwwards</h4>
                    </div>
                    <div className="awardsContainer">
                        <div className="awardsPhoto">
                            <img src={githubImage} alt="github logo" />
                        </div>
                        <div className="award">
                            <p>Best of <span className="color">2021 </span>on Github</p>
                        </div>
                    </div>
                    <div className="cardText">
                        <p className="awardText">More than 2 billion people all over the world use socibooks to stay in touch with friends.</p>
                        <div className="cardArrow">
                            <a href="/awards">go to awards
                                <img src={arrow} alt="arrow icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="acheivement">
                    <div className="acheivementText">
                        <h5>Our Acheivements</h5>
                        <h3>we are connecting you to the digital life.</h3>
                        <p className="acheivementDescription"> The scope of Social Media becomes crucial to help businesses to directly engage with their needs and wants.</p>
                        <div className="discoverButton">
                            <button className="generalButton">Discover Me
                                <img src={bigArrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="teamMembers">
                <div className="teamText">
                    <h5>Valuable Team</h5>
                    <h3>our active members</h3>
                    <p className="teamDescription"> When an unknown printer took a galley of type and meeting fari scrambled it.</p>
                    <div className="buttonFilter">
                        <button className="generalButton filter" id="newest">Newest</button>
                        <button className="generalButton filter" id="popular">Popular</button>
                        <button className="generalButton filter" id="active">Active</button>
                    </div>
                </div>
                <div className="profilePhoto">
                    <div className="imageOne">
                        <div className="profile">
                            <img className="image" src={imageOne} alt="Fahim Rahman" />
                            <img className="border"  src={imageBackground} alt="border" />
                        </div>
                        <div className="profileInfo">
                            <h2>Fahim Rahman</h2>
                            <p>@rahman</p>
                        </div>
                    </div>
                    <div className="imageTwo">
                        <div className="profile">
                            <img className="image" src={imageTwo} alt="Kazi Rahman" />
                            <img className="border"  src={imageBackground} alt="border" />
                        </div>
                        <div className="profileInfo">
                            <h2>Kazi Rahman</h2>
                            <p>@Rahman</p>
                        </div>
                    </div>
                    <div className="imageThree">
                        <div className="profile">
                            <img className="image" src={imageThree} alt="Masterero Ali" />
                            <img className="border"  src={imageBackground} alt="border" />
                        </div>
                        <div className="profileInfo">
                            <h2>Masterero Ali</h2>
                            <p>@Master</p>
                        </div>
                    </div>
                    <div className="imageFour">
                        <div className="profile">
                            <img className="image" src={imageFour} alt="Alia Karon" />
                            <img className="border" src={imageBackground} alt="border" />
                        </div>
                        <div className="profileInfo">
                            <h2>Alia Karon</h2>
                            <p>@Alia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;