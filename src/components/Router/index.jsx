import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HOME, MENU, ORDER } from '../../routes';
import Menu from '../../containers/Menu';
import OrderPage from '../../containers/OrderPage';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={HOME}></Route>
                <Route path={MENU} element={<Menu />}></Route>
                <Route path={ORDER} element={<OrderPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;