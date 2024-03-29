package com.advantal.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.advantal.model.PostCampaign;
import com.advantal.repository.PostCampaignRepository;
import com.advantal.service.PostCampaignService;
import com.advantal.util.IConstant;

@CrossOrigin
@RestController
public class PostCampaignController {
	
	@Autowired
	private PostCampaignService postCampaignService;
	
	@Autowired
	private PostCampaignRepository postCampaignRepository;
	
	
	@PostMapping(value = "/add_PostCampaign")
	public Map<Object, Object> addPostCampaign(@RequestParam(value = "file", required = false) MultipartFile[] files,
			PostCampaign postCampaign) {
		Map<Object, Object> map = new HashMap<Object, Object>();
		System.out.println("postCampaign= " +postCampaign);
		PostCampaign postCampaignDetails=postCampaignService.addPostCampaign(postCampaign, files);
		if (postCampaignDetails != null  ) {
			map.put(IConstant.RESPONSE, IConstant.SUCCESS);
			map.put(IConstant.MESSAGE, IConstant.POSTCAMPAIGN_CREATED_SUCCESS_MESSAGE);	
		} else if(null == postCampaignDetails){
			map.put(IConstant.RESPONSE, IConstant.NOT_AUTHORIZED);
			map.put(IConstant.MESSAGE, IConstant.POSTCAMPAIGN_ERROR_MESSAGE);
		} else {
			map.put(IConstant.RESPONSE, IConstant.NOT_AUTHORIZED);
			map.put(IConstant.MESSAGE, IConstant.ERROR_MESSAGEE);
		}
		return map;
	}
	

	@GetMapping(value = "/post_campaign_list")
	public Map<Object, Object> findByAll() {
		Map<Object, Object> map = new HashMap<Object, Object>();
		List<PostCampaign> postCampaignList = postCampaignRepository.findByDesecdingOrder();
		System.out.println(postCampaignList);
		if (postCampaignList != null && !postCampaignList.isEmpty()) {
			map.put(IConstant.RESPONSE, IConstant.SUCCESS);
			map.put(IConstant.RESPONSE_LIST, postCampaignList);
		} else {
			map.put(IConstant.RESPONSE, IConstant.NOT_AUTHORIZED);
			map.put(IConstant.MESSAGE, IConstant.EMPTY_LIST_MESSAGE);
		}

		return map;
	}
	@PostMapping(value = "/get_post_campaign_by_email")
	public Map<Object, Object> findByEmailId(@RequestBody Map<String, String> reqParams) {		
		
		return postCampaignService.getPostCampaignRecordbyMail(reqParams.get("organizationEmail"));	
	}
	
	@PostMapping(value = "/get_post_campaign_count_by_email")
	public Map<Object, Object> findByEmailIdCount(@RequestBody Map<String, String> reqParams) {		
		
		return postCampaignService.getCountPostCampaignRecordbyMail(reqParams.get("organizationEmail"));	
	}
	
	
}
