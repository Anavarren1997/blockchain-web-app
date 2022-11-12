<template>
  <div class="info_header_container">
    <div class="left_container">
      <div class="info_container">
        <p>Coins: 13258</p>
      </div>
      <div class="info_container">
        <p>Exchanges: 600</p>
      </div>
      <div class="info_container">
        <p>Coins: 13258</p>
      </div>
      <div class="info_container">
        <p>Marketcap: $967,161,494,882</p>
      </div>
      <div class="info_container">
        <p>24h Vol.: $84,349,817,002</p>
      </div>
    </div>
    <div class="right_container"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.info_header_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}

.left_container {
  display: flex;
  flex-direction: row;
  column-gap: 1.5rem;
  font-size: 0.8rem;
}
</style>
