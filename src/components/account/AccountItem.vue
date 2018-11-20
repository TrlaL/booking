<template>
  <div class="account-item">
    <InlineForm
      v-if="type === 'account'"
      buttonText="Update"
      icon="user-black.png"
      :forms="account"
    />
    <InlineForm
      v-else-if="type === 'payment'"
      buttonText="Update"
      icon="payment.png"
      :forms="payment"
      :resetButton="true"
    />
    <InlineForm
      v-else-if="type === 'credits'"
      buttonText="+ Add"
      icon="credits.png"
      :isNew="true"
    >Currently, no credits available</InlineForm>
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
      account: [
        { label: 'Full Name', value: '' },
        { label: 'Email', value: '' },
        { label: 'Password', value: '' },
        { label: 'Phone', value: '' }
      ],
      payment: [
        { label: 'Credit Card Number', value: '****************1234' },
        { label: 'Experation Date', value: 'exp. date | XX/XXXX' }
      ]
    }
  },
  props: {
    type: {
      required: true,
      type: String
    }
  }
}
</script>