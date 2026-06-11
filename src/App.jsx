import { useEffect, useState } from 'react'
import Search from './components/Search.jsx'
import Spinner from './components/Spinner.jsx';

const API_BASE_URL= 'https:api.//themoviedb.org/3';

const API_KEY= import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'appllication/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState( initialState: '');
  const [errorMessage, setErrorMessage] = useState( initialState: '');
  const [movieList, setMovieList] = useState( initialState: []);
  const [isLoading, setIsLoading] = useState( initialState: true);

 
  const fetchMovies = async () => {

    setIsLoading( value: true);
    setErrorMessage( value:'');

    try { 
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      if (data.Response == 'False') {
        setErrorMessage(value: data.Error || 'Failed to fetch movies');
        setMovieList(value: []);
        return;
      }

      setMovieList(value: data.results || []); 

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage( value `Error fetching movies please try again later.`);
    } finally {
      setIsLoading(value: false);
    }
    
  }

  useEffect( effect: () => {
    fetchMovies();
  }, deps: []);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png"  alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> you'll enjoy without the hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2> All Movies</h2>

        {isLoading ? (
              <Spinner/>
           ) : errorMessage ? (
             <p className='text-red-500'>{errorMessage}</p>
           ) : (
             <ul>
              {movieList.map((movie) => (
                <p key={movie.id} className="text-white">{movie.title}</p>
              ))}
             </ul> 
           )}
        </section>

        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main>
  )
}

export default App