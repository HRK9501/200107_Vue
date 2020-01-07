import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

const myVM = (() => {
    //instantiate a new Vue instance
        let vue_vm = new Vue({
            data: {
                message: "Hello From Vue!",

                collection: [
                    { name: "Trevor", role: "Prof" },
                    { name: "Joe", role: "Awesome Prof" },
                    { name: "Justin", role: "Cordinator" }
                ]
            },

            methods: {
                logClicked() {
                    console.log('clicked on an element!');
                }
            }
        }).$mount("#app");
})();