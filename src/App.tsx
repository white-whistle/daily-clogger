import { Route, Router, Switch } from "wouter";
import { END_DATE, START_DATE } from "./consts";
import { formatDate } from "./util/formatDate";
import { useHashLocation } from "wouter/use-hash-location";
import { ROUTES } from "./pages/routes";
import pooBgImg from "./assets/poobg.png";

function App() {
	return (
		<Router hook={useHashLocation}>
			{/* bg */}
			<div
				className="fixed inset-0 bg-slate-400 z-[-1]"
				style={{
					backgroundImage: `url(${pooBgImg})`,
					backgroundSize: "400px",
					// opacity: 0.5,
					filter: "contrast(0.2)",
				}}
			/>

			{/* <main className="w-full h-fit min-h-full flex flex-col max-w-[1000px] bg-slate-100"> */}
			<main className="w-full h-fit min-h-full overflow-visible flex flex-col max-w-[1000px] bg-slate-100 shadow-xl shadow-black">
				<header className="flex justify-between p-4 items-center bg-slate-500 sticky top-0 z-10">
					<span className="font-bold text-white">🚽 Dailyclogger.life</span>
					{/* <nav className="flex gap-4">
						<Link to={ROUTES.home.path}>home</Link>
						<Link to={ROUTES.leaderboard.path}>leaderboard</Link>
						<Link to={ROUTES.about.path}>about</Link>
					</nav> */}
				</header>

				<section className="flex-1">
					<Switch>
						{Array.from(Object.values(ROUTES)).map((route) => {
							return (
								<Route
									component={route.component}
									key={route.id}
									path={route.path}
								/>
							);
						})}
					</Switch>
				</section>

				<footer className="flex justify-center p-4 items-center">
					© Dailyclogger.life {formatDate(START_DATE)} - {formatDate(END_DATE)}
				</footer>
			</main>
		</Router>
	);
}

export default App;
