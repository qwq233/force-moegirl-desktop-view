// ==UserScript==
// @name             强制萌娘百科桌面版
// @namespace        https://github.com/qwq233/force-moegirl-desktop-view
// @description      强制萌娘百科桌面版 Google搜出来的全是手机版页面 萌娘那边也不会自动给跳转orz
// @version          1.0.1
// @match            *zh.moegirl.org/*
// @match            *mzh.moegirl.org/*
// @match            *zh.moegirl.org.cn/*
// @match            *mzh.moegirl.org.cn/*
// @author           qwq233 <qwq233@qwq2333.top>
// @license          AGPL
// @supportURL       https://github.com/qwq233/force-moegirl-desktop-view/issues
// @updateURL https://raw.githubusercontent.com/qwq233/force-moegirl-desktop-view/master/force-moegirl-desktop-view.js
// @contributionURL  https://afdian.net/@gao_cai_sheng
// ==/UserScript==

(function () {
    function replace_url(url){
        if (url.match('mzh.moegirl.org')){
            url = url.replace('mzh.moegirl.org','zh.moegirl.org');
        }
        console.log(url)
        return url;
    }
    url = window.location.href;
    newUrl = replace_url(url);
    if (url != newUrl) {
        location.href = newUrl;
    }
})();
