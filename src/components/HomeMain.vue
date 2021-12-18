<template>
  <div class="home-main">
    <div class="pages__Root-lex7c7-4 WypHl css-1dbjc4n">
      <div class="pages____-lex7c7-5 fmLtDZ css-1dbjc4n">
        <div class="pages_____-lex7c7-7 grFGbJ css-1dbjc4n">
          <div class="pages__BaseText-lex7c7-3 pages____-lex7c7-8 fVZAbs fPSMTG css-1563yu1" dir="auto">
            어떤 집을 찾고 계세요?
          </div>
        </div>
        <div class="pages_____-lex7c7-6 fLoHvJ css-1dbjc4n">
          <div class="pages__-lex7c7-9 kGqMQK css-1dbjc4n">
            <div class="pages___-lex7c7-10 eIgVee css-1dbjc4n">
              <div class="pages__BaseText-lex7c7-3 pages___-lex7c7-14 fVZAbs css-1563yu1" dir="auto"
                   :class="{kWDGzf: this.clickIndex==0, IWimp: this.clickIndex==1, IWgFo: this.clickIndex==2, IWcHc: this.clickIndex==3, IWhuF: this.clickIndex==4}"></div>
              <div class="pages__BaseText-lex7c7-3 pages___-lex7c7-11 fVZAbs koApIc css-1563yu1" dir="auto"
                   v-for="(item, index) in this.items" :key="index" @click="clickTitle(index)">
                <span class="pages__BaseText-lex7c7-3 pages___-lex7c7-12 fVZAbs css-1563yu1 css-16my406 r-1loqt21"
                      :class="{aYWeL: this.clickIndex==index, ldYzTz: this.clickIndex!=index}">{{item.title}}</span>
              </div>
            </div>
            <div class="pages___-lex7c7-13 jsbwAO css-1dbjc4n">
              <div class="css-1dbjc4n r-n2h5ot r-5qlx7g r-1vznrp2 r-uvuy5l r-ah86l4 r-btgi9e r-gxpyh3 r-m1ore8 r-1jtzkro">
                <input v-model="searchValue" type="text" placeholder="원하시는 지역명, 지하철역을 입력해주세요" autocomplete="off" class="pages__SearchInput-lex7c7-17 iEYDDq">
              </div>
              <div class="pages____-lex7c7-15 eVTGRV css-1dbjc4n r-1loqt21" tabindex="0" @click="clickSearch">
                <img src="https://s.zigbang.com/v1/web/main/ic_search.png" alt="찾아보기" class="pages_____-lex7c7-16 kWfCL">
                <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!-- 검색창 -->
      <div v-show="searchValue.length != 0" class="pages__TotalSearchResultView-lex7c7-1 gWfIok css-1dbjc4n" style="left: calc(50% - 287px); top: 390px;">
        <div class="pages__TotalSearchResultItemView-lex7c7-2 hLNvfj css-1dbjc4n">
          <div class="pages__TotalSearchSelectItemWrap-lex7c7-0 klzbCx css-1dbjc4n r-1loqt21" tabindex="0">
            <div class="css-1dbjc4n" style="flex-basis: auto; height: 28px; left: 13px; overflow: hidden; position: absolute; top: 5px; width: 28px; z-index: 0;">
              <div class="css-1dbjc4n" style="background-color: rgba(0, 0, 0, 0); background-position: center center; background-repeat: no-repeat; background-size: cover; inset: 0px; height: 100%; position: absolute; width: 100%; z-index: -1; background-image: url(&quot;https://s.zigbang.com/zigbang-www/_next/static/ic_subway-877b6cb967760bb80af226d59766f13c.png&quot;);"></div>
              <img alt="" draggable="false" src="https://s.zigbang.com/zigbang-www/_next/static/ic_subway-877b6cb967760bb80af226d59766f13c.png" class="css-9pa8cd">
            </div>
            <div class="css-1dbjc4n r-qklmqi r-v4u9kv r-1phboty r-18u37iz r-1pi2tsx r-m611by">
              <span>
                <span style="font-weight: bold; color: rgb(250, 136, 11);">강남역</span>
                <span>(2호선, 신분당선)</span>
              </span>
              <div class="css-1dbjc4n" style="flex: 1 1 0%; flex-direction: row-reverse; top: 2px; -webkit-box-orient: horizontal; -webkit-box-direction: reverse;">
                <div class="pages__BaseText-lex7c7-3 fVZAbs css-1563yu1" dir="auto">서울특별시 강남구 역삼동</div>
              </div>
            </div>
            <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
          </div>
        </div>
        <div class="pages__TotalSearchResultItemView-lex7c7-2 hLNvfj css-1dbjc4n">
          <div class="pages__TotalSearchSelectItemWrap-lex7c7-0 fCAmPZ css-1dbjc4n r-1loqt21" tabindex="0">
            <div class="css-1dbjc4n" style="flex-basis: auto; height: 28px; left: 13px; overflow: hidden; position: absolute; top: 5px; width: 28px; z-index: 0;">
              <div class="css-1dbjc4n" style="background-color: rgba(0, 0, 0, 0); background-position: center center; background-repeat: no-repeat; background-size: cover; inset: 0px; height: 100%; position: absolute; width: 100%; z-index: -1; background-image: url(&quot;https://s.zigbang.com/zigbang-www/_next/static/ic_apart-68dc0e0bfb5d5b7302f7cf0ac67eb064.png&quot;);"></div>
              <img alt="" draggable="false" src="https://s.zigbang.com/zigbang-www/_next/static/ic_apart-68dc0e0bfb5d5b7302f7cf0ac67eb064.png" class="css-9pa8cd">
            </div>
            <div class="css-1dbjc4n r-qklmqi r-v4u9kv r-1phboty r-18u37iz r-1pi2tsx r-m611by">
              <span>
                <span style="font-weight: bold; color: rgb(250, 136, 11);">강남역</span>
                <span>우정에쉐르</span>
              </span>
              <div class="css-1dbjc4n" style="flex: 1 1 0%; flex-direction: row-reverse; top: 2px; -webkit-box-orient: horizontal; -webkit-box-direction: reverse;">
                <div class="pages__BaseText-lex7c7-3 fVZAbs css-1563yu1" dir="auto">서울특별시 강남구 역삼동</div>
              </div>
            </div>
            <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
          </div>
        </div>
      </div>

      <div class="pages__-lex7c7-18 cnEQli css-1dbjc4n">
        <div class="pages__-lex7c7-19 hBcXuF css-1dbjc4n">
          <div class="pages__-lex7c7-20 KEuLR css-1dbjc4n">
            <div class="css-1dbjc4n r-qklmqi r-po8w4y r-1t982j2 r-1h8ys4a">
              <div dir="auto" class="css-1563yu1" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 16px; font-weight: bold; line-height: 20px;">소개할게요</div>
            </div>
            <div tabindex="0" class="css-1dbjc4n" style="cursor: pointer; margin-top: 20px;">
              <div class="css-1dbjc4n" style="flex-basis: auto; height: 140px; overflow: hidden; width: 260px; z-index: 0;">
                <div class="css-1dbjc4n" style="background-color: rgba(0, 0, 0, 0); background-position: center center; background-repeat: no-repeat; background-size: cover; inset: 0px; height: 100%; position: absolute; width: 100%; z-index: -1; background-image: url(&quot;https://s.zigbang.com/wwwbanner/imgs/www-banner12.png&quot;);"></div>
                <img alt="" draggable="false" src="https://s.zigbang.com/wwwbanner/imgs/www-banner12.png" class="css-9pa8cd">
              </div>
              <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
            </div>
          </div>

          <div class="pages__-lex7c7-21 iknwfi css-1dbjc4n">
            <div class="css-1dbjc4n r-qklmqi r-po8w4y r-1t982j2 r-1h8ys4a">
              <div dir="auto" class="css-1563yu1" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 16px; font-weight: bold; line-height: 20px;">뉴스</div>
            </div>

            <div tabindex="0" class="css-1dbjc4n r-1loqt21 r-u8s1d r-zchlnj r-ipm5af">
              <div class="pages___-lex7c7-24 fQrkgs css-1dbjc4n">
                <div class="pages__BaseText-lex7c7-3 pages___-lex7c7-25 fVZAbs knYUtX css-1563yu1" dir="auto">더보기</div>
              </div>
              <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
            </div>

            <div class="css-1dbjc4n" style="flex-direction: column; flex-grow: 1; flex-shrink: 1; margin-top: 8px; overflow: hidden auto; transform: translateZ(0px); -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-box-flex: 1;">
              <div class="css-1dbjc4n">

                <div class="css-1dbjc4n"></div>

                <div class="css-1dbjc4n">
                  <div class="pages____-lex7c7-23 kcMLWN css-1dbjc4n r-1loqt21" tabindex="0">
                    <div dir="auto" class="css-1563yu1 css-vcwn7f" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 12px; line-height: 15px; white-space: nowrap;">둘이 함께하는 홈트 노하우!</div>
                    <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
                  </div>
                </div>

                <div class="css-1dbjc4n">
                  <div class="pages____-lex7c7-23 kcMLWN css-1dbjc4n r-1loqt21" tabindex="0">
                    <div dir="auto" class="css-1563yu1 css-vcwn7f" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 12px; line-height: 15px; white-space: nowrap;">플리가 좋은 하루를 만든다</div>
                    <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
                  </div>
                </div>

                <div class="css-1dbjc4n"><div class="pages____-lex7c7-23 kcMLWN css-1dbjc4n r-1loqt21" tabindex="0">
                  <div dir="auto" class="css-1563yu1 css-vcwn7f" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 12px; line-height: 15px; white-space: nowrap;">나도 할 수 있나요? 브이로그</div>
                  <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
                </div>
              </div>

              <div class="css-1dbjc4n">
                <div class="pages____-lex7c7-23 kcMLWN css-1dbjc4n r-1loqt21" tabindex="0">
                  <div dir="auto" class="css-1563yu1 css-vcwn7f" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 12px; line-height: 15px; white-space: nowrap;">VR로 집구경 미리 해보고 산다.</div>
                  <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
                </div>
              </div>

              <div class="css-1dbjc4n">
                <div class="pages____-lex7c7-23 kcMLWN css-1dbjc4n r-1loqt21" tabindex="0">
                  <div dir="auto" class="css-1563yu1 css-vcwn7f" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 12px; line-height: 15px; white-space: nowrap;">"니방에서 신한카드로 월세 내세요"</div>
                  <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
                </div>
              </div>

              <div class="css-1dbjc4n"></div>
            </div>
          </div>
        </div>
          
        <div class="pages__-lex7c7-22 cdOZJi css-1dbjc4n">
          <div class="css-1dbjc4n r-qklmqi r-po8w4y r-1t982j2 r-1h8ys4a">
            <div dir="auto" class="css-1563yu1" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 16px; font-weight: bold; line-height: 20px;">공지사항</div>
          </div>
          <div tabindex="0" class="css-1dbjc4n r-1loqt21 r-u8s1d r-zchlnj r-ipm5af">
            <div class="pages___-lex7c7-24 fQrkgs css-1dbjc4n">
              <div class="pages__BaseText-lex7c7-3 pages___-lex7c7-25 fVZAbs knYUtX css-1563yu1" dir="auto">더보기</div>
              </div>
              <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
            </div>
            <div class="css-1dbjc4n" style="flex-direction: column; flex-grow: 1; flex-shrink: 1; margin-top: 8px; overflow: hidden auto; transform: translateZ(0px); -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-box-flex: 1;">
              <div class="css-1dbjc4n">
                <div class="css-1dbjc4n"></div>
                <div class="css-1dbjc4n">
                  <div class="pages____-lex7c7-23 kcMLWN css-1dbjc4n r-1loqt21" tabindex="0">
                    <div dir="auto" class="css-1563yu1 css-vcwn7f" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 12px; line-height: 15px; white-space: nowrap;">[공지] 니방 개인정보처리방침(2021/12/14) 개정 안내</div>
                    <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
                  </div>
                </div>
                <div class="css-1dbjc4n">
                  <div class="pages____-lex7c7-23 kcMLWN css-1dbjc4n r-1loqt21" tabindex="0">
                    <div dir="auto" class="css-1563yu1 css-vcwn7f" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 12px; line-height: 15px; white-space: nowrap;">[공지] 니방 개인정보처리방침(2021/02/11) 개정 안내</div>
                    <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
                  </div>
                </div>
                <div class="css-1dbjc4n">
                  <div class="pages____-lex7c7-23 kcMLWN css-1dbjc4n r-1loqt21" tabindex="0">
                    <div dir="auto" class="css-1563yu1 css-vcwn7f" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 12px; line-height: 15px; white-space: nowrap;">[공지] 니방 개인정보처리방침(2021/06/01) 개정 안내</div>
                    <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
                  </div>
                </div>
                <div class="css-1dbjc4n">
                  <div class="pages____-lex7c7-23 kcMLWN css-1dbjc4n r-1loqt21" tabindex="0">
                    <div dir="auto" class="css-1563yu1 css-vcwn7f" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 12px; line-height: 15px; white-space: nowrap;">[공지] 니방 개인정보처리방침(2020/12/31) 개정 안내</div>
                    <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
                  </div>
                </div>
                <div class="css-1dbjc4n">
                  <div class="pages____-lex7c7-23 kcMLWN css-1dbjc4n r-1loqt21" tabindex="0">
                    <div dir="auto" class="css-1563yu1 css-vcwn7f" style="color: rgb(0, 0, 0); font-family: SpoqaHanSans; font-size: 12px; line-height: 15px; white-space: nowrap;">[공지] 니방 개인정보처리방침(2020/08/27) 개정 안내</div>
                    <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
                  </div>
                </div>
                <div class="css-1dbjc4n"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="css-1dbjc4n" style="background-color: rgb(246, 246, 246); height: 279px;">
        <div class="pages__-lex7c7-26 fgbdTA css-1dbjc4n">
          <div class="pages__BaseText-lex7c7-3 fVZAbs css-1563yu1" dir="auto" style="font-size: 17px; font-weight: bold; margin-bottom: 40px; margin-left: 4px; margin-top: 101px;">니방앱을 다운받으세요!</div>
          <div class="pages____-lex7c7-29 bDzqLC css-1dbjc4n">
            <div tabindex="0" class="css-1dbjc4n" style="background-image: url(&quot;https://s.zigbang.com/legacy/images/v2/main/download_android.png&quot;); background-size: contain; cursor: pointer; height: 52px; width: 190px;">
              <div class="pages___-lex7c7-28 uptGD css-1dbjc4n"></div>
              <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
            </div>
            <div tabindex="0" class="css-1dbjc4n" style="background-image: url(&quot;https://s.zigbang.com/legacy/images/v2/main/download_iOS.png&quot;); background-size: contain; cursor: pointer; height: 52px; width: 190px;">
              <div class="pages___-lex7c7-27 kVDTNM css-1dbjc4n"></div>
              <div class="css-1dbjc4n r-633pao" style="background-color: rgba(0, 0, 0, 0); inset: 0px; position: absolute;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['items',],
  data() {
    return {
      clickIndex : '',
      searchValue : '',
    }
  },

  async created() {
    this.clickIndex = 0;
  },

  mounted() {

  },

  methods : {
    clickTitle(i) {
      this.clickIndex = i
    },
    clickSearch() {
      console.log(`검색어 = `,this.searchValue) 
      let param
      switch(this.clickIndex) {
        case 0 :
          param = 'apart'
          break
        case 1 :
          param = 'villa'
          break
        case 2 :
          param = 'oneroom'
          break
        case 3 :
          param = 'officetel'
          break
        case 4 :
          param = 'store'
          break
        default:
          break
      }
      if(this.searchValue.length != 0) {
        this.$router.push({ name: `${param}`, params: { search: this.searchValue }})
      }
    },
  }


};
</script>

