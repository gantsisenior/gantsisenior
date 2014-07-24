/*
Copyright (c) 2014, comScore Inc. All rights reserved.
version: 5.0.3
*/

COMSCORE.SiteRecruit.Broker.config = {
	version: "5.0.3",
	//TODO:Karl extend cookie enhancements to ie userdata
		testMode: false,
	
	// cookie settings
	cookie:{
		name: 'msresearch',
		path: '/',
		domain:  '.microsoft.com' ,
		duration: 90,
		rapidDuration: 0,
		expireDate: ''
	},
	thirdPartyOptOutCookieEnabled : false,
	
	// optional prefix for pagemapping's pageconfig file
	prefixUrl: "",
	
	//events
	Events: {
		beforeRecruit: function() {
					}
	},
	
		mapping:[
	// m=regex match, c=page config file (prefixed with configUrl), f=frequency
	{m: '//[\\w\\.-]+/en-us', c: 'inv_c_p181311957-EN.js', f: 0.0237, p: 0 	}
	,{m: '//[\\w\\.-]+/', c: 'inv_c_Exceptions.js', f: 0, p: 2  ,halt: true 		
		,prereqs:{
			content: [
								  										{
						'element':'meta'
												,'attrib':'name'						,'attribValue':'CSSurvey'					}
									  							]
			,cookie: [
								  							]
			
											
			,externalDomain: [
																]
		}
	}
	,{m: '//[\\w\\.-]+/en-us', c: 'inv_c_Exceptions.js', f: 0, p: 1  ,halt: true 		
		,prereqs:{
			content: [
								  										{
						'element':'meta'
												,'attrib':'content'						,'attribValue':'FX010048536'					}
									  							]
			,cookie: [
								  							]
			
											
			,externalDomain: [
																]
		}
	}
	,{m: '//[\\w\\.-]+/en-us', c: 'inv_c_Exceptions.js', f: 0, p: 1  ,halt: true 		
		,prereqs:{
			content: [
								  										{
						'element':'meta'
												,'attrib':'content'						,'attribValue':'FX100996118'					}
									  							]
			,cookie: [
								  							]
			
											
			,externalDomain: [
																]
		}
	}
	,{m: '//[\\w\\.-]+/en-us', c: 'inv_c_Exceptions.js', f: 0, p: 1  ,halt: true 		
		,prereqs:{
			content: [
								  										{
						'element':'meta'
												,'attrib':'content'						,'attribValue':'FX101812164'					}
									  							]
			,cookie: [
								  							]
			
											
			,externalDomain: [
																]
		}
	}
	,{m: '//[\\w\\.-]+/en-us/business/.*', c: 'inv_c_p228619650-US-2343.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/buy-microsoft-office-2013-suites-and-office-365-subscriptions-FX102886268\\.aspx', c: 'inv_c_p228619650-US-2264.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/buy-microsoft-office-365-home-premium-FX102853961\\.aspx', c: 'inv_c_p228619650-US-2262.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/buy-microsoft-office-home-student-2013-FX102918374\\.aspx', c: 'inv_c_p228619650-US-2268.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/compare-office-365-for-business-plans-FX102918419\\.aspx', c: 'inv_c_p228619650-US-2266.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/convert-your-office-trial-today-FX102907354\\.aspx', c: 'inv_c_p228619650-US-2270.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/excel/?$', c: 'inv_c_p228619650-US-2345.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/exchange/?$', c: 'inv_c_p228619650-US-2352.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/free-trial-try-microsoft-office-2013-and-office-365-products-FX102858196\\.aspx', c: 'inv_c_p228619650-US-2261.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/lync/?$', c: 'inv_c_p228619650-US-2354.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/microsoft-office-365-for-home-or-for-business-office-online-FX101825692\\.aspx', c: 'inv_c_p228619650-US-2271.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/office-365-small-business-premium-office-online-FX103037625\\.aspx', c: 'inv_c_p228619650-US-2267.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/outlook/?$', c: 'inv_c_p228619650-US-2347.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/powerpoint/?$', c: 'inv_c_p228619650-US-2346.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/sharepoint/?$', c: 'inv_c_p228619650-US-2353.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/what-is-office-365-for-business-FX102997580\\.aspx', c: 'inv_c_p228619650-US-2269.js', f: 0.0775, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/word/?$', c: 'inv_c_p228619650-US-2344.js', f: 0.0775, p: 1 	}
	,{m: '(tou\\.aspx)|(asstvid\\.aspx)|(FX10153873(\w*))|(suggestions\\.aspx)|(Thankyou\\.aspx)|(Err.*\\.aspx)|(privacy\\.aspx)|(worldwide/default\\.aspx)|(Axinstall\\.aspx)|(templates/start\\.aspx)|(FX10066742(\w*))|(OfficeSuites2007Setup)|(video\\.aspx)|(services/errors)|(asstvid\\.aspx)|(standalone=true)|(worldwide/default\\.aspx)|(userregistration\\.aspx)|(marketplacepartnerregistration\\.aspx)|(communicationpreferences\\.aspx)|(downloads/marketplace/partnernew\\.aspx)|(templatesubmission\\.aspx)|(clipartssubmission\\.aspx)|(linksubmission\\.aspx)|(videosubmission\\.aspx)|(HA101792264\\.aspx)|(submissionfinish\\.aspx)|(writereview\\.aspx)|(showreviews\\.aspx)|(reviewsubmission\\.aspx)|(/en-us/make-it-great/)', c: 'inv_c_Exceptions.js', f: 0, p: 4  ,halt: true 	}
]
};
COMSCORE.SiteRecruit.Broker.run();