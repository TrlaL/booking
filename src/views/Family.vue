<template>
  <div class="container">
    <Navigation title="KIDS AND CAREGIVERS" />
    <FamilyMain
      :members="members"
      @addPerson="addPerson"
      @deletePerson="deletePerson"
      @savePerson="savePerson"
    />
  </div>
</template>

<script>
import FamilyMain from '@/components/family/FamilyMain'
import Navigation from '@/components/common/Navigation'
import { deleteFamilyMember, getFamilyMembers, saveAdult, saveChild } from '@/api/profile'

export default {
  components: {
    FamilyMain,
    Navigation
  },
  data () {
    return {
      members: [],
      newKid: {
        fullName: '',
        birthDate: ''
      },
      newCaregiver: {
        fullName: '',
        email: '',
        phone: ''
      }
    }
  },
  created () {
    this.getFamilyMembers()
  },
  methods: {
    async deleteFamilyMember (id) {
      let response = await deleteFamilyMember(id)
      if (response.data.result) {
        this.getFamilyMembers()
      }
    },
    async getFamilyMembers () {
      let response = await getFamilyMembers()
      if (response.data.list) {
        this.members = response.data.list
      }
    },
    async saveAdult (data) {
      let response = await saveAdult(data)
      if (response.data.result) {
        this.getFamilyMembers()
      }
    },
    async saveChild (data) {
      let response = await saveChild(data)
      if (response.data.result) {
        this.getFamilyMembers()
      }
    },
    addPerson (person) {
      this.members.push({
        isNew: true,
        isChild: person === 'kid' ? 1 : 0,
        ...(person === 'kid' ? this.newKid : this.newCaregiver)
      })
    },
    deletePerson (id) {
      this.deleteFamilyMember(id)
    },
    savePerson (person, data) {
      if (person === 'kid') {
        this.saveChild({
          id: data.id,
          fullName: data.fullName,
          birthDate: data.birthDate
        })
      } else {
        this.saveAdult({
          id: data.id,
          fullName: data.fullName,
          email: data.email,
          phone: data.phone
        })
      }
    }
  }
}
</script>