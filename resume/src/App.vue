<template>
  <div class="wrap" @scroll="pageScroll" ref="wrap">
    <aside class="aside">
      <h1 class="name color-secendary">
        Ilandy Chiu <br /><small>邱子繡</small>
      </h1>
      <p>
        <b class="color-primary">Summary</b><br />
        6.5 years Working Experience<br />
        <br />
        Front-End Developer 4.5 years<br />
        UI Designer 2 years<br />
        <br />

        <b class="color-primary">Education</b><br />
        Kun Shan University <br />Visual Communication Design <br />2006.09 -
        2011.2<br /><br />

        <b class="color-primary">GitHub</b><br />
        <a class="color-secendary" href="https://github.com/ilandy/"
          >https://github.com/ilandy/</a
        >
        <br />
        <br />
        <b class="color-primary">CodePen</b><br />
        <a
          class="color-secendary"
          href="https://codepen.io/ilandy/pens/showcase"
          >https://codepen.io/ilandy/pens/showcase</a
        >
      </p>
    </aside>
    <div class="content" ref="divAsTarget">
      <div id="nav" :class="{ isActive: isActive }">
        <div class="name" v-show="isActive">
          Ilandy Chiu <small>邱子繡</small>
        </div>
        <router-link to="/"> 專業技能 </router-link> |
        <router-link to="/experience"> 經歷 </router-link> |
        <router-link to="/project"> 專案 </router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
const options = {
  root: null,
  threshold: 0,
};
export default {
  data() {
    return {
      isActive: false,
      pageheight: 0,
    };
  },
  methods: {
    pageScroll() {
      // console.log(this.$refs.divAsTarget)

      // console.log(this.$refs.wrap.scrollTop)
      this.getRefPosition();
    },
    getRefPosition() {
      // console.log(this.$refs.wrap.scrollTop)

      if (this.$refs.wrap.scrollTop > this.$refs.divAsTarget.offsetTop) {
        this.isActive = true;
        return;
      }
      this.isActive = false;
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap");
body,
html {
  padding: 0;
  margin: 0;
  background-color: #222;
}
.wrap {
  height: 85.5vh;
  overflow: auto;
  h1.name {
    padding-top: 0.85em;
    margin: 0;
  }
}
a {
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid #fff;
  &:hover {
    color: #f9bca7;
    border-color: #f9bca7;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ccc;
  background-color: #1c1c1c;
}

#nav {
  padding-top: 100px;

  & > a {
    font-weight: bold;
    color: #ccc;
    text-decoration: none;
    padding-bottom: 4px;
    border: none;

    &.router-link-exact-active {
      color: #f9bca7;
      border-bottom: 1px solid;
    }
  }
  .name {
    display: none;
  }
}

.wrap {
  position: relative;
}
.aside {
  position: fixed;
  width: 25vw;
  padding-left: 5vw;
  min-height: 100vw;
  background-color: #222;
  color: #eee;
}
.name {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 4em;
  small {
    font-size: 50%;
  }
  
}
.content {
  flex: 60vw;
  margin-left: 35vw;
}
.color-primary {
  color: #f9bca7;
}
.color-secendary {
  color: #fff;
}
@media screen and (max-width: 991px) {
  .aside {
    position: relative;
    width: 95vw;

    padding-left: 5vw;
    padding-bottom: 5vw;
  }
  .content {
    padding-top: 130px;
    flex-basis: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
  }
  #nav {
    padding-top: 40px;
    margin-top: -130px;
    top: 100px;
    transition: top .2s;

    .name {
      
        display: block;
        font-size: 2em;
        padding-bottom: 10px;
      
    }
    &.isActive {
        position: fixed;
        width: 100%;
        top: 125px;
        left: 0;
        padding-left: 5%;
        padding-bottom: 30px;
        background-color: #222;
      }
  }
}
</style>
