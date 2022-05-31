import React from "react";
// MORALIS
import { useMoralis } from "react-moralis";

// COMPONENTS
import ActionComponent from "./ActionComponent";

// ICONS
import { LikeIcon, CommentIcon, ShareIcon, SendIcon } from "../../../icons";

function FeedsAction() {
	const { authenticate } = useMoralis();
	const LikeIcon = () => {
		return (
			<svg
				width="19"
				height="21"
				viewBox="0 0 19 21"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17.46 10L13.55 6.09C12.7815 5.32037 12.2028 4.38223 11.86 3.35L11.37 1.88C11.1861 1.33315 10.8353 0.857703 10.3672 0.520487C9.89904 0.183272 9.33697 0.00124748 8.76001 2.99063e-06C8.39888 -0.00131262 8.04102 0.0685162 7.70687 0.205503C7.37272 0.342489 7.06882 0.54395 6.81253 0.798383C6.55624 1.05282 6.35258 1.35524 6.21317 1.68838C6.07375 2.02153 6.00132 2.37887 6.00001 2.74V3.86C6.00224 4.8283 6.15749 5.79017 6.46001 6.71L6.89001 8H2.12001C1.55775 8 1.01852 8.22336 0.620946 8.62094C0.223369 9.01851 1.23382e-05 9.55774 1.23382e-05 10.12C0.00139258 10.4656 0.0856632 10.8058 0.245748 11.112C0.405833 11.4183 0.63706 11.6816 0.920012 11.88C0.6368 12.0734 0.405004 12.333 0.244697 12.6362C0.0843904 12.9393 0.000404559 13.277 1.23382e-05 13.62C-0.00793407 14.0425 0.109383 14.4579 0.337173 14.8138C0.564963 15.1697 0.893029 15.4503 1.28001 15.62C1.10026 15.9229 1.00367 16.2678 1.00001 16.62C0.999143 17.1621 1.20595 17.6839 1.57794 18.0782C1.94992 18.4725 2.45881 18.7093 3.00001 18.74V18.88C3.00001 19.4423 3.22337 19.9815 3.62095 20.3791C4.01852 20.7766 4.55775 21 5.12001 21H12.61C13.852 20.9989 15.0771 20.7114 16.19 20.16L16.5 20H19V10H17.46ZM17 18H16L15.27 18.37C14.4328 18.7816 13.5129 18.9971 12.58 19H5.72001C5.49687 19.0089 5.27717 18.9428 5.09594 18.8123C4.91471 18.6818 4.78237 18.4944 4.72001 18.28L4.47001 17.41L3.62001 17C3.42424 16.9202 3.25877 16.7805 3.14738 16.6008C3.03598 16.4212 2.98439 16.2108 3.00001 16L3.17001 15L2.41001 14.26C2.24466 14.0985 2.14036 13.8847 2.11483 13.655C2.08931 13.4253 2.14414 13.1938 2.27001 13L2.93001 11.91L2.20001 10.81C2.15824 10.7592 2.12712 10.7006 2.10849 10.6375C2.08986 10.5745 2.0841 10.5084 2.09157 10.443C2.09903 10.3777 2.11956 10.3146 2.15194 10.2574C2.18431 10.2001 2.22787 10.15 2.28001 10.11C2.37496 10.0309 2.49675 9.99154 2.62001 10H9.67001L8.36001 6.08C8.12114 5.36424 7.99958 4.61457 8.00001 3.86V2.75C8.00507 2.55269 8.08572 2.36485 8.22529 2.22528C8.36486 2.08571 8.5527 2.00506 8.75001 2C8.90682 2.00012 9.05964 2.04938 9.187 2.14086C9.31435 2.23235 9.40983 2.36144 9.46001 2.51L10 4C10.4315 5.31491 11.1604 6.51261 12.13 7.5L16.63 12H17V18Z"
					id="likeIcon"
					fill="#666666"
					fill-opacity="0.6"
				/>
			</svg>
		);
	};
	return (
		<div className="flex items-center flex-row p-[0px] md:p-[15px] font-[16px]">
			<button
				onClick={() => {
					console.log("clicked");
					const likeButton =
						document.querySelector("#likeButton");
					console.log(likeButton);
					const likeSvg = document.querySelector("#likeIcon");
					console.log(likeSvg);

					var callOne = true;

					function like() {
						likeSvg.setAttribute("fill", "blue");
						likeButton.style.color = "blue";
						authenticate();
					}
					function unLike() {
						likeSvg.setAttribute("fill", "#666666");
						likeButton.style.color = "#666666";
					}

					if (callOne) like();
					else unLike();
					callOne = !callOne;
				}}
				id="likeButton"
				className="flex items-center p-[10px] md:p-[15px] w-full text-[#666666] opacity-80 hover:bg-[#ececec]"
			>
				<div className="flex items-center flex-row mr-2 md:mr-4">
					<span className="mr-2">
						<LikeIcon />
					</span>
					<span>Like</span>
				</div>
			</button>
			<ActionComponent icon={<CommentIcon />} actionText={"Comment"} />
			<ActionComponent icon={<ShareIcon />} actionText={"Share"} />
			<ActionComponent icon={<SendIcon />} actionText={"Send"} />
		</div>
	);
}

export default FeedsAction;
