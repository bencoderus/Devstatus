<template>
  <home>
    <div class="form-holder">
      <div class="form-content">
        <div class="form-items">
          <div class="website-logo-inside" v-show="data.name">
            <h3>{{ data.name }}</h3>
            <p class="text-sm text-white" v-show="data.name">
              {{ data.bio }}
            </p>
            <small class="text-white" v-show="data.name">
              <span class="font-weight-bold">{{ data.following }}</span>
              Following
              <span class="ml-4 font-weight-bold">{{ data.followers }}</span>
              Followers
            </small>
          </div>

          <div class="page-links">
            <router-link to="/status"
              ><a class="active text-capitalize">{{
                data.login | checknull2
              }}</a></router-link
            >
            <router-link to="/"><a>Check</a></router-link>
          </div>
          <div class="contents">
            <div class="row">
              <div class="col-9">
                <p>
                  Respositories:
                  <a
                    :href="getRepo(data.login)"
                    class="text-white"
                    target="_blank"
                    ><b>{{ data.public_repos }}</b>
                  </a>
                </p>
                <p>Location: {{ data.location | checknull }}</p>
                <p>
                  Website:
                  <a :href="data.blog" class="text-white" target="_blank">{{
                    data.blog | checknull
                  }}</a>
                </p>
                <p>Status: {{ data.public_repos | status }}</p>
                <p>Joined: {{ data.created_at | formatdate }}</p>
              </div>
              <div class="col-3">
                <img
                  :src="data.avatar_url"
                  alt="userphoto"
                  style="width: 100%;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </home>
</template>

<script>
import Home from './layouts/Main.vue'
export default {
  name: 'About',
  components: {
    Home
  },
  data () {
    return {
      data: {}
    }
  },
  methods: {
    getRepo (username) {
      return `https://github.com/${username}?tab=repositories`
    }
  },
  created () {
    var userdata = localStorage.getItem('data')
    if (!userdata) {
      this.$router.push({ name: 'home' })
    }
    this.data = JSON.parse(userdata)
  }
}
</script>

<style></style>
