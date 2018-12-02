<template>
  <div class="container">
    <Modal class="modal">{{ message }}</Modal>
    <Navigation title="MY ACCOUNT" />
    <AccountMain
      :cards="cards"
      :credits="credits"
      :loaded="{ isCardsLoaded, isSettingsLoaded }"
      :settings="settings"
      @addCard="addCard"
      @addCredit="addCredit"
      @createCard="createCard"
      @deleteCard="deleteCard"
      @updateCard="updateCard"
      @saveUserSettings="saveUserSettings"
    />
  </div>
</template>

<script>
import AccountMain from '@/components/account/AccountMain'
import Modal from '@/components/common/Modal'
import Navigation from '@/components/common/Navigation'
import { loadUserSettings, saveUserSettings } from '@/api/profile'
import { getCards, createCard, deleteCard, updateCard } from '@/api/cards'

export default {
  components: {
    AccountMain,
    Modal,
    Navigation
  },
  data () {
    return {
      cards: [],
      credits: [],
      isCardsLoaded: false,
      isSettingsLoaded: false,
      message: '',
      settings: {}
    }
  },
  created () {
    this.getCards()
    this.loadUserSettings()
  },
  methods: {
    async getCards () {
      let response = await getCards()
      if (response.data) {
        this.isCardsLoaded = true
        this.cards = response.data
      }
    },
    async createCard (data) {
      let response = await createCard({
        number: data.number,
        expireDate: data.expireDate
      })
      if (response.data.success) {
        this.showModal('Data has been saved')
        this.getCards()
      }
    },
    async deleteCard (id) {
      await deleteCard(id)
      this.showModal('Card was deleted successfully')
      this.getCards()
    },
    async updateCard () {
      let response = await updateCard()
      console.log(response)
    },
    async loadUserSettings () {
      let response = await loadUserSettings()
      if (response.data.result) {
        this.isSettingsLoaded = true
        this.settings = response.data.user
      }
    },
    async saveUserSettings (data) {
      let response = await saveUserSettings({
        id: data.id,
        fullName: data.fullName,
        phone: data.phone,
        email: data.email
      })
      if (response.data.result) {
        this.showModal('Data has been saved')
      }
    },
    addCard () {
      this.cards.push({
        isNew: true,
        number: '',
        expireDate: '',
        cvv: ''
      })
    },
    addCredit () {
      this.credits.push({
        code: ''
      })
    },
    showModal (message) {
      this.message = message
      this.$store.commit('SET_MODAL_VISIBLE', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  font-size: 18px;
  text-align: center;
}
</style>