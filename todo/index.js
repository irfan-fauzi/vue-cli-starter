const app = Vue.createApp({
  data(){
    return {
      dataTodo: [],
      newTodo: ''
    }
  },
  methods: {
    tambahData(){
      if(this.newTodo !== ''){
        this.dataTodo.push(this.newTodo)
        this.newTodo = ''
      }
    }
  }
})

app.mount('#app');