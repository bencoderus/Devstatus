<template>
  <home>
    <div class="form-holder">
      <div class="form-content">
        <div class="form-items">
          <div class="website-logo-inside">
            <h3>Developer Status</h3>
          </div>
          <div class="page-links">
            <router-link to="/"><a class="active">Check</a></router-link>
            <router-link to="/status"
              ><a v-show="success">Status</a></router-link
            >
          </div>

          <div
            class="alert alert-dismissible fade show"
            :class="[success ? 'alert-success' : 'alert-warning']"
            role="alert"
            v-show="error || success"
          >
            {{ msg }}
          </div>
          <form @submit.prevent="check()">
            <input
              class="form-control"
              type="text"
              v-model="user"
              placeholder="Enter Github Username"
            />
            <div class="form-button">
              <button
                id="submit"
                :disabled="wait"
                type="submit"
                class="btn-block p-2 ibtn"
              >
                {{ btntext }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </home>
</template>

<script>
import Home from './layouts/Main.vue'
export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      user: '',
      data: {},
      error: false,
      success: false,
      msg: '',
      wait: false,
      btntext: 'Check Status'
    }
  },
  methods: {
    check () {
      this.validate(this.user)
      if (!this.error) {
        this.$loader.start()

        this.wait = true
        this.btntext = 'Please wait'
        this.$http
          .get(`https://api.github.com/users/${this.user}`)
          .then(response => {
            this.data = response.data
            localStorage.setItem('data', JSON.stringify(response.data))
            this.success = true
            this.wait = false
            this.btntext = 'Check again'
            this.msg =
              'Data fetched successfully, you can check your staus now.'
            this.$loader.done()
            this.$router.push({ name: 'status' })
          })
          .catch(error => {
            console.log(error)
            this.success = false
            this.error = true
            this.wait = false
            this.btntext = 'Check again'
            if (!error.response) {
              this.msg = 'Please connect to the internet first'
            } else {
              this.msg = 'User Not found'
            }
            this.$loader.done()
          })
      }
    },
    validate (user) {
      if (!user) {
        this.success = false
        this.error = true
        this.msg = 'Please add your Github username first!'
      } else if (user.length < 4) {
        this.error = true
        this.success = false
        this.msg = 'Your Github username is too short'
      } else if (user.length >= 25) {
        this.error = true
        this.success = false
        this.msg = 'Your Github username is too long'
      } else {
        this.error = false
        this.success = false
      }
    }
  }
}
</script>

<style></style>
