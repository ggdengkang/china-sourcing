<template>
  <div class="services-wrapper">

    <header class="header">
      <div class="logo">
        China Guangzhou Purchasing Center
      </div>

      <nav>
        <router-link to="/">
          {{ isEnglish ? 'Home' : '首页' }}
        </router-link>

        <router-link to="/products">
          {{ isEnglish ? 'Products' : '产品中心' }}
        </router-link>

        <router-link to="/services">
          {{ isEnglish ? 'Services' : '采购服务' }}
        </router-link>

        <router-link to="/contact">
          {{ isEnglish ? 'Contact' : '联系我们' }}
        </router-link>

        <a href="#" class="lang-btn" @click.prevent="toggleLanguage">
          {{ isEnglish ? '中文' : 'EN' }}
        </a>
      </nav>
    </header>

    <section class="services">
      <h2>{{ isEnglish ? 'Sourcing Process' : '采购服务流程' }}</h2>

      <div class="service-grid">
        <div class="service-card">
          <h3>1</h3>
          <p>{{ isEnglish ? 'Requirement Communication' : '需求沟通' }}</p>
        </div>

        <div class="service-card">
          <h3>2</h3>
          <p>{{ isEnglish ? 'Product Quotation' : '产品报价' }}</p>
        </div>

        <div class="service-card">
          <h3>3</h3>
          <p>{{ isEnglish ? 'Sample Confirmation' : '样品确认' }}</p>
        </div>

        <div class="service-card">
          <h3>4</h3>
          <p>{{ isEnglish ? 'Inspection and Shipment' : '验货出运' }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      isEnglish: false
    };
  },
  methods: {
    toggleLanguage() {
      this.isEnglish = !this.isEnglish;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 999;
}

.logo {
  color: #f8c948;
  font-size: 32px;
  font-weight: bold;
}

.header nav a {
  color: #f8c948;
  text-decoration: none;
  margin-left: 30px;
  font-size: 18px;
}

.lang-btn {
  color: #f8c948;
  font-weight: bold;
  cursor: pointer;
}

.lang-btn:hover {
  color: #fff;
}

.services {
  padding: 120px 20px 80px; /* top padding to avoid fixed header overlap */
  text-align: center;
  background: #f7f7f7;
}

.services h2 {
  margin-bottom: 30px;
}

.service-grid {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.service-card {
  background: #fff;
  padding: 30px;
  text-align: center;
  border: 1px solid #eee;
}

.service-card h3 {
  color: #f8c948;
  font-size: 36px;
  margin-bottom: 10px;
}

/* 手机端响应 */
@media(max-width: 768px) {
  .header {
    flex-direction: column;
    height: auto;
    padding: 15px;
  }

  .logo {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .header nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .header nav a {
    margin: 5px 10px;
    font-size: 14px;
  }

  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>