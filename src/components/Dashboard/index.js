import React, { useEffect, useState } from "react";
import { GetMovies, GetMoviesGenres, movieSearch } from "../../middleware";
import MovieCard from "../MovieCard";
import './style.css';
import { getFormattedMovieData } from "../../utils";
import Header from "../Header";
import Pagination from "../Pagination";

const Dashboard = () => {
  const [movies, setMovies] = useState();
  const [movieGenres, setMovieGenres] = useState();
  const [searchTerm, setSearchTerm] = useState('')
  const [mappedMovieData, setMappedMovieData] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [totalCount, setTotalCount] = useState();
  const [initialMovieList, setInitialMovieList] = useState();

  useEffect(async () => {
    const movies = await GetMovies(); //retrieve movie from the API
    let movieGenres = await GetMoviesGenres(); //retrieve genres from the API
    movieGenres = movieGenres.genres.map(({ id, name }) => ({ id, value: name, label: name }));
    setMovieGenres(movieGenres);
    setMovies(movies.results);
  }, [])

  useEffect(() => {
    const getInitialMovieData = async () => { //get Initial data on load
      let finalObject = getFormattedMovieData(movies, movieGenres);
      setInitialMovieList(finalObject);
      setMappedMovieData(finalObject);
    };
    getInitialMovieData();
  }, [movies, movieGenres])

  useEffect(() => {
    if (searchTerm) searchData(); // Search implementation
    else setMappedMovieData(initialMovieList);
  }, [searchTerm]);

  const searchData = async () => {
    const searchLists = await movieSearch(searchTerm);
    setTotalPages(searchLists.total_pages);
    setTotalCount(searchLists.total_results);
    setMappedMovieData(getFormattedMovieData(searchLists.results, movieGenres));
  };

  const getMovies = async () => {
    let movieObject = await GetMovies(pageNumber);
    setTotalPages(movieObject.total_pages);
    setTotalCount(movieObject.total_results);
    movieObject = movieObject.results;

    setMovies(movieObject);
  }

  useEffect(() => {
    if (pageNumber) {
      getMovies()
    }
  }, [pageNumber])

  return (
    <div className="layout">
      <div className="container">
        <Header
          setSearchTerm={setSearchTerm}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        ></Header>
        <div className="body">
          <Pagination
            totalCount={totalCount}
            totalPages={totalPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}></Pagination>
          <div className="movieContainer">

            {mappedMovieData && mappedMovieData.map(item => {
              return (
                <MovieCard data={item}></MovieCard>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;