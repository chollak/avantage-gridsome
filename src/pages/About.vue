<template>
  <Layout>
    <h1>About us</h1>
    <video
      playsinline="playsinline"
      preload="none"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
      id="videod"
    >
      <source :src="standSection.video" type="video/mp4" />
    </video>
  </Layout>
</template>

  <page-query>
query {
   fullPage: allFullPage {
    edges{
      node{
        aboutSection{
          video
          image_1{
            alt
            image
          }
          carousel{
            id
            image
            alt
          }
        }
        standSection{
          video
          carousel{
            id
            image
            alt
          }
        }
        cateringSection{
          carousel{
            id
            image
            alt
          }
        }
        registerSection{
          carousel{
            id
            image
            alt
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
  mounted() {
    const videoElement = document.getElementById("videod");

    videoElement.addEventListener("loadeddata", (e) => {
      //Video should now be loaded but we can add a second check

      if (videoElement.readyState >= 3) {
        //your code goes here
        console.log('loaded');
      }
    });
  },
  computed: {
    aboutSection() {
      return this.$page.fullPage.edges[0].node.aboutSection;
    },
    standSection() {
      return this.$page.fullPage.edges[0].node.standSection;
    },
  },
};
</script>
