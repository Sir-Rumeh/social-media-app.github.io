import React from "react";
// CSS
import "./ShareBox.css";

// COMPONENTS
import StartAPost from "./StartAPost";
import ShareButtons from "./ShareButtons";

function ShareBox() {
	return (
		<div className="  testing">
			<div className="inner bg-[white] md:w-full h-[112px] hidden md:flex flex-col justify-center items-center shadow-md rounded-md border border-solid border-[#e0e0e0] mx-auto my-6 mb-3 pt-3 ">
				<StartAPost />
				<ShareButtons />
			</div>
		</div>
	);
}

export default ShareBox;
