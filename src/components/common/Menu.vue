<template>
  <div class="menu">
    <img src="/static/images/user-small.png">
    My Account
    <img src="/static/images/arrow-bottom.png">
    <div class="list">
      <a href="#">My Favorites</a>
      <a href="#">I’m Going</a>
      <a href="#">Kids & Caregivers</a>
      <a href="#">Past Booked</a>
      <a href="#">Account</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

  &:hover .list {
    display: flex;
  }
}

.list {
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: none;
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
</style>