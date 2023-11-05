import React from "react";

function ProfileBio({ userData }) {
    return (
        <div>
            {userData && (
                <div className="ProfileBio">
                    <p>{userData.bio || "No Bio Available"}</p>
                </div>
            )}
        </div>
    );
}

export default ProfileBio;