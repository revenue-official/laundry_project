import DefaultLayouts from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
import ListUser from "@/Components/Chat/ListUser";
import { useState } from "react";
import { usePage } from "@inertiajs/react";
import { OurMessage, TheirMessage } from "@/Components/Chat/MessagesContainer";
import { ChatContext } from "@/Contexts/ChatContext";

interface MessagesProps {
	id?: number;
	user_id?: number;
	name?: string;
	message?: string;
	created_at?: string;
	updated_at?: string;
}

export default function Chat() {
	const { props } = usePage();

	const messageData: MessagesProps = props.messages;

	const YourID: number = 1;

	const [getMessageData, setMessageData] = useState(messageData);

	// handle search bar
	const handleSearch = () => {
		const inputElement = document.getElementById(
			"userSearch",
		) as HTMLInputElement;
		const value = inputElement.value;
		if (value) {
			setMessageData(
				messageData.filter((user: any) =>
					user.name.toLowerCase().includes(value.toLowerCase()),
				),
			);
		} else {
			setMessageData(messageData);
		}
	};

	// shorting message
	const sortedMessageData = [...messageData].sort((a, b) => {
		return new Date(a.created_at) - new Date(b.created_at);
	});

	return (
		<ChatContext.Provider value={messageData}>
			<Head title="Chat" />
			<div className="flex h-full gap-4">
				<div className="flex md:w-[25rem] bg-gray-200 rounded-l-lg shadow-md overflow-hidden">
					<div className="w-full bg-gray-200 px-2 py-3">
						<div className="w-full h-fit">
							<span className="flex items-center font-poppins gap-2 md:ml-4 mb-4">
								<h2 className="font-semibold text-md md:text-lg text-indigo-500">
									Friends
								</h2>
								<div className="w-6 h-6 rotate-45 text-center font-semibold text-white bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full">
									{messageData.length}
								</div>
							</span>
							<input
								id="userSearch"
								className="text-xs md:text-sm w-full bg-white border-none rounded-lg px-4 shadow-sm"
								type="text"
								placeholder="Search Friends"
								onChange={handleSearch}
							/>
							<span className="flex w-full justify-center font-poppins text-[10px] text-gray-600 tracking-wide mt-2 gap-2">
								Online
								<div className="text-[10px] font-semibold text-gray-500">
									{
										messageData.filter(
											(user) => user.status === "online",
										).length
									}
								</div>
							</span>
						</div>
						{getMessageData.map((user, index) => (
							<ListUser key={index} user={user} />
						))}
					</div>
				</div>
				<div className="flex w-full h-full rounded-lg overflow-hidden">
					<div className="w-full bg-gray-200">
						<div className="flex w-full h-10 md:h-14 bg-gradient-to-r from-indigo-400 to-pink-300 shadow-sm">
							<div className="flex justify-center items-center px-4 gap-3">
								<img
									className="w-8 md:w-10 rounded-full object-cover aspect-square border-2"
									src="https://api.multiavatar.com/Starcrasher.png"
									alt="Error"
								/>
								<span className="text-xs md:text-lg text-white font-poppins tracking-wider">
									Holly Parker
								</span>
							</div>
						</div>
						<div className="w-full h-full">
							<div className="flex flex-col md:m-5">
								{sortedMessageData.map((user, index) =>
									user.id === YourID ? (
										<OurMessage key={index} user={user} />
									) : (
										<TheirMessage key={index} user={user} />
									),
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</ChatContext.Provider>
	);
}

Chat.layout = (page: React.ReactNode) => <DefaultLayouts children={page} />;
