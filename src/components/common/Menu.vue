<template>
  <div class="menu" @mouseenter="handle(true)" @mouseleave="handle(false)">
    <img src="/static/images/user-small.png">
    My Account
    <img src="/static/images/arrow-bottom.png">
    <transition name="fade">
      <div class="list" v-show="visible">
        <router-link to="/favorites">My Favorites</router-link>
        <router-link to="/going">I’m Going</router-link>
        <router-link to="/family">Kids & Caregivers</router-link>
        <router-link to="/past-booked">Past Booked</router-link>
        <router-link to="/account">Account</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handle (visible) {
      this.visible = visible
    }
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .menu {
    align-items: center;
    border: 1px solid #D9429F;
    border-radius: 5px;
    color: #D9429F;
    display: flex;
    flex: 1;
    font-size: 17px;
    justify-content: space-between;
    max-width: 250px;
    padding: 5px 17px 5px 17px;
    position: relative;
    z-index: 1;
  }

  .list {
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    font-size: 15px;
    left: 0;
    position: absolute;
    top: calc(100% + 1px);
    width: 100%;

    a {
      color: #4F4F4F;
      padding: 5px 10px 5px 10px;
      text-decoration: none;
    }

    a:hover {
      background: #eee;
    }
  }
}

@include mobile {
  .menu {
    display: none;
  }
}
</style>