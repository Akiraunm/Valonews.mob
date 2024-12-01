import axios from "axios";
import { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";
import allIcon from "../assets/all.svg";
import LoadingRow from "../components/LoadingRow";

function Menu() {

    const[categories, setCategories] = useState([]);
    const[isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        async function fetchCategories() {
            try{
                setIsLoading(true);
                const response =  await axios.get("https://d7369a219f896cd9.mokky.dev/category");
                setCategories(response.data);
            } catch(e){
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    },[]);
    return(
        <section className="mb">
            <div className="bt">
            <h1 className="title">Новости Valorant</h1>
                {isLoading ? (
                    <LoadingRow />
                ) : (
                    <div className="ct-list">
                        <Link to="/" className="ct-list_item">
                            <img src={allIcon} className="news_category_im" alt="menu" />
                            <strong className="category_name">Все новости</strong>
                        </Link>
                        {categories.map((category) =>(
                                <CategoryCard key={category.id} category={category} /> 
                        ))} 
                    </div>
                )}
            </div>
        </section>
    );
}

export default Menu;