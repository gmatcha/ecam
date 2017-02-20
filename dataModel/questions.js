/**
	Codes of variables that are hidden if answer is NO

	Question object structure: 
		1. "variables" (array)      variables hidden if answer is no
		2. "advanced" (boolean)     show only in substages
		3. "otherQuestions" (array) questions hidden if answer is no
	
	Template:
	"newQuestion":{
		variables:[ 
			"",
		],
		advanced:0,
		otherQuestions:[
			"",
		],
	},
*/
var Questions = {
	//wsa
		"wsa_pumping":{
			variables:[ 
				"wsa_vol_pump",
				"wsa_nrg_pump",
			],
			advanced:1,
			otherQuestions:[
				"wsa_pumping_efficiency",
			],
		},

		"wsa_engines":{
			variables:[
				"wsa_fuel_typ",
				"wsa_vol_fuel",
				"wsa_KPI_GHG_fuel",
			],
			advanced:0,
			otherQuestions:[],
		},

		"wsa_pumping_efficiency":{
			variables:[
				"wsa_pmp_head",
				"wsa_sta_head",
				"wsa_main_len",
				"wsa_KPI_un_head_loss",
				"wsa_KPI_std_nrg_cons",
				"wsa_KPI_std_elec_eff",
				"wsa_pmp_type",
				"wsa_pmp_size",
			],
			advanced:1,
			otherQuestions:[],
		},

		"wsa_producing_energy":{
			variables:[
				"wsa_nrg_turb",
				"wsa_KPI_nrg_recovery",
			],
			advanced:1,
			otherQuestions:[],
		},

	//wst
		"wst_engines":{
			variables:[
				"wst_fuel_typ",
				"wst_vol_fuel",
				"wst_KPI_GHG_fuel",
			],
			advanced:0,
			otherQuestions:[],
		},

		"wst_pumping_efficiency":{
			variables:[ 
				"wst_vol_pump",
				"wst_pmp_head",
				"wst_KPI_std_nrg_cons",
				"wst_nrg_pump",
				"wst_KPI_std_elec_eff",
			],
			advanced:1,
			otherQuestions:[],
		},

		"wst_treatment_performance":{
			variables:[ 
				//"wst_turb_raw",HIDDEN
				//"wst_turb_fin",HIDDEN
				//"wst_disnfctn",HIDDEN
				"wst_nrg_disn",
				"wst_KPI_nrg_disnfc",
				"wst_KPI_slu_per_m3",
			],
			advanced:1,
			otherQuestions:[ ],
		},

	//wsd
		"wsd_pumping":{
			variables:[
				"wsd_vol_pump",
				"wsd_nrg_pump",
				"wsd_KPI_nrg_per_m3",
			],
			advanced:1,
			otherQuestions:[
				"wsd_pumping_efficiency",
			],
		},

		"wsd_pumping_efficiency":{
			variables:[ 
				"wsd_KPI_std_nrg_cons",
				"wsd_KPI_un_head_loss",
				"wsd_pmp_size",
				"wsd_sta_head",
				"wsd_pmp_head",
			],
			advanced:1,
			otherQuestions:[],
		},

		"wsd_engines":{
			variables:[
				"wsd_fuel_typ",
				"wsd_vol_fuel",
				"wsd_KPI_GHG_fuel",
			],
			advanced:0,
			otherQuestions:[],
		},

		"wsd_trucks":{
			variables:[
				"wsd_trck_typ",
				"wsd_vol_trck",
				"wsd_KPI_GHG_trck",
			],
			advanced:0,
			otherQuestions:[],
		},

		"wsd_topographic":{
			variables:[
				"wsd_min_pres",
				"wsd_hi_no_el",
				"wsd_lo_no_el",
				"wsd_av_no_el",
				"wsd_wt_el_no",
				"c_wsd_nrg_topo",
				"c_wsd_nrg_natu",
				"c_wsd_nrg_mini",
				"c_wsd_nrg_supp",
				"wsd_KPI_nrg_efficien",
				"wsd_KPI_nrg_topgraph",
			],
			advanced:1,
			otherQuestions:[],
		},

	//wwc
		"wwc_engines":{
			variables:[
				"wwc_fuel_typ",
				"wwc_vol_fuel",
				"wwc_KPI_GHG_fuel",
			],
			advanced:0,
			otherQuestions:[],
		},

		"wwc_pumping":{
			variables:[
				"wwc_vol_pump",
				"wwc_nrg_pump",
			],
			advanced:1,
			otherQuestions:[
				"wwc_pumping_efficiency",
			],
		},

		"wwc_pumping_efficiency": {
			variables:[
				"wwc_pmp_head",
				//"wwc_pmp_size", // Size of pumpHIDDEN
				"wwc_sta_head",
				//"wwc_pmp_type",HIDDEN
				"wwc_KPI_std_nrg_cons",
				"wwc_KPI_un_head_loss",
			],
			advanced:1,
			otherQuestions:[],
		},

		"wwc_water_eff": {
			variables:[
				"wwc_wet_flow",
				"wwc_dry_flow",
				"wwc_coll_len",
				//"wwc_infl_inf",HIDDEN
				//"wwc_infl_infi",HIDDEN
				"wwc_wd_ratio",
				//"wwc_vol_infi",HIDDEN
				//"wwc_KPI_GHG_ii",HIDDEN
			],
			advanced:1,
			otherQuestions:[],
		},

	//wwt
		"wwt_engines":{
			variables:[
				"wwt_fuel_typ",
				"wwt_vol_fuel",
				"wwt_KPI_GHG_fuel",
			],
			advanced:0,
			otherQuestions:[],
		},

		"wwt_producing_biogas":{
			variables:[
				"wwt_biog_pro",
				"wwt_ch4_biog",
				"c_wwt_biog_fla",
				"wwt_dige_typ",
				"wwt_fuel_dig",
				"wwt_KPI_GHG_dig_fuel",
				"wwt_KPI_biog_x_bod",
				"wwt_KPI_GHG_biog",
			],
			advanced:0,
			otherQuestions:[
				"wwt_valorizing_biogas",
			],
		},

		"wwt_valorizing_biogas":{
			variables:[
				"wwt_biog_val",
				"wwt_nrg_biog",
				"c_wwt_nrg_biog",
				"wwt_KPI_nrg_biogas",
				"wwt_KPI_nrg_x_biog",
			],
			advanced:0,
			otherQuestions:[],
		},

		"wwt_sludge_mgmt":{
			variables:[
				"wwt_mass_slu",
				"wwt_slu_disp",
				"c_wwt_slu_c",
				"c_wwt_slu_n",
				"c_wwt_slu_cn",
				"wwt_KPI_GHG_slu",
			],
			advanced:0,
			otherQuestions:[
				"wwt_slu_storage",
				"wwt_composting",
				"wwt_incineration",
				"wwt_land_application",
				"wwt_landfilling",
				"wwt_stockpiling",
				"wwt_trucks",//TODO
			],
		},

		"wwt_slu_storage":{
			variables:[
				"wwt_mass_slu_sto",
				"wwt_time_slu_sto",
				"c_wwt_ch4_pot",
				"wwt_slu_storage_ch4",
				"wwt_slu_storage_n2o",
				"wwt_KPI_GHG_sto_co2eq",
			],
			advanced:0,
			otherQuestions:[],
		},

		"wwt_composting":{
			variables:[
				"wwt_mass_slu_comp",
				"wwt_slu_composting_co2",
				"wwt_slu_composting_ch4",
				"wwt_slu_composting_n2o",
				"wwt_KPI_GHG_comp_co2eq",
			],
			advanced:0,
			otherQuestions:[
			],
		},

		"wwt_incineration":{
			variables:[
				"wwt_mass_slu_inc",
				"wwt_nrg_inc",
				"wwt_temp_inc",
				"wwt_slu_inciner_co2",
				"wwt_slu_inciner_ch4",
				"wwt_slu_inciner_n2o",
				"wwt_KPI_GHG_inc_co2eq",
			],
			advanced:0,
			otherQuestions:[
			],
		},

		"wwt_land_application":{
			variables:[
				"wwt_mass_slu_app",
				"wwt_soil_typ",
				"wwt_nrg_app",
				"wwt_appl_typ",
				"wwt_vol_fuel_app",
				"wwt_slu_landapp_co2",
				"wwt_slu_landapp_n2o",
				"wwt_KPI_GHG_app_co2eq",
			],
			advanced:0,
			otherQuestions:[
			],
		},
		
		"wwt_landfilling":{ 
			variables:[
				"wwt_mass_slu_land",
				"wwt_dryw_slu",
				"wwt_slu_type",
				"wwt_slu_landfill_ch4",
				"wwt_slu_landfill_n2o",
				"wwt_KPI_GHG_land_co2eq",
			],
			advanced:0,
			otherQuestions:[
			],
		},

		"wwt_stockpiling":{
			variables:[
				"wwt_mass_slu_stock",
				"wwt_time_slu_stock",
				"wwt_KPI_GHG_stock_co2eq",
			],
			advanced:0,
			otherQuestions:[
			],
		},

		"wwt_trucks":{
			variables:[
				"wwt_trck_typ",
				"wwt_num_trip",
				"wwt_dist_dis",
				"wwt_KPI_GHG_tsludge",
			],
			advanced:0,
			otherQuestions:[],
		},

		"wwt_pumping_efficiency":{
			variables:[
				"wwt_pmp_head",
				"wwt_pmp_type",
				"wwt_vol_pump",
				"wwt_nrg_pump",
				"wwt_KPI_std_nrg_cons",
				"wwt_KPI_std_elec_eff",
			],
			advanced:1,
			otherQuestions:[],
		},

	//wwd
		"wwd_pumping":{
			variables:[
				"wwd_nrg_cons",
				"wwd_vol_pump",
			],
			advanced:0,
			otherQuestions:[
				"wwd_pumping_efficiency",
			],
		},

		"wwd_engines":{
			variables:[
				"wwd_fuel_typ",
				"wwd_vol_fuel",
				"wwd_KPI_GHG_fuel",
			],
			advanced:0,
			otherQuestions:[],
		},

		"wwd_trucks":{
			variables:[
				"wwd_trck_typ",
				"wwd_vol_trck",
				"wwd_KPI_GHG_trck",
			],
			advanced:0,
			otherQuestions:[],
		},

		"wwd_pumping_efficiency":{
			variables:[ 
				"wwd_pmp_head",
				//"wwd_vol_turb",HIDDEN
				"wwd_trb_head",
				"wwd_main_len",
				"wwd_KPI_std_nrg_cons",
			],
			advanced:1,
			otherQuestions:[],
		},
};

