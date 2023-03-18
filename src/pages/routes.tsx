import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DetailsPoke from './DetailsPoke';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path= '/' element={<Home />}/>
				<Route path= '/:name' element={ <DetailsPoke/> }/>
			</Routes>
		</BrowserRouter>
	);
}
