window.onload = function () {
  new Vue({
    el:'#form-tweet',
    data:{
      errors:[],
      tweet:null
    },
    methods:{
      checkForm: function(e) {
        console.log("bijourr");
        if(this.tweet){
           this.$http.get('https://postman-echo.com/post', {foo: this.tweet}).then(response => {

              // get status
              response.status;

              // get status text
              response.statusText;

              // get 'Expires' header
              response.headers.get('Expires');

              // get body data
              this.someData = response.body;
              console.log("someData : " + someData);
            }, response => {
              // error callback
            });
          return true;
        }
        this.errors = [];
        if(!this.tweet) this.errors.push("A Tweet can't be empty.");
        /*formData.append('title', this.title);
        formData.append('body', this.body);
        this.$http.put('/posts/'+id, formData)*/
        e.preventDefault();
        //this.$http.post('/someUrl', [body], [config]).then(successCallback, errorCallback);// POST /someUrl
        
      },
      putTweet : function(e) {
        this.$http.post('https://postman-echo.com/post', {foo: 'bar'}).then(response => {

          // get status
          response.status;

          // get status text
          response.statusText;

          // get 'Expires' header
          response.headers.get('Expires');

          // get body data
          this.someData = response.body;
          console.log("someData : " + someData);
        }, response => {
          // error callback
        });
      }
    }
  })
}