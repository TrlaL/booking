<template>
  <div class="family container">
    <Navigation title="KIDS AND CAREGIVERS" />
    <div class="box">
      <div class="content">
        <div class="section">
          <div class="title">Kid(s)</div>
          <InlineForm icon="kid.png" :forms="forms.kid" />
        </div>
        <div class="section">
          <div class="title">Caregiver(s)</div>
          <InlineForm icon="user-black.png" :forms="forms.caregiver" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './common/Navigation'
import InlineForm from './common/InlineForm'

export default {
  components: {
    Navigation,
    InlineForm
  },
  data () {
    return {
      forms: {
        kid: [
          { label: 'Full Name', value: '' },
          { label: 'Date of Birth', value: '' }
        ],
        caregiver: [
          { label: 'Full Name', value: '' },
          { label: 'Email', value: '' },
          { label: 'Phone', value: '' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .content {
    margin: auto;
    max-width: 880px;
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
}

@include mobile {
  .container,
  .box {
    all: unset;
  }
}
</style>