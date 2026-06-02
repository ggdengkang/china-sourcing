<template>
  <div class="products-page">
    <h2>{{ isEnglish ? 'Popular Auto Parts' : '热门汽车配件' }}</h2>

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
        <p class="price">{{ isEnglish ? `FOB Price: ${item.price}` : `FOB参考价：${item.price}` }}</p>

        <div class="btn-group">
          <button class="wa-btn" @click="openWhatsApp(item.nameEn)">
            {{ isEnglish ? 'WhatsApp Inquiry' : 'WhatsApp询盘' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sports",
  data() {
    return {
      isEnglish: localStorage.getItem("lang") === "en",
      categories: [
        { nameEn:'Brake Pads', nameZh:'刹车片', descEn:'High Quality Brake Pads', descZh:'高品质刹车片', moqEn:'100pcs', moqZh:'100件', price:'$2.50', link:'/brake-pads', img:'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=600' },
        { nameEn:'Air Filter', nameZh:'空气滤芯', descEn:'Engine Air Filter', descZh:'发动机空气滤芯', moqEn:'200pcs', moqZh:'200件', price:'$1.80', link:'/air-filter', img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600' },
        { nameEn:'Oil Filter', nameZh:'机油滤芯', descEn:'Oil Filtration System', descZh:'机油过滤系统', moqEn:'300pcs', moqZh:'300件', price:'$2.20', link:'/oil-filter', img:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600' },
        { nameEn:'LED Headlight', nameZh:'LED车灯', descEn:'Bright LED Headlights', descZh:'高亮LED车灯', moqEn:'100pcs', moqZh:'100件', price:'$8.50', link:'/headlight', img:'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600' },
        { nameEn:'Car Battery', nameZh:'汽车电池', descEn:'Maintenance Free Battery', descZh:'免维护汽车电池', moqEn:'50pcs', moqZh:'50件', price:'$28.00', link:'/battery', img:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600' },
        { nameEn:'Spark Plug', nameZh:'火花塞', descEn:'Premium Spark Plug', descZh:'优质火花塞', moqEn:'200pcs', moqZh:'200件', price:'$1.20', link:'/spark-plug', img:'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600' },
        { nameEn:'Shock Absorber', nameZh:'减震器', descEn:'Hydraulic Shock Absorber', descZh:'液压减震器', moqEn:'100pcs', moqZh:'100件', price:'$12.00', link:'/shock-absorber', img:'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600' },
        { nameEn:'Radiator', nameZh:'散热器', descEn:'Aluminum Radiator', descZh:'铝制散热器', moqEn:'50pcs', moqZh:'50件', price:'$25.00', link:'/radiator', img:'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600' },
        { nameEn:'Wheel Bearing', nameZh:'轮毂轴承', descEn:'Wheel Hub Bearing', descZh:'汽车轮毂轴承', moqEn:'200pcs', moqZh:'200件', price:'$4.80', link:'/wheel-bearing', img:'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=600' },
        { nameEn:'Fuel Pump', nameZh:'燃油泵', descEn:'Electric Fuel Pump', descZh:'汽车燃油泵', moqEn:'100pcs', moqZh:'100件', price:'$9.50', link:'/fuel-pump', img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600' }
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

<style scoped>
.products-page{
  padding:80px 20px;
  background:#fff;
}
.products-page h2{
  text-align:center;
  font-size:38px;
  margin-bottom:50px;
  font-weight:700;
}
.product-grid{
  max-width:1600px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:25px;
}
.product-card{
  border:1px solid #eee;
  background:#fff;
  transition:.3s;
  text-align:center;
  overflow:hidden;
}
.product-card:hover{
  transform:translateY(-8px);
  box-shadow:0 10px 25px rgba(0,0,0,.15);
}
.product-card img{
  width:100%;
  height:220px;
  object-fit:cover;
}
.product-card h3{
  margin-top:18px;
  font-size:22px;
}
.product-card p{
  padding:0 15px;
  line-height:1.8;
}
.price{
  font-weight:bold;
  margin-bottom:10px;
}
.btn-group{
  padding:20px;
}
.wa-btn{
  width:100%;
  background:#25D366;
  color:#fff;
  border:none;
  padding:14px;
  border-radius:6px;
  font-weight:bold;
  cursor:pointer;
  font-size:15px;
}
.wa-btn:hover{
  opacity:.9;
}
@media(max-width:1200px){
  .product-grid{grid-template-columns:repeat(3,1fr);}
}
@media(max-width:768px){
  .product-grid{grid-template-columns:repeat(2,1fr);}
  .product-card img{height:160px;}
}
</style>    