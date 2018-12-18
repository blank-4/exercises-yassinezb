new Vue({
    el: '#app',
    data: function() {
      return {
      message: "",
      afficher: false,
      }
    },
    methods: {
      pistache: function() {
        alert(this.message) ;
      },
    } 
}); 

