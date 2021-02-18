<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <section style="text-align: left">
      
      <h1 class="color-primary" >Skill</h1>
      <h2 class="color-secendary" >Front end</h2>
      <b class="color-secendary">Basic</b><br>
      HTML5 / 2013 - present / 4.5 years <br>
      CSS3 / 2013 - present / 4.5 years <br>
      Sass / 2015 - present / 3.5 years<br>
      Javascript / 2013 - present / 4.5years<br><br>
      <b class="color-secendary">CSS Frameworks</b><br>
      Bootstrap 4 years <br>Google MTL 3 months<br> Semantic UI 2 months<br><br>
      <b class="color-secendary">JS Libraries / Frameworks</b><br>
      jQuery / 2013 - present / 4.5 years <br>Angular / 2015 - present / 1.5 years<br>
      Vue / 2018 - present / 1 year<br><br>
      <b class="color-secendary">Version Control</b><br>
      Git / 2015 - present / 3.5 years<br>
      <h2 class="color-primary" >Design Tools</h2>
      Illustrator 7 years <br>Photoshop 2 years<br>Sketch 2 years <br><br>
      
      <b class="color-secendary">Collaboration Tools</b><br>
      Zeplin Balsamiq Hype 3

<h1 class="color-primary" >Language</h1>

      JLPT N1<br>
      TOEIC 530<br>
    </section>
    <!-- <He lloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
b {
  font-size: 1em;
}

.color-secendary,
.color-primary {
  padding-top: 20px;
}

</style>
