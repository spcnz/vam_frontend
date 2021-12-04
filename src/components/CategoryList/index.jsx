import ProductList from "../ProductList";
import { Container, Row } from "react-bootstrap";
import "../../../src/assets/css/CategoryList.css";

const CategoryList = ({ categories }) => {
    console.log('==== RENDER CATEGORY LIST COMPONENT =======')

    return (
        <div>
            {categories.map(cat => (
                <div key={cat.id} id={cat.id}>
                    <h1 className="categoryName">{cat.name}</h1>
                    <ProductList data={cat.products}/>
                </div>
            ))}
        </div>
    )
}

export default CategoryList;