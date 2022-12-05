<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" href="#" @click="prev">&#10094;</a>
    <a class="next" href="#" @click="next">&#10095;</a>
  </div>
</template>

<script>
export default {
  name: 'Slides',
  data() {
    return {
      images: [
        '@../../../../photos/IMG_0614.PNG',
        '@../../../../photos/IMG_0613.PNG',
        '@../../../../photos/IMG_0611.PNG',
        '@../../../../photos/IMG_0612.PNG',
      ],
      timer: null,
      currentIndex: 0,
    }
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    },
  },

  mounted: function () {
    this.startSlide()
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 9000)
    },
    next: function () {
      this.currentIndex += 1
    },
    prev: function () {
      this.currentIndex -= 1
    },
    // Attempting Pause Resume Feature
    // pause: function () {
    //   this.timer = null
    // },
    // resume: function () {
    //   this.timer = setInterval(() => {
    //     this.next()
    //   }, this.sliderinterval)
    // },
  },
}
</script>

<style>
/* .fade-enter-active, */
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 20%;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
}

.prev {
  left: 0;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
