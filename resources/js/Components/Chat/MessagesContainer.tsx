interface User {
	name: string;
	message: string;
}

interface MessagesContainerProps {
	user?: User;
}

export function OurMessage({ user }: { user: User }) {
	const { name, message } = user || {};
	return (
		<>
			<div className="flex self-end flex-row-reverse gap-3">
				<img
					className="w-10 h-10 rounded-full object-cover aspect-square border-2"
					src={`https://api.multiavatar.com/${name != undefined ? name : "anonym"}.png`}
					alt="person"
				/>
				<div className="bg-indigo-500 text-white px-4 py-2 rounded-lg mb-2 ml-32">
					{message}
				</div>
			</div>
		</>
	);
}

export function TheirMessage({ user }: { user: User }) {
	const { name, message } = user;
	return (
		<>
			<div className="flex self-start flex-row gap-3">
				<img
					className="w-10 h-10 rounded-full object-cover aspect-square border-2"
					src={`https://api.multiavatar.com/${name != undefined ? name : "anonym"}.png`}
					alt="user"
				/>
				<div className="bg-gray-300 px-4 py-2 rounded-lg mb-2 mr-32">
					{message}
				</div>
			</div>
		</>
	);
}
