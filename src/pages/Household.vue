<template>
  <div class="category-page">
    <h1>{{ isEnglish ? 'Household Products' : '日用家居' }}</h1>
    <div class="products-grid">
      <div class="product-card" v-for="item in products" :key="item.name">
        <img :src="item.img" :alt="item.name"/>
        <h3>{{ item.name }}</h3>
        <p>{{ isEnglish ? 'Price' : '价格' }}: {{ item.price }}</p>
        <p>{{ isEnglish ? 'MOQ' : '最小起订量' }}: {{ item.moq }}</p>
        <button @click="openWhatsApp">WhatsApp</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Household",
  data() {
    return {
      isEnglish: false,
      products: [
        { name: 'Storage Box', img: 'https://images.pexels.com/photos/449220/pexels-photo-449220.jpeg', price: '$5-$10', moq: '500pcs' },
        { name: 'Laundry Basket', img: 'https://images.pexels.com/photos/386555/pexels-photo-386555.jpeg', price: '$3-$8', moq: '300pcs' },
        { name: 'Cleaning Brush', img: 'https://images.pexels.com/photos/209695/pexels-photo-209695.jpeg', price: '$1-$4', moq: '1000pcs' },
        { name: 'Bathroom Rack', img: 'https://images.pexels.com/photos/280204/pexels-photo-280204.jpeg', price: '$8-$15', moq: '200pcs' }
      ]
    }
  },
  methods: {
    openWhatsApp() {
      window.open('https://wa.me/8613800138000', '_blank');
    }
  }
}

</script>

<style>
.category-page{padding:50px;text-align:center}
.products-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:25px;max-width:1000px;margin:auto}
.product-card{border:1px solid #eee;padding:20px;background:#fff;transition:.3s}
.product-card:hover{transform:translateY(-5px);box-shadow:0 8px 20px rgba(0,0,0,.1)}
.product-card img{width:100%;height:200px;object-fit:cover;margin-bottom:10px}
.product-card button{margin-top:10px;background:#f8c948;color:#000;padding:10px 20px;border:none;cursor:pointer;border-radius:5px}
</style>