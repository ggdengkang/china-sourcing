<template>
  <div class="category-page">

    <!-- 顶部导航 -->
    <header class="header">
      <div class="logo">Guangzhou Sourcing</div>
      <nav>
        <router-link to="/">{{ isEnglish ? 'Home' : '首页' }}</router-link>
        <router-link to="/products">{{ isEnglish ? 'Products' : '产品中心' }}</router-link>
        <router-link to="/services">{{ isEnglish ? 'Services' : '采购服务' }}</router-link>
        <router-link to="/contact">{{ isEnglish ? 'Contact' : '联系我们' }}</router-link>
        <a href="#" class="lang-btn" @click.prevent="toggleLanguage">
          {{ isEnglish ? '中文' : 'EN' }}
        </a>
      </nav>
    </header>

    <!-- 页面标题 -->
    <h1>{{ isEnglish ? 'Kitchenware' : '厨卫用品' }}</h1>

    <!-- 产品列表 -->
    <div class="products-grid">
      <div class="product-card" v-for="item in products" :key="item.name">
        <img :src="item.img" :alt="item.name"/>
        <h3>{{ item.name }}</h3>
        <p>{{ isEnglish ? 'Price' : '价格' }}: {{ item.price }}</p>
        <p>{{ isEnglish ? 'MOQ' : '最小起订量' }}: {{ item.moq }}</p>
        <button @click="openWhatsApp(item.name)">WhatsApp询盘</button>
      </div>
    </div>

    <!-- 底部联系表单 -->
    <section class="contact-wrapper" id="contact">
      <h2>{{ isEnglish ? 'Contact Us' : '联系我们' }}</h2>
      <form class="contact-form" action="https://formspree.io/f/xlgvywll" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="whatsapp" placeholder="WhatsApp" />
        <textarea name="message" rows="5" placeholder="Procurement Requirements" required></textarea>
        <button type="submit">{{ isEnglish ? 'Submit Inquiry' : '提交需求' }}</button>
      </form>
    </section>

  </div>
</template>

<script>
export default {
  name: "Kitchen",
  data() {
    return {
      isEnglish: localStorage.getItem("lang") === "en",
      products: [
        { name:'Frying Pan', img:`${import.meta.env.BASE_URL}kitchen/1.jpg`, price:'$20-$50', moq:'10pcs' },
        { name:'Cooking Pot', img:`${import.meta.env.BASE_URL}kitchen/2.jpg`, price:'$20-$50', moq:'10pcs' },
        { name:'Knife Set', img:`${import.meta.env.BASE_URL}kitchen/3.jpg`, price:'$5-$10', moq:'10pcs' },
        { name:'Cutting Board', img:`${import.meta.env.BASE_URL}kitchen/4.jpg`, price:'$10-$20', moq:'10pcs' },
        { name:'Spatula', img:`${import.meta.env.BASE_URL}kitchen/5.jpg`, price:'$5-$10', moq:'10pcs' },
        { name:'Kitchen Tongs', img:`${import.meta.env.BASE_URL}kitchen/6.jpg`, price:'$5-$10', moq:'10pcs' },
        { name:'Measuring Cups', img:`${import.meta.env.BASE_URL}kitchen/7.jpg`, price:'$5-$10', moq:'10pcs' },
        { name:'Peeler', img:`${import.meta.env.BASE_URL}kitchen/8.jpg`, price:'$5-$10', moq:'10pcs' }
      ]
    }
  },
  methods: {
    openWhatsApp(productName){
      const msg = encodeURIComponent(`Hello, I am interested in ${productName}. Please send me quotation.`);
      window.open(`https://wa.me/8618588574864?text=${msg}`, '_blank');
    },
    toggleLanguage() {
      this.isEnglish = !this.isEnglish;
      localStorage.setItem("lang", this.isEnglish ? "en" : "zh");
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top:0; left:0; right:0; height:80px;
  background:#000; display:flex; justify-content:space-between; align-items:center;
  padding:0 50px; z-index:999;
}
.logo { color:#f8c948; font-size:32px; font-weight:bold; }
.header nav a { color:#f8c948; text-decoration:none; margin-left:30px; font-size:18px; }
.lang-btn { color:#f8c948; font-weight:bold; cursor:pointer; }
.lang-btn:hover { color:#fff; }

.category-page { padding:150px 50px 50px; text-align:center; }
.products-grid {
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap:25px;
  max-width:1200px;
  margin:auto;
  align-items:start;
}
.product-card {
  border:1px solid #eee;
  padding:20px;
  background:#fff;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:380px;
  transition:.3s;
}
.product-card:hover { transform:translateY(-5px); box-shadow:0 8px 20px rgba(0,0,0,.1); }
.product-card img { width:100%; height:180px; object-fit:cover; margin-bottom:10px; }
.product-card h3 { font-size:18px; font-weight:bold; margin-bottom:5px; text-align:center; }
.product-card p { margin:2px 0; text-align:center; }
.product-card button { margin-top:auto; background:#25D366; color:#fff; padding:10px 20px; border:none; cursor:pointer; border-radius:5px; }

.contact-wrapper { padding:80px 20px; text-align:center; }
.contact-form { max-width:600px; margin:auto; display:flex; flex-direction:column; gap:15px; }
.contact-form input, .contact-form textarea { width:100%; padding:15px; border:1px solid #ddd; border-radius:8px; font-size:16px; }
.contact-form button { background:#f8c948; color:#000; border:none; padding:15px; font-size:16px; cursor:pointer; border-radius:8px; }
.contact-form button:hover { opacity:.9; }

@media(max-width:1024px){
  .products-grid { grid-template-columns: repeat(2,1fr); }
}
@media(max-width:768px){
  .header { flex-direction:column; height:auto; padding:15px; }
  .logo { font-size:24px; margin-bottom:10px; }
  .header nav { display:flex; flex-wrap:wrap; justify-content:center; }
  .header nav a { margin:5px 10px; font-size:14px; }
  .products-grid { grid-template-columns:1fr; }
  .product-card img { height:180px; }
}
</style>