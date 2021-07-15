const template = `
<div class="container">
  <h1>{{ judulHeading }}</h1>
  <h2>{{ subJudul }}</h2>
</div>
`;

const data = () => {
  return { 
    judulHeading: "Dibuat pakai templeate vue js",
    subJudul: "sub Judul vue" 
  } 
}

Vue.createApp({ data, template }).mount("#app")