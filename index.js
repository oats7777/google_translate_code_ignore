// ==UserScript==
// @name         코드 번역 제외
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       oats7777
// @license      MIT
// @source       https://github.com/oats7777/google_translate_code_ignore
// @include http://*
// @include https://*
// @include *
// @grant        none
// @run-at       document-start

(function() {
    'use strict';
    let codeDom = document.querySelectorAll('pre, code');
    codeDom.forEach(function(e){
        e.classList.add('notranslate');
    });
})();