//FUNCTIONS for Questions
//check if the "field" is inside questions
Questions.isInside=function(field) {
	//go over all questions
	var code;
	for(var question in this)
	{
		for(var i in this[question].variables)
		{
			code=this[question].variables[i];
			if(code==field) return true;
		}
	}
	return false;
}

//check if the "field" is shown or hidden
Questions.isHidden=function(field) {
	//go over all questions
	for(var question in this)
	{
		//if answer is yes, next question: all fields inside should be shown
		if(Global.Configuration['Yes/No'][question]==1){continue;}

		//if answer is no, look for "field" inside
		var code;
		for(var i in this[question].variables)
		{
			code=this[question].variables[i];
			if(code==field) return true;
		}
	}
	return false;
}

//return the codes according to an ubication inside "Global". ubication is a pointer to object
Questions.getQuestions=function(ubication) {
	var code,questions=[];
	//go over all questions
	for(var question in this)
	{
		if(typeof(this[question])=="function")continue;
		//skip fuel engines questions if anyFuelEngines is zero
		if(Global.General.anyFuelEngines==0)
		{
			if(["wsa_engines","wst_engines","wsd_engines","wwc_engines","wwt_engines","wwd_engines"].indexOf(question)+1)
				continue
		}
		//check all codes inside ubication
		for(var i in this[question].variables)
		{
			code=this[question].variables[i];
			//check if exists inside ubication
			if(ubication[code]!=undefined)
			{
				questions.push(question);
				break;
			}
		}
	}
	return questions;
}

//check if the question "field" should be hidden
Questions.isHiddenQuestion=function(field) {
	//go over all questions
	for(var question in this)
	{
		//if answer is yes, next question: all fields inside should be shown
		if(Global.Configuration['Yes/No'][question]==1){continue;}

		//if answer is no, look for "field" inside
		var code;
		for(var i in this[question].otherQuestions)
		{
			code=this[question].otherQuestions[i];
			if(code==field) return true;
		}
	}
	return false;
}

//Automatic find repeated variables in Questions 
Questions.findRepeated=function() {
	//count how many times appears field in Questions
	function countField(field)
	{
		var n=0;
		//go over all questions
		for(var question in Questions)
		{
			//go over all questions
			for(var i in Questions[question].variables)
			{
				//check if code==field
				if(field==Questions[question].variables[i]) n++;
			}
		}
		return n;
	}
	var repeated=[];
	var code;
	//go over all questions and check that appear 1 time
	for(var question in this)
	{
		for(var i in this[question].variables)
		{
			code=this[question].variables[i];
			if(countField(code)>1) repeated.push(code);
		}
	}
	//remove duplicates
	return repeated.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
}
