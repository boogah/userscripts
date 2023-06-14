// ==UserScript==
// @name         Substack Is Wack
// @namespace    https://github.com/boogah/userscripts
// @version      2023.06.14
// @description  Automatically redirects substack.com articles to their archive.is analog.
// @author       boogah
// @include      https://*.substack.com/p/*
// @license      GPL-2.0
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    // Check if we're on an archive.is page, if so stop execution
    if (window.location.hostname === 'archive.is') {
        return;
    }

    var archiveURL = "https://archive.is/?run=1&url=" + encodeURIComponent(window.location.href);
    window.location.href = archiveURL;
}, false);
