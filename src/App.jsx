import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";

// CSS
import "./App.css";

// COMPONENTS
import Header from "./features/Header/Header";
import ShareBox from "./features/ShareBox/ShareBox";
import MobileHeader from "./features/MobileHeader/MobileHeader";
import TalkAbout from "./features/MobileHeader/TalkAbout";
import FeedsCard from "./features/FeedsCard/FeedsCard";
import FeedsCard2 from "./features/FeedsCard/FeedsCard2";
import FeedsCard3 from "./features/FeedsCard/FeedsCard3";
import LeftSideCard1 from "./features/LeftSideCard/LeftSideCard1";
import LeftSideCard2 from "./features/LeftSideCard/LeftSideCard2";

// ICONS
import { ArrowDownIcon } from "./icons";

// IMAGE
import ProfilePicture from "./images/CardProfilePicture.png";
import FeedImage1 from "./images/FeedImage1.png";

function App() {
	return (
		<div className="App bg-[#F3F2EF] min-h-screen ">
			<Header />
			<div className="">
				<div className="px-[1rem] lg:px-[31.2rem] share-box-container">
					<ShareBox />
					<div className="hidden md:flex items-center w-full sort-by">
						<span className="border-t-[1px] border-[#d3d3d3] w-[85%] h-[1px]"></span>
						<span className="ml-auto text-sm flex items-center">
							<small className="mr-1">Sort By: </small>

							<span className="flex items-center">
								<small>Top </small>
								<span>
									<ArrowDownIcon />
								</span>
							</span>
						</span>
					</div>
				</div>
				<MobileHeader />
				<TalkAbout />
				<div className=" lg:px-[31.2rem] -mt-2 ">
					<FeedsCard />
					<FeedsCard2 />
					<FeedsCard3 />
					<LeftSideCard1 />
					<LeftSideCard2 />
				</div>
			</div>
		</div>
	);
}

export default App;
