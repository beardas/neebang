<template>
  <div class="top">
    <div class="logo-wrap">
      <a><img class="logo" src="../assets/logo_neebang.png" alt="니방" /></a>
    </div>
    <div class="gnb">
      <ul id="gnb-container">
        <li v-for="(item, index) in this.items" :key=index class="has_d2" :class="{on: item.click}" :ref="`li${index}`"
             @mouseover="listMouseOver(index)" @mouseleave="listMouseLeave(index)" @click="listClick(index)">
          <a>
            <span>{{item.title}}</span>
            <span class="small">{{item.subTitle}}</span>
          </a>

          <div class="depth2_bx" :ref="`div${index}`" >
            <a class=" " v-for="(option, index) in item.options" :key=index>{{option}}</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="top_btn">
      <div class="top_btn_menu">
        <div class="bx_user">
          <button type="button" class="i_account">로그인 및 회원가입</button>
        </div>
      </div>
      <div class="top_btn_menu">
        <a href="/home/RegisterInfo" class="i_img_link">
          <img src="https://s.zigbang.com/v1/web/main/ceo_ad_img.png"
               width="126"
               height="38"
               alt="중개사무소 가입 및 광고문의"  style="margin-left: 20px;"/>
        </a>
      </div>
    </div>
  </div>

  <div class="bot" v-for="(item, index) in this.items" :key="index" :ref="`bot${index}`">
    <a class=" " v-for="(option, index) in item.options" :key="index" :ref="`bot_span${index}`">
      <span>{{option}}</span>
    </a>
  </div>
</template>

<script>
export default {
  props:['items',],
  data() {
    return {
      // isHover:false,
    }
  },

  async created() {

  },

  mounted() {

  },

  methods : {
    listMouseOver(i) {
      const liObj = this.$refs[`li${i}`]
      const divObj = this.$refs[`div${i}`]
      liObj.style.color = '#fA880B'
      divObj.style.display = 'grid'
      // this.isHover = !this.isHover
    },
    listMouseLeave(i) {
      const liObj = this.$refs[`li${i}`]
      const divObj = this.$refs[`div${i}`]
      liObj.style.color = 'black'
      divObj.style.display = 'none'
    },
    // listClick(i) {
    //   const botObj = this.$refs[`bot${i}`]
      
    //   for(let j in this.items) {
    //     this.$refs[`bot${j}`].style.display = 'none'
    //   }
    //   botObj.style.display = 'contents'
    // }
  }


};
</script>

<style>

.logo-wrap {
  float: left;
  margin-right: 10px;
}

.logo-wrap a {
  display: block;
  cursor: pointer;
  width: 112px;
  height: 50px;
  padding: 15px 8px 14px 20px;
}

.logo-wrap a .logo {
  width: 100%;
  height: 50px;
  object-fit: contain;
}


.gnb {
  float: left;
  position: relative;
  z-index: 1000;
  top: -10px;
  left: -25px;
}

ol, ul {
    list-style: none;
}

.gnb > ul > li {
  display: block;
  float: left;
  position: relative;
  margin-right: 15px;
  cursor: pointer;
}

.gnb > ul > li > a {
  display: block;
  line-height: 18px;
  padding: 19px 15px 17px;
}

.gnb span {
  font-weight: bold;
}

.gnb .small {
  display: block;
  font-size: 12px;
  font-weight: normal;
}

.has_d2.on {
  color:red;
}

.depth2_bx {
  width: 200px;
  background-color: #fff;
  display: none;
  color: black;
  position: absolute;
}

.top_btn {
  float: right;
  display: table;
  height: 80px;
}

.top_btn .bx_user {
  display: inline-block;
  position: relative;
}

.top_btn .bx_user button {
  display: inline-block;
  padding: 0px;
  height: 24px;
  font-size: 12px;
  color: rgb(34, 34, 34);
  position: relative;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid rgb(225, 225, 225);
  background: transparent;
}

.top_btn .bx_user button.i_account {
  min-width: 106px;
  height: 30px;
  border-radius: 4px;
  background-color: rgb(238, 238, 238);
  padding: 5px 8px 6px;
}

.top_btn .top_btn_menu {
  display: table-cell;
  vertical-align: middle;
}

.top_btn .i_img_link {
  display: block;
  margin-left: 10px;
}

.bot {
  display: none;
  text-align: left;
} 

/*
.depth2 {
    border-top: 1px solid rgb(225, 225, 225);
} */

</style>
