
import { Link } from "react-router-dom";

function CategoryCard({category}){

    

    return(
        <Link to={`/category/post/${category.id}`} className="ct-list_item">
            <img src={category.imageUrl} className="news_category_im" alt="menu" />
            <strong className="category.name">{category.name}</strong>
        </Link>
    );
}

export default CategoryCard;