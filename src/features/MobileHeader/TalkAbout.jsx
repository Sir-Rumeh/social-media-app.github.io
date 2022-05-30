import React from "react";
import { EditIcon } from "../../icons";

function TalkAbout() {
	return (
		<div className=" p-4 px-6">
			<div className="md:hidden flex  items-center align-center justify-between bg-white p-4 ">
				<EditIcon />
				<p className="text-xl">What do you want to talk about?</p>
			</div>
		</div>
	);
}

export default TalkAbout;
