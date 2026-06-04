<template>
  <div id="app">

    <!-- 顶部导航 -->
    <header class="header">
      <div class="logo">China Guangzhou Purchasing Center</div>

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

    <!-- Banner -->
  <section
  class="hero"
  id="home"
  :style="{
    backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${bannerImage})`
  }"
>
      <div class="hero-content">
        <h2>{{ isEnglish ? 'One-stop China General Merchandise Sourcing' : '中国•广州采购服务中心' }}</h2>
        <p>中国•广州一般商品采购 · 全球发货 · 品质保障</p>
        <div class="btns">
          <button @click="scrollToContact">{{ isEnglish ? 'Get Quote' : '立即咨询' }}</button>
          <button class="whatsapp-btn" @click="openWhatsApp">WhatsApp</button>
        </div>
      </div>
    </section>

    <!-- 产品分类 -->
    <section class="products" id="products">
      <h2>{{ isEnglish ? 'Popular Product Categories' : '热门百货品类' }}</h2>
      <div class="product-grid">
        <div class="product-card" @click="$router.push('/household')">
          <img :src="householdImg" />
          <h3>{{ isEnglish ? 'Household Products' : '日用家居' }}</h3>
        </div>

        <div class="product-card" @click="$router.push('/kitchen')">
          <img :src="kitchenImg" />
          <h3>{{ isEnglish ? 'Kitchenware' : '厨卫用品' }}</h3>
        </div>

        <div class="product-card" @click="$router.push('/hardware')">
          <img :src="hardwareImg" />
          <h3>{{ isEnglish ? 'Hardware Tools' : '五金百货' }}</h3>
        </div>

        <div class="product-card" @click="$router.push('/gifts')">
          <img :src="giftsImg" />
          <h3>{{ isEnglish ? 'Gifts & Decorations' : '礼品饰品' }}</h3>
        </div>

        <div class="product-card" @click="$router.push('/office')">
          <img :src="officeImg" />
          <h3>{{ isEnglish ? 'Perfume Makeup' : '香水化妆' }}</h3>
        </div>

        <div class="product-card" @click="$router.push('/sports')">
          <img :src="sportsImg" />
          <h3>{{ isEnglish ? 'Auto parts' : '汽车配件' }}</h3>
        </div>

        <div class="product-card" @click="$router.push('/electronics')">
          <img :src="electronicsImg" />
          <h3>{{ isEnglish ? 'Electronics' : '电子产品' }}</h3>
        </div>

        <div class="product-card" @click="$router.push('/fashion')">
          <img :src="fashionImg" />
          <h3>{{ isEnglish ? 'Fashion & Accessories' : '时尚配饰' }}</h3>
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section class="services" id="services">
      <h2>{{ isEnglish ? 'Sourcing Process' : '采购服务流程' }}</h2>
      <div class="service-grid">
        <div class="service-card"><h3>1</h3><p>{{ isEnglish ? 'Requirement Communication' : '需求沟通' }}</p></div>
        <div class="service-card"><h3>2</h3><p>{{ isEnglish ? 'Product Quotation' : '产品报价' }}</p></div>
        <div class="service-card"><h3>3</h3><p>{{ isEnglish ? 'Sample confirmation' : '样品确认' }}</p></div>
        <div class="service-card"><h3>4</h3><p>{{ isEnglish ? 'Inspection and shipment' : '验货出运' }}</p></div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="contact-wrapper" id="contact">
      <h2>{{ isEnglish ? 'Contact Us' : '联系我们' }}</h2>
      <form class="contact-form" action="https://formspree.io/f/xlgvywll" method="POST">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="text" name="whatsapp" placeholder="WhatsApp">
        <textarea name="message" rows="5" placeholder="Procurement Requirements" required></textarea>
        <button type="submit">{{ isEnglish ? 'Submit Inquiry' : '提交需求' }}</button>
      </form>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <h3>Guangzhou Sourcing Center</h3>
      <div class="footer-contact">
        <div>
          <h4>WhatsApp</h4>
          <p>+8613247682294</p>
          <p>+8618588574864</p>
        </div>
        <div>
          <h4>微信咨询</h4>
          <h4>WeChat Consultation</h4>
          <img :src="wechatQrCode" class="qr-code" alt="WeChat QR Code" style="width:140px;height:140px;object-fit:contain;">
        </div>
      </div>
      <p>Professional China Sourcing Partner</p>
      <p>© 2026 All Rights Reserved</p>
    </footer>

    <div class="floating-buttons">
      <button class="floating-whatsapp" @click="openWhatsApp">WhatsApp</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isEnglish: localStorage.getItem("lang") === "en",
     wechatQrCode: `${import.meta.env.BASE_URL}wechat.jpg`,
    bannerImage: `${import.meta.env.BASE_URL}banner.jpg`,
    householdImg: `${import.meta.env.BASE_URL}household.jpg`,
    kitchenImg: `${import.meta.env.BASE_URL}kitchen.jpg`,
    hardwareImg: `${import.meta.env.BASE_URL}hardware.jpg`,
    giftsImg: `${import.meta.env.BASE_URL}gifts.jpg`,
    officeImg: `${import.meta.env.BASE_URL}office.jpg`,
    sportsImg: `${import.meta.env.BASE_URL}sports.jpg`,
    electronicsImg: `${import.meta.env.BASE_URL}electronics.jpg`,
    fashionImg: `${import.meta.env.BASE_URL}fashion.jpg`
    }
  },
  methods: {
    toggleLanguage() {
      this.isEnglish = !this.isEnglish
      localStorage.setItem("lang", this.isEnglish ? "en" : "zh")
    },
    scrollToContact() {
      const contact = document.getElementById("contact")
      if (contact) contact.scrollIntoView({ behavior: "smooth" })
    },
    openWhatsApp() {
      window.open("https://wa.me/8618588574864", "_blank")
    }
  }
}
</script>

<style scoped>
/* 这里保持和你之前的 CSS 一致 */
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:Arial,Helvetica,sans-serif;}
html{scroll-behavior:smooth;}
.header{position:fixed;top:0;left:0;right:0;height:80px;background:#000;display:flex;justify-content:space-between;align-items:center;padding:0 50px;z-index:999;}
.logo{color:#f8c948;font-size:32px;font-weight:bold;}
.header nav a{color:#f8c948;text-decoration:none;margin-left:30px;font-size:18px;}
.lang-btn{color:#f8c948;font-weight:bold;cursor:pointer;}
.lang-btn:hover{color:#fff;}
.hero{
  height:600px;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding-top:80px;
}
.hero-content{color:white;}
.hero h1{font-size:54px;margin-bottom:20px;}
.hero h2{color:#f8c948;margin-bottom:20px;}
.btns{display:flex;justify-content:center;gap:20px;}
.btns button{border:none;cursor:pointer;padding:15px 35px;font-size:16px;}
.btns button:first-child{background:#f8c948;color:#000;}
.whatsapp-btn{background:transparent;border:1px solid #f8c948;color:#f8c948;}
.products{padding:80px 20px;}
.products h2{text-align:center;margin-bottom:50px;}
.product-grid{max-width:1200px;margin:auto;display:grid;grid-template-columns:repeat(4,1fr);gap:25px;}
.product-card{border:1px solid #eee;padding:10px;cursor:pointer;transition:.3s;text-align:center;}
.product-card:hover{transform:translateY(-5px);box-shadow:0 8px 20px rgba(0,0,0,0.1);}
.product-card img{width:100%;height:160px;object-fit:cover;}
.product-card h3{font-size:16px;font-weight:bold;}
.services{padding:80px 20px;background:#f7f7f7;text-align:center;}
.service-grid{max-width:1000px;margin:auto;display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
.service-card{background:#fff;padding:30px;text-align:center;border:1px solid #eee;}
.service-card h3{color:#f8c948;font-size:36px;margin-bottom:10px;}
.contact-wrapper{padding:80px 20px;text-align:center;}
.contact-form{max-width:600px;margin:auto;display:flex;flex-direction:column;gap:15px;}
.contact-form input,.contact-form textarea{width:100%;padding:15px;border:1px solid #ddd;border-radius:8px;font-size:16px;}
.contact-form button{background:#f8c948;color:#000;border:none;padding:15px;font-size:16px;cursor:pointer;border-radius:8px;}
.contact-form button:hover{opacity:.9;}
.footer{background:#000;color:#f8c948;text-align:center;padding:40px 20px;}
.footer-contact{margin-top:30px;display:flex;justify-content:center;gap:50px;align-items:center;}
.floating-buttons{position:fixed;right:20px;bottom:20px;}
.floating-whatsapp{background:#25D366;color:white;border:none;border-radius:50px;padding:15px 25px;cursor:pointer;}
@media(max-width:768px){.header{flex-direction:column;height:auto;padding:15px;}.logo{font-size:24px;margin-bottom:10px;}.header nav{display:flex;flex-wrap:wrap;justify-content:center;}.header nav a{margin:5px 10px;font-size:14px;}.hero{height:450px;}.btns{flex-direction:column;}.product-card img{height:140px;}}
</style>
