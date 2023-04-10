import { GlobalStyle } from "./styles/globalStyles";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Router />
		</BrowserRouter>
	);
};

export default App;
