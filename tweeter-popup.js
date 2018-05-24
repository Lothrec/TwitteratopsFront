window.onload = function () {
	// register modal component
	Vue.component('modal', {
	  template: '#modal-template'
	})

	// start app
	new Vue({
	  el: '#app',
	  data: {
	    showModal: false
	  },
	  methods: {
	        doSomething() {
	            alert('Clicked!');
	        }
	    }
	})
}