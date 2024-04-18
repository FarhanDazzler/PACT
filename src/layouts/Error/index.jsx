export default function ErrorLayout(props) {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<h1 className="text-4xl font-bold mb-6 text-white">404 Not Found!</h1>
			{/* <p className="text-lg text-gray-800 mb-8">{errorMessage}</p> */}
			<button onClick={() => window.history.back()} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
				Go Back
			</button>
		</div>
	);
}
