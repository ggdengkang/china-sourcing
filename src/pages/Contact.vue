<template>
  <div class="contact-page">

    <!-- 顶部导航 -->
    <header class="header">
      <div class="logo">Guangzhou Sourcing</div>
      <nav>
        <router-link to="/">{{ isEnglish ? 'Home' : '首页' }}</router-link>
        <router-link to="/products">{{ isEnglish ? 'Products' : '产品中心' }}</router-link>
        <router-link to="/services">{{ isEnglish ? 'Services' : '采购服务' }}</router-link>
        <router-link to="/contact">{{ isEnglish ? 'Contact' : '联系我们' }}</router-link>
        <a href="#" class="lang-btn" @click.prevent="toggleLanguage">{{ isEnglish ? '中文' : 'EN' }}</a>
      </nav>
    </header>

    <!-- Banner -->
    <section class="hero" id="contact-hero">
      <div class="hero-content">
        <h2>{{ isEnglish ? 'Contact Us' : '联系我们' }}</h2>
        <p>{{ isEnglish ? 'Get in touch for procurement inquiries' : '如有采购需求，请联系我们' }}</p>
      </div>
    </section>

    <!-- 联系表单 -->
    <section class="contact-wrapper">
      <form class="contact-form" action="https://formspree.io/f/xlgvywll" method="POST">
        <input type="text" name="name" :placeholder="isEnglish ? 'Your Name' : '您的姓名'" required>
        <input type="email" name="email" :placeholder="isEnglish ? 'Email' : '邮箱地址'" required>
        <input type="text" name="whatsapp" :placeholder="isEnglish ? 'WhatsApp' : 'WhatsApp'" >
        <textarea name="message" rows="5" :placeholder="isEnglish ? 'Procurement Requirements' : '采购需求'" required></textarea>
        <button type="submit">{{ isEnglish ? 'Submit Inquiry' : '提交询盘' }}</button>
      </form>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <h3>Guangzhou Sourcing Center</h3>
      <div class="footer-contact">
        <div>
          <h4>WhatsApp</h4>
          <p>+86 13800138000</p>
        </div>
        <div>
          <h4>{{ isEnglish ? 'WeChat Consultation' : '微信咨询' }}</h4>
          <img src="../assets/wechat.jpg" class="qr-code" alt="WeChat QR Code"/>
        </div>
      </div>
      <p>Professional China Sourcing Partner</p>
      <p>© 2026 All Rights Reserved</p>
    </footer>

    <!-- 浮动按钮 -->
    <div class="floating-buttons">
      <button class="floating-whatsapp" @click="openWhatsApp">WhatsApp</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      isEnglish: false
    };
  },
  methods: {
    toggleLanguage() {
      this.isEnglish = !this.isEnglish;
    },
    openWhatsApp() {
      window.open("https://wa.me/8613247682294", "_blank");
    }
  }
};
</script>

<style scoped>
* { margin:0; padding:0; box-sizing:border-box; }
body, html { font-family: Arial, Helvetica, sans-serif; scroll-behavior: smooth; }

/* 导航 */
.header{
  position:fixed; top:0; left:0; right:0;
  height:80px; background:#000;
  display:flex; justify-content:space-between; align-items:center;
  padding:0 50px; z-index:999;
}
.logo { color:#f8c948; font-size:32px; font-weight:bold; }
.header nav a { color:#f8c948; text-decoration:none; margin-left:30px; font-size:18px; }
.lang-btn{ color:#f8c948; font-weight:bold; cursor:pointer; }
.lang-btn:hover{ color:#fff; }

/* Banner */
.hero{ height:300px; display:flex; justify-content:center; align-items:center; text-align:center;
  background: linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url("https://images.pexels.com/photos/4481325/pexels-photo-4481325.jpeg"); 
  background-size: cover; background-position: center; padding-top:80px; color:white; 
}
.hero h2{ color:#f8c948; font-size:36px; margin-bottom:10px; }
.hero p{ font-size:18px; }

/* 表单 */
.contact-wrapper{ padding:80px 20px; text-align:center; margin-top:60px; }
.contact-form{ max-width:600px; margin:auto; display:flex; flex-direction:column; gap:15px; }
.contact-form input, .contact-form textarea{ width:100%; padding:15px; border:1px solid #ddd; border-radius:8px; font-size:16px; }
.contact-form button{ background:#f8c948; color:#000; border:none; padding:15px; font-size:16px; cursor:pointer; border-radius:8px; }
.contact-form button:hover{ opacity:.9; }

/* footer */
.footer{ background:#000; color:#f8c948; text-align:center; padding:40px 20px; }
.footer-contact{ margin-top:30px; display:flex; justify-content:center; gap:50px; align-items:center; }
.qr-code{ width:140px; height:140px; object-fit:contain; }

/* 浮动按钮 */
.floating-buttons{ position:fixed; right:20px; bottom:20px; }
.floating-whatsapp{ background:#25D366; color:white; border:none; border-radius:50px; padding:15px 25px; cursor:pointer; }

/* 手机端 */
@media(max-width:768px){
  .header{ flex-direction:column; height:auto; padding:15px; }
  .logo{ font-size:24px; margin-bottom:10px; }
  .header nav{ display:flex; flex-wrap:wrap; justify-content:center; }
  .header nav a{ margin:5px 10px; font-size:14px; }
  .hero{ height:200px; }
  .hero h2{ font-size:24px; }
}
</style>