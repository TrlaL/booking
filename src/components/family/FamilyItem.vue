<template>
  <div class="family-item">
    <InlineForm
      :buttonText="buttonText"
      :icon="icon"
      :forms="forms"
      :resetButton="resetButton"
    />
  </div>
</template>

<script>
import InlineForm from '../common/InlineForm'

export default {
  components: {
    InlineForm
  },
  data () {
    return {
      kidForm: [
        { label: 'Full Name', value: this.data.fullName },
        { label: 'Date of Birth', value: this.data.birth }
      ],
      caregiverForm: [
        { label: 'Full Name', value: this.data.fullName },
        { label: 'Email', value: this.data.email },
        { label: 'Phone', value: this.data.phone }
      ]
    }
  },
  computed: {
    forms () {
      return this.isKid ? this.kidForm : this.caregiverForm
    },
    icon () {
      return this.isKid ? 'kid.png' : 'user-black.png'
    },
    isKid () {
      return this.person === 'kid'
    }
  },
  props: {
    buttonText: String,
    data: {
      default () {
        return {}
      },
      type: Object
    },
    person: {
      required: true,
      type: String
    },
    resetButton: Boolean
  }
}
</script>