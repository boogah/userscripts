// ==UserScript==
// @name         Xcancel Culture
// @namespace    https://github.com/boogah/userscripts
// @version      2024.10.19
// @description  Automatically redirects x.com to xcancel.com.
// @author       boogah
// @include      https://x.com/*
// @license      GPL-2.0
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    // Redirect /home to xcancel.com directly
    if (window.location.pathname === '/home') {
        window.location.href = 'https://xcancel.com';
        return;
    }
    
    // Redirect to xcancel.com with the current path and query params
    var xcancelURL = window.location.href.replace(/https:\/\/([^.]+\.)?x\.com/, 'https://xcancel.com');
    window.location.href = xcancelURL;
}, false);
