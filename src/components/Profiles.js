import React from "react"
import teamData from "../teamData.json";
import imageBackground from "../assets/profileBackground.svg";

const Profiles = (value) => {

    let filterId = (value.tag);

    const { profilePhoto } = teamData;

    let newestPhoto = profilePhoto.filter((newArray) => newArray.tag === "Newest");
    let popularPhoto = profilePhoto.filter((newArray) => newArray.tag === "Popular");
    let activePhoto = profilePhoto.filter((newArray) => newArray.tag === "Active");

    const displayProfile = (profilePhoto) => {
        return profilePhoto.map((profile) => (
            <div key={profile.id} className={profile.className}>
                <div className="profile">
                    <img className="image" src={profile.photoUrl} alt={profile.name} />
                    <img className="border" src={imageBackground} alt="border" />
                </div>
                <div className="profileInfo">
                    <h2>{profile.name}</h2>
                    <p>{profile.handle}</p>
                </div>
            </div>
        ))
    }

    if (filterId === "") {
        return (
            <div className="profilePhoto">
                {displayProfile(profilePhoto)}
            </div>
        )
    } else if (filterId === "Newest") {
        return (
            <div className="profilePhoto">
                {displayProfile(newestPhoto)}
            </div>
        )
    } else if (filterId === "Popular") {
        return (
            <div className="profilePhoto">
                {displayProfile(popularPhoto)}
            </div>
        )
    } else if (filterId === "Active") {
        return (
            <div className="profilePhoto">
                {displayProfile(activePhoto)}
            </div>
        )
    }

}
export default Profiles;