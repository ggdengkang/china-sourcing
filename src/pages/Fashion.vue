<template>
  <div class="category-page">
    <h1>{{ isEnglish ? 'Fashion Accessories' : '时尚饰品' }}</h1>
    <div class="products-grid">
      <div class="product-card" v-for="item in products" :key="item.name">
        <img :src="item.img" :alt="item.name"/>
        <h3>{{ item.name }}</h3>
        <p>{{ isEnglish ? 'Price' : '价格' }}: {{ item.price }}</p>
        <p>{{ isEnglish ? 'MOQ' : '最小起订量' }}: {{ item.moq }}</p>
        <button @click="openWhatsApp(item.name)">WhatsApp询盘</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fashion",
  data() {
    return {
      isEnglish: false,
      products: [
        { name:'Handbag', img:'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg', price:'$5-$20', moq:'200pcs' },
        { name:'Fashion Watch', img:'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg', price:'$8-$30', moq:'100pcs' },
        { name:'Necklace', img:'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg', price:'$1-$10', moq:'500pcs' },
        { name:'Sunglasses', img:'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg', price:'$2-$8', moq:'300pcs' }
      ]
    }
  },
  methods: {
    openWhatsApp(productName){
      const msg = encodeURIComponent(`Hello, I am interested in ${productName}. Please send me quotation.`);
      window.open(`https://wa.me/8613247682294?text=${msg}`, '_blank');
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
.product-card button{margin-top:10px;background:#25D366;color:#fff;padding:10px 20px;border:none;cursor:pointer;border-radius:5px}
</style>