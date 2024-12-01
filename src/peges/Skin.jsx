import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function  Skin() {
    const {id} = useParams();
    const [post, setPosts] = useState({});

    useEffect(() =>{
        async function fetchPosts() {
            try {
                const response = await axios.get(`https://d7369a219f896cd9.mokky.dev/post/${id}`);
                setPosts(response.data);
            }catch(e){
                console.log(e);
            }
        }
        fetchPosts()
    },[id])
   
    return(
        <section className="mb">
            <div className="bt">
                <article> 
                    <h1 className="title">{post.title}</h1>
                    <img src={post.imageUrl} className="news_im" alt="Pheniks" />
                    <p className="text">
                        {post.description}
                    </p>
                    <h4 className="card__category primary-invers">{post.category}</h4>
                </article>
            </div>
        </section>
    );
}

export default Skin;