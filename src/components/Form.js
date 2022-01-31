import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';


const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("avengers");

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=89360935952806bb62e1575a82c32b69&query=${search}&language=fr-FR`).then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input type="text" placeholder="Entre le titre d'un film" id="search-input" onChange={(e) => setSearch(e.target.value)} />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
            <div className="btn-sort" id="goodToBad">Top<span>→</span></div>
            <div className="btn-sort" id="badToGood">Flop<span>→</span></div>
        </div>
      </div>
      <div className="result">
        {moviesData.slice(0,12)
        .map((movie) => (
          <Card key={movie.id} movie={movie}/>
          ))}
      </div>
    </div>
  );
};

export default Form;
