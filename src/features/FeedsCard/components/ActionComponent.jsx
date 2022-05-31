import React from "react";

function ActionComponent({ icon, actionText }) {
	return (
		<button className="flex items-center p-[10px] md:p-[15px] w-full text-[#666666] opacity-80 hover:bg-[#ececec]">
			<div className="flex items-center flex-row mr-2 md:mr-4">
				<span className="mr-2">{icon}</span>
				<span>{actionText}</span>
			</div>
		</button>
	);
}

export default ActionComponent;
