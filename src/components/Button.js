export function Button({ onClick }) {
	return (
		<button
			className="inline-flex items-center rounded-md border border-violet-300 bg-violet-500 
							px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm 
							hover:bg-violet-300 hover:text-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
			onClick={onClick}
		>
			Get Answer
		</button>
	);
}