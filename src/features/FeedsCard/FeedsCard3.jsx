import React from "react";

// COMPONENTS
import FeedsTop from "./components/FeedsTop";
import FeedsText from "./components/FeedsText";
import FeedsImage from "./components/FeedsImage";
import FeedsAction from "./components/FeedsAction";

// IMAGES
import UserPicture3 from "../../images/UserPicture3.png";
import FeedImage3 from "../../images/FeedImage3.png";

function FeedsCard() {
	return (
		<div className="w-[100%] md:w-full h-auto rounded-[8px] border-[#E0E0E0] bg-white flex flex-col justify-center items-start mb-6 -mt-4">
			<FeedsTop
				name={"Google"}
				userPicture={UserPicture3}
				followers={"43.796"}
				time={"4d"}
			/>
			<FeedsText
				feedText={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt venenatis mi. Vestibulum ullamcorper massa vitae nulla lobortis porta in ac odio."
				}
				textLink={"https://buff.ly/3e3QaL7"}
			/>
			<FeedsImage feedImage={FeedImage3} />
			<FeedsAction />
		</div>
	);
}

export default FeedsCard;
