<template>
    <div id="app">
        <router-view name="header" id="header"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <router-view name="footer" id="header"></router-view>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>
<style lang="scss" scoped>
  #header {
    position: fixed;
    width: 100%;

  }
</style>
