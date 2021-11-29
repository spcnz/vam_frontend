import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dropdown from 'react-bootstrap/Dropdown';

import { getMenu } from '../store/actions/MenuActions';
import { Header, IconInside, Image, SearchBar, SearchInput } from '../styles/MenuStyles';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

const Menu = () => {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.info ? state.menu.info : {});
    const [category, setCategory] = useState(null);
    const [categoryMap, setCategoryMap] = useState({})
    console.log("============== RENDER ================")

    useEffect(() => {
        dispatch(getMenu())
    },[dispatch])

    useEffect( () => {
        if (menu.categories) {
            const map =  menu.categories.reduce((acc, category) => {
                acc[category.id] = category;
                return acc;
            }, {})
            setCategoryMap(map);
        } 
    }, [menu])

    return(
        <div>
            <Header>
                <Image src={menu.image} />
                <SearchBar>
                    <SearchInput type="text" className="form-control" placeholder="" />
                    <IconInside className="glyphicon glyphicon-search" />
                 </SearchBar>
                 <h1>{menu.objectName}</h1>
            </Header>
            <div>
                <CategoryList list={menu.categories} setCategory={setCategory} />
                <Dropdown.Divider style={{ margin: '10px'}} />
                {category && <ProductList data={menu.categories[category].products} />}
            </div>
        </div>
    )
}


export default Menu;