<style>
.css-1563yu1 {
    border: 0 solid black;
    box-sizing: border-box;
    color: rgba(0,0,0,1.00);
    display: inline;
    font: 14px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    line-height: inherit;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.css-1dbjc4n {
    -ms-flex-align: stretch;
    -ms-flex-direction: column;
    -ms-flex-negative: 0;
    -ms-flex-preferred-size: auto;
    -webkit-align-items: stretch;
    -webkit-box-align: stretch;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-flex-basis: auto;
    -webkit-flex-direction: column;
    -webkit-flex-shrink: 0;
    align-items: stretch;
    border: 0 solid black;
    box-sizing: border-box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    flex-shrink: 0;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    min-height: 0px;
    min-width: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    position: relative;
    z-index: 0;
}

.css-16my406 {
    color: inherit;
    font: inherit;
    white-space: inherit;
}

@media (max-width: 1679px) {
  .fmLtDZ {
    background-image: url(https://s.zigbang.com/v1/web/main/hero_img_1440.jpg)!important;
  }
}

@media (max-width: 1919px) {
  .fmLtDZ {
    background-image: url(https://s.zigbang.com/v1/web/main/hero_img_1680.jpg)!important;
  }
}

.WypHl {
    width: 100%;
    height: 100%;
    min-height: 600px;
    overflow: hidden;
    flex: 1 0 auto;
    display: flex;
}

.fmLtDZ {
    position: relative;
    width: 100%;
    height: 460px;
    margin: 0px auto !important;
    display: flex !important;
    -webkit-box-align: center !important;
    align-items: center !important;
    background-size: cover;
    background-image: url(https://s.zigbang.com/v1/web/main/hero_img_1920.jpg);
}

.grFGbJ {
    width: 942px !important;
    height: 340px !important;
    padding-top: 156px !important;
    background-image: url(https://s.zigbang.com/v1/web/main/whiteArea_img.png);
    background-size: contain !important;
}


.fLoHvJ {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
}

.fPSMTG {
    width: 684px !important;
    height: 46px !important;
    text-shadow: rgb(255 255 255) 0px 16px 40px !important;
    font-size: 40px !important;
    font-weight: bold !important;
    font-stretch: normal !important;
    font-style: normal !important;
    line-height: 1.15 !important;
    letter-spacing: normal !important;
    text-align: center !important;
    color: rgb(0, 0, 0) !important;
    margin: 0px auto !important;
    cursor: default !important;
}

.gWfIok {
    z-index: 99;
    min-height: 40px;
    max-height: 220px;
    width: 574px;
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 0px 1px 1px;
    border-color: rgb(225, 225, 225);
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 4px 0px;
    box-sizing: border-box;
    overflow-y: hidden;
    position: absolute;
    margin-top: 10px;
    border-radius: 8px;
}

.klzbCx:hover {
    background-color: rgb(246, 246, 246);
}
.klzbCx {
    z-index: 10;
    height: 40px;
    box-sizing: border-box;
    background-color: rgb(246, 246, 246);
    cursor: pointer;
    padding-right: 10px;
    padding-left: 52px;
}

.hLNvfj:first-child {
    margin-top: 8px;
}
.hLNvfj {
    margin: 1px;
}

.r-633pao {
    pointer-events: none!important;
}

.fVZAbs {
    font-family: SpoqaHanSans;
}

.kGqMQK {
    display: flex;
    flex-direction: column;
    width: 574px;
    height: 196px;
}

.cnEQli {
    width: 100%;
    padding: 40px 0px 27px;
    background: white;
    overflow: hidden;
}

.kWfCL {
    width: 28px;
    height: 32px;
    object-fit: cover;
}

.eVTGRV:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.eVTGRV {
    z-index: 99 !important;
    position: absolute !important;
    bottom: 0px !important;
    right: 0px !important;
    width: 66px !important;
    height: 60px !important;
    border: 0px !important;
    text-align: center !important;
    -webkit-box-pack: center !important;
    justify-content: center !important;
    border-radius: 0px 8px 8px 0px !important;
    padding: 13px 18px 15px 20px !important;
}

.r-m611by {
    padding-top: 10px;
}

.r-18u37iz {
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    flex-direction: row;
}
.r-1pi2tsx {
    height: 100%;
}
.r-1phboty {
    border-style: solid;
}
.r-v4u9kv {
    border-color: rgb(246, 246, 246);
}

.r-1jtzkro {
    width: 508px !important;
}

.r-m1ore8 {
    padding-top: 17px !important;
}
.r-gxpyh3 {
    padding-right: 28px !important;
}
.r-btgi9e {
    padding-left: 29px !important;
}
.r-ah86l4 {
    padding-bottom: 19px !important;
}
.r-uvuy5l {
    height: 60px !important;
}
.r-1vznrp2 {
    border-top-left-radius: 8px !important;
}
.r-5qlx7g {
    border-bottom-left-radius: 8px !important;
}
.r-n2h5ot {
    background-color: rgb(242, 242, 242) !important;
}

.r-1loqt21 {
    cursor: pointer !important;
}

.r-1h8ys4a {
    padding-top: 4px !important;
}
.r-1t982j2 {
    padding-bottom: 11px !important;
}

.r-qklmqi {
    border-bottom-width: 1px !important;
}
.r-po8w4y {
    border-color: rgb(225, 225, 225) !important;
}

.iEYDDq {
    height: 60px;
    font-size: 16px;
    border-width: 0px;
    background-color: rgb(242, 242, 242);
    line-height: 1.5;
    font-family: SpoqaHanSans;
}

input, textarea {
    outline: none;
}

.aYWeL {
    font-size: 17px  !important;
    font-stretch: normal !important;
    font-style: normal !important;
    line-height: 1.35 !important;
    letter-spacing: normal;
    text-align: center;
    width: 100% !important;
    height: 100% !important;
    padding-top: 8px;
    position: relative;
    z-index: 10;
    transition: all 0.5s ease 0s;
    color: rgb(45, 96, 163) !important;
    font-weight: bold !important;
}

.fCAmPZ:hover {
    background-color: rgb(246, 246, 246);
}
.fCAmPZ {
    z-index: 10;
    height: 40px;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    padding-right: 10px;
    padding-left: 52px;
}

.koApIc {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    padding: 0px 8px;
}

.ldYzTz {
    font-size: 17px !important;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    padding-top: 8px;
    z-index: 10;
}

.IWimp {
    width: 110px;
    height: 48px;
    background-image: url(https://s.zigbang.com/v1/web/main/select_bubble.png);
    background-size: cover;
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    padding-top: 8px;
    position: absolute;
    top: 0px;
    transition: all 0.2s ease-in 0s;
    left: 116px;
}

.fVZAbs {
    font-family: SpoqaHanSans !important;
}
.r-1loqt21 {
    cursor: pointer !important;
}

.kWDGzf {
    width: 110px;
    height: 48px;
    background-image: url(https://s.zigbang.com/v1/web/main/select_bubble.png);
    background-size: cover;
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    padding-top: 8px;
    position: absolute;
    top: 0px;
    transition: all 0.2s ease-in 0s;
    left: 0px;
}

.IWgFo {
    width: 110px;
    height: 48px;
    background-image: url(https://s.zigbang.com/v1/web/main/select_bubble.png);
    background-size: cover;
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    padding-top: 8px;
    position: absolute;
    top: 0px;
    transition: all 0.2s ease-in 0s;
    left: 232px;
}

.IWcHc {
    width: 110px;
    height: 48px;
    background-image: url(https://s.zigbang.com/v1/web/main/select_bubble.png);
    background-size: cover;
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    padding-top: 8px;
    position: absolute;
    top: 0px;
    transition: all 0.2s ease-in 0s;
    left: 348px;
}

.IWhuF {
    width: 110px;
    height: 48px;
    background-image: url(https://s.zigbang.com/v1/web/main/select_bubble.png);
    background-size: cover;
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    padding-top: 8px;
    position: absolute;
    top: 0px;
    transition: all 0.2s ease-in 0s;
    left: 464px;
}

.jsbwAO {
    background-color: rgb(250, 149, 11);
    border-radius: 8px;
}


.eIgVee {
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 8px;
    margin-bottom: 26px;
}

.fLoHvJ {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
}

.cnEQli {
    width: 100%;
    padding: 40px 0px 27px;
    background: white;
    overflow: hidden;
}
</style>
