import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMenu } from '../store/actions/MenuActions';


const Menu = () => {
    const dispatch = useDispatch();
    const info = useSelector(state => state.menu.info);

    useEffect(() => {
        dispatch(getMenu())
    },[dispatch])

    console.log(info)

    return(
        <div>
            Click me!
        </div>
    )
}


export default Menu;