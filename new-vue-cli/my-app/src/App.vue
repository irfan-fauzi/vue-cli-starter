<template>
<main>
  <div>
    <h1 v-if="isShowing">{{ myHeading }}</h1>
    <h1 v-else >{{ headingCadangan }}</h1>
    <h2>{{ subTitle }}</h2>
    <h3>{{ count }}</h3>
  </div>
  <div>
    <form v-on:submit.prevent="submitData">
      <input v-model="newTodo" type="text">
      <button>add</button>
    </form>
    <ul v-for="el in array" v-bind:key="el.id">
      <li>
        <p>{{ el }}</p>
        <button>hapus</button>
      </li>
    </ul>
  </div>
</main>
</template>

<script>
export default {
  data(){
    return{
      myHeading: "Heading",
      subTitle: "hahah ini subtitle",
      headingCadangan: "Vue cadangan",
      array : [],
      isShowing: false,
      newTodo: '',
      count: 0
    }
  },
  methods: {
    submitData(){
      this.array.push(this.newTodo)
      this.newTodo = ""
    }
  },
  mounted(){
    setInterval(() => {
      if(this.isShowing){
        this.count++
      }
    }, 1000)
  }  
}
</script>