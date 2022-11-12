<template>
  <div class="api_card_header_container" @click="displayInfo">
    <div class="api_call_info">
      <div class="call_method">
        <p>{{ endpoint.method }}</p>
      </div>
      <div class="call_desc">
        <p class="api_url">{{ endpoint.url }}</p>
        <p class="desc">{{ endpoint.desc }}</p>
      </div>
    </div>
    <div class="dropdown">
      <component :is="cardIcon" class="icon"></component>
    </div>
  </div>
</template>

<script>
import DropdownIcon from "../../icons/DropdownIcon.vue";
import DropupIcon from "../../icons/DropupIcon.vue";
import { useCardStore } from "../../stores/card.store";
export default {
  components: { DropdownIcon, DropupIcon },
  props: {
    id: "",
  },
  setup(props) {
    const cardStore = useCardStore();
    const endpoint = cardStore.endpoints[props.id].header;
    return { cardStore, endpoint };
  },
  data() {
    return {
      cardIcon: "DropdownIcon",
    };
  },
  methods: {
    displayInfo() {
      this.cardIcon =
        this.cardIcon === "DropdownIcon" ? "DropupIcon" : "DropdownIcon";
      this.$emit("displayCardBody");
    },
  },
};
</script>

<style scoped>
.api_card_header_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-height: 3rem;
  cursor: pointer;
}

.api_call_info {
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 1.5rem;
}

.call_method > p {
  font-weight: bold;
  background-color: #efbdff;
  padding: 0.4rem 0.75rem;
  border-radius: 0.2rem;
}

.call_desc {
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 1rem;
}

.api_url {
  font-weight: bold;
}

.call_desc > .desc {
  font-size: 0.9rem;
}

.dropdown {
  display: flex;
  align-items: center;
}

.icon {
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
}
</style>
