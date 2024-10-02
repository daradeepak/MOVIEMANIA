package com.mm.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mm.Model.Movie;


@Repository
public interface MovieRepo extends JpaRepository<Movie, Long>
{
	//FIND BY MOVIE NAME
	List<Movie> findByTitle(String title);
	
	//FIND MOVIE BY YEAR
	List<Movie> findByYear(int year);
	
	//GET MOVIE BY ID
	Movie findById(long id);
 
}
