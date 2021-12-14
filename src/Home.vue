<template>
<div id="home">
  <TopHeaderMenu :items="TopHeaderMenuForm"/>
  <HomeMain />
</div>
</template>

<script>
import TopHeaderMenu from '@/components/TopHeaderMenu.vue'
import HomeMain from '@/components/HomeMain.vue'
import TopMenuJson from '@/json/TopHeaderMenuForm.json'

export default {
  name: 'Home',
  components: {
	TopHeaderMenu,
	HomeMain,
  },
  data() {
	return {
		TopHeaderMenuForm : TopMenuJson,
	}
  },

  async created() {

  },

  mounted() {
	  
  },

  methods : {

  },
}
</script>

<style>
.top {
	height: 80px;
	padding-right: 20px;
}

.bot {
	display: none;
}
</style>
