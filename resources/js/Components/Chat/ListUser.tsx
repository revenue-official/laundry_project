interface ListUserProps {
	name?: string;
	message?: string;
	status?: string;
}

export default function ListUser({ user }: { user: ListUserProps }) {
	const { name, message, status } = user;
	const getStatus = () => {
		const statusColor = {
			online: "bg-green-400",
			offline: "bg-red-500",
		};
		return statusColor[status as keyof typeof statusColor];
	};

	return (
		<div className="flex items-center h-16 bg-white mt-2 rounded-md overflow-hidden">
			<div className="flex flex-col md:flex-row w-full items-center md:gap-3 px-4 py-2">
				<img
					className="w-10 h-10 rounded-full object-cover aspect-square border-2"
					src={`https://api.multiavatar.com/${name}.png`}
					alt="Error"
				/>
				<div className="flex flex-col">
					<div className="flex items-center gap-2">
						<span className="whitespace-nowrap text-ellipsis text-center text-xs md:text-sm text-black font-poppins">
							{name}
						</span>
						<span
							className={`hidden md:block w-2 h-2 ${getStatus()} rounded-full`}
						></span>
					</div>
					<p className="hidden md:flex text-xs text-gray-500 line-clamp-2 text-ellipsis">
						{message}
					</p>
				</div>
			</div>
		</div>
	);
}
