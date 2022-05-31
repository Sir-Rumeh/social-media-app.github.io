import React from "react";

// IMAGES
import ProfileBanner from "../../images/ProfileBanner.png";
import CardProfilePicture from "../../images/CardProfilePicture.png";

// ICONS
import { PremiumIcon } from "../../icons";

function LeftSideCard1() {
	return (
		<div className="hidden lg:flex flex-col items-start w-[270px] h-[337px] border border-[#d3d3d3] rounded-[8px] bg-white absolute top-[93px] left-[185px] ">
			<img src={ProfileBanner} alt="" />
			<img
				className="border-2 border-white rounded-[50%] absolute mx-[35%] top-[5%] z-10"
				src={CardProfilePicture}
				alt=""
			/>
			<div className="mx-auto mt-[55px] flex flex-col justify-center items-center mb-1">
				<h1>Adam John</h1>
				<small className="text-[#666666] opacity-80">
					Frontend Developer
				</small>
			</div>
			{/* CONNECTIONS */}
			<div className="w-full flex flex-col  justify-center ">
				<div className="border-y px-[13px] py-[7px] text-sm font-light">
					<div className="flex flex-col ">
						<p className="text-[#666666] opacity-80">
							{" "}
							Connections
						</p>
						<p className="-mt-1">Grow your network</p>
						<span className="absolute right-[10px] font-bold text-[#0A66C2]">
							51
						</span>
					</div>
					<div className="flex flex-col">
						<p className="text-[#666666] opacity-80">
							{" "}
							Followers
						</p>

						<span className="absolute right-[10px] font-bold text-[#0A66C2]">
							25
						</span>
					</div>
				</div>
				{/* PREMIUM */}
				<div className="border-y px-[13px] py-[7px] text-sm">
					<div className="flex flex-col pr-16">
						<p className="text-[#666666] opacity-80">
							{" "}
							Access exclusive tools & insights
						</p>
						<p className="flex items-center">
							<span className="mr-2">
								<PremiumIcon />
							</span>
							Try premium for free
						</p>
					</div>
				</div>
				{/* ITEMS */}
				<div className="pl-[13px]">
					<p className="flex items-center">My items</p>
				</div>
			</div>
		</div>
	);
}

export default LeftSideCard1;
