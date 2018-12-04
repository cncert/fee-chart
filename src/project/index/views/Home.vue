<template>
  <div class="home">
    <HelloWorld msg="index Home"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
