import React from "react";

// COMPONENTS
import StartAPost from "./StartAPost";
import ShareButtons from "./ShareButtons";

function ShareBox() {
	return (
		<div>
			<div className="md:w-full h-[112px] hidden md:flex flex-col justify-center items-center bg-white shadow-md rounded-md border border-solid border-[#e0e0e0] mx-auto my-6 ">
				<StartAPost />
				<ShareButtons />
			</div>
		</div>
	);
}

export default ShareBox;
