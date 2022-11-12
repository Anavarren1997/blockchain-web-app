<template>
  <CardBodyHeader :id="id"></CardBodyHeader>
  <CardBodyParams :id="id"></CardBodyParams>
  <CardBodyResponse :id="id"></CardBodyResponse>
</template>

<script>
import CardBodyHeader from "./CardBodyHeader.vue";
import CardBodyParams from "./CardBodyParams.vue";
import CardBodyResponse from "./CardBodyResponse.vue";

export default {
  components: { CardBodyHeader, CardBodyParams, CardBodyResponse },
  props: { id: "" },
};
</script>

<style scoped></style>
