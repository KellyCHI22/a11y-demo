import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import More from "./components/More";
import Follow from "./components/Follow";
import Heading from "./components/Heading";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Home />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/more" element={<More />} />
			<Route path="/follow" element={<Follow />} />
			<Route path="/heading" element={<Heading />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
