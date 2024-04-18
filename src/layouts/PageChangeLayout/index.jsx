import { AiOutlineLoading } from "react-icons/ai";

export default function PageChangeLayout() {
	return (
		<div className="bg-cover fixed z-100 w-full h-full top-0 left-0">
			<div className="top-0 left-0 w-full h-full block z-50 absolute bg-gray-100 bg-opacity-50"></div>
			<div className="my-60 mx-auto max-w-sm text-center relative z-50 top-0">
				<div className="block mb-4">
					<AiOutlineLoading className="animate-spin mx-auto text-9xl" />
				</div>
			</div>
		</div>
	);
}
