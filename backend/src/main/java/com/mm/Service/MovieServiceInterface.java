package com.mm.Service;

import java.util.List;


import com.mm.Model.Movie;

public interface MovieServiceInterface 
{
	//POST MOVIES
    public Movie saveMovie(Movie movie);
    
    //GET MOVIES
    public List<Movie> getAllMovies();
    
    //DELTE MOVIE
    String deleteMovie(long id);
    
    //UPDATE MOVIES
	Movie updateMovie(Long id, Movie movie);
	
	//GET MOVIE BY ID
	Movie findById(long id);
	
	//FIND BY MOVIE NAME
	List<Movie> findByTitle(String title);
	
	//FIND MOVIE BY YEAR
	List<Movie> findByYear(int year);
	
}
