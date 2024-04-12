"use client"
import React, { useEffect, useState } from 'react';
import Item from '../components/item'

const MovieListComponent = () => {

    const [videolist, setVideolist] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = new URL('http://localhost:5000/videolist');
        const response = await fetch(url);
        const movies = await response.json();
        setVideolist(movies);
        console.log(movies);
        
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();

  }, []);

  return (
    <div>
        <h1>hhhhhhhhhvgvytvhgv</h1>
     {
     videolist?.map(it =><Item item={it}></Item>)
            }
    </div>
  );
};

export default MovieListComponent;
