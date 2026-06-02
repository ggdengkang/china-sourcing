<template>
  <div class="category-page">
    <h1>{{ isEnglish ? 'Office Supplies' : '办公用品' }}</h1>
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
  name: "Office",
  data() {
    return {
      isEnglish: false,
      products: [
        { name:'Notebook', img:'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg', price:'$0.5-$2', moq:'1000pcs' },
        { name:'Ball Pen', img:'https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg', price:'$0.1-$0.5', moq:'5000pcs' },
        { name:'Desk Organizer', img:'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg', price:'$2-$8', moq:'300pcs' },
        { name:'File Folder', img:'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg', price:'$0.5-$3', moq:'1000pcs' }
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