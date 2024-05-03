<script setup>
  import emblaCarouselVue from 'embla-carousel-vue'
  import Autoplay from 'embla-carousel-autoplay'
  import { ref } from 'vue'

  const [emblaRef] = emblaCarouselVue({ loop: false }, [Autoplay({delay:5000})])

  const logoImage = ref("./src/assets/logo.png") 
  const logoImage1 = ref("./src/assets/logo1.png") 
  const logoImage2 = ref("./src/assets/logo2.png") 
  const bgImage1 = ref("./src/assets/bg-image1.jpg") 
  const bgImage2 = ref("./src/assets/bg-image2.jpg") 
  const bgImage3 = ref("./src/assets/bg-image3.jpg") 
  const bgImage4 = ref("./src/assets/bg-image4.jpg") 
  const bgImage5 = ref("./src/assets/bg-image5.jpg") 
  const heroText = ref(0)

  const heroTextActive = (() => {
    heroText.value = 1;
  })

  setTimeout(() => {
    heroTextActive();
  }, 1000);

</script>
<style scoped="scss">
  .embla {
    overflow: hidden;
    width: 100%;

    .embla__container {
      display: flex;
      
      .embla__slide {
        flex: 1 0 100%;
        height: 100vh;
        object-fit: cover;
      }
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: .5;
    background: #303030;
  }

  .heroText {
    top: calc(50% + 30px);
    opacity: 0;

    &.active {
      top: 50%;
      transition: all 0.5s ease;
      opacity: 1;
    }
  }

</style>
<template>
  <div class="absolute top-0 z-10 p-8">
    <router-link :to="{ name: 'Home'}">
      <img :src="logoImage" alt="GAON Logo">
    </router-link>
  </div>
  <!-- Hero Section -->
  <header class="hero-bg h-screen flex flex-col justify-center items-center text-center">
    <div class="embla" ref="emblaRef">
      <div class="embla__container">
        <img :src="bgImage1" class="embla__slide"></img>
        <img :src="bgImage2" class="embla__slide"></img>
        <img :src="bgImage3" class="embla__slide"></img>
        <img :src="bgImage4" class="embla__slide"></img>
        <img :src="bgImage5" class="embla__slide"></img>
      </div>
      <div class="overlay"></div>
      <div class="absolute left-1/2  -translate-y-1/2 -translate-x-1/2 z-10 heroText" :class="{ 'active' : heroText }">
        <img :src="logoImage1" alt="GAON Logo" class="mb-6">
        <img :src="logoImage2" alt="GAON Logo" class="mb-6">
        <button class="bg-transparent border-2 border-white text-white py-2 px-8 hover:bg-white hover:text-black transition-colors"><router-link :to="{ name: 'Menu'}" class="hover:no-underline">View Menus</router-link></button>
      </div>      
    </div>
  </header>

  <main>
    <router-view />
  </main>
  
  <!-- Footer Section -->
  <footer class="bg-black py-4 px-8 text-center">
    <div class="flex justify-center items-center mb-4">
      <a href="#" class="text-gray-400 hover:text-white mx-2">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="text-gray-400 hover:text-white mx-2">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="text-gray-400 hover:text-white mx-2">
        <i class="fab fa-twitter"></i>
      </a>
    </div>
    <p class="info-text">All rights reserved | 2024 GAON.co.nz</p>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
