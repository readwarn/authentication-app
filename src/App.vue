<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
font-family: 'Noto Sans JP', sans-serif;
}
body,div#app{
        margin: 0;
        min-height: 100vh;
 }
</style>
