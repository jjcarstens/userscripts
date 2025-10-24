// ==UserScript==
// @name         Auto-click GitHub Single Sign-On
// @version      0.1.0
// @description  Click the "Continue" button when GitHub needs you to sign into an org again
// @author       Jon Carstens
// @match        https://github.com/*/sso*
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        let el = document.querySelector('div.org-sso-panel > form > button');
        if (el) { el.click(); }
    },1000);
})();
