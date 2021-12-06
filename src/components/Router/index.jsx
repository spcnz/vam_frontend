import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HOME, MENU, ORDER, ORDER_STATUS } from '../../routes';
import Menu from '../../containers/Menu';
import OrderPage from '../../containers/OrderPage';
import OrderStatusPage from '../../containers/OrderStatusPage';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={HOME}></Route>
                <Route path={MENU} element={<Menu />}></Route>
                <Route path={ORDER} element={<OrderPage />}></Route>
                <Route path={ORDER_STATUS} element={<OrderStatusPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;