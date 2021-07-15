<template>
  <div>
    <h1 v-html="myHeading"></h1>
    <h2>{{ subTitle }}</h2>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      myHeading: `<h1>Heding</h1>`,
      subTitle: "hahah ini subtitle",
      array : [
        {
          nama: "irfan fauzi",
          email: "irfanfauzi@yahoo.com"
        },
         {
          nama: "irfan fauzi",
          email: "irfanfauzi@yahoo.com"
        },
         {
          nama: "irfan fauzi",
          email: "irfanfauzi@yahoo.com"
        }
      ]
    }
  } 
}
</script>