<template>
<div id="home">
  <TopHeaderMenu :items="TopHeaderMenuForm"/>
  <HomeMain :items="TopHeaderMenuForm"/>
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
    const get = await this.$Server.get('/mainMenu')
    console.log(`get 데이터`, get)
    const post = await this.$Server.post('/subMenu1')
    console.log(`post 데이터`, post)
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
}

.bot {
	display: none;
}
</style>
