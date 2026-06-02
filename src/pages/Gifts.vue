<template>
  <div class="category-page">
    <h1>{{ isEnglish ? 'Gifts & Decorations' : '礼品饰品' }}</h1>

    <div class="products-grid">
      <div
        class="product-card"
        v-for="item in products"
        :key="item.name"
      >
        <img :src="item.img" :alt="item.name" />

        <h3>{{ item.name }}</h3>

        <p>
          {{ isEnglish ? 'Price' : '价格' }}:
          {{ item.price }}
        </p>

        <p>
          {{ isEnglish ? 'MOQ' : '最小起订量' }}:
          {{ item.moq }}
        </p>

        <button @click="openWhatsApp">
          WhatsApp
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gifts",

  data() {
    return {
      isEnglish: false,

      products: [
        {
          name: "Artificial Flowers",
          img: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg",
          price: "$1-$5",
          moq: "500pcs"
        },
        {
          name: "Gift Box",
          img: "https://images.pexels.com/photos/264771/pexels-photo-264771.jpeg",
          price: "$0.5-$3",
          moq: "1000pcs"
        },
        {
          name: "Christmas Decoration",
          img: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg",
          price: "$2-$10",
          moq: "300pcs"
        },
        {
          name: "LED Decoration Light",
          img: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
          price: "$3-$8",
          moq: "500pcs"
        }
      ]
    }
  },

  methods: {
    openWhatsApp() {
      window.open(
        "https://wa.me/8613800138000",
        "_blank"
      )
    }
  }
}
</script>

<style>
.category-page{
  padding:50px;
  text-align:center;
}

.products-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:25px;
  max-width:1000px;
  margin:auto;
}

.product-card{
  border:1px solid #eee;
  padding:20px;
  background:#fff;
  transition:.3s;
}

.product-card:hover{
  transform:translateY(-5px);
  box-shadow:0 8px 20px rgba(0,0,0,.1);
}

.product-card img{
  width:100%;
  height:220px;
  object-fit:cover;
  margin-bottom:10px;
}

.product-card button{
  margin-top:10px;
  background:#f8c948;
  color:#000;
  padding:10px 20px;
  border:none;
  cursor:pointer;
  border-radius:5px;
}
</style>