// ==UserScript==
// @name         코드 번역 제외
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include http://*
// @include https://*
// @include *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let codeDom = document.querySelectorAll('pre, code');
    codeDom.forEach(function(e){
        e.classList.add('notranslate');
    });
})();