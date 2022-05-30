import React from "react";

// ICONS
import { SearchIcon } from "../../../icons";

function SearchBar() {
	return (
		<form action="" className="w-[280px] max-w-md">
			<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
				<input
					type="text"
					name="search"
					placeholder="Search talk"
					autocomplete="off"
					aria-label="Search talk"
					className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black border-none focus:ring-gray-500 focus:ring-2"
				/>
				<SearchIcon />
			</div>
		</form>
	);
}

export default SearchBar;
