import React from "react";

// ICONS
import { SearchIcon } from "../../../icons";

function SearchBar() {
	return (
		<form action="" className=" ">
			<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
				<input
					type="text"
					name="search"
					placeholder="Arama Yap"
					autocomplete="off"
					aria-label="Search talk"
					className="w-[16rem] focus:w-[25rem] pl-10 py-2 placeholder-[#666666] opacity-80 text-black font-light text-sm border-none bg-[#EEF3F8] focus:outline-0 transition-all duration-[1.5s] ease-linear"
				/>
				<SearchIcon />
			</div>
		</form>
	);
}

export default SearchBar;
