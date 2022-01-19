<template>
  <div class="info">
    <p class="info_header">Profile:</p>
    <div class="info_content">
      <img :src="avatar" class="info_header_avatar" />
      <div class="info_content_about">
        <div class="about_header">
          <p class="about_header_name">{{ firstName + " " + lastName }}</p>
        </div>
        <p class="about_footer">{{ email }}</p>
        <p class="about_footer">{{ phone }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: ["address", "firstName", "lastName", "avatar", "email", "phone"],
};
</script>

<style>
.info_content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: 100%;
}

.info_header {
  font-size: 2rem;
  margin-bottom: 50px;
  font-weight: bold;
}

.about_header {
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
}

.about_header_name {
  margin-top: 0;
  margin-bottom: 0;
}

.info_header_avatar {
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
