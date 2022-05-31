import React from "react";

// COMPONENTS
import ActionComponent from "./ActionComponent";

// ICONS
import { LikeIcon, CommentIcon, ShareIcon, SendIcon } from "../../../icons";

function FeedsAction() {
	return (
		<div className="flex items-center flex-row p-[0px] md:p-[15px] font-[16px]">
			<ActionComponent icon={<LikeIcon />} actionText={"Like"} />
			<ActionComponent icon={<CommentIcon />} actionText={"Comment"} />
			<ActionComponent icon={<ShareIcon />} actionText={"Share"} />
			<ActionComponent icon={<SendIcon />} actionText={"Send"} />
		</div>
	);
}

export default FeedsAction;
