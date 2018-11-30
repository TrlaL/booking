<template>
  <div class="container box">
    <Modal title="Alert">Settings have been saved</Modal>
    <div class="section">
      <div class="title">My account</div>
      <div class="block">
        <img class="icon" src="/static/images/user-black.png">
        <div class="forms">
          <div>
            <label>Full Name</label>
            <input type="text" v-model="user.fullName">
          </div>
          <div>
            <label>Email</label>
            <input type="text" v-model="user.email">
          </div>
          <div>
            <label>Password</label>
            <input type="text" placeholder="********" v-model="user.password">
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" v-model="user.phone">
          </div>
        </div>
        <div class="buttons">
          <button @click="saveUserSettings">Update</button>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="title">My payment method</div>
      <div class="block">
        <img class="icon" src="/static/images/payment.png">
        <div class="forms">
          <div>
            <label>Credit Card Number</label>
            <input type="text">
          </div>
          <div>
            <label>Experation Date</label>
            <input type="text">
          </div>
        </div>
        <div class="buttons">
          <button>Update</button>
          <button class="reset">
            <img class="desktop" src="/static/images/reset.png">
            <div class="mobile">Remove</div>
          </button>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="title">GoBambino Credits</div>
      <div class="block">
        <img class="icon" src="/static/images/credits.png">
        <div class="forms">
          Currently, no credits available
        </div>
        <div class="buttons">
          <button>+ Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../common/Modal'
import { loadUserSettings, saveUserSettings } from '@/api/profile'

export default {
  components: {
    Modal
  },
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.loadUserSettings()
  },
  methods: {
    async loadUserSettings () {
      let response = await loadUserSettings()
      if (response.data.result) {
        this.user = response.data.user
      }
    },
    async saveUserSettings () {
      let response = await saveUserSettings({
        fullName: this.user.fullName,
        email: this.user.email,
        phone: this.user.phone
      })
      if (response.data.result) {
        this.$store.commit('SET_MODAL_VISIBLE', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .container {
    padding: 25px 0 25px 0;
  }

  .section {
    color: #4F4F4F;
    font-size: 15px;
    margin: auto;
    margin-bottom: 50px;
    max-width: 70%;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .title {
    color: #E1519F;
    font-size: 15px;

    &::after {
      content: ':';
    }
  }

  .block {
    align-items: center;
    display: flex;
    padding: 15px 0 15px 0;
  }

  .icon {
    object-fit: contain;
    margin-right: 40px;
  }

  .forms {
    display: flex;
    flex: 1;

    div {
      display: flex;
      flex-direction: column;
      margin-right: 15px;

      &:last-child {
        margin: 0;
      }
    }

    label {
      color: #A1A1A1;
      font-size: 14px;
    }

    input {
      border: 0;
      border-bottom: 1px solid #D4D4D4;
      color: #4F4F4F;
      font: inherit;
      padding: 5px 0 5px 0;
      width: 100%;
    }
  }

  .buttons {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
    width: 125px;

    button {
      background: #E1519F;
      border: 0;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      font: inherit;
      padding: 8px 15px 8px 15px;
      width: 90px;
    }

    .reset {
      align-items: center;
      background: 0;
      display: flex;
      flex: 0;
      padding: 0;
    }

    .mobile {
      display: none;
    }
  }
}

@include mobile {
  .box,
  .container {
    background: #eee;
    box-shadow: none;
    margin: 0;
  }

  .section {
    background: #fff;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
  }

  .title {
    background: #eee;
    border-top: 1px solid #ddd;
    padding: 10px 20px 10px 20px;
  }

  .icon {
    display: none;
  }

  .person {
    padding: 20px;
  }

  .forms {
    padding: 20px;

    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }

    label::after {
      content: ':';
    }

    input {
      border: 0;
      border-bottom: 1px solid #D4D4D4;
      color: #4F4F4F;
      font: inherit;
      padding: 5px 0 5px 0;
      width: 100%;
    }
  }

  .buttons {
    padding: 0 20px 20px 20px;

    button {
      background: #D9429F;
      border: 0;
      border-radius: 5px;
      color: #fff;
      font: inherit;
      margin-bottom: 5px;
      padding: 5px 0 5px 0;
      width: 100%;
    }

    .reset {
      background: #fff;
      border: 2px solid #D9429F;
      color: #D9429F;
    }

    .desktop {
      display: none;
    }
  }
}
</style>