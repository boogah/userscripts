// ==UserScript==
// @name         Dev.to No More
// @namespace    https://github.com/boogah/userscripts
// @version      2023.08.30
// @description  Automatically redirects dev.to articles to their archive.is analog.
// @author       boogah
// @include      https://dev.to/*
// @license      GPL-2.0
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    // Check if we're on an archive.is page, if so stop execution
    if (window.location.hostname === 'archive.is') {
        return;
    }

    // Check if the URL is a dev.to article
    if (window.location.href.includes('dev.to') && window.location.pathname.split('/').length >= 3) {
        const archiveURL = "https://archive.is/?run=1&url=" + encodeURIComponent(window.location.href);
        window.location.href = archiveURL;
    }
}, false);
