<template>
  <div class="responses_container">
    <h4 style="font-family: sans-serif">Responses</h4>
    <div class="responses" v-for="response in endpoint.types">
      <div class="response_code">
        <p>{{ response.code }}</p>
      </div>
      <div class="response_desc">
        <p>{{ response.desc }}</p>
      </div>
    </div>
    <div v-show="endpoint.data.length > 0" class="endpoint_response">
      <pre>
            {{ JSON.stringify(endpoint.data, null, 2) }}
          </pre
      >
    </div>
  </div>
</template>

<script>
import { useCardStore } from "../../stores/card.store";

export default {
  props: { id: "" },
  setup(props) {
    const cardStore = useCardStore();
    const endpoint = cardStore.endpoints[props.id].body.response;

    return { cardStore, endpoint };
  },
};
</script>

<style scoped>
.responses {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}

.endpoint_response {
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.2rem;
  background-color: #111;
  color: #f1f1f1;
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
