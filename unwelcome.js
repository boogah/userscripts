// ==UserScript==
// @name         Unwelcome
// @namespace    https://github.com/boogah/userscripts
// @version      2023.05.27
// @description  Automatically hides the welcome box when visiting Make WordPress pages.
// @author       boogah
// @match        https://*.make.wordpress.org/*
// @license      GPL-2.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        var welcomeBoxes = document.getElementsByClassName('make-welcome');
        for (var i = 0; i < welcomeBoxes.length; i++) {
            welcomeBoxes[i].style.display = 'none';
        }
    }, false);

})();
