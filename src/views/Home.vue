<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="box"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style lang="less">
.px2rem(@name, @px) {
  @{name}: @px / 16 * 1rem;
}
.box {
  .px2rem(width, 200);
  .px2rem(height, 200);
  background: blue;
}
</style>

