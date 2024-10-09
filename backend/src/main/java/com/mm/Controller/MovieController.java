package com.mm.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mm.Model.Movie;
import com.mm.Model.Users;
import com.mm.Service.MovieServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    MovieServiceImpl service;

    // Upload a new movie
    // @PostMapping("/upload-movie")
    // public Movie uploadMovie(@RequestParam("movie") String movieJson, 
    //                          @RequestParam("poster") MultipartFile file) throws IOException {
    //     ObjectMapper objectMapper = new ObjectMapper();
    //     Movie movie;
    //         // Convert JSON string to Movie object
    //         movie = objectMapper.readValue(movieJson, Movie.class);
    //         movie.setPoster(file.getBytes()); // Convert the file to bytes
    //         return service.saveMovie(movie);
    // }   
    
    //Upload movie
    @PostMapping("/upload-movie")
    public Movie uploadMovie(@RequestBody Movie movie)
    {
        return service.postMovie(movie);
    }
    
    //BULK UPLOAD
    @PostMapping("/bulk-upload")
    public List<Movie> bulkUpload(@RequestBody List<Movie> movies)
    {
    	return service.postAllMovies(movies);
    }


    // Get all movies
    @GetMapping("/get-movies")
    public List<Movie> getMovies() 
    {
        return service.getAllMovies();
    }
    
    //Get movie by year
    @GetMapping("/get-movie/{id}")
    public Movie getMovieById(@PathVariable long id)
    {
    	return service.findById(id);
    }

    // Delete movie by ID
    @DeleteMapping("/delete-movie/{id}")
    public String deleteMovie(@PathVariable long id)
    {
        return service.deleteMovie(id);
    }

    // Update movie by ID
    @PutMapping("/update-movie/{id}")
    public Movie updateMovie(@PathVariable long id, @RequestBody Movie movie)
    {
        return service.updateMovie(id, movie);
    }

    // Find movies by title
    @GetMapping("/searchByName/{title}")
    public List<Movie> getMovieByName(@PathVariable String title)
    {
        return service.findByTitle(title);
    }

    // Find movies by year
    @GetMapping("/movie-year/{year}")
    public List<Movie> getMovieByYear(@PathVariable int year) 
    {
        return service.findByYear(year);
    }
}
