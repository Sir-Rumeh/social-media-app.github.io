import React from "react";

function ActionComponent({ icon, actionText }) {
	return (
		<div className="flex items-center p-[10px] md:p-[15px] w-full text-[#666666] opacity-80">
			<div className="flex items-center flex-row items-center mr-4">
				<span className="mr-2">{icon}</span>
				<span>{actionText}</span>
			</div>
		</div>
	);
}

export default ActionComponent;
