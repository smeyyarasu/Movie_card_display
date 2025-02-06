import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../CSS/Home.css';

function Home(){
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1999"},
        {id: 3, title: "Matrix", release_date: "1998"},
        { id: 4, title: "Inception", release_date: "2010" },
        { id: 5, title: "The Dark Knight", release_date: "2008" },
        { id: 6, title: "Interstellar", release_date: "2014" },
        { id: 7, title: "Avatar", release_date: "2009" },
        { id: 8, title: "The Avengers", release_date: "2012" },
        { id: 9, title: "Gladiator", release_date: "2000" },
        { id: 10, title: "Titanic", release_date: "1997" },
        { id: 11, title: "Pulp Fiction", release_date: "1994" },
        { id: 12, title: "Forrest Gump", release_date: "1994" },
        { id: 13, title: "The Shawshank Redemption", release_date: "1994" }
    ];
    const [searchQuery, setsearchQuery] = useState("");
    const handleSearch = () =>{
        alert(searchQuery)
        setsearchQuery("");
    }

    return(
        <div className="Home">
            <form className="search-form" onSubmit={handleSearch}>
                <input className="search-input" type="text" placeholder="Search" value={searchQuery} onChange={(e) => setsearchQuery(e.target.value)}/>
                <button className="search-btn" type="submit">Search</button>
            </form>
            <div className="movies-grid">
            {movies.map((movie) => (movie.title.toLowerCase().startsWith(searchQuery) && 
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
        </div>
    )
}

export default Home