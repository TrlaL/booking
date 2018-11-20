<template>
  <div class="header">
    <div class="container">
      <router-link to="/">
        <div class="logo"></div>
      </router-link>
      <div class="desktop-links">
        <a href="#">Browse Activities</a>
        <a href="#">Browse Featured Providers </a>
        <a class="button" href="#">FEATURE YOUR<br>ACTIVITIES</a>
      </div>
      <div class="mobile-controls">
        <img src="/static/images/user-small.png">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@include desktop {
  .header {
    background: $gradient;
    height: 85px;
  }

  .container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
  }

  .logo {
    background-image: url('/static/images/logo-desktop.png');
    height: 56px;
    width: 75px;
  }

  .desktop-links {
    align-items: center;
    display: flex;
    font-size: 14px;

    a {
      color: #FFFFFF;
      font-weight: bold;
      margin-right: 42px;
      text-decoration: none;
    }

    a:last-child {
      margin-right: 0;
    }

    .button {
      background: #fff;
      border-radius: 5px;
      color: #69BCB5;
      font-size: 14px;
      font-weight: normal;
      padding: 5px 25px 5px 25px;
      text-align: center;
    }
  }

  .mobile-controls {
    display: none;
  }
}

@include mobile {
  .header {
    padding: 8px;
  }

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    background-image: url('/static/images/logo-mobile.png');
    height: 25px;
    width: 45px;
  }

  .desktop-links {
    display: none;
  }
}
</style>