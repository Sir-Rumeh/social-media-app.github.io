import React from "react";

// ICONS
import { LeftCardArrowIcon, PlusIcon } from "../../icons";

function LeftSideCard2() {
	return (
		<div className="hidden lg:flex flex-col items-start w-[270px] h-[195px] border border-[#d3d3d3] rounded-[8px] bg-white absolute top-[463px] left-[185px] p-[15px] ">
			{/* CONNECTIONS */}
			<div className="flex items-center justify-between text-sm font-light mb-4 w-full">
				<p className="text-[#666666] opacity-80 "> Connections</p>
				<span className="mr-0">
					<LeftCardArrowIcon />
				</span>
			</div>
			{/* GROUPS */}
			<div className="flex items-center justify-between text-sm font-light mb-4 w-full">
				<p className="text-[#666666] opacity-80 text-[#0A66C2]">
					{" "}
					Groups
				</p>
				<span className="mr-0">
					<LeftCardArrowIcon />
				</span>
			</div>
			{/* EVENTS */}
			<div className="flex items-center justify-between text-sm font-light mb-4 w-full">
				<p className="text-[#666666] opacity-80 text-[#0A66C2]">
					{" "}
					Events
				</p>
				<span className="mr-0">
					<PlusIcon />
				</span>
			</div>
			{/* PAGES */}
			<div className="flex items-center justify-between text-sm font-light mb-2 w-full border-b border-[#d3d3d3] pb-2">
				<p className="text-[#666666] opacity-80 text-[#0A66C2]">
					{" "}
					Pages
				</p>
				<span className="mr-0">
					<PlusIcon />
				</span>
			</div>
			<p className="mx-auto font-light text-[#666666] opacity-80">
				Discover more
			</p>
		</div>
	);
}

export default LeftSideCard2;
