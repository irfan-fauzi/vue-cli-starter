const app = Vue.createApp({
  data(){
    return {
      dataTodo: [],
      newTodo: ''
    }
  },
  methods: {
    tambahData(e){
      this.dataTodo.push(this.newTodo)
      this.newTodo = ''
      e.preventDefault()
    }
  }
})

app.mount('#app');