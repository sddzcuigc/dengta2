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

    // 运行试试
    if (window.location.href.indexOf("online-class") != -1) {
        var intnum = Math.floor(Math.random() * 10 );

        //有的时候100%了还是有再次学习的时候
        sleep(3000).then(() => {if (document.getElementsByClassName('cell fs-tooltip')[4+6*intnum].textContent.endsWith("100%") == false){
            document.getElementsByClassName("group")[intnum].children[0].click();}
                                else {document.location.reload()}})



    }
    else {
        sleep(3000).then(() => {document.getElementsByTagName("video")[0].muted = true;
                                document.getElementsByTagName("video")[0].play();
                                document.getElementsByTagName("video")[0].addEventListener("ended",function(){window.close();opener.location.reload();})})
    };
}










 // Your code here...
)();
