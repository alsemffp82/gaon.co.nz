<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const filtered = ref('ALL');

    // expose to template and other options API hooks
    return {
      count,
      filtered
    }
  },

  methods: {
    clickFilter(val) {
      this.filtered = val;
    },
  },

  mounted() {
    const div = document.getElementsByTagName('main')[0];
    console.log(div.offsetTop);
    setTimeout(() => {
      window.scrollTo({top: div.offsetTop, behavior: 'smooth'});
    },1000)
  },
}
</script>
<style scoped="scss">
  .filters {
    display: table;
    width: 100%;
    padding: 0;
    margin-bottom: 100px;
    overflow: hidden;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 10px 30px 0px rgba(153, 153, 153, 0.2);
    text-align: center;

    li {
      position: relative;
      display: table-cell;
      max-width: 1px;
      padding: 40px 0px;
      font-size: 14px;
      font-weight: 500;
      color: #222;
      cursor: pointer;
      border-right: 1px solid #edf6ff;

      &.active {
        color: #fff;
        background: #B28247;
      }
    }
  }

  .text-lg.font-bold {
    span {
      display: block;
      font-weight:500; 
      font-size:16px; 
      color:rgb(96,96,96); 
      line-height:1.8;
      margin-top:1.5em;
      &:nth-of-type(2) {
        margin-top: 0;
      }
    }
    .text-xs {
      margin-top: 0;
      font-size: 12px;
    }
    p>span {
      font-style: italic;
    }
  }
  .BBQ .text-lg.font-bold .text-xs {
    color: hotpink;
  }
  .MAIN .text-lg.font-bold .text-xs {
    color: salmon;
  }
  .Dessert .text-lg.font-bold .text-xs {
    color: olivedrab;
  }
  .ALCOHOLIC .text-lg.font-bold .text-xs {
    color: #fdca40;
  }
  .NON .text-lg.font-bold .text-xs {
    color: midnightblue;
  }
  .CHICKEN.text-xs {
    color: orchid;
  }
  .price {
    font-weight: bold;
    color: #B28247;
  }
  .price .menu_img {
    font-size: 12px;
    color: darkgreen;
  }

</style>

