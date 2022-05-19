// ==UserScript==
// @name         Rename
// @namespace    https://github.com/iamfoyez/ChromePersonalization/
// @version      0.1
// @description  Rename and change icons of specific sites
// @author       iamfoyez
// @match        https://*/*
// @match        *://*/*
// @match        *
// @run-at 		 document-end
// @grant        none
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

})();