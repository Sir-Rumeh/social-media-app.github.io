import React from "react";

function ProfilePicImage({ ProfilePicImageSrc }) {
	return (
		<img
			className="h-[48px] -ml-8 mr-4"
			src={ProfilePicImageSrc}
			alt="profile pic"
		/>
	);
}

export default ProfilePicImage;
