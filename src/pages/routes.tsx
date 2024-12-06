import { type ComponentType, Fragment } from "react";
import Home from "./Home";

export type Route = {
	path: string;
	id: string;

	component: ComponentType;
};

export const ROUTES = {
	home: { path: "/", id: "home", component: Home },
	leaderboard: {
		path: "/leaderboard",
		id: "leaderboard",
		component: () => <Fragment />,
	},
	about: { path: "/about", id: "about", component: () => <Fragment /> },
} satisfies Record<string, Route>;
