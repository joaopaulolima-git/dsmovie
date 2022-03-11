package com.jpdev.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jpdev.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
