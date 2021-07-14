// koding vue
const app = Vue.createApp({
  data(){
    // object reactivity
    return {
      counter : 0
    }
  },
  methods: {
    increment(){
      this.counter++;
    },
    decrement(){
      this.counter--;
    }
  }
})
// selector html
app.mount('#app');
