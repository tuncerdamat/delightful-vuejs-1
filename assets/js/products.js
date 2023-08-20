import Vue from 'vue';

const template = '<h1>Hello {{ firstName }}</h1>';

new Vue({
    el: '#app',
    data() {
        return {
            firstName: 'Tunçer',
        };  
    },
    render(h) {
        return Vue.compile(template).render.call(this, h);
    },
});
