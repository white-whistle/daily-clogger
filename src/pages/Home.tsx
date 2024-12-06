import Posts from "../components/Posts";

function Home() {
	return (
		<div className="p-4">
			<section className="flex gap-2 p-6 items-center flex-1">
				<hr className="flex-1" />
				<div className="flex flex-col gap-2 p-6 items-center">
					<h1 className="text-5xl" style={{ fontFamily: "CanterburyRegular" }}>
						The Daily Clogger
					</h1>
					<h2>it is a clogger's world</h2>
				</div>
				<hr className="flex-1" />
			</section>
			<Posts />
		</div>
	);
}

export default Home;
