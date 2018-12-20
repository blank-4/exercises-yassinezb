var test = new Vue({
    el: '#app',
    data: function() {
        return {
            vue: ""
        }
    },
    watch: {
        vue: function (value) {
            console.log(this.vue);
        }
    }
}); 