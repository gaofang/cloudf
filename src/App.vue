<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
/* common style */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
    height: 100%;
}
body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    /* text-align: center; */
    /* color: #2c3e50; */
    /* margin-top: 60px; */
}

</style>
