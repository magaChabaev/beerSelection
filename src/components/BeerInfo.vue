<template>
  <div class="beer">
    <p class="beer_header">Beer:</p>
    <div class="beer_info">
      <div
        v-for="(value, name) in beerInfo"
        :key="value"
        class="beer_info_content"
      >
        <p class="content_info">{{ name }}:</p>
        <p class="content_value">{{ value }}</p>
      </div>
    </div>
    <button class="beer_button" @click="onClick">Another</button>
  </div>
</template>

<script scoped>
export default {
  name: "App",
  props: ["beerInfo", "searchAnotherBeer"],
  methods: {
    onClick() {
      this.$emit("onButtonClick");
    },
  },
};
</script>

<style>
.beer {
  display: flex;
  flex-direction: column;
  flex-basis: 70%;
}

.beer_header {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 50px;
}

.beer_info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.beer_info_content p {
  margin-top: 0;
}

.beer_info_content {
  display: flex;
  flex: 1 1 33.33%;
}

.content_info {
  font-weight: bold;
  font-size: 1rem;
}

.content_value {
  padding-left: 5px;
}

.beer_button {
  width: 100px;
  padding: 6px;
}
</style>
