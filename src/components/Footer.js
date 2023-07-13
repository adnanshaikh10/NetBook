
const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="teamMembers">
                    <h5>Valuable Team</h5>
                    <h3>our active members</h3>
                    <p className="teamDescription"> When an unknown printer took a galley of type and meeting fari scrambled it.</p>
                    <div className="buttonFilter">
                        <button className="filter" id="newest">Newest</button>
                        <button className="filter" id="popular">Popular</button>
                        <button className="filter" id="active">Active</button>
                    </div>
                    <div className="profilePhoto">
                        <div className="photoOne">
                            <div className="profile">
                                <img src="#" alt="Fahim Rahman" />
                                <img src="#" alt="border" />
                                <img src="#" alt="checkmark" />
                            </div>
                            <div className="profileInfo">
                                <h2>Fahim Rahman</h2>
                                <p>@rahman</p>
                            </div>
                        </div>
                        <div className="photoTwo">
                            <div className="profile">
                                <img src="#" alt="Kazi Rahman" />
                                <img src="#" alt="border" />
                                <img src="#" alt="checkmark" />
                            </div>
                            <div className="profileInfo">
                                <h2>Kazi Rahman</h2>
                                <p>@Rahman</p>
                            </div>
                        </div>
                        <div className="photoThree">
                            <div className="profile">
                                <img src="#" alt="Masterero Ali" />
                                <img src="#" alt="border" />
                                <img src="#" alt="checkmark" />
                            </div>
                            <div className="profileInfo">
                                <h2>Masterero Ali</h2>
                                <p>@Master</p>
                            </div>
                        </div>
                        <div className="photoFour">
                            <div className="profile">
                                <img src="" alt="Alia Karon" />
                                <img src="" alt="border" />
                                <img src="" alt="checkmark" />
                            </div>
                            <div className="profileInfo">
                                <h2>Alia Karon</h2>
                                <p>@Alia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;