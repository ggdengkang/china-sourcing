<template>
  <div class="category-page">
    <h1>{{ isEnglish ? 'Kitchenware' : '厨卫用品' }}</h1>
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
  name: "Kitchen",
  data() {
    return {
      isEnglish: false,
      products: [
        { name: 'Knife Set', img: 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg', price: '$10-$20', moq: '200pcs' },
        { name: 'Cutting Board', img: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg', price: '$3-$8', moq: '500pcs' },
        { name: 'Lunch Box', img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg', price: '$2-$5', moq: '1000pcs' },
        { name: 'Cookware Set', img: 'https://images.pexels.com/photos/1583882/pexels-photo-1583882.jpeg', price: '$20-$50', moq: '100pcs' }
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
/* 同 Household 样式 */
.category-page{padding:50px;text-align:center}
.products-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:25px;max-width:1000px;margin:auto}
.product-card{border:1px solid #eee;padding:20px;background:#fff;transition:.3s}
.product-card:hover{transform:translateY(-5px);box-shadow:0 8px 20px rgba(0,0,0,.1)}
.product-card img{width:100%;height:200px;object-fit:cover;margin-bottom:10px}
.product-card button{margin-top:10px;background:#f8c948;color:#000;padding:10px 20px;border:none;cursor:pointer;border-radius:5px}
</style>