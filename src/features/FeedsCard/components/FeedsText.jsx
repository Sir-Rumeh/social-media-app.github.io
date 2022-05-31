import React from "react";

function FeedsText({ feedText, textLink }) {
	return (
		<div className="p-[10px] md:p-[15px] font-[20px]">
			<p>{feedText}</p>
			<a className="underline text-blue-400" href="#">
				{textLink}
			</a>
		</div>
	);
}

export default FeedsText;
