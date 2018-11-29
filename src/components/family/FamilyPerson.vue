<template>
  <div class="family-person">
    <img class="icon" :src="iconSrc">
    <div class="forms">
      <div>
        <label>Full Name</label>
        <input type="text" v-model="fullName">
      </div>
      <div v-if="isKid">
        <label>Date of Birth</label>
        <input type="text" v-model="birthDate">
      </div>
      <template v-if="isCaregiver">
        <div>
          <label>Email</label>
          <input type="text" v-model="email">
        </div>
        <div>
          <label>Phone</label>
          <input type="text" v-model="phone">
        </div>
      </template>
    </div>
    <div class="buttons">
      <button @click="handleButton">{{ buttonText }}</button>
      <button class="reset" v-if="!isNew" @click="handleDelete">
        <img class="desktop" src="/static/images/reset.png">
        <div class="mobile">Remove</div>
      </button>
    </div>
  </div>
</template>

<script>
import { saveChild, deleteChild } from '@/api/profile'

export default {
  data () {
    return {
      fullName: this.data.fullName,
      birthDate: this.data.birthDate,
      email: this.data.email,
      phone: this.data.phone
    }
  },
  computed: {
    buttonText () {
      return this.isNew ? 'Save' : 'Update'
    },
    iconSrc () {
      return this.isKid ? '/static/images/kid.png' : '/static/images/user-black.png'
    },
    isCaregiver () {
      return this.type === 'caregiver'
    },
    isKid () {
      return this.type === 'kid'
    }
  },
  methods: {
    handleDelete () {
      deleteChild(this.data.id).then(response => {
        console.log(response)
      })
    },
    handleButton () {
      if (this.isNew) {
        saveChild(this.fullName, this.birthDate).then(response => {
          this.$emit('updated')
        })
      }
    }
  },
  props: {
    data: {
      default () {
        return {}
      },
      type: Object
    },
    isNew: {
      default: false,
      type: Boolean
    },
    type: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .family-person {
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
      background: #828282;
      border: 0;
      border-radius: 5px;
      color: #fff;
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