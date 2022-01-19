<template>
  <div v-if="dataReady" class="container">
    <UserInfo
      :address="userInfo.address"
      :firstName="userInfo.first_name"
      :lastName="userInfo.last_name"
      :avatar="userInfo.avatar"
      :email="userInfo.email"
      :phone="userInfo.phone_number"
    />
    <BeerInfo :beerInfo="beerInfo" @onButtonClick="fetchAnotherBeer" />
  </div>
</template>

<script>
import UserInfo from "./components/UserInfo.vue";
import BeerInfo from "./components/BeerInfo.vue";

import { fetchUserData, fetchBeerData } from "./api/fetchApi";

export default {
  name: "App",
  components: {
    UserInfo,
    BeerInfo,
  },
  data() {
    return {
      userInfo: null,
      beerInfo: null,
      dataReady: false,
    };
  },
  methods: {
    async fetchAnotherBeer() {
      this.beerInfo = await fetchBeerData();
      console.log(123);
      for (let item in this.beerInfo) {
        if (item.includes("id")) delete this.beerInfo[item];
      }
    },
  },
  async mounted() {
    this.beerInfo = await fetchBeerData();
    this.userInfo = await fetchUserData();
    for (let item in this.beerInfo) {
      if (item.includes("id")) delete this.beerInfo[item];
    }
    this.dataReady = true;
  },
};
</script>

<style>
body {
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  background-repeat: no-repeat;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Dongle", sans-serif;
}

.container {
  display: flex;
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
}

@media screen and (max-width: 600px) and (min-width: 321px) {
  .container {
    display: flex;
    width: 80vw;
    height: 100vh;
    margin: 0 auto;
    align-items: center;
    flex-wrap: wrap;
    justify-content: start;
  }

  .beer_info {
    display: flex;
    flex-direction: column;
  }

  .beer {
    flex-grow: 1;
  }

  .beer_header {
    margin-bottom: 0px;
  }

  .info_header {
    font-size: 2rem;
    margin: 0px;
    font-weight: bold;
  }
}
@media screen and (max-width: 320px) {
  .container {
    align-items: center;
  }

  .beer {
    flex-grow: 1;
  }

  p {
    margin: 5px;
  }
}
</style>
