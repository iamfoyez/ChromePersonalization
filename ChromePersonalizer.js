// ==UserScript==
// @name			ChromePersonalizer
// @namespace		https://github.com/iamfoyez/ChromePersonalizer/
// @version			0.1
// @description		Rename and change icons of specific sites
// @author			iamfoyez
// @match			https://*/*
// @match			*://*/*
// @match			*
// @icon			https://github.com/iamfoyez/ChromePersonalizer/raw/master/images/logo.png
// @homepage		https://github.com/iamfoyez/ChromePersonalizer/
// @updateURL		
// @run-at			document-end
// @grant			none
// ==/UserScript==

(function() {
    'use strict';

    let sites = {
    	Powershell_Documentation: {
    		url_prefix: "https://docs.microsoft.com/en-us/powershell/*",
    		icon_data_uri: ""
    	},
    	Github_FlexPlayer: {
    		url_prefix: "https://github.com/iamfoyez/FlexPlayer",
    	}
    };

	// current page url
    let url_current = window.location.href;
	console.log(url_current)

})();