<template>
  <div class="headers_container">
    <div class="header_title">
      <h4 style="font-family: sans-serif">Headers</h4>
      <button @click="cardStore.endpointCall(id)">Try it out</button>
    </div>
    <div class="header1" v-for="header in endpoint.headers">
      <label> {{ header }} </label>
      <input type="text" v-bind:id="header" />
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
.headers_container {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.header_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header_title > button {
  width: 6rem;
  height: 1.5rem;
  cursor: pointer;
}

.header1 {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}

input[type="text"]:focus {
  outline: none;
}
</style>
