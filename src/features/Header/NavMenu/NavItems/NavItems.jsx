import React from "react";
// ICONS
import { HomeIcon } from "../../../../icons";

function NavItems({ navItemIcon, navItemText, Style }) {
	return (
		<a
			href="#"
			className="lg:inline-flex flex-col lg:w-auto w-full px-3 py-2 rounded text-[#666666] items-center justify-center  ml-3 hover:text-black hover:fill-black"
		>
			<span>{navItemIcon}</span>
			<span
				className="hover:text-black text-[12px] font-light"
				style={Style}
			>
				{navItemText}
			</span>
		</a>
	);
}

export default NavItems;
