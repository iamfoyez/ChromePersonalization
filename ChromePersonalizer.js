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
// @updateURL		https://raw.githubusercontent.com/iamfoyez/ChromePersonalizer/master/ChromePersonalizer.js
// @downloadURL		https://raw.githubusercontent.com/iamfoyez/ChromePersonalizer/master/ChromePersonalizer.js
// @run-at			document-end
// @grant			none
// ==/UserScript==

class sites {

    #sites;

    constructor() {
        this.#get_data()
    }

    /**
    // For when data is too big
    async #get_data() { 
        const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.jsonhttps://raw.githubusercontent.com/iamfoyez/ChromePersonalizer/master/sites.json';
        const request = new Request(requestURL);

        const response = await fetch(request);
        this.#sites = response.json()
    }
     */

    #get_data() {
        this.sites = JSON.parse(`
        {"PowershellDocs":{"url_prefix":"docs.microsoft.com/en-us/powershell/","custom_icon":"","new_title":"Powershell Docs"},"GitHub_test":{"url_prefix":"github.com/iamfoyez/flexplayer","custom_icon":"","new_title":"FP - new way to use yt"}}
        `)
    }

    get(key) {
        if (!this.is_valid(key)) return null
        return this.sites[key]
    }

    get_keys() {
        let all_sites = []
        for ( const k in this.sites ) all_sites.push(k)
        return all_sites
    }

	get_all_by_prop(propName) {
		let all_res = {}
		for ( const s in this.sites ) {
			if (this.sites[s][propName]) {
				all_res[s] = this.sites[s][propName]
			}
		}
		return all_res
	}
    
    has_site(name) {
        return this.sites.hasOwnProperty(name)
    }

	get_match(url) {
		const url_prefs = this.get_all_by_prop("url_prefix") 
		for ( const s in url_prefs) {
			if (url.includes(url_prefs[s])) {
				return this.sites[s] 
			}
		}
		return false;
	}
}

function changeTitle(newTitle) {
    document.title = newTitle
}

(function() {
    'use strict';

	// current page url
    let url_current = window.location.href;

	let db = new sites()

	let res = db.get_match(url_current)

    if (res) {
        changeTitle(res.new_title)
    }

})();