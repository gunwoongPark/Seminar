<template>
  <div>
    <img class="mainImg" src="../assets/image.jpg" />

    <v-container>
      <div data-aos="fade-left" data-aos-duration="1500" class="infoContainer">
        <img class="infoImg" src="../assets/icon.png" />
        <h2>PHOTO GALLERY</h2>
        <h4>사진 공유 커뮤니티</h4>
        <p>
          이 페이지는 사진을 공유하고 댓글 등을 남기며 소통하는 커뮤니티 사이트
          입니다. 아직 개발 중에 있습니다!
        </p>
      </div>
    </v-container>

    <v-container>
      <v-row v-masonry item-selector=".item">
        <v-col
          v-masonry-tile
          class="item"
          md="4"
          sm="6"
          cols="12"
          v-for="(img, i) in imageList"
          :key="i"
        >
          <div class="contentsImgContainer">
            <img class="contentsImg" :src="img" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  created() {
    AOS.init();
  },

  data() {
    return {
      imageList: [
        require("../assets/image (1).jpg"),
        require("../assets/image (2).jpg"),
        require("../assets/image (3).jpg"),
        require("../assets/image (4).jpg"),
        require("../assets/image (5).jpg"),
        require("../assets/image (6).jpg"),
        require("../assets/image (7).jpg"),
        require("../assets/image (8).jpg"),
        require("../assets/image (9).jpg"),
        require("../assets/image (10).jpg"),
        require("../assets/image (11).jpg"),
        require("../assets/image (12).jpg"),
      ],
    };
  },
};
</script>

<style scoped>
.mainImg {
  width: 100%;
}

.infoImg {
  width: 100px;
}

.contentsImg {
  width: 100%;
}

.infoContainer {
  margin-top: 100px;
}
</style>