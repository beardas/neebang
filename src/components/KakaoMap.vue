<template>
  <div class="map">
    <div class="search-box">
      <div class="search-form">
        <input v-model="keyword"/>
        <button @click="mapKeywordSearch()">검색</button>
      </div>
      <div class="search-filter">
        <button>필터</button>
      </div>
    </div>

    <div id="map" @click="mapClickInfoGeo()"/>

    <FilterBox />

    <div class="button-group">
      <button @click="changeSize(0,0)">Hide</button>
      <button @click="changeSize(1200, 800)">show</button>
      <button @click="displayMarker(markerPositions1)">marker set 1</button>
      <button @click="displayMarker(markerPositions2)">marker set 2</button>
      <button @click="displayMarker([])">marker set 3 (empty)</button>
      <button @click="displayInfoWindow">infowindow</button>
    </div>

  </div>
</template>

<script>
import FilterBox from '@/components/MapFilterBox.vue'

export default {
  name: "KakaoMap",
  components: {
    FilterBox
    },
  props: ['point', 'level', 'search'],
  data() {
    return {
      keyword: '',
      map: null,
      markerPositions1: [
        [33.452278, 126.567803],
        [33.452671, 126.574792],
        [33.451744, 126.572441],
      ],
      markerPositions2: [
        [37.499590490909185, 127.0263723554437],
        [37.499427948430814, 127.02794423197847],
        [37.498553760499505, 127.02882598822454],
        [37.497625593121384, 127.02935713582038],
        [37.49629291770947, 127.02587362608637],
        [37.49754540521486, 127.02546694890695],
        [37.49646391248451, 127.02675574250912],
      ],
      markers: [],
      infowindow: null,
    };
  },
  async created() {
    if(this.search !== undefined) {
      this.keyword = this.search.search
    }
  },

  mounted() {
    window.kakao && window.kakao.maps ? this.initMap() : this.addScript()
    console.log(this.search)
  },

  methods: {
    initMap() {
      const container = document.getElementById("map")
      const options = {
        center: new kakao.maps.LatLng(this.point[0], this.point[1]),
        level: this.level,
      }

      this.map = new kakao.maps.Map(container, options)
      if(this.keyword !== undefined) {
        this.mapKeywordSearch()
      }


    },

    mapKeywordSearch() {
      const map = this.map
      const ps = new kakao.maps.services.Places()
      ps.keywordSearch(this.keyword, placesSearchCB)

      function placesSearchCB (data, status) {
            if (status === kakao.maps.services.Status.OK) {

                let bounds = new kakao.maps.LatLngBounds();

                for (let i in data) {
                    // displayMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       

                map.setBounds(bounds);
            }
        }
      this.map = map
    },

    addScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0&libraries=services,clusterer,drawing";
      document.head.appendChild(script);
    },

    changeSize(width, height) {
      const container = document.getElementById("map");
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
      this.map.relayout();
    },

    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },

    displayInfoWindow() {
      if (this.infowindow && this.infowindow.getMap()) {
        //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
        this.map.setCenter(this.infowindow.getPosition());
        return;
      }

      let iwContent = '<div style="padding:5px; color:red;">우리집~</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(37.532710, 127.139791), //인포윈도우 표시 위치입니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      this.infowindow = new kakao.maps.InfoWindow({
        map: this.map, // 인포윈도우가 표시될 지도
        position: iwPosition,
        content: iwContent,
        removable: iwRemoveable,
      });

      this.map.setCenter(iwPosition);
    },

    mapClickInfoGeo () {
      kakao.maps.event.addListener(this.map, 'click', (mouseEvent) => {
        console.log(`지도에서 클릭한 위치의 좌표는 ${mouseEvent.latLng.toString()} 입니다.`);
      });	
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#map {
  position: relative;
  margin-top: -50px;
  width: 100%;
  height: 100%;
  /* float:left;  */
  /* margin-left: calc(50% - 200px); */
}

.button-group {
  margin: 10px 0px;
}

.search-box {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  position: relative;
  width: 250px;
  top:20px;
  left: 30px;
  z-index: 2;
}

.search-form {
  text-align: center;
  width: 100%;
}

.search-filter button {
  width: 100%;
}

</style>
