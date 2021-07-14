// koding vue
const app = Vue.createApp({
  data(){
    // object reactivity
    return {
      counter : 5
    }
  },
  methods: {
    increment(){
      console.log("ok")
    },
    decrement(){
      console.log("del")
    }
  }
})
// selector html
app.mount('#app');
