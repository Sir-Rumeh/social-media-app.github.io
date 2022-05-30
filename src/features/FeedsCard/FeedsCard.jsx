import React from "react";

// COMPONENTS
import FeedsTop from "./components/FeedsTop";
import FeedsText from "./components/FeedsText";
import FeedsImage from "./components/FeedsImage";
import FeedsAction from "./components/FeedsAction";

function FeedsCard() {
	return (
		<div className="w-[100%] md:w-full h-auto rounded-[8px] border-[#E0E0E0] bg-white flex flex-col justify-center items-start mb-6">
			<FeedsTop />
			<FeedsText />
			<FeedsImage />
			<FeedsAction />
		</div>
	);
}

export default FeedsCard;
