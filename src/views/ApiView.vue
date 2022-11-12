<template>
  <h1 style="font-family: sans-serif; user-select: none">w3 Api Calls</h1>
  <div class="api_container">
    <div class="api_card_header_container" @click="displayInfo">
      <div class="api_call_info">
        <div class="call_method">
          <p>GET</p>
        </div>
        <div class="call_desc">
          <p class="api_url">/crypto/price</p>
          <p class="desc">
            Get the current price of any cryptocurrency in dollars.
          </p>
        </div>
      </div>
      <div class="dropdown">
        <component :is="cardIcon" class="icon"></component>
      </div>
    </div>
    <transition>
      <div v-show="displayCallInfo" class="hodda">
        <div class="top_border"></div>
        <div class="headers_container">
          <div class="header_title">
            <h4 style="font-family: sans-serif">Headers</h4>
            <button @click="fetchEndpointData">Try it out</button>
          </div>
          <div class="header1">
            <label for="authorization">Authorization</label>
            <input type="text" id="authorization" />
          </div>
        </div>
        <div class="parameters_container">
          <h4 style="font-family: sans-serif">Parameters</h4>
          <div class="parameter_inputs">
            <div class="input1">
              <label for="vs_currency">vs_currency *</label>
              <input type="text" id="vs_currency" v-model="vs_currency" />
            </div>
          </div>
        </div>
        <div class="responses_container">
          <h4 style="font-family: sans-serif">Responses</h4>
          <div class="responses">
            <div class="response_code">
              <p>200</p>
            </div>
            <div class="response_desc">
              <p>List all coins with market data</p>
            </div>
          </div>
          <div v-show="response.length > 0" class="endpoint_response">
            <pre>
              {{ JSON.stringify(response, null, 2) }}
            </pre>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import DropdownIcon from "../icons/DropdownIcon.vue";
import DropupIcon from "../icons/DropupIcon.vue";
import axios from "axios";
export default {
  components: { DropdownIcon, DropupIcon },
  data() {
    return {
      displayCallInfo: false,
      cardIcon: "DropdownIcon",
      vs_currency: "",
      response: [],
    };
  },
  methods: {
    displayInfo() {
      this.displayCallInfo = !this.displayCallInfo;
      this.cardIcon =
        this.cardIcon === "DropdownIcon" ? "DropupIcon" : "DropdownIcon";
    },
    fetchEndpointData() {
      axios
        .get(`http://localhost:8080/api/coins/markets`, {
          params: {
            vs_currency: this.vs_currency,
          },
        })
        .then((res) => {
          console.log(typeof res.data);
          this.response = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scooped>
.api_container {
  background-color: #f7deff;
  padding: 0 1.25rem;
  font-family: sans-serif;
  border-radius: 0.2rem;
  border: 0.13rem solid #efbdff;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

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

.dropdown > .icon {
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
}

.hodda {
  user-select: none;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.top_border {
  border-top: 1px solid #efbdff;
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

.parameter_inputs,
.headers_container {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.input1,
.header1 {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}

input[type="text"]:focus {
  outline: none;
}

.responses {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}

h4 {
  margin: 1rem 0rem 1rem 0rem;
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
