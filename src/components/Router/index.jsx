import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HOME, MENU, NOTIFICATIONS, ORDER, ORDER_STATUS } from '../../routes';
import Menu from '../../containers/Menu';
import OrderPage from '../../containers/OrderPage';
import OrderStatusPage from '../../containers/OrderStatusPage';
import NotificationPage from '../../containers/NotificationPage';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={HOME} />
                <Route path={MENU} element={<Menu />} />
                <Route path={ORDER} element={<OrderPage />} />
                <Route path={ORDER_STATUS} element={<OrderStatusPage />} />
                <Route path={NOTIFICATIONS} element={<NotificationPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;