//API PART NEED TO BE DONE
const API_KEY = "";//WRITE API KEY WHEN THE WEBSITE RESPONDS
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

//THE BELOW IS AN ALTER SEARCH METHOD USING API

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
// USEEFFECT WILL BE USED IN HOME PAGE TO LOAD THE MOVIES ONLY ONCE AND TO AVOID RERENDERING OR RERUNNING OF THE COMPONENTS
// USEEFFECT IS USED TO RUN CERTAIN FUNCTION WHEN SOME CHANGES ARE MADE TO THE LIST   // useeffect(() => {this is the function},[list where the changes are made])