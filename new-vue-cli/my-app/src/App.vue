

<template>
<main>
  <div>
    <h1 v-if="isShowing">{{ myHeading }}</h1>
    <h1 v-else >{{ headingCadangan }}</h1>
    <h2>{{ subTitle }}</h2>
    <h3>{{ count }}</h3>
  </div>
  <div>
    <h5>jumlah data ada {{ hitungJumlahData }}</h5>
    <form v-on:submit.prevent="submitData">
      <input v-model.trim="newTodo" type="text">
      <button>add</button>
    </form>
    <ul v-for="el, index in array" v-bind:key="el.id">
      <li>
        <p>{{ el.nama}}</p>
        <button @click="hapusData(index)">hapus</button>
        <input type="text">
      </li>
    </ul>
    <!-- computed han-->
    <div>
      <h3>computed property : </h3>
      <h5>{{ computedAcakBilangan }}</h5>
    </div>
    <!-- method -->
    <div>
      <h3>method property : </h3>
      <h5>{{ methodAcakBilangan() }}</h5>
    </div>
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
      array : [{
        id: Math.random(),
        nama: "batman"
      }],
      isShowing: false,
      newTodo: '',
      count: 0
    }
  },
  methods: {
    submitData(){
      if(this.newTodo !== ""){

        this.array.push({
          id: Math.random(),
          nama: this.newTodo 
        })
         this.newTodo = ""
      }
    },
    hapusData(index){
      this.array.splice(index, 1)
    },
    methodAcakBilangan(){
      return Math.random();
    }
  },
  mounted(){
    setInterval(() => {
      if(this.isShowing){
        this.count++
      }
    }, 1000)
  },
  computed: {
    hitungJumlahData(){
      return this.array.length;
    },
    computedAcakBilangan(){
      return this.array.length + Math.random()
    }
  }  
}
</script>