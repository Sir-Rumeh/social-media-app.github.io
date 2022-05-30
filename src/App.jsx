import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";

// COMPONENTS
import Header from "./features/Header/Header";
import ShareBox from "./features/ShareBox/ShareBox";
import MobileHeader from "./features/MobileHeader/MobileHeader";
import TalkAbout from "./features/MobileHeader/TalkAbout";
import FeedsCard from "./features/FeedsCard/FeedsCard";

// ICONS
import { ArrowDownIcon } from "./icons";
function App() {
	return (
		<div className="App bg-[#F3F2EF] min-h-screen ">
			<Header />
			<div className="">
				<div className="px-[1rem] lg:px-[31.2rem] ">
					<ShareBox />
					<div className="hidden md:flex items-center w-full mb-3">
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
					<FeedsCard />
					<FeedsCard />
					<FeedsCard />
				</div>
			</div>
		</div>
	);
}

export default App;
