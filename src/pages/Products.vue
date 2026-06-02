<template>
  <div class="products-page">

    <!-- Banner -->
    <div class="products-banner">
      <h1>{{ isEnglish ? 'Products Center' : '产品中心' }}</h1>
      <p>
        {{ isEnglish 
          ? 'Professional China General Merchandise Sourcing' 
          : '专业中国百货采购服务' }}
      </p>
    </div>

    <!-- 标题 -->
    <h2>
      {{ isEnglish ? 'Popular Product Categories' : '热门百货品类' }}
    </h2>

    <!-- 产品网格 -->
    <div class="product-grid">
      <div
        class="product-card"
        v-for="item in categories"
        :key="item.nameEn"
      >
        <img :src="item.img" :alt="isEnglish ? item.nameEn : item.nameZh" />

        <h3>{{ isEnglish ? item.nameEn : item.nameZh }}</h3>

        <p>{{ isEnglish ? item.descEn : item.descZh }}</p>
        <p>{{ isEnglish ? `MOQ: ${item.moqEn}` : `起订量：${item.moqZh}` }}</p>

        <div class="btn-group">
          <button
            class="view-btn"
            @click="$router.push(item.link)"
          >
            {{ isEnglish ? 'View Products' : '查看产品' }}
          </button>

          <button
            class="wa-btn"
            @click="openWhatsApp(isEnglish ? item.nameEn : item.nameZh)"
          >
            {{ isEnglish ? 'Request Quote' : 'WhatsApp询盘' }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductsPage",
  data() {
    return {
      isEnglish: false,
      categories: [
        {
          nameEn: "Household Products",
          nameZh: "日用家居",
          descEn: "Storage Box / Laundry Basket / Cleaning Tools",
          descZh: "收纳箱 / 脏衣篮 / 清洁工具",
          moqEn: "200-1000pcs",
          moqZh: "200-1000件",
          link: "/household",
          img: "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg"
        },
        {
          nameEn: "Kitchenware",
          nameZh: "厨卫用品",
          descEn: "Cookware / Utensils / Storage",
          descZh: "厨具 / 餐具 / 收纳",
          moqEn: "300-1000pcs",
          moqZh: "300-1000件",
          link: "/kitchen",
          img: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        },
        {
          nameEn: "Hardware Tools",
          nameZh: "五金百货",
          descEn: "Tools / Screws / Hand Tools",
          descZh: "工具 / 螺丝 / 手工具",
          moqEn: "200-500pcs",
          moqZh: "200-500件",
          link: "/hardware",
          img: "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg"
        },
        {
          nameEn: "Gifts & Decorations",
          nameZh: "礼品饰品",
          descEn: "Decoration / Festival / Promotion Gifts",
          descZh: "装饰品 / 节日 / 促销礼品",
          moqEn: "300pcs",
          moqZh: "300件",
          link: "/gifts",
          img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
        },
        {
          nameEn: "Office Supplies",
          nameZh: "化妆用品",
          descEn: "makeup / perfume / perfume",
          descZh: "化妆 / 香水 / 化妆品",
          moqEn: "500-2000pcs",
          moqZh: "500-2000件",
          link: "/office",
          img: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg"
        },
        {
          nameEn: "Sports & Outdoors",
          nameZh: "汽车配件",
          descEn: "auto parts /Car/ accessories",
          descZh: "汽车配件 / 汽车/ 配件",
          moqEn: "100-500pcs",
          moqZh: "100-500件",
          link: "/sports",
          img: "https://images.pexels.com/photos/416777/pexels-photo-416777.jpeg"
        },
        {
          nameEn: "Electronics",
          nameZh: "电子产品",
          descEn: "Gadgets / Chargers / Accessories",
          descZh: "小工具 / 充电器 / 配件",
          moqEn: "50-300pcs",
          moqZh: "50-300件",
          link: "/electronics",
          img: "https://images.pexels.com/photos/1103536/pexels-photo-1103536.jpeg"
        },
        {
          nameEn: "Fashion & Accessories",
          nameZh: "时尚配饰",
          descEn: "Bags / Jewelry / Clothing",
          descZh: "包 / 珠宝 / 服装",
          moqEn: "100-500pcs",
          moqZh: "100-500件",
          link: "/fashion",
          img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
        }
      ]
    }
  },
  mounted() {
    this.isEnglish = localStorage.getItem("lang") === "en";
  },
  created() {
    window.addEventListener("storage", this.updateLanguage);
  },
  beforeUnmount() {
    window.removeEventListener("storage", this.updateLanguage);
  },
  methods: {
    updateLanguage() {
      this.isEnglish = localStorage.getItem("lang") === "en";
    },
    openWhatsApp(productName) {
      const msg = encodeURIComponent(
        `Hello, I am interested in ${productName}. Please send me quotation.`
      );
      window.open(`https://wa.me/8613247682294?text=${msg}`, "_blank");
    }
  }
}
</script>

<style scoped>
.products-page {
  padding: 100px 20px 80px;
  background: #fff;
}

.products-banner {
  height: 260px;
  background:
    linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
    url("https://images.pexels.com/photos/4481325/pexels-photo-4481325.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 60px;
}

.products-banner h1 {
  font-size: 42px;
  color: #f8c948;
}

.products-banner p {
  margin-top: 15px;
  font-size: 18px;
}

.products-page h2 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 36px;
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
  background: #fff;
  overflow: hidden;
  transition: .3s;
  text-align: center;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0,0,0,.15);
}

.product-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.product-card h3 {
  padding: 15px 10px 10px;
}

.product-card p {
  padding: 0 15px;
  margin-bottom: 10px;
}

.btn-group {
  padding: 15px;
}

.view-btn {
  width: 80%;
  margin: 10px auto;
  display: block;
  background: #f8c948;
  color: #000;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.view-btn:hover {
  opacity: .9;
}

.wa-btn {
  width: 80%;
  margin: 10px auto;
  display: block;
  background: #25D366;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.wa-btn:hover {
  opacity: .9;
}

@media(max-width:768px){
  .product-grid {
    grid-template-columns: repeat(2,1fr);
  }
  .product-card img {
    height: 150px;
  }
}
</style>