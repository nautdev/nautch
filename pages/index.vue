<template>
  <div>
    <Head />
    <section class="section section--insta">
      <div class="section__inner">
        <h2 class="section__title">
          Stories
        </h2>
        <div v-if="insta[0]" v-for="item in insta" class="story">
          <template v-if="item.carousel_media">
            <no-ssr>
              <vue-tiny-slider v-bind="tinySliderOptions">
                <div
                  v-for="(video, index) in item.carousel_media"
                  v-if="video.videos"
                  class="story__item"
                >
                  <template v-if="index === 0">
                    <video :poster="item.images.standard_resolution.url" controls class="story__video">
                      <source :src="video.videos.standard_resolution.url" type="video/mp4">
                    </video>
                  </template>
                  <template v-else>
                    <video controls class="story__video">
                      <source :src="video.videos.standard_resolution.url" type="video/mp4">
                    </video>
                  </template>
                </div>
              </vue-tiny-slider>
            </no-ssr>
          </template>
          <template
            v-else
            class="story"
          >
            <video :poster="item.images.standard_resolution.url" controls class="story__video">
              <source :src="item.videos.standard_resolution.url" type="video/mp4">
            </video>
          </template>
          <truncate
            v-if="item.caption.text"
            :length="140"
            :text="parseTags(item.caption.text)"
            class="story__text"
            action-class="story__expander"
            collapsed-text-class="collapsed"
            clamp="Show more"
            less="Show less"
            type="html"
          />
        </div>
      </div>
    </section>
    <Crew />
    <div class="contact">
      <a
        v-scroll-to="'#crew'"
        href="#crew"
        class="contact--link"
      >Contact & Crew</a>
    </div>
  </div>
</template>

<style  src='~/assets/css/slider.css'>
</style>

<script>
import scrollmonitor from 'scrollmonitor'
import truncate from 'vue-truncate-collapsed'
import Head from '~/components/Head.vue'
import Crew from '~/components/crew.vue'

export default {
  components: {
    truncate,
    Head,
    Crew
  },
  data: function() {
    return {
      insta: this.$store.getters.stories || false,
      tinySliderOptions: {
        mouseDrag: false,
        loop: false,
        items: 1,
        controls: true,
        nav: true,
        navPosition: 'bottom',
        controlsText: [
          '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><polygon xmlns="http://www.w3.org/2000/svg" class="cls-1" points="36.42 0 38.58 2.16 15.74 25 38.58 47.84 36.42 50 11.42 25 36.42 0" <rect xmlns="http://www.w3.org/2000/svg" class="cls-2" width="50" height="50"/><path fill="none" d="M0 0h24v24H0z"/></svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><polygon xmlns="http://www.w3.org/2000/svg" class="cls-1" points="13.58 50 11.42 47.84 34.26 25 11.42 2.16 13.58 0 38.58 25 13.58 50" <rect xmlns="http://www.w3.org/2000/svg" class="cls-2" width="50" height="50"/><path fill="none" d="M0 0h24v24H0z"/></svg>'
        ]
      }
    }
  },
  async fetch({ store }) {
    await store.dispatch('getInsta')
  },
  mounted: function() {
    this.$nextTick(function() {
      const canvasready = new CustomEvent('canvasready', {})
      window.dispatchEvent(canvasready)
    })

    const logo = document.getElementsByClassName('logo')
    // const sectionlogo = document.getElementsByClassName('section--logo')
    const sectioninsta = document.getElementsByClassName('section--insta')
    const sectionteam = document.getElementsByClassName('section--crew')
    const logoWatcher = scrollmonitor.create(logo)

    /* const sectionLogoWatcher = scrollmonitor.create(sectionlogo, {
      bottom: -200
    }) */
    const sectionInstaWatcher = scrollmonitor.create(sectioninsta)
    const sectionTeamWatcher = scrollmonitor.create(sectionteam)
    const that = this
    logoWatcher.lock()

    logoWatcher.partiallyExitViewport(function() {
      document.getElementsByClassName('logo')[0].classList.add('fixed')
    })

    logoWatcher.fullyEnterViewport(function() {
      document.getElementsByClassName('logo')[0].classList.remove('fixed')
      that.$el.querySelector('.contact').classList.remove('visible')
    })

    sectionInstaWatcher.enterViewport(function() {
      that.$el.querySelector('.contact').classList.add('visible')
      that.$el.querySelector('.section--insta').classList.add('active')
    })

    sectionInstaWatcher.exitViewport(function() {
      that.$el.querySelector('.section--insta').classList.remove('active')
    })

    sectionTeamWatcher.enterViewport(function() {
      that.$el.querySelector('.section--insta').classList.remove('active')
      that.$el.querySelector('.contact').classList.remove('visible')
    })

    sectionTeamWatcher.exitViewport(function() {
      that.$el.querySelector('.contact').classList.add('visible')
      that.$el.querySelector('.section--insta').classList.add('active')
    })
  },
  methods: {
    parseTags: function(input) {
      const text = input.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
        return '<span class="story__hashtag">' + t + '</span>'
      })

      return text.replace(/\r?\n/g, '<br><br>$&')
    }
  }
}
</script>

<style>
.contact {
  position: fixed;
  bottom: 0;
  display: block;
  width: 100%;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.visible {
    opacity: 1;
  }

  &--link {
    background-color: #fff;
    padding: 10px 15px;
    color: black;
    text-decoration: none;
    display: inline-block;
    margin: 0 auto;
    font-size: 14px;
    text-transform: uppercase;

    @media (--from-tablet) {
      padding: 15px 30px;
      font-size: 16px;
    }
  }
}

.section {
  background-image: url('/naut-bg.jpg');
  background-attachment: fixed;

  &__title {
    font-size: 40px;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0 0 90px 0;

    @media (--from-tablet) {
      font-size: 60px;
      margin: 0 0 90px 0;
    }
  }

  &__inner {
    margin: 0 20px;
    padding: 100px 0;

    @media (--from-tablet) {
      max-width: 800px;
      margin: 0 auto;
    }
  }

  &--logo {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    text-align: center;
  }

  &--insta {
    text-align: center;
    margin: 0 0 100px 0;
    color: black;
    overflow: visible;
    background-color: black;
    background-blend-mode: difference;
    transition: 2s background;

    &.active {
      background-image: url('/naut-bg-b.jpg');
      color: white;

      @media (--from-desktop) {
        background-blend-mode: difference;
        background-color: white;
        background-image: url('/naut-bg.jpg');
      }
    }
  }

  &--crew {
    text-align: center;
    justify-content: center;
    align-items: center;
    color: black;
  }
}

.story {
  width: 100%;
  margin: 0 auto 100px auto;

  @media (--from-tablet) {
    max-width: 640px;
    margin: 0 auto 150px auto;
  }

  &__video {
    width: 100%;

    @media (--from-tablet) {
      max-width: 640px;
    }
  }

  &__text {
    font-size: 18px;
    line-height: 1.6;
    text-align: left;
    margin-top: 20px;

    @media (--from-tablet) {
      font-size: 24px;
    }
  }

  &__hashtag {
    color: #a16cff;
  }

  .collapsed br {
    display: none;
  }

  &__expander {
    display: table;
    text-align: left;
    color: #a16cff;
    border-bottom: 2px solid #a16cff;

    &:hover {
      border-bottom: 2px solid transparent;
    }
  }
}
</style>
