<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { TEngine } from "../src/assets/ts/TEngine";
import { objects } from '../src/assets/ts/TBasicObject'
import { lights } from '../src/assets/ts/TLights'


export default defineComponent({

  setup() {
    //获取threeTarget 的Dom对象
    const threeTarget = ref(null);

    onMounted(() => {
      const TE = new TEngine(threeTarget.value!);
      TE.addObject(...objects)
      TE.addlight(...lights)
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
