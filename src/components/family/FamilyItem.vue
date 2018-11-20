<template>
  <div class="family-item">
    <InlineForm :icon="icon" :isNew="isNew" :forms="forms" />
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
    person: {
      required: true,
      type: String
    }
  }
}
</script>