import type { ComponentProps } from "react";
import pooEmptyImg from "../assets/poo_empty.png";
import pooFilledImg from "../assets/poo_filled.png";

function Rating({ value, ...rest }: { value: number } & ComponentProps<"div">) {
	return (
		<div
			{...rest}
			className="text-yellow-600 font-bold inline-block w-[100px] h-[20px] relative align-text-bottom"
		>
			{/* track */}
			<div
				className="bg-repeat-x w-full h-full top-0 left-0 absolute"
				style={{
					backgroundImage: `url('${pooEmptyImg}')`,
					backgroundSize: "20px",
					imageRendering: "pixelated",
				}}
			/>

			{/* bar */}
			<div
				className="bg-repeat-x h-full top-0 left-0 absolute"
				style={{
					backgroundImage: `url('${pooFilledImg}')`,
					backgroundSize: "20px",
					imageRendering: "pixelated",
					width: `${(value / 5) * 100}%`,
				}}
			/>
		</div>
	);
}

export default Rating;