<template>
  <div class="bg-slate-100 py-20">
    <section class="py-24 px-8 text-center">
      <h2 class="section-title mb-4 text-3xl">Our Menus</h2>
      <div class="mx-auto mb-6 text-xl"><i class="fas fa-hashtag"></i> Specialties</div>
      <p class="mb-8">Want to see what we're cooking up?</p>
      <!-- images... -->
    </section>
    <section class="" id="menu">
      <div class="max-w-5xl mx-auto px-8">
          <ul class="filter-wrap filters">
            <li @click="clickFilter('BBQ')" :class="{'active': this.filtered == 'BBQ'}">BBQ Party</li>
            <li @click="clickFilter('ENTREE')" :class="{'active': this.filtered == 'ENTREE'}">Entree</li>
            <li @click="clickFilter('MAIN')" :class="{'active': this.filtered == 'MAIN'}">Main</li>
            <li @click="clickFilter('Dessert')" :class="{'active': this.filtered == 'Dessert'}">Kids Menu &amp; Dessert</li>
            <li @click="clickFilter('ALCOHOLIC')" :class="{'active': this.filtered == 'ALCOHOLIC'}">Alcoholic &amp;Drink</li>
            <li @click="clickFilter('NON')" :class="{'active': this.filtered == 'NON'}">NON &amp; Alcoholic &amp; Drink</li>
            <li @click="clickFilter('ALL')" :class="{'active': this.filtered == 'ALL'}">All</li>
          </ul>
          <div class="filters-content">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <!--BBQ Party-->
                <div class="all BBQ" v-show="this.filtered == 'BBQ' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price flex flex-col">
                            <span class="menu_img">For 1 &nbsp;&nbsp;/&nbsp;&nbsp; For 2 &nbsp;&nbsp;/&nbsp;&nbsp; For 3</span>
                            <span>$43 / $85 / $128</span>
                        </h4>
                        <div class="text-lg font-bold">
                            <h4>MEAT PARTY</h4>
                            <h4>(BEEF / PORK / BEEF &amp; PORK)</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all BBQ" v-show="this.filtered == 'BBQ' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price flex flex-col">
                            <span class="menu_img">For 1 &nbsp;&nbsp;/&nbsp;&nbsp; For 2 &nbsp;&nbsp;/&nbsp;&nbsp; For 3</span>
                            <span>$44 / $87 / $131</span>
                        </h4>
                        <div class="text-lg font-bold">
                            <h4>LAMB PARTY </h4>
                            <h4>(LAMB / LAMB &amp; PORK)</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all BBQ" v-show="this.filtered == 'BBQ' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price flex flex-col">
                            <span class="menu_img">For 1 &nbsp;&nbsp;/&nbsp;&nbsp; For 2 &nbsp;&nbsp;/&nbsp;&nbsp; For 3</span>
                            <span>$&nbsp;X / $88 / $133</span>
                        </h4>
                        <div class="text-lg font-bold">
                            <span class="text-xs">choose two</span>                                        
                            <h4>MARINATED&nbsp;PARTY</h4>
                            <h4>(BEEF / PORK / CHCKEN)</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all BBQ" v-show="this.filtered == 'BBQ' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price flex flex-col">
                            <span class="menu_img">For 1 &nbsp;&nbsp;/&nbsp;&nbsp; For 2 &nbsp;&nbsp;/&nbsp;&nbsp; For 3</span>
                            <span>$54 / $107 / $160</span>
                        </h4>
                        <div class="text-lg font-bold">
                            <h4>WAGYU PARTY </h4>
                            <h4>(PREMIUM BEEF) </h4>
                        </div>
                      </div>
                  </div>
                </div>
                <!--ENTREE-->
                <div class="all ENTREE" v-show="this.filtered == 'ENTREE' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$18</h4>
                        <div class="text-lg font-bold">
                            <h4>
                              DAK GANG JEONG
                              <!--<span class="menu_img">img</span>-->
                            </h4>
                            <span>honey and soy deep fried crispy chicken</span>
                            <span>server with sweet &amp; sour radish</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ENTREE" v-show="this.filtered == 'ENTREE' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$15</h4>
                        <div class="text-lg font-bold">
                          <h4>
                            JEON <!--<span class="menu_img">&nbsp;img</span>-->
                          </h4>
                          <span>korean style pancake with mixed vegetable</span>									
                          <p><span>Seafood &nbsp;&nbsp;&nbsp;&nbsp;/ &nbsp;&nbsp;&nbsp;&nbsp;Kimchi (V)</span></p>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ENTREE" v-show="this.filtered == 'ENTREE' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$15</h4>
                        <div class="text-lg font-bold">
                            <h4>JAP CHAE</h4>
                            <span>sweet &amp; savory dish of stir&nbsp;fried&nbsp;wide&nbsp;glass noodle with vegetables</span>
                            <p><span>Beef (GFrequired) / Vegetable (V / GFrequired)</span></p>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ENTREE" v-show="this.filtered == 'ENTREE' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$15</h4>
                        <div class="text-lg font-bold">
                            <h4>T - KIM (V)</h4>
                            <span>variety of deep-fried seasonal vegetables with dipping sauces</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ENTREE" v-show="this.filtered == 'ENTREE' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$15</h4>
                        <div class="text-lg font-bold">
                            <h4>TOFU SALDA (V)</h4>
                            <span>deep-fried tofu with seasonal salad, oriental dressing and mixed nuts</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ENTREE" v-show="this.filtered == 'ENTREE' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$19</h4>
                        <div class="text-lg font-bold">
                            <h4>PRAWN										
                              &amp; SCALLOP (GFrequired)
                            </h4>
                            <span>pan-fried tiger prawn and scallop with butter sauce</span>
                          </div>
                      </div>
                  </div>
                </div>
                <!--MAIN-->
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$32</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs grill-color">Grilled</span>
                          <h4>LA GALBI</h4>
                          <span>grilled beef short ribs</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$29</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs grill-color">Grilled</span>
                          <h4>SPICY SQUID</h4>
                          <span>spicy stir-fried squid with vegetables </span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$28</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs grill-color">Grilled</span>
                          <h4>BULGOGI</h4>
                          <span>stir-fried soy based thin marinated beef with vegetables</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$28</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs grill-color">Grilled</span>
                          <h4>JUMULLUCK</h4>
                          <span>spicy stir-fried pork scotch fillet with vegetables</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$28</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs grill-color">Grilled</span>
                          <h4>CHI-BAB</h4>
                          <span>CRISPY DEEP-FRIED CHICKEN WITH SALAD AND RICE</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$23</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs rice-color">Rice</span>
                          <h4>BIBIMBAB</h4>
                          <span>mixed rice with beef or tofu and assorted vegetable with sauce</span>
                          <p><span>Beef (GFrequired) / &nbsp;ToFU (V / GFrequired)</span></p>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$28</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">Soup</span>
                          <h4>GALBI TANG</h4>
                          <span>big size beef short rib soup</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$30</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">Slow-Cooked</span>
                          <h4>KIMCHI JJIM</h4>
                          <span>slow cooked spicy kimchi stew with pork spare ribs</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$30</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">Slow-Cooked</span>
                          <h4>DAK DORI TANG</h4>
                          <span>slow cooked chicken and vegetables with spicy Korean sauce</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--KID MENU & DESSERT-->
                <div class="all Dessert" v-show="this.filtered == 'Dessert' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$9</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">Kids Menu</span>
                          <h4>CORN DOG</h4>
                          <span>corn dog with chips and tamato sauce</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all Dessert" v-show="this.filtered == 'Dessert' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$9</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">Kids Menu</span>
                          <h4>POPCORN CHICKEN</h4>
                          <span>bite size pieces of soy &amp; honey chicken with chips</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all Dessert" v-show="this.filtered == 'Dessert' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$9</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">Kids Menu</span>
                          <h4>CURLY FRIES</h4>
                          <span>crispy fried potatoes with tomato sauce</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$48</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs Chicken">Chicken</span>
                          <h4>HONEY & GARLIC</h4>
                          <span>extra crispy fried boneless chicken served with a variety of deep-fried chips</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$48</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs Chicken">Chicken</span>
                          <h4>SWEET & SPICY</h4>
                          <span>extra crispy fried boneless chicken served with a variety of deep-fried chips</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all MAIN" v-show="this.filtered == 'MAIN' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$50</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs Chicken">Chicken</span>
                          <h4>HALF & HALF</h4>
                          <span>extra crispy fried boneless chicken served with a variety of deep-fried chips</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all Dessert" v-show="this.filtered == 'Dessert' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$12</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">Dessert</span>
                          <h4>ICE-CREAM PLATTER</h4>
                          <span>ice cream with sweets & fruits</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all Dessert" v-show="this.filtered == 'Dessert' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$15</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">Dessert</span>
                          <h4>HO DDUCK</h4>
                          <span>Korean sweet pancake with&nbsp;ice cream and nuts</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--DRINK-->
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$9</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">NON ALCOHOLIC DRINK</span>
                          <h4>Chocolate Mud Shake</h4>
                          <span>hand-scooped choco icecream. milk. choco chips</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$9</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">NON ALCOHOLIC DRINK</span>
                          <h4>Strawberry Pina Colada</h4>
                          <span>strawberry. pinacolada. milk</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$9</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">NON ALCOHOLIC DRINK</span>
                          <h4>Mojito Cooler</h4>
                          <span>mint. mojito. lime juice. ice</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$8</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">NON ALCOHOLIC DRINK</span>
                          <h4>Cinderella</h4>
                          <span>orange juice. pineapple juice. raspberry. lemonade</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$9</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">NON ALCOHOLIC DRINK</span>
                          <h4>Rosemong</h4>
                          <span>hibiscus. grapefruit. soda water</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$8</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">NON ALCOHOLIC DRINK</span>
                          <h4>Blue Lagoon</h4>
                          <span>blue curacao. lemon syrup. blue berry. soda water</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--korean soft drink-->
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$4</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">KOREAN SOFT DRINK</span>
                          <h4>Crushed Pear Juice (IDH)</h4>
                          <span>steady seller products using Korea Pear known as IdH good for a hangover cure</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$5</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">KOREAN SOFT DRINK</span>
                          <h4>Sweet Rice Punch (Sik Hye)</h4>
                          <span>traditional sweet rice punch moderately sweet flavour and unique barley smell with floating rice</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$5</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">KOREAN SOFT DRINK</span>
                          <h4>Cinnamon Punch (Su Jeong Gwa)</h4>
                          <span>traditional cinnamon punch spiciness as intense cinnamon and ginger taste</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--SOFT DRINK & JUICE-->
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$4</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SOFT DRINK &amp; JUICE</span>
                          <h4>Coke. Coke Zero. Sprite</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$5</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SOFT DRINK &amp; JUICE</span>
                          <h4>Orange Juice. Pineapple Juice. Apple Juice</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$6</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SOFT DRINK &amp; JUICE</span>
                          <h4>Ginger Beer (Bundaberg)</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$5</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SOFT DRINK &amp; JUICE</span>
                          <h4>Lemon Lime and Bitter (house-made)</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$9</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SOFT DRINK &amp; JUICE</span>
                          <h4>Antipodes Sparkling / Still Water</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <!--HOT TEA-->
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">pot 6</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">HOT TEA</span>
                          <h4>Tutti Fruitea</h4>
                          <span>organic flower. calming</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">pot 6</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">HOT TEA</span>
                          <h4>Rose Buds</h4>
                          <span>organic loose leaf. sugar free sweet</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">pot 6</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">HOT TEA</span>
                          <h4>Mint</h4>
                          <span>organic loose leaf. refreshing</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">cup 4</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">HOT TEA</span>
                          <h4>English Breakfast Tea</h4>
                          <span>tea bag with milk &amp; sugar</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all NON" v-show="this.filtered == 'NON' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">cup 3 pot 5</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">HOT TEA</span>
                          <h4>Brown Rice Greentea</h4>
                          <span>teabag</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--BUBBLE-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">11</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BUBBLE</span>
                          <h4>Veuve du Vernay Brut 200ml</h4>
                          <span>Bordeaux. France</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">11</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BUBBLE</span>
                          <h4>Veuve du Vernay Rose 200ml</h4>
                          <span>Bordeaux. France</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">75</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BUBBLE</span>
                          <h4>H.Lanvin &amp; Fils NV Brut 750ml</h4>
                          <span>Champagne. France</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--AROMATIC-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">11/42</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">AROMATIC</span>
                          <h4>Lawsons dry Hill Rose</h4>
                          <span>Marlborough 2018</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">13/53</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">AROMATIC</span>
                          <h4>Hunter's  Riesling</h4>
                          <span>Marlborough 2018</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--SAUVIGNON BLANC-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">10/36</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SAUVIGNON BLANC</span>
                          <h4>Rongopai Sauvignon Blanc</h4>
                          <span>Marlborough 2018</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">11/41</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SAUVIGNON BLANC</span>
                          <h4>Babich Black Label Sauvignon</h4>
                          <span>Marlborough 2018</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">13/58</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SAUVIGNON BLANC</span>
                          <h4>Hunter's Kaho Roa Sauvignon</h4>
                          <span>Marlborough 2017</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--PINOT GRIS-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">10/36</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">PINOT GRIS</span>
                          <h4>Rongopai Pinot Gris</h4>
                          <span>Marlborough 2017</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">13/53</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">PINOT GRIS</span>
                          <h4>Main Divide Pinot Gris</h4>
                          <span>North Canterbury 2016</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--CHARDONNAY-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">10/36</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">CHARDONNAY</span>
                          <h4>Rongopai Chardonnay</h4>
                          <span>Hawke's Bay 2017</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">11/41</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">CHARDONNAY</span>
                          <h4>Babich Black Label Chardonnay</h4>
                          <span>Hawke's Bay 2017</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--PINOT NOIR-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <span>PINOT NOIR</span>
                        <h4 class="price">11/41</h4>
                        <div class="text-lg font-bold">
                          <h4>Rongopai Pinot Noir</h4>
                          <span>Marlborough 2017</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <span>PINOT NOIR</span>
                        <h4 class="price">13/58</h4>
                        <div class="text-lg font-bold">
                          <h4>Babich Black Label Pinot Noir</h4>
                          <span>Marlborough 2018</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--MERLOT & BLENDED-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">10/36</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">MERLOT &amp; BLENDED</span>
                          <h4>Angove Long Row Merlot</h4>
                          <span>South Australia 2016</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">13/58</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">MERLOT &amp; BLENDED</span>
                          <h4>Babich Black Label Merlot</h4>
                          <span>Hawke's Bay 2015</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">11/41</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">MERLOT &amp; BLENDED</span>
                          <h4>Babich Classic Merlot Cabernet</h4>
                          <span>Hawke's Bay 2017</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--SHIRAZ & SYRAH-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">11/42</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SHIRAZ &amp; SYRAH</span>
                            <h4>Babich Classic Syrah</h4>
                            <span>Hawke's Bay 2017</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--BEER & CIDER-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$9</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BEER &amp; CIDER</span>
                          <h4>Heineken</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$9</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BEER &amp; CIDER</span>
                          <h4>Corona</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$8</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BEER &amp; CIDER</span>
                          <h4>Tui</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$8</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BEER &amp; CIDER</span>
                          <h4>DB Export Gold</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$8</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BEER &amp; CIDER</span>
                          <h4>DB Export 33</h4>
                          <span>Hawke's Bay 2017</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$8</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BEER &amp; CIDER</span>
                          <h4>Speight's 5 malt Old Dark</h4>
                          <span>Hawke's Bay 2017</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$7</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BEER &amp; CIDER</span>
                          <h4>DB Export Citrus Lemon 2%</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$7</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BEER &amp; CIDER</span>
                          <h4>Amstel Light Lager 2.5%</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$8</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">BEER &amp; CIDER</span>
                          <h4>Monteiths Cider Crushed Apple</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <!--COCKTAIL-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$15</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">COCKTAIL</span>
                          <h4>Illusion</h4>
                          <span>midori. vodka. orange liquor. lemon. pineapple juice</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$14</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">COCKTAIL</span>
                          <h4>Hibiscus Gin &amp; Tonic</h4>
                          <span>dry gin. hibiscus syrup. tonic water</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$14</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">COCKTAIL</span>
                          <h4>Grapefruit Mojito</h4>
                          <span>white rum. grape fruit. mint. soda water</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$14</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">COCKTAIL</span>
                          <h4>Frozen Margarita</h4>
                          <span>tequila. orange liquor. lime syrup. lemonade</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$15</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">COCKTAIL</span>
                          <h4>Mud Shake</h4>
                          <span>vodka. kahlua. handscooped ice-cream. milk</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$15</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">COCKTAIL</span>
                          <h4>Pina Colada</h4>
                          <span>white rum. malibu. pineapple juice. cream</span>
                        </div>
                      </div>
                  </div>
                </div>
                <!--SPIRITS-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$6</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SPIRITS</span>
                          <h4>Standard Single</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$7</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SPIRITS</span>
                          <h4>Standard Single</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$10</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SPIRITS</span>
                          <h4>Standard Double</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$12</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">SPIRITS</span>
                          <h4>Standard Double</h4>
                        </div>
                      </div>
                  </div>
                </div>
                <!--KOREAN LIQUOR-->
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$16</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">KOREAN LIQUOR</span>
                          <h4>Soju 17.5%</h4>
                          <span>Korean Popular Spirits</span>
                          <p>clear, colorless distilled beverage of Korean origin considered to be just like vodka or whiskey</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$30</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">KOREAN LIQUOR</span>
                          <h4>Hwayo 17%</h4>
                          <span>Korean Premium Spirits </span>
                          <p>clear, colorless distilled beverage of Korean origin</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$16</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">KOREAN LIQUOR</span>
                          <h4>Mak Geol Li 6%</h4>
                          <span>Korean Popular Rice Wine</span>
                          <p>milky, off-white and lightly sparkling rice wine has a slightviscosity that tastes slightly sweet, tangy, bitter &amp; astringent</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$20</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">KOREAN LIQUOR</span>
                          <h4>Bok Bun Ja Ju 15%</h4>
                          <span>Korean Popular Fruit Wine (Korean black raspberry)</span>
                          <p>made from wild and/or cultivated bokbunja</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="all ALCOHOLIC" v-show="this.filtered == 'ALCOHOLIC' || this.filtered == 'ALL'">
                  <div class="p-8 bg-white rounded-lg min-h-36">
                      <div class="flex justify-between flex-row-reverse">
                        <h4 class="price">$19</h4>
                        <div class="text-lg font-bold">
                          <span class="text-xs">KOREAN LIQUOR</span>
                          <h4>Seol Jung Mae 14%</h4>
                          <span>Korean Popular Green Plum Wine</span>
                          <p>sweet &amp; refreshing, the plums in the beverage can be eaten </p>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>