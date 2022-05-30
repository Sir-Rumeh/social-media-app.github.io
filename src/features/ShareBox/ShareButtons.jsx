import React from "react";

// ICONS
import { PhotoIcon, VideoIcon, EventIcon, ArticleIcon } from "../../icons";

function ShareButtons() {
	return (
		<div className="flex items-center justify-center mx-auto px-0 w-full">
			<button className="flex items-center py-2 px-10   hover:bg-[#ececec]">
				<span className="mr-2">
					<PhotoIcon />
				</span>
				<span className="text-[#666666] opacity-80">Photo</span>
			</button>
			<button className="flex items-center py-2 px-10 text-[#D3D3D3]  hover:bg-[#ececec]">
				<span className="mr-2">
					<VideoIcon />
				</span>
				<span className="text-[#666666] opacity-80">Video</span>
			</button>
			<button className="flex items-center py-2 px-12 text-[#D3D3D3]  hover:bg-[#ececec]">
				<span className="mr-2">
					<EventIcon />
				</span>
				<span className="text-[#666666] opacity-80">Event</span>
			</button>
			<button className="flex items-center py-2 px-0 pr-4 text-[#D3D3D3]  hover:bg-[#ececec]">
				<span className="mr-2">
					<ArticleIcon />
				</span>
				<span className="text-[#666666] opacity-80">
					Write Article
				</span>
			</button>
		</div>
	);
}

export default ShareButtons;
