// ==UserScript==
// @name         Xcancel Culture
// @namespace    https://github.com/boogah/userscripts
// @version      2024.10.19
// @description  Automatically redirects x.com to xcancel.com.
// @author       boogah
// @include      https://*.x.com/*
// @license      GPL-2.0
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    // Redirect to xcancel.com with the current path and query params
    var xcancelURL = window.location.href.replace(/https:\/\/([^.]+\.)?x\.com/, 'https://xcancel.com');
    window.location.href = xcancelURL;
}, false);
