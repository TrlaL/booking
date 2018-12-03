<template>
  <div class="menu-button" @mouseenter="handle(true)" @mouseleave="handle(false)">
    <img class="icon" src="/static/images/user-gray.svg">
    <div>My Account</div>
    <img class="icon" src="/static/images/arrow-bottom.svg">
    <transition name="fade">
      <div class="list" v-show="visible" @click="handle(false)">
        <router-link to="/favorites">Favorites</router-link>
        <router-link to="/going">I’m Going</router-link>
        <router-link to="/past-booked">Past Booked</router-link>
        <router-link to="/family">My Family</router-link>
        <router-link to="/account">My Account</router-link>
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
  .menu-button {
    align-items: center;
    border: 1px solid #D9429F;
    border-radius: 5px;
    color: #D9429F;
    cursor: pointer;
    display: flex;
    flex: 1;
    font-size: 17px;
    justify-content: space-between;
    max-width: 250px;
    padding: 5px 17px 5px 17px;
    position: relative;
    z-index: 1;
  }

  .icon {
    height: 30px;
    object-fit: contain;
    width: 30px;
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
  .menu-button {
    display: none;
  }
}
</style>