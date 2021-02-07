<template>
  <div>
    <Header />
    <Body />
    <Footer :userName="userName" @myEvent="updateName" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Body,
    Footer,
  },
  data() {
    return {
      userName: "홍길동",
    };
  },
  methods: {
    updateName(newName) {
      this.userName = newName;
    },
  },
};
</script>

<style>
</style>
