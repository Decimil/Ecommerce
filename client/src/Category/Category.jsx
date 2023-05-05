import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch"
import Products from "../Products/Products";
import Product from "../Products/Product/Product";
import "./Category.scss"

const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `/api/items?populate=*&[filters][meanCategories][id]=${id}`
    );
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        data?.data?.[0]?.attributes?.meanCategories?.data
                            ?.attributes?.name
                    }
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;
