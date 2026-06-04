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

    <!-- 产品分类 -->
    <section class="products" id="products">
      <h2 class="section-title">{{ isEnglish ? 'Popular Product Categories' : '热门百货品类' }}</h2>
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

  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      isEnglish: localStorage.getItem("lang") === "en",

      // 本地图片
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
    }
  }
}
</script>

<style scoped>
/* 顶部导航 */
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

/* 产品分类 */
.products {
  padding: 100px 20px 50px;
  margin-top: 80px; /* 留出导航高度 */
  text-align: center;
}
.section-title {
  margin-bottom: 50px;
  font-size: 28px;
  font-weight: bold;
}
.product-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}
.product-card {
  border: 1px solid #eee;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
.product-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.product-card h3 {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

/* 响应式 */
@media (max-width: 768px) {
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
  .product-card img {
    height: 140px;
  }
  .products {
    padding: 120px 10px 50px;
  }
}
</style>