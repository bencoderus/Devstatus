<template>
  <div class="form-body">
    <div class="row">
      <div class="img-holder">
        <div class="bg"></div>
        <div class="info-holder">
          <h3>Git Developer Status.</h3>
          <p>
          Provides you with a fast medium to review developers account on Github.
          </p>
          <img src="images/graphic1.svg" alt="" />
        </div>
      </div>
      <div class="form-holder">
        <div class="form-content">
          <div class="form-items">
            <div class="website-logo-inside">
              <a href="/">
                  <h3>About Developer</h3>
              </a>
            </div>
            <div class="page-links">
              <router-link to="/status"><a class="active">{{data.name | checknull2}}</a></router-link>
              <router-link to="/"><a>Check</a></router-link>
            </div>
              <div class="contents">
<div class="row">
  <div class="col-9">
              <p>{{data.bio | checknull}}</p>
              <!-- <p>
                Name: {{data.name | checknull}}
              </p> -->
              <p>
                Respositories: {{data.public_repos}}
              </p>
              <p>Location: {{data.location | checknull}}</p>
              <p>Website: <a :href="data.blog" class="text-white" target="_blank">{{data.blog | checknull}}</a> </p>
              <p>Status: {{data.public_repos | status}}</p>
              <p>Joined: {{data.created_at | formatdate}}</p>

  </div>
  <div class="col-3"><br>
    <img :src="data.avatar_url" alt="userphoto" style="width: 100%;">
  </div>
</div>
</div>
            

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      data: {},
    }
  },
  methods: {
    check() {
      }
    },
   created(){
    var userdata = localStorage.getItem('data');
    if(!userdata){
    this.$router.push({name: 'home'});
    }
    this.data = JSON.parse(userdata)
   }
};
</script>

<style></style>
