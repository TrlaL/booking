<template>
  <div class="family-list">
    <div class="container box">
      <div class="content">
        <div class="section">
          <div class="title">
            <img class="mobile-icon" src="/static/images/kid.png">
            Kid(s)
          </div>
          <div class="kids">
            <FamilyItem
              class="item"
              person="kid"
            />
          </div>
          <div class="add">
            <a href="#">+ Add Kid</a>
          </div>
        </div>
        <div class="section">
          <div class="title">
            <img class="mobile-icon" src="/static/images/user-black.png">
            Caregiver(s)
          </div>
          <div class="caregivers">
            <FamilyItem
              class="item"
              buttonText="Update"
              person="caregiver"
              :data="data"
              :resetButton="true"
            />
            <FamilyItem
              class="item"
              person="caregiver"
            />
          </div>
          <div class="add">
            <a href="#">+ Add Caregiver</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FamilyItem from './FamilyItem'

export default {
  components: {
    FamilyItem
  },
  data () {
    return {
      data: {
        fullName: 'Mark',
        birth: '11.11.1996',
        email: 'trial_sim@mail.ru',
        phone: '8-928-148-82-28'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .content {
    margin: auto;
    max-width: 70%;
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

  .item {
    margin-bottom: 35px;

    &:last-child {
      margin: 0;
    }
  }

  .add {
    display: flex;
    font-size: 14px;
    justify-content: flex-end;
    margin-top: 25px;

    a {
      color: #D9429F;
      width: 135px;
    }
  }

  .mobile-icon {
    display: none;
  }
}

@include mobile {
  .container,
  .box {
    all: unset;
  }

  .family-list {
    background: #eee;
  }

  .section {
    background: #fff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;

    &:last-child {
      margin: 0;
    }
  }

  .title {
    align-items: center;
    background: #eee;
    border-top: 1px solid #ddd;
    color: #E1519F;
    display: flex;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
  }

  .mobile-icon {
    display: block;
    height: 30px;
    margin-right: 10px;
    object-fit: contain;
    width: 30px;
  }

  .add {
    background: #efefef;
    text-align: center;
    padding: 10px;

    a {
      color: #D9429F;
    }
  }
}
</style>