import NewsCard from "../components/NewsCard";
import axios from "axios";
import { useState, useEffect } from "react";
import Error from "../components/Error";
import LoadingCard from "../components/LoadingCard";

function Main() {

    const[posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(false);
    const[isLoading, setIsLoading] = useState(false);
    useEffect(() =>{
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
    }, []);

    if (isError) {
        return <Error />;
    }
    return(
    <main>
        <section className="mb">
            <div className="bt">
                {isLoading ? (
                    <LoadingCard/>
                ) : (
                    <>
                    <h1 className="title">Новости Валорант</h1>
                        <div className="ct-list">
                            {posts.map((post) =>(
                                <NewsCard key={post.id} post={post} /> 
                            ))}     
                        </div>
                    </>
                )}
                
            </div>
        </section>
    </main>);
}
export default Main;