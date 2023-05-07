<template>
    <div id="app">
        <SimpleComponent/>
    </div>
</template>

<script>
import SimpleComponent from './components/SimpleComponent.vue'

export default {
    name: 'App',
    components: {
        SimpleComponent
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    justify-content: center;
    alignment-baseline: center;
    color: #2c3e50;
    margin: 50px;
}
</style>
