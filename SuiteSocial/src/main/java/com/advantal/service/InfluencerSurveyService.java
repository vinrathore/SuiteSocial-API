package com.advantal.service;

import java.util.Map;

import com.adantal.vo.InfluencerSurveyVO;
import com.advantal.model.InfluencerSurvey;

public interface InfluencerSurveyService {

	InfluencerSurvey saveSurveyDetail(InfluencerSurvey influencerSurvey);

	Map<Object, Object> searchByInfluencerSurveyCriteria(InfluencerSurveyVO influencerSurveyVO);

	
}
