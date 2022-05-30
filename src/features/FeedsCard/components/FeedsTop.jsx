import React from "react";

// IMAGES
import TestImage from "../../../images/CardProfilePicture.png";

//ICONS
import { OptionsIcon, GlobeIcon } from "../../../icons";

function FeedsTop() {
	return (
		<div className="flex items-center p-[10px] md:p-[15px] relative w-full bg-grey">
			<img
				src={TestImage}
				alt="profile-logo"
				className="mr-3 w-[42px] md:w-[48px] h-[42px] md:h-[48px]"
			/>
			<div className="flex flex-col ">
				<p className="font-[14px] md:font-[16px]">Micr</p>
				<small className="font-[12px] -mt-1  text-[#666666] opacity-80">
					43 followers
				</small>
				<div className="-mt-1 flex flex-row items-center text-[#666666] opacity-80">
					<small className="font-[12px] mr-1">4d</small>
					<span className="">
						<GlobeIcon />
					</span>
				</div>
			</div>
			<div className="absolute top-[10px] md:top-[15px] right-[10px] md:right-[15px]">
				<OptionsIcon />
			</div>
		</div>
	);
}

export default FeedsTop;
