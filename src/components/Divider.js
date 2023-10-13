export function Divider() {
	return (
		<div className="relative">
			<div className="absolute inset-0 flex items-center" aria-hidden="true">
				<div className="w-full border-t border-gray-300"></div>
			</div>
			<div className="relative flex justify-start">
				<span className="px-2 py-1 bg-zinc-200 pr-3 text-md font-medium text-gray-700 rounded-sm">
					GPT Response
				</span>
			</div>
		</div>
	);
}