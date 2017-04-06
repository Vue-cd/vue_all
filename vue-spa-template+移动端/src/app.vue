<!--suppress ALL -->
<template>
        <section class="swiper-container" id="app">
            <div class="swiper-wrapper">
                <div class="swiper-slide page1">
                    我是第一个页
                </div>
                <div class="swiper-slide page2">
                    我是第二页
                </div>
                <div class="swiper-slide page3">
                    我是第page3个页
                </div>
                <div class="swiper-slide page4">
                    我是第page4个页
                </div>
                <div class="swiper-slide page5">
                    我是第page5个页
                </div>
                <div class="swiper-slide page6">
                    page6
                </div>
            </div>
        </section>
</template>
<style lang="less" rel="stylesheet/less">
/*    #app {
        color: #2c3e50;
        margin-top: -100px;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
        a {
            color: #42b983;
            text-decoration: none;
        }
    }*/
    html {
        font-size: 100px;
    }

    html, body, .swiper-container, .swiper-slide {
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', 'Î¢ÈíÑÅºÚ', Arial, sans-serif;

    }
    .swiper-slide {
        position: relative;
    }

    /*page1*/
    .page1 {
        background-size: cover;
    }
    /*page2*/
    .page2 {
        background-size: cover;
    }
    /*page3*/
    .page3 {
        background-size: cover;
    }
    /*page4*/
    .page4 {
        background-size: cover;
    }
    /*page5*/
    .page5 {
        background-size: cover;
    }
    </style>
