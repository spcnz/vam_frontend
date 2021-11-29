import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HOME, MENU, ORDER } from '../../routes';
import Menu from '../../containers/Menu';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={HOME}></Route>
                <Route path={MENU} element={<Menu />}></Route>
                <Route path={ORDER}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;