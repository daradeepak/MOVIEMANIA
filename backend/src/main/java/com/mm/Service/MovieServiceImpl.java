package com.mm.Service;
	
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mm.Model.Movie;
import com.mm.Repository.MovieRepo;
	
	@Service
	public class MovieServiceImpl implements MovieServiceInterface
	{
		@Autowired
		MovieRepo movieRepo;
		
	    public Movie saveMovie(Movie movie) 
	    {
	        return movieRepo.save(movie);
	    }
	
		@Override
		public List<Movie> getAllMovies() 
		{
			return movieRepo.findAll();
		}
	
		@Override
		public String deleteMovie(long id) 
		{
			movieRepo.deleteById(id);
			return "Movie removied successfully";
		}
	
	    @Override
	    public Movie updateMovie(Long id, Movie movie) 
	    {
	        Movie oldMovie = movieRepo.findById(id).get();
	        oldMovie.setTitle(movie.getTitle());
	        oldMovie.setYear(movie.getYear());
	        oldMovie.setDescription(movie.getDescription());
	        
			return movieRepo.save(oldMovie);
	    }
	
	    @Override
	    public List<Movie> findByTitle(String title) 
	    {
	        return movieRepo.findByTitle(title); 
	    }
	
		@Override
		public List<Movie> findByYear(int year) 
		{
			return movieRepo.findByYear(year);
		}

		@Override
		public Movie findById(long id) {
			return movieRepo.findById(id);
		}
		
	}
