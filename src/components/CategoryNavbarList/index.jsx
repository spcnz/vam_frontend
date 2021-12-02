import { Link } from 'react-scroll'
import "../../../src/assets/css/CategoryNavbarList.css";

const CategoryNavbarList = props => {
    let list = props.list? props.list : []

    return(
        <div className="overflowNavbar" style={{whiteSpace: 'nowrap', overflowX: 'scroll'}}>
            {list.map((category, idx) => (
                <Link key={idx} to={`${category.id}`} spy={true} smooth={true}>
                    <span className="categoryNavbarName">
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default CategoryNavbarList;