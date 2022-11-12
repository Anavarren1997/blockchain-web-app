<template>
  <!-- v-for="(card, index) in cardStore.endpoints" -->
  <div class="cards_container">
    <CardHeader :id="0" @displayCardBody="showBody = !showBody"></CardHeader>
    <transition>
      <div class="body_wrapper" v-show="showBody">
        <CardBody :id="0"></CardBody>
      </div>
    </transition>
  </div>
</template>

<script>
import CardBody from "./CardBody.vue";
import CardHeader from "./CardHeader.vue";
import { useCardStore } from "../../stores/card.store";
import { ref } from "vue";

export default {
  setup() {
    const cardStore = useCardStore();
    cardStore.initMap();
    const showBody = ref(false);

    return { showBody, cardStore };
  },
  components: { CardHeader, CardBody },
};
</script>

<style scoped>
.cards_container {
  background-color: #f7deff;
  padding: 0 1.25rem;
  font-family: sans-serif;
  border-radius: 0.2rem;
  border: 0.13rem solid #efbdff;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
