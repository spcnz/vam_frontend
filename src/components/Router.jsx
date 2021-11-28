import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HOME, MENU, ORDER } from '../routes';


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={HOME}></Route>
                <Route path={MENU}></Route>
                <Route path={ORDER}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;