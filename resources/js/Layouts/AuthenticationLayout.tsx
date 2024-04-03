export default function AuthenticationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="w-full min-h-screen bg-gray-100">
				<div className="flex w-full h-screen justify-center items-center">
					{children}
				</div>
			</div>
		</>
	);
}
