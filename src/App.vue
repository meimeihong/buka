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

<style lang="less" scoped>
@import './styles/main.less';
#app {
	/*border:1px solid @font;
	box-sizing:border-box;*/
}
</style>
