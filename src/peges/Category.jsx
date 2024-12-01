import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error from "../components/Error";
import LoadingCard from "../components/LoadingCard";
import { Link } from "react-router-dom";

function Category() {

    const {id} = useParams();
    const [category, setCategory] = useState({});
    const[posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(false);
    const[isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://d7369a219f896cd9.mokky.dev/category/${id}`);
                setCategory(response.data);
            }catch(e){
                console.log(e);
            }
        }
        fetchCategory()
        async function fetchPosts() {
            try{
                setIsLoading(true);
                const response =  await axios.get("https://d7369a219f896cd9.mokky.dev/post");
                setPosts(response.data);
            } catch(e){
                setIsError(true);
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    },[id]);
    
    if (isError) {
        return <Error />;
    }

    return (
        <main>
            <section className="mb">
                <div className="bt">
                {isLoading ? (
                    <LoadingCard/>
                ) : (
                    <>
                    <h1 className="title">{category.name}</h1>
                        <div className="ct-list">
                            {posts.map((post) =>(
                                <>
                                {post.category === category.name ? (
                                        <article className="card">
                                            <h3 className="card__title">{post.title}</h3>
                                            <h4 className="card__category">{post.category}</h4>
                                            <strong className="card__date">{post.date}</strong>
                                            <Link to={`/post/${post.id}`} className="button primary">Читать</Link>
                                        </article> 
                                ) : null}
                                </>
                            ))}     
                        </div>
                    </>
                )}  
                </div>
            </section>
        </main>
    )
}

export default Category;