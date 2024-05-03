<script setup>
</script>

<style scoped>
  section > *{
    max-width: 1024px;
    margin-inline: auto;
  }
  section:nth-of-type(2n) {
    background-color: rgba(var(--brown-rgb), 0.3);
  }
</style>
<template>
  <div>
    <!-- Sub Heading-->
    <section class="py-24 px-8 text-center">
      <i class="fas fa-quote-left mb-4 text-xl"></i>
      <h1 class="text-4xl mb-3">Grill, Chill, and Thrill at GAON</h1>
      <h2 class="text-2xl mb-4">The Authentic Korean BBQ Experience.</h2>
      <i class="fas fa-quote-right mb-4 text-xl"></i>
    </section>
    <!-- Menu Section -->
    <section class="py-24 px-8 text-center">
      <h2 class="section-title mb-4 text-3xl">GAON Menus</h2>
      <div class="mx-auto mb-6 text-xl"><i class="fas fa-hashtag"></i> Specialties</div>
      <p class="mb-8">Want to see what we're cooking up?</p>
      <button class="bg-transparent border-2 border-white text-white py-2 px-8 hover:bg-white hover:text-black transition-colors"><router-link :to="{ name: 'Menu'}" class="no-underline">View All Menus</router-link></button>
      <!-- images... -->
    </section>

    <section class="py-24 px-8 text-center">
      <h3 class="text-2xl mb-6">Our Story</h3>
      <p class="leading-8">Welcome to GAON, where every meal is a celebration of togetherness and the rich flavors of Korea. Since our doors opened in 2018, we have been committed to bringing authentic Korean BBQ to the heart of Palmerston North. At GAON, we believe that the best meals are not just eaten but experienced. This belief is at the core of our dining philosophy, making us a favored destination for food lovers seeking an engaging eat-out adventure.</p>
      <!-- images... -->
    </section>

    <section class="py-24 px-8 text-center">
      <h3 class="text-2xl mb-6">Gallery</h3>
      <div class="flex flex-row">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
      <!-- images... -->
    </section>

    <section class="py-24 px-8 text-center">
      <h3 class="text-2xl mb-6">Why GAON ?</h3>
      <p class="leading-8">At GAON, <i>GAON</i> means <i>center</i> in Korean, and that’s what we aim to be: the center of great food, great service, and great memories. We source only the finest ingredients, including premium cuts of meat and the freshest produce, to ensure that every dish served is of the highest quality. Our traditional marinades and recipes have been perfected over generations, bringing both classic dishes and innovative offerings to your table.</p>
    </section>
    
    <!-- <div class="text-left mb-8">
        <h3 class="text-xl mb-3">Our Story</h3>
        <p>Welcome to GAON, where every meal is a celebration of togetherness and the rich flavors of Korea. Since our doors opened in 2018, we have been committed to bringing authentic Korean BBQ to the heart of Palmerston North. At GAON, we believe that the best meals are not just eaten but experienced. This belief is at the core of our dining philosophy, making us a favored destination for food lovers seeking an engaging eat-out adventure.</p>
      </div>
      <div class="text-left mb-8">
        <h3 class="text-xl mb-3">Our Journey</h3>
        <p>GAON was born from a passion for Korean cuisine and a desire to share it with the world. Our founders, seasoned chefs with deep roots in Korean culinary traditions, envisioned a place where locals could gather not just to dine, but to engage in the communal joy of cooking and sharing meals. In less than five years, GAON has transformed from a new restaurant on the block to a bustling hub often filled with the sizzle of grills, the laughter of diners, and the savory aroma of marinated meats.</p>
      </div>
      <div class="text-left mb-8">
        <h3 class="text-xl mb-3">Why Gaon?</h3>
        <p>At GAON, <i>GAON</i> means <i>center</i> in Korean, and that’s what we aim to be: the center of great food, great service, and great memories. We source only the finest ingredients, including premium cuts of meat and the freshest produce, to ensure that every dish served is of the highest quality. Our traditional marinades and recipes have been perfected over generations, bringing both classic dishes and innovative offerings to your table.</p>
      </div>
      <div class="text-left mb-8">
        <h3 class="text-xl mb-3">Our Popularity</h3>
        <p>Thanks to the support of our community, Gaon has quickly become one of the most popular Korean BBQ spots in Palmerston North. Our commitment to quality and service has earned us a loyal following, and we continue to welcome newcomers and regulars alike who are looking to indulge in the unique, interactive dining experience we provide.</p>
      </div>
      <div class="text-left mb-8">
        <h3 class="text-xl mb-3">Join Us</h3>
        <p>Whether you are a Korean BBQ aficionado or new to this exciting culinary style, we invite you to Gaon to grill, chill, and thrill. Discover new tastes, enjoy old favorites, and perhaps, leave with a few stories of your own. Book a table today and experience the warmth and richness of Korean BBQ at Gaon, your center for an authentic grill-and-dine experience.</p>
      </div> -->

    <!-- Contact Section -->
    <section class="py-24 px-8 text-center">
      <h2 class="contact-title mb-4 text-3xl">Join Us</h2>
      <div class="mx-auto mb-6 text-xl"> <a href="https://www.instagram.com/gaonbbq/" target="_blank"><i class="fas fa-hashtag"></i> Follow GAON</a></div>
      <p class="leading-8 mb-16">Whether you are a Korean BBQ aficionado or new to this exciting culinary style, we invite you to Gaon to grill, chill, and thrill. Discover new tastes, enjoy old favorites, and perhaps, leave with a few stories of your own. Book a table today and experience the warmth and richness of Korean BBQ at Gaon, your center for an authentic grill-and-dine experience.</p>

      <div class="flex flex-col-reverse md:flex-row justify-evenly gap-10 text-left">
        <div class="flex flex-col items-start justify-center flex-1">
          <div class="flex items-start gap-2 mb-2">
            <i class="fas fa-map-marker-alt pt-1"></i>
            <a href="https://www.google.com/maps/dir//gaon+google+map/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x6d41b326dbca86c5:0xb8c20b15749bcee7?sa=X&ved=1t:3061&ictx=111">130 The Square,<br> Palmerston North City, <br>4410</a>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="fas fa-clock"></i>
            <p>Monday - Sunday 5pm - 9pm</p>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="fas fa-phone"></i>
            <a href="tel:063575678">06 357 5678</a>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="fas fa-envelope"></i>
            <a href="mailto:GAON3575678@gmail.com">GAON3575678@gmail.com</a>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="fab fa-facebook-f"></i>
            <a href="https://www.facebook.com/gaonPN/">GAON@fackbook</a>
          </div>
        </div>
        <iframe class="flex-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6080.899078096104!2d175.60850671131053!3d-40.354555571330664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d41b326dbca86c5%3A0xb8c20b15749bcee7!2sGAON%20Restaurant!5e0!3m2!1sen!2sus!4v1713491047186!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </section>  
  </div>
</template>