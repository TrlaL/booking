<template>
  <div class="inline-form">
    <img class="image" :src="iconSrc">
    <div class="section">
      <div class="form" :key="i" v-for="(form, i) in forms">
        <label>{{ form.label }}</label>
        <input type="text" :value="form.value">
      </div>
    </div>
    <div class="buttons">
      <button>{{ buttonText }}</button>
      <img class="reset" src="/static/images/reset.png" :class="resetClass" v-show="!isNew">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    buttonText () {
      return this.isNew ? 'Save' : 'Update'
    },
    iconSrc () {
      return `/static/images/${this.icon}`
    },
    resetClass () {
      return {
        hidden: this.resetButton
      }
    }
  },
  props: {
    forms: {
      required: true,
      type: Array
    },
    icon: {
      required: true,
      type: String
    },
    isNew: {
      default: false,
      type: Boolean
    },
    resetButton: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .inline-form {
    display: flex;
    margin-bottom: 40px;

    &:last-child {
      margin: 0;
    }
  }

  .section {
    display: flex;
    flex: 1;

    .image {
      margin-right: 50px;
      object-fit: contain;
    }

    .form {
      display: flex;
      flex-direction: column;
      margin-right: 20px;

      &:last-child {
        margin: 0;
      }

      label {
        color: #A1A1A1;
        font-size: 14px;
      }

      input {
        border: 0;
        border-bottom: 1px solid #D4D4D4;
        font: inherit;
        padding: 8px 0 8px 0;
        width: 100%;
      }
    }
  }

  .buttons {
    align-items: center;
    display: flex;
    margin-left: 50px;
    width: 135px;

    button {
      background: #828282;
      border: 0;
      border-radius: 5px;
      color: #fff;
      font: inherit;
      font-size: 16px;
      font-weight: 400;
      padding: 5px;
      width: 100px;
    }

    img {
      object-fit: contain;
      margin-left: 8px;
    }

    img.hidden {
      visibility: hidden;
    }
  }
}

@include mobile {
  .inline-form {
    border-bottom: 1px solid #ddd;
  }

  .section {
    padding: 20px 20px 0 20px;
  }

  .form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    &:last-child {
      margin: 0;
    }

    label {
      color: #A1A1A1;
    }

    input {
      border: 0;
      border-bottom: 1px solid #ddd;
      font: inherit;
      padding: 5px 0 5px 0;
    }
  }

  .buttons {
    padding: 20px;

    button {
      background-color: #D9429F;
      border: 0;
      border-radius: 5px;
      color: #fff;
      font: inherit;
      padding: 10px;
      width: 100%;
    }
  }

  .image,
  .reset {
    display: none;
  }
}
</style>