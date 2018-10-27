import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

new Vue({
	router: new VueRouter({
		mode: "history",
		routes: [
			{
				path: "/",
				component: require("./root.vue").default,
			},
		],
	}),
	render: (h) => h("router-view"),
}).$mount();
