import Button from "react-bootstrap/Button";

const CategoryList = props => {
    let list = props.list? props.list : []

    return(
        <div style={{whiteSpace: 'nowrap', overflowX: 'auto'}}>
            {list.map((category, idx) => (
                <Button variant="light" onClick={() => props.setCategory(category.id)}>
                    <span key={idx} style={{ margin: '10px'}} o>
                        {category.name}
                    </span>
                </Button>
            ))}
        </div>
    )
}

export default CategoryList;