import React from "react";

// COMPONENTS
import FeedsTop from "./components/FeedsTop";
import FeedsText from "./components/FeedsText";
import FeedsImage from "./components/FeedsImage";
import FeedsAction from "./components/FeedsAction";

// CSS
import "./feeds.css";

// IMAGES
import UserPicture1 from "../../images/UserPicture1.png";
import FeedImage1 from "../../images/FeedImage1.png";

function FeedsCard() {
	return (
		<div className="w-[100%] md:w-full h-auto rounded-[8px] border-[#E0E0E0] bg-white flex flex-col justify-center items-start mb-6 -mt-4 feeds-1">
			<FeedsTop
				name={"microsoft"}
				userPicture={UserPicture1}
				followers={"43796"}
				time={"4d"}
			/>
			<FeedsText
				feedText={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, eaque quis ut pariatur nisi optio dolor mollitia odio quod eum, laborum ab magnam ea adipisci natus autem perspiciatis cum rerum?"
				}
				textLink={"https://buff.ly/3e3QaL7"}
			/>
			<FeedsImage feedImage={FeedImage1} />
			<FeedsAction />
		</div>
	);
}

export default FeedsCard;
