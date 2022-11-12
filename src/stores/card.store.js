import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
const apiUrl = `http://localhost:8080`;

export const useCardStore = defineStore({
  id: "card",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    endpointIds: [0],
    endpointsMap: new Map(),
    endpoints: [
      {
        header: {
          method: "GET",
          url: "/api/coins/markets",
          desc: "Get the current price of any cryptocurrency in dollars.",
        },
        body: {
          headers: ["authorization", "anotherheader"],
          params: ["currency", "hair"],
          response: {
            types: [
              { code: "200", desc: "List all coins with market data" },
              { code: "401", desc: "forbidden" },
            ],
            data: [],
          },
        },
      },
    ],
  }),
  actions: {
    initMap() {
      this.endpointsMap.set(0, this.endpoints[0]);
    },
    async fetchEndpoints() {
      try {
        const res = await axios.get("http://localhost:8080/api/endpoints");
        res.data.forEach((d) => {
          this.endpointsMap.set(d.id, d);
        });
      } catch (error) {
        console.log(error);
      }
    },
    async endpointCall(endpointId) {
      let endpoint = this.endpointsMap.get(endpointId);
      /*
      Build the query with endpoint data:
        header-> method and url
        body-> headers and params
      */
      try {
        const res = await axios.get(apiUrl + endpoint.header.url, {
          params: {
            vs_currency: "usd",
          },
        });
        endpoint.body.response.data = res.data;
        this.endpointsMap.set(endpointId, endpoint);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
