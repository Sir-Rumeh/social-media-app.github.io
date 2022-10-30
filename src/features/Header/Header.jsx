import React, { useEffect } from "react";
// JQUERY
// import $ from "jquery";s
// ICONS
import { Logo, SearchIcon, MenuIcon } from "../../icons";
import "./Header.css";
// COMPONENTS/FEEATURES
import SearchBar from "./SearchBar/SearchBar";
import NavMenu from "./NavMenu/NavMenu";
// MaANAGING STATE
import { useSelector, useDispatch } from "react-redux";
import { setSmallWidth, setLargeWidth, selectWidth } from "./headerSlice";

function Header() {
	const dispatch = useDispatch();
	const mobileWidthState = useSelector(selectWidth);
	const deviceWidth = document.documentElement.clientWidth;
	// console.log(deviceWidth);

	// CHECK DEVICE WIDTH
	function checkDeviceWidth() {
		if (deviceWidth < 600) {
			dispatch(setSmallWidth());
			// console.log(deviceWidth);
		} else {
			dispatch(setLargeWidth());
			// console.log(deviceWidth);
			console.log(mobileWidthState);
		}
	}

	useEffect(() => {
		checkDeviceWidth();
	}, [deviceWidth]);

	// TOGGLE NAVBAR ON MOBILE
	// $(document).ready(function () {
	// 	$(".nav-toggler").each(function (_, navToggler) {
	// 		var target = $(navToggler).data("target");
	// 		$(navToggler).on("click", function () {
	// 			$(target).animate({
	// 				height: "toggle",
	// 			});
	// 		});
	// 	});
	// });

	return (
		<nav className="flex items-center bg-white  p-1  lg:px-[175px] lg:pr-[100px] flex-wrap">
			<a href="#" className="p-2 lg:mr-0 inline-flex items-center">
				<Logo />
				<span className="text-xl text-black font-bold uppercase hidden lg:block ml-3 w-72">
					<SearchBar />
				</span>
				{/* <span className="text-xl text-black font-bold uppercase ml-3 w-72">
					{!mobileWidthState ? <SearchBar /> : ""}
				</span> */}
			</a>
			<button
				className="text-black hover:bg-gray-400 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
				data-target="#navigation"
			>
				<i className="material-icons">
					<MenuIcon />
				</i>
			</button>
			<NavMenu />
		</nav>
	);
}

export default Header;
