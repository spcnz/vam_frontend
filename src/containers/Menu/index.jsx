import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Row} from 'react-bootstrap';

import { getMenu } from '../../store/actions/MenuActions';
import { Header, Image } from '../../styles/MenuStyles';
import CategoryNavbarList from '../../components/CategoryNavbarList';
import useDebounce from '../../hooks/useDebounce';
import CategoryList from '../../components/CategoryList';
import ErrorAlert from '../../components/ErrorAlert';
import OrderAlert from '../OrderAlert';
import "../../../src/assets/css/Menu.css";

const Menu = () => {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.info || {});
    const total = useSelector(state => state.order?.total);
    const error = useSelector(state => state.menu.error);
    const [searchActive, setSearchActive] = useState(false);
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
                    const products = category.products.filter(el => el.name.toLowerCase().startsWith(debouncedSearchTerm.toLowerCase()))
                    if (products.length > 0)
                        acc.push({...category, products: products})
                    return acc;
                }, [])
                setData(result);
            } else {
                setData(menu.categories)
            }
        },[debouncedSearchTerm, menu.categories]);

    return(
        <div>
            <Container>
                <Row>
                    <Header className="header">
                        <Image src={menu.image} className="headerImage" />
                        <div 
                            className="col searchBar" 
                            onFocus={() => setSearchActive(true)} 
                            onBlur={() => setSearchActive(false)}
                        >
                            <input type="text" className="form-control search" placeholder="Traži" onChange={e => setSearchTerm(e.target.value)}/>
                            <i className="col-2 glyphicon glyphicon-search searchIcon"/>
                        </div>
                        <h1 className="objectName">{menu.objectName}</h1>
                    </Header>
                </Row>
            </Container>
            <Container className="menuContent">
                <CategoryNavbarList list={menu.categories} />
                <Row>
                    <CategoryList categories={debouncedSearchTerm? data: menu.categories} />
                    {error && <ErrorAlert 
                        errorTitle={"Sorry something went wrong!"} 
                        errorMsg={"Can't load data right now. Please try again later."}
                    />}
                </Row>
            </Container>
            {total && !searchActive && <OrderAlert className="orderAlert"/>}
        </div>
    )
}

export default Menu;