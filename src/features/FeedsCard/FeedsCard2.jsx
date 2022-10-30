import React from "react";

// COMPONENTS
import FeedsTop from "./components/FeedsTop";
import FeedsText from "./components/FeedsText";
import FeedsImage from "./components/FeedsImage";
import FeedsAction from "./components/FeedsAction";

// IMAGES
import UserPicture2 from "../../images/UserPicture2.png";
import FeedImage2 from "../../images/FeedImage2.png";

function FeedsCard() {
	return (
		<div className="w-[100%] md:w-full h-auto rounded-[8px] border-[#E0E0E0] bg-white flex flex-col justify-center items-start mb-6 -mt-4 feeds-2">
			<FeedsTop
				name={"GitHub"}
				userPicture={UserPicture2}
				followers={"1.808.968"}
				time={"2s"}
			/>
			<FeedsText
				feedText={
					"The 2020 State of the Octoverse uncovered COVID's impact on developer contributions, the OSS community pandemic response, and the challenge of securing the world’s software. Learn how developers turned challenges into opportunities on The ReadME Project."
				}
				textLink={"https://buff.ly/3e3QaL7"}
			/>
			<FeedsImage feedImage={FeedImage2} />
			<FeedsAction />
		</div>
	);
}

export default FeedsCard;
