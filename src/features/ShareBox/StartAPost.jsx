import React from "react";
// COMPONENTS
import ProfilePicImage from "./ProfilePicImage";

// IMAGES
import ProfilePicImageSrc from "../../images/CardProfilePicture.png";

function StartAPost() {
	return (
		<div className="flex items-center w-[520px] my-3 mx-auto mr-6">
			<ProfilePicImage ProfilePicImageSrc={ProfilePicImageSrc} />
			<button className=" w-[577px] h-[48px] p-2 pl-4 border border-[#D3D3D3] rounded-[2.5rem] text-[#D3D3D3] hover:bg-[#ececec] text-left">
				Start a post
			</button>
		</div>
	);
}

export default StartAPost;
