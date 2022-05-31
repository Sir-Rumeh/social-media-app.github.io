import React from "react";
// COMPONENTS
import NavItems from "./NavItems/NavItems";
// ICONS
import {
	HomeIcon,
	MyNetworkIcon,
	JobsIcon,
	MessageIcon,
	NotificationIcon,
	ArrowDownIcon,
	WorkIcon,
	ProfilePicIcon,
} from "../../../icons";

// IMAGES
import ProfilePic from "../../../images/CardProfilePicture.png";

function NavMenu() {
	const Style = {
		color: "black",
	};

	return (
		<div
			className="hidden top-navbar lg:inline-flex lg:flex-grow lg:w-auto lg:mr-[115px]"
			id="navigation"
		>
			<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto ">
				<NavItems
					Style={Style}
					navItemIcon={<HomeIcon />}
					navItemText={"Home"}
				/>
				<NavItems
					navItemIcon={<MyNetworkIcon />}
					navItemText={"My Network"}
				/>
				<NavItems navItemIcon={<JobsIcon />} navItemText={"Jobs"} />
				<NavItems
					navItemIcon={<MessageIcon />}
					navItemText={"Messaging"}
				/>
				<NavItems
					navItemIcon={<NotificationIcon />}
					navItemText={"Notifications"}
				/>
				<div className="divide-x divide-[#6666]">
					<a
						href="#"
						className="lg:inline-flex flex-col lg:w-auto w-full px-1 py-2 rounded text-[#666666] items-center justify-center  ml-5 "
					>
						<span>
							<ProfilePicIcon src={ProfilePic} />
						</span>
						<span className="text-[12px] font-light">Me</span>
					</a>

					<a
						href="#"
						className="lg:inline-flex flex-col lg:w-auto w-full pl-7 py-2 rounded text-[#666666] items-center justify-center  ml-5 mr-5 "
					>
						<span>
							<WorkIcon />
						</span>
						<span className="text-[12px] font-light">
							<ArrowDownIcon />
						</span>
					</a>
					<span className="">
						<small className="text-[#915907]">
							Try Premium for free
						</small>
					</span>
				</div>
			</div>
		</div>
	);
}

export default NavMenu;
