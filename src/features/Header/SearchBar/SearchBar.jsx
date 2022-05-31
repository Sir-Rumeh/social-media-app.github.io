import React from "react";

// ICONS
import { SearchIcon } from "../../../icons";

function SearchBar() {
	return (
		<form action="" className="w-[280px] max-w-md ">
			<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
				<input
					type="text"
					name="search"
					placeholder="Arama Yap"
					autocomplete="off"
					aria-label="Search talk"
					className="w-full pl-10 py-2 placeholder-[#666666] opacity-80 text-black font-light text-sm border-none focus:ring-gray-500 focus:ring-2 bg-[#EEF3F8]"
				/>
				<SearchIcon />
			</div>
		</form>
	);
}

export default SearchBar;
