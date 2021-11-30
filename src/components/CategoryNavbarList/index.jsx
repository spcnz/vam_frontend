import { Link } from 'react-scroll'

const CategoryNavbarList = props => {
    let list = props.list? props.list : []

    return(
        <div style={{whiteSpace: 'nowrap', overflowX: 'auto'}}>
            {list.map((category, idx) => (
                <Link key={idx} to={`${category.id}`} spy={true} smooth={true}>
                    <span style={{ margin: '10px'}} >
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default CategoryNavbarList;