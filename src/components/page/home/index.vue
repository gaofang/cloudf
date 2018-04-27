<template>
    <div style="height: 100%">
        <div class="page_cloudf" :style="{transform: transformX}">
            <div class="left">
                <h1 class="page_title">
                    CLOUDF
                </h1>
                <section class="main">
                    <div class="text">
                        <textarea name="text" id="text" cols="30" rows="10" v-model="textInput"></textarea>
                    </div>
                    <div class="screen" v-html="outPut"></div>
                </section>
                <div class="page_show" @click="handleShow">
                    <img class="icon_show" src="../../../assets/img/PPT.svg">
                </div>
            </div>
            <div class="right">
                <el-carousel indicator-position="outside" height="600px" :autoplay="false" arrow="always">
                    <el-carousel-item v-for="item in outPutList" :key="item">
                        <!-- <h3 class="">{{ item }}</h3> -->
                        <div v-html="item"></div>
                    </el-carousel-item>
                </el-carousel>
                <img class="icon_back" src="../../../assets/img/back.svg" @click="handleShow">
            </div>
        </div>

    </div>

</template>

<script>
import marked from "marked";

// import { markdown } from "markdown";

export default {
    data() {
        return {
            textInput: "",
            outPut: "",
            show: false,
            outPutList: []
        };
    },
    watch: {
        textInput() {
            this.outPut = marked(this.textInput);
            console.log(this.outPut);
            // this.outPut = markdown.toHTML(this.textInput);
        }
    },
    computed: {
        transformX: function() {
            const tranlateX = this.show ? "-50%" : "0";
            return `translate3d(${tranlateX}, 0, 0)`;
        }
    },
    mounted() {},
    methods: {
        handleShow() {
            if (this.show) {
                this.show = false;
            } else {
                this.show = true;
                this.outPutList = this.outPut.split("<hr>");
                console.log(this.outPutList);
            }
        }
    }
};
</script>

<style lang="scss">
@import "../../../assets/github";
.page_cloudf {
    width: 200%;
    white-space: nowrap !important;
    transition: transform 0.5s ease;
    height: 100%;
    .left {
        display: inline-block;
        width: 50%;
        height: 100%;
        position: relative;
    }
    .right {
        display: inline-block;
        width: 50%;
        background-color: rgba(0, 0, 0, 0.76);
        height: 100%;
        vertical-align: top;
        padding: 36px;
        position: relative;
        .el-carousel {
        }
        .el-carousel__item {
            background-color: #fff;
            padding: 40px 100px;
        }
        // .el-carousel__item {
        //     color: #475669;
        //     font-size: 18px;
        //     // opacity: 0.75;
        //     // line-height: 300px;
        //     margin: 0;
        //     background-color: #fff;
        // }

        // .el-carousel__item:nth-child(2n) {
        //     background-color: #99a9bf;
        // }

        // .el-carousel__item:nth-child(2n + 1) {
        //     background-color: #d3dce6;
        // }
        .icon_back {
            position: absolute;
            top: 5px;
            left: 5px;
            width: 30px;
            height: 30px;
            cursor: pointer;
        }
    }
    .page_title {
        text-align: center;
        height: 100px;
        font-size: 36px;
        line-height: 100px;
        color: #666;
        font-weight: 500;
        background-color: #fff;
        padding-top: 0;
    }
    .main {
        position: absolute;
        top: 100px;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid #eee;
        white-space: nowrap;
        .text {
            display: inline-block;
            width: 50%;
            border-right: 1px solid #eee;
            background-color: #f7f7f7;
            height: 100%;
            textarea {
                display: inline-block;
                width: 100%;
                border: none;
                -webkit-appearance: none;
                outline: none;
                height: 100%;
                font-size: 14px;
                padding: 10px;
                resize: none;
                background-color: transparent;
                line-height: 1.5;
            }
        }
        .screen {
            width: 50%;
            display: inline-block;
            vertical-align: top;
            padding: 10px;
            overflow: scroll;
            height: 100%;
            white-space: normal;
            word-wrap: normal;
            word-break: break-all;
            // pre {
            //     background-color: #23241f;
            //     border-radius: 5px;
            // }
        }
    }
}
.page_show {
    position: absolute;
    right: 26px;
    top: 26px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #666;
    font-size: 16px;
    color: #fff;
    outline: none;
    border: none;
    text-align: center;
    line-height: 48px;
    padding-top: 10px;
    cursor: pointer;
    img {
        width: 28px;
        height: 28px;
    }
}
</style>
