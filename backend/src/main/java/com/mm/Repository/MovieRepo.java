package com.mm.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.mm.Model.Movie;
import com.mm.Model.Users;


@Repository
public interface MovieRepo extends JpaRepository<Movie, Long>
{
	
	//FIND BY MOVIE NAME
	@Query("FROM Movie WHERE title LIKE %:title%")
	List<Movie> findByTitle(@Param("title")String title);
	
	//FIND MOVIE BY YEAR
	List<Movie> findByYear(int year);
	
	//GET MOVIE BY ID
	Movie findById(long id);
 
}
