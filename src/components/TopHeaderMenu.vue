<template>
  <div class="top">
    <div class="logo-wrap">
      <a><img class="logo" src="../assets/logo_neebang.png" alt="니방" /></a>
    </div>
    <div class="gnb">
      <ul id="gnb-container">
        <li v-for="(item, index) in this.items" :key=index class="has_d2" :class="{on: item.click}" @click="listClick(index)">
          <a>
            <span>{{item.title}}</span>
            <span class="small">{{item.subTitle}}</span>
          </a>

          <div class="depth2_bx" >
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

  <div class="bot" v-for="(item, index) in this.items" :key="index" v-show="item.click" style="text-align:left;">
    <a class="" :class="{on: i==item.optionsClick}" v-for="(option, i) in item.options" :key="i" @click="optionsClick(index, i)">
      <span>{{option}}</span>
    </a>
  </div>
</template>

<script>
export default {
  props:['items',],
  data() {
    return {
    }
  },

  async created() {

  },

  mounted() {

  },

  methods : {

    listClick(i) {
      for(let j in this.$props.items) {
        if(j != i) {
          this.$props.items[j].click = false
        }
      }
      this.$props.items[i].click = true
    },

    optionsClick(itemIndex, optionIndex) {
      this.$props.items[itemIndex].optionsClick = optionIndex
    },
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
  top: -18px;
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

.gnb > ul > li > a span {
  display: block;
  font-size: 17px;
  color: rgb(34, 34, 34);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
}

.gnb span {
  font-weight: bold;
}

.gnb .small {
  display: block;
  font-size: 12px;
  font-weight: normal;
}

.gnb > ul > li.on span, .gnb > ul > li:hover span {
    color: rgb(250, 136, 11);
}

.gnb > ul > li:hover .depth2_bx {
    visibility: visible;
    opacity: 1;
}

.gnb > ul > li .depth2_bx {
    margin-top: 1px;
    left: 0px;
}

.depth2_bx {
    width: 179px;
    visibility: hidden;
    opacity: 0;
    z-index: 101;
    position: absolute;
    padding: 8px 0px;
    min-width: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 4px 0px;
    border: 1px solid rgb(225, 225, 225);
    transition: visibility 0.25s ease 0s, opacity 0.25s ease 0s;
    box-sizing: border-box;
}

.depth2_bx > a {
  line-height: 16px;
  font-size: 13px;
  color: rgb(0, 0, 0);
  padding: 9px 15px;
  display: block;
  white-space: nowrap;
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

.depth2_bx > a:hover {
    background-color: rgb(246, 246, 246);
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
  padding: 0px 20px 0px 32px;
  border-top: 1px solid rgb(225, 225, 225);
}

.bot a {
  display: inline-block;
  padding: 15px 20px;
  position: relative;
  font-size: 15px;
  line-height: 18px;
  color: rgb(166, 166, 166);
  vertical-align: top;
  transition: background-color 0.15s ease 0s;
}

.bot a.on {
  font-weight: bold;
  color: rgb(68, 68, 68);
  overflow: hidden;
}

.bot a.on::after {
  content: "";
  position: absolute;
  border-bottom: 2px solid rgb(0, 0, 0);
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>
