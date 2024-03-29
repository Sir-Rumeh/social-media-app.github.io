import React from "react";
// CSS
import "./MobileHeader.css";

// COMPONENTS
import ProfilePicImage from "../ShareBox/ProfilePicImage";
import SearchBar from "../Header/SearchBar/SearchBar";
import ProfilePicImageSrc from "../../images/CardProfilePicture.png";

// ICONS
import { MessageIcon, SearchIcon } from "../../icons";

function MobileHeader() {
	return (
		<div className="md:hidden flex  items-center align-middle justify-between w-full p-2 pl-[35px]">
			<ProfilePicImage ProfilePicImageSrc={ProfilePicImageSrc} />
			<form action="" className="">
				<div className="flex items-center justify-center text-gray-400 focus-within:text-gray-600 ">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute left-[4.7rem]"
					>
						<path
							d="M14.56 12.995L11.3 9.32749C11.9493 8.0213 12.1566 6.49496 11.8836 5.03026C11.6107 3.56557 10.8759 2.26141 9.81501 1.35855C8.75411 0.455692 7.43869 0.0150962 6.11159 0.118102C4.78449 0.221108 3.53532 0.860761 2.59468 1.91897C1.65405 2.97719 1.08547 4.3825 0.993909 5.87549C0.902348 7.36848 1.29399 8.84833 2.09653 10.0418C2.89907 11.2354 4.05832 12.0619 5.36028 12.369C6.66223 12.6761 8.01897 12.4429 9.18003 11.7125L12.44 15.38C12.5774 15.5458 12.743 15.6788 12.927 15.771C13.111 15.8632 13.3096 15.9128 13.511 15.9168C13.7124 15.9208 13.9125 15.8791 14.0992 15.7943C14.286 15.7094 14.4557 15.5831 14.5981 15.4228C14.7405 15.2626 14.8528 15.0717 14.9283 14.8616C15.0037 14.6515 15.0408 14.4264 15.0372 14.1998C15.0337 13.9732 14.9896 13.7498 14.9076 13.5428C14.8256 13.3358 14.7074 13.1495 14.56 12.995ZM3.00004 6.31249C3.00004 5.53373 3.20531 4.77245 3.58989 4.12494C3.97448 3.47742 4.5211 2.97274 5.16064 2.67472C5.80018 2.3767 6.50392 2.29872 7.18285 2.45065C7.86178 2.60258 8.48542 2.97759 8.97491 3.52826C9.46439 4.07893 9.79774 4.78052 9.93278 5.54432C10.0678 6.30812 9.99852 7.09982 9.73361 7.81931C9.46871 8.53879 9.0201 9.15375 8.44453 9.5864C7.86896 10.0191 7.19227 10.25 6.50003 10.25C5.57178 10.25 4.68154 9.83515 4.02516 9.09672C3.36878 8.3583 3.00004 7.35678 3.00004 6.31249Z"
							fill="black"
							fill-opacity="0.9"
						/>
					</svg>
					<input
						type="text"
						name="search"
						placeholder="Search"
						autocomplete="off"
						aria-label="Search"
						className=" placeholder-gray-500 text-black border-none focus:ring-gray-500 focus:ring-2  h-10 header-input"
					/>
				</div>
			</form>
			<MessageIcon />
		</div>
	);
}

export default MobileHeader;
