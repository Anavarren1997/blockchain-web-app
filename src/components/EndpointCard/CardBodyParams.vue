<template>
  <div class="parameters_container">
    <h4 style="font-family: sans-serif">Parameters</h4>
    <div class="parameter_inputs">
      <div class="input1" v-for="param in endpoint.params">
        <label>{{ param }}</label>
        <input type="text" v-bind:id="param" />
      </div>
    </div>
  </div>
</template>

<script>
import { useCardStore } from "../../stores/card.store";

export default {
  props: { id: "" },
  setup(props) {
    const cardStore = useCardStore();
    const endpoint = cardStore.endpoints[props.id].body;

    return { cardStore, endpoint };
  },
};
</script>

<style scoped>
.parameter_inputs {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.input1 {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}

input[type="text"]:focus {
  outline: none;
}
</style>
