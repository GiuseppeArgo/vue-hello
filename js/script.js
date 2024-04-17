console.log(Vue);

const { createApp } = Vue;

createApp({
  // Qui andranno dati
  data() {
    return {
      greeting: "Hello world",
      myImage: "hello.jpg",
    };
  },
  methods: {
    
  },
}).mount("#app");