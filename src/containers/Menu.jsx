import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dropdown from 'react-bootstrap/Dropdown';

import { getMenu } from '../store/actions/MenuActions';
import { Header, IconInside, Image, SearchBar, SearchInput } from '../styles/MenuStyles';
import CategoryNavbarList from '../components/CategoryNavbarList';
import useDebounce from '../hooks/useDebounce';
import CategoryList from '../components/CategoryList';


const Menu = () => {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.info ? state.menu.info : {});
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState(menu.categories);

    useEffect(() => {
        dispatch(getMenu())
    },[dispatch])

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            let result = [];
            if (debouncedSearchTerm) {
                result = menu.categories.reduce((acc, category) => {
                    const products = category.products.filter(el => el.name.startsWith(debouncedSearchTerm))
                    if (products.length > 0)
                        acc.push({...category, products: products})
                    return acc;
                }, [])
                setData(result);
            } else {
                setData(menu.categories)
            }
        },[debouncedSearchTerm]);

    return(
        <div>
            <Header>
                <Image src={menu.image} />
                <SearchBar>
                    <SearchInput type="text" className="form-control" placeholder="" onChange={e => setSearchTerm(e.target.value)}/>
                    <IconInside className="glyphicon glyphicon-search" />
                 </SearchBar>
                 <h1>{menu.objectName}</h1>
            </Header>
            <div>
                <CategoryNavbarList list={menu.categories} />
                <Dropdown.Divider style={{ margin: '10px'}} />
                <CategoryList categories={debouncedSearchTerm? data: menu.categories} />
            </div>
        </div>
    )
}


export default Menu;

