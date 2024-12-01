import { Link } from "react-router-dom";

function NewsCard({post}) {
    return(
        <article class="card">
            <h3 class="card__title">{post.title}</h3>
            <h4 class="card__category">{post.category}</h4>
            <strong class="card__date">{post.date}</strong>
            <Link to={`/post/${post.id}`} class="button primary">Читать</Link>
        </article>  
    );
}

export default NewsCard;