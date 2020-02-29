<template>
  <div class="form-body">
    <div class="row">
      <div class="img-holder">
        <div class="bg"></div>
        <div class="info-holder">
          <h3></h3>
          <p>
            Provides you with a fast medium to review developers account on
            Github.
          </p>
          <img src="images/graphic1.svg" alt="" />
        </div>
      </div>
      <div class="form-holder">
        <div class="form-content">
          <div class="form-items">
            <div class="website-logo-inside">
              <a href="/">
                <h3>404 Error</h3>
              </a>
            </div>
            <div class="page-links">
              <router-link to="/"
                ><a class="active">Home</a></router-link
              >
            </div>
            <div class="contents">
              <h3>Not Found</h3>
              <p>
                Seems like you are lost, the page you are looking for wasn't
                found!
              </p>
              <p>
                <router-link to="/"
                  ><a class="text-white font-weight-bold">Go Back Home</a></router-link
                >
              </p>
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
      data: {}
    };
  },
  methods: {
    check() {}
  }
};
</script>

<style></style>
