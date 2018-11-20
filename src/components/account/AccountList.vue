<template>
  <div class="account-list">
    <div class="container box">
      <div class="content">
        <div class="section">
          <div class="title">
            <img class="mobile-icon" src="/static/images/user-black.png">
            My Account
          </div>
          <AccountItem class="item" type="account" />
        </div>
        <div class="section">
          <div class="title">
            <img class="mobile-icon" src="/static/images/payment.png">
            My Payment Method
          </div>
          <AccountItem class="item" type="payment" />
        </div>
        <div class="section">
          <div class="title">
            <img class="mobile-icon" src="/static/images/credits.png">
            GoBambino Credits
          </div>
          <AccountItem class="item" type="credits" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountItem from './AccountItem'

export default {
  components: {
    AccountItem
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .content {
    margin: auto;
    max-width: 80%;
    padding: 25px 0 25px 0;
  }

  .section {
    margin-bottom: 40px;

    &:last-child {
      margin: 0;
    }
  }

  .title {
    color: #E1519F;
    font-size: 16px;
    margin-bottom: 25px;

    &::after {
      content: ':';
    }
  }

  .mobile-icon {
    display: none;
  }
}

@include mobile {
  .container,
  .box {
    all: unset;
  }

  .account-list {
    background: #eee;
  }

  .section {
    background: #fff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;

    &:last-child {
      margin: 0;
    }
  }

  .title {
    align-items: center;
    background: #eee;
    border-top: 1px solid #ddd;
    color: #E1519F;
    display: flex;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
  }

  .mobile-icon {
    display: block;
    height: 30px;
    margin-right: 10px;
    object-fit: contain;
    width: 30px;
  }
}
</style>