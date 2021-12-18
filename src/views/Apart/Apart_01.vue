<template>
<div id="app">
  <TopHeaderMenu :items="TopHeaderMenuForm"/>
  <KakaoMap :point="MapPoint"
  			:level="MapLevel"
			:search="searchValue"
  />
</div>
</template>

<script>
import KakaoMap from '@/components/KakaoMap.vue'
import TopHeaderMenu from '@/components/TopHeaderMenu.vue'
import TopMenuJson from '@/json/TopHeaderMenuForm.json'

export default {
  name: 'apart',
  components: {
    KakaoMap,
    TopHeaderMenu,
  },
  data() {
	return {
	  TopHeaderMenuForm : TopMenuJson,
	  MapPoint : '',
	  MapLevel : '',
	  searchValue : this.$route.params,
	}
  },

  async created() {
	this.TopHeaderMenuForm[0].click = true
	this.TopHeaderMenuForm[0].optionsClick = 0
	this.MapPoint = this.TopHeaderMenuForm[0].options[0].geoPoint
	this.MapLevel = this.TopHeaderMenuForm[0].options[0].level
  },

  mounted() {
	  
  },

  methods : {

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.top {
	height: 80px;
	padding-right: 20px;
}
.bot {
	display: inherit;
}

.map {
	height: 800px;
}

html, body, div, span, applet, object, iframe, 
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

HTML5 display-role reset for older browsers
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {font-family: SpoqaHanSans;}

html{
	display: flex;flex-direction: column;flex:1;height: 100%;font-family: SpoqaHanSans;
}
body{
	display: flex;flex-direction: column;flex:1;
}
textarea:focus, input:focus{
	outline: none;
}
a{
	color: inherit;
	text-decoration: none;
}
input[type=text]::-ms-clear{
	display: none;
}

#__next {
	display: flex;
	flex-direction: column;
	height: 100%;
	flex:1; 
	min-width: 1200px;
}

.swiper-wrapper{
	display: flex;
}

.swiper-wrapper .swiper-slide{
	flex: 0 0 auto;
}

#wrapMinidaum{
	height: 34px;background-color: #f6f6f6;
	position: absolute;
	top: 0;
	left: 0;
	right:0;
	z-index: 3 !important;
}

#minidaum {
	left: 50%;
	width: 1100px;
	height: 34px;
	margin-left: -550px;
}

.rc-slider-tooltip {
	position: absolute;
	left: -9999px;
	top: -9999px;
	visibility: visible;
	box-sizing: border-box;
	padding:4px 12px 7px;
	margin-top:10px;
	background-color: rgba(51, 51, 51, 0.9);
}
.rc-slider-tooltip-hidden {
	display: none;
}
.rc-slider-tooltip-inner { 
	min-width: 24px; 
	font-size: 11px;
	line-height: 1;
	color: #fff;
	text-align: center;
	text-decoration: none;
}
.rc-slider-tooltip-arrow {
	position: absolute;
	width: 0;
	height: 0;
	border-color: transparent;
	border-style: solid;
}
.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
	bottom: -4px;
	left: 50%;
	margin-left: -4px;
	border-width: 4px 4px 0;
	border-top-color: rgba(51, 51, 51, 0.9);
}
</style>
