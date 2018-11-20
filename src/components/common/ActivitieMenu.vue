<template>
  <div class="activities-menu">
    <a class="selected" href="#">DROP-INS</a>
    <a href="#">SEMESTERS</a>
    <a href="#">CAMPS</a>
  </div>
</template>

<style lang="scss" scoped>
@include desktop {
  .activities-menu {
    display: flex;
    padding: 15px 0 15px 0;

    a {
      color: #E1519F;
      flex: 1;
      font-size: 22px;
      font-weight: 300;
      text-align: center;
      text-decoration: none;
    }

    a.selected {
      font-weight: bold;
      text-decoration: underline;
    }
  }
}

@include mobile {
  .activities-menu {
    background: #eee;
    border-top: 1px solid #ddd;
    display: flex;

    a {
      border-bottom: 2px solid transparent;
      color: #918A8C;
      flex: 1;
      padding: 10px 0 10px 0;
      text-align: center;
      text-decoration: none;
    }

    a.selected {
      border-color: #E1519F;
      color: #E1519F;
    }
  }
}
</style>