// ==UserScript==
// @name       灯塔学习自动听课
// @version    0.0.3
// @description  灯塔学习自动听课
// @match      https://dywlxy.dtdjzx.gov.cn/*
// ==/UserScript==

(function() {
    'use strict';
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    sleep(3000).then(() => {
        // 选课页面
        if (window.location.href.indexOf("online-class") != -1) {//判断是选课页面还是听课页面


            //有的时候100%了还是有再次学习的时候
            sleep(3000).then(() => {var pagenum = document.getElementsByClassName('number').length;
                                    document.getElementsByClassName('number')[pagenum-1].click();sleep(3000).then(() => {var intnum = Math.floor(Math.random() * (document.getElementsByClassName('fs-table__row').length) );
                                    if (document.getElementsByClassName('cell fs-tooltip')[4+6*intnum].textContent.endsWith("100%") == false){
                                        document.getElementsByClassName("group")[intnum].children[0].click();}
                                    else {document.location.reload()}})})



        }
        else {//听课页面
            sleep(3000).then(() => {document.getElementsByTagName("video")[0].muted = true;
                                    document.getElementsByTagName("video")[0].play();
                                    document.getElementsByTagName("video")[0].addEventListener("ended",function(){sleep(10000).then(() => {window.close();opener.location.reload();})})})
        };});
}

setTimeout(function(){},10000);








 // Your code here...
)();
