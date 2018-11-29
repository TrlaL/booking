<template>
  <div class="container box">
    <div class="section">
      <div class="title">Kid(s)</div>
      <FamilyPerson type="kid" v-for="(kid, i) in kids" :data="kid" :key="i" @updated="update" />
      <FamilyPerson type="kid" :isNew="true" />
      <div class="add">
        <a href="#">+ Add Kid</a>
      </div>
    </div>
    <div class="section">
      <div class="title">Caregiver(s)</div>
      <FamilyPerson type="caregiver" :isNew="true" />
      <div class="add">
        <a href="#">+ Add Caregiver</a>
      </div>
    </div>
  </div>
</template>

<script>
import FamilyPerson from './FamilyPerson'
import { getFamilyMembers } from '@/api/profile'

export default {
  components: {
    FamilyPerson
  },
  data () {
    return {
      list: []
    }
  },
  computed: {
    caregivers () {
      return this.list.filter(item => !item.isChild)
    },
    kids () {
      return this.list.filter(item => item.isChild)
    }
  },
  created () {
    this.getFamilyMembers()
  },
  methods: {
    async getFamilyMembers () {
      let response = await getFamilyMembers()
      this.list = response.data.list
    },
    update () {
      this.getFamilyMembers()
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
  }

  .add {
    display: flex;
    justify-content: flex-end;

    a {
      color: #D9429F;
      display: block;
      font-size: 14px;
      width: 125px;
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

  .add {
    text-align: center;

    a {
      color: #D9429F;
      display: block;
      font-size: 14px;
      padding: 0 10px 10px 10px;
    }
  }
}
</style>