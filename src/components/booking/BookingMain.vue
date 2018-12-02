<template>
  <div class="booking-main">
    <div class="header">
      CHOOSE ATTENDEE(S)
      <div>Only those who require a seat/ticket</div>
    </div>
    <div class="content box">
      <div class="top">
        <span>ABC Ballet</span>
        <span>Total available seats: 7</span>
      </div>
      <div class="blocks">
        <div class="block">
          <div class="title">KID(S):</div>
          <BookingItem />
          <BookingItem />
          <a class="add" href="#">+ Add Kid Profile</a>
        </div>
        <div class="block">
          <div class="title">CAREGIVERS/ADULTS:</div>
          <BookingItem />
          <a class="add" href="#">+ Add Kid Profile</a>
        </div>
      </div>
      <a class="add-attendee" href="#">Add attendee(s) without adding to profile</a>
      <BookingTotal />
    </div>
  </div>
</template>

<script>
import BookingItem from './BookingItem'
import BookingTotal from './BookingTotal'

export default {
  components: {
    BookingItem,
    BookingTotal
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .booking-main {
    padding: 40px 0 40px 0;
  }

  .header {
    color: #BDBDBD;
    font-size: 20px;
    line-height: 18px;
    margin-bottom: 40px;
    text-align: center;

    div {
      color: #4F4F4F;
      font-size: 20px;
      line-height: 11px;
      margin-top: 15px;
      text-align: center;
    }
  }

  .content {
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    margin: auto;
    margin-top: 25px;
    max-width: 600px;
    padding: 35px 115px 35px 115px;
  }

  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;

    span:first-child {
      font-size: 18px;
      font-weight: bold;
    }

    span:last-child {
      color: #918A8C;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .block {
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    padding-bottom: 20px;

    &:last-child {
      border: 0;
      margin: 0;
    }

    .title {
      color: #918A8C;
      font-size: 12px;
      font-weight: 300;
      margin-bottom: 12px;
    }
  }
}

.add {
  color: #D9429F;
  font-size: 14px;
}

.add-attendee {
  color: #918A8C;
  display: flex;
  font-size: 11px;
  justify-content: flex-end;
}

@include mobile {
  .header {
    display: none;
  }

  .content {
    all: unset;
  }

  .top {
    background: #eee;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding: 20px;

    span:first-child {
      font-weight: bold;
    }

    span:last-child {
      color: #918A8C;;
    }
  }

  .block {
    padding: 20px;
  }

  .title {
    color: #918A8C;
    margin-bottom: 10px;
  }

  .add-attendee {
    padding-right: 20px;
  }
}
</style>