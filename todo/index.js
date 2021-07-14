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
    },
    hapusItem(index){
      this.dataTodo.splice(index, 1)
    }
  },
  // computed : menerima value yang reaktif
  computed: {
    todoCount(){
      return this.dataTodo.length;
    }
  }
})

app.mount('#app');