package com.jpdev.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jpdev.dsmovie.entities.Score;
import com.jpdev.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
