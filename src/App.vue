<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { TEngine } from "../src/assets/ts/TEngine";
import { objects } from "../src/assets/ts/TBasicObject";
import { lights } from "../src/assets/ts/TLights";
import { helpers } from "./assets/ts/THelper";
import { loaders } from "./assets/ts/TLoader";

export default defineComponent({
  setup() {
    //获取threeTarget 的Dom对象
    const threeTarget = ref(null);

    onMounted(() => {
      const TE = new TEngine(threeTarget.value!);
      TE.addObject(...objects);
      TE.addObject(...lights);
      TE.addObject(...helpers);
      TE.addObject(...loaders);
    });

    return {
      threeTarget,
    };
  },
});
</script>


<style>
.three-canvas {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
