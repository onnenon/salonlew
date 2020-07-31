<template>
  <div class="navigation">
    <div class="bar">
      <div class="nav-wrapper">
        <div class="nav-links">
          <div
            class="nav-link"
            v-for="(link, index) in nav_links"
            v-bind:key="index"
          >
            <router-link :to="link.path">{{ link.text }}</router-link>
          </div>
        </div>
        <div class="social-links">
          <div v-for="(item, index) in social_links" v-bind:key="index">
            <a :href="item.link" :aria-label="item.label">
              <i :class="item.icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="mobile-nav-wrapper">
        <picture>
          <source
            srcset="../assets/salonlew_logo_white_small.webp"
            type="image/webp"
          />
          <source
            srcset="../assets/salonlew_logo_white_small.png"
            type="image/png"
          />
          <img
            alt="salon lew logo"
            src="../assets/salonlew_logo_white_small.png"
          />
        </picture>
        <i :class="mobile_icon[mobile_icon_index]" @click="toggle_menu" />
      </div>
    </div>
    <div class="mobile-link-wrapper" v-show="display_menu">
      <div
        class="mobile-link"
        v-for="(link, index) in nav_links"
        v-bind:key="index"
      >
        <router-link v-on:click.native="toggle_menu" :to="link.path">
          {{ link.text }}
        </router-link>
      </div>
      <div class="mobile-social">
        <div class="mobile-social-link">
          <a href="tel:515-273-5391">
            <i class="fa fa-phone" />
          </a>
        </div>
        <div
          class="mobile-social-link"
          v-for="(item, index) in social_links"
          v-bind:key="index"
        >
          <a :href="item.link">
            <i :class="item.icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      display_menu: false,
      mobile_icon: ['fas fa-bars', 'fas fa-times'],
      mobile_icon_index: 0,
      social_links: {
        facebook: {
          label: 'salon lew Facebook',
          icon: 'fab fa-facebook-f',
          link: 'https://facebook.com/salonlew'
        },
        twitter: {
          label: 'salon lew Twitter',
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/salon_lew'
        },
        instagram: {
          label: 'salon lew Instagram',
          icon: 'fab fa-instagram',
          link: 'https://instagram.com/salon.lew'
        }
      },
      nav_links: [
        { text: 'HOME', path: '/' },
        { text: 'ABOUT US', path: '/about' },
        { text: 'SERVICES', path: '/services' },
        { text: 'PRODUCTS', path: '/products' },
        { text: 'CONTACT', path: '/contact' }
      ]
    };
  },
  methods: {
    toggle_menu() {
      console.log('toggled');
      this.mobile_icon_index = (this.mobile_icon_index + 1) % 2;
      this.display_menu = !this.display_menu;
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.bar {
  background-color: #282327;
  height: 3.8em;
  align-items: center;
  flex: 0 1 100vw;
  flex-wrap: wrap;
}
.nav-wrapper {
  display: flex;
  max-width: 961px;
  flex: 1 0 961px;
  margin: 0 auto;
  font-size: 0.9em;
  justify-content: space-between;
  flex-wrap: wrap;
}
.nav-links {
  display: flex;
  flex: 0 1 80%;
  justify-content: space-between;
}
.nav-link {
  display: flex;
  height: 3.8em;
  flex: 0 1 20%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.social-links {
  display: flex;
  flex: 0 1 20%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
i {
  font-size: 1.5em;
}
a {
  display: flex;
  text-decoration: none;
  color: #ffffff;
  padding: 1.2em;
  outline: 0;
}
.router-link-exact-active {
  color: #853179;
  border-top: 3px solid #853179;
}
a:hover {
  color: #853179;
}

.mobile-nav-wrapper {
  display: none;
}
.mobile-link-wrapper {
  display: none;
}
@media screen and (max-width: 805px) {
  .nav-wrapper {
    display: none;
  }
  .bar {
    height: 5.5em;
    display: flex;
  }
  .mobile-nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }
  .mobile-link-wrapper {
    display: flex;
    flex-direction: column;
    background-color: #ececec;
    padding: 1em;
    align-items: center;
    transition: all 0.3s ease;
    height: auto;
    overflow: hidden;
    flex: 1;
  }
  .mobile-link-wrapper.folded {
    flex: 0;
  }
  .mobile-link a {
    color: #2d2d2d;
    padding: 0.5em;
    font-size: 1.3em;
  }
  .mobile-link a:hover {
    color: #853179;
  }
  .mobile-social {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
  }
  .mobile-social-link {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .router-link-exact-active {
    border-top: 0;
    border-left: 5px solid #853170;
  }
  img {
    height: 3em;
    width: auto;
    object-fit: contain;
    padding-left: 1.5em;
  }
  i {
    font-size: 2em;
    padding-right: 1em;
    color: #ececec;
  }
}
.mobile-social i {
  color: #2d2d2d;
  font-size: 1.5em;
  padding: 0.5em;
}
</style>
