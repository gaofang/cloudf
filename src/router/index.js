import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/page/home";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Online Document Presentation",
            component: Home
        }
    ]
});
