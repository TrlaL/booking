<template>
  <div class="activities-item">
    <div class="desktop-content">
      <div class="front-image">
        <img :src="frontImage">
      </div>
      <div class="section">
        <div class="title">{{ item.name }}</div>
        <div class="table">
          <span>Tuesday, March 30th</span>
          <span>Ages: 3 months - 1 year</span>
          <span>Time: 9.00 am  - 10.00 am</span>
          <span>Provided by: Citibabes</span>
        </div>
        <div class="place">
          <img class="icon" src="/static/images/place.png">
          {{ item.address }}
        </div>
      </div>
      <div class="controls">
        <div class="icons">
          <img src="/static/images/share.png">
          <img :src="favoriteIcon">
        </div>
        <div class="price">${{ item.price }}</div>
        <router-link class="book" to="/booking">Book</router-link>
        <div class="seats">Seats Left: 3</div>
      </div>
    </div>
    <div class="mobile-content">
      <div class="front">
        <img class="image" :src="frontImage">
        <div class="provided">Provided by: Citibabes</div>
        <div class="date">Friday, August 31st<br>3:00PM to 4pm</div>
        <div class="price">${{ item.price }}</div>
      </div>
      <div class="section">
        <div class="info">
          <div class="title">{{ item.name }}</div>
          <div>Ages: 3 months - 1 year</div>
          <div>Seats left: 3</div>
        </div>
        <div class="arrow">
          <img src="/static/images/arrow-right.png">
        </div>
      </div>
      <div class="place">
        <div class="target">
          <img class="icon" src="/static/images/place.png">
          {{ item.address }}
        </div>
        <div class="icons">
          <img src="/static/images/share.png">
          <img :src="favoriteIcon">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imagesPath: '/static/images/'
    }
  },
  computed: {
    favoriteIcon () {
      return `${this.imagesPath}${this.type === 'favorites' ? 'my-favorite.png' : 'favorite.png'}`
    },
    frontImage () {
      return this.item.photos ? this.item.photos[0] : ''
    }
  },
  props: {
    item: {
      required: true,
      type: Object
    },
    type: {
      default: 'activitie',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .desktop-content {
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    min-width: 900px;
  }

  .front-image {
    background: #eee;
    border-radius: 5px 0 0 5px;
    height: 200px;
    width: 350px;

    img {
      border-radius: inherit;
      height: 100%;
      width: 100%;
    }
  }

  .section {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 0 15px 50px;
  }

  .title {
    color: #6B3C96;
    font-size: 22px;
    font-weight: 510;
    text-decoration: underline;
  }

  .table {
    color: #4F4F4F;
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
    line-height: 30px;

    span {
      align-items: center;
      display: flex;
      width: 50%;
    }
  }

  .place {
    align-items: center;
    color: #828282;
    display: flex;
    font-size: 12px;

    .icon {
      margin-right: 10px;
    }
  }

  .controls {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 15px 15px 0;

    .icons {
      display: flex;
      justify-content: space-around;
    }

    .price,
    .seats {
      color: #828282;
      font-size: 15px;
      font-weight: 300;
      text-align: center;
    }

    .book {
      background: #56CCF2;
      border: 0;
      border-radius: 5px;
      color: #fff;
      font-size: 15px;
      padding: 10px 0 10px 0;
      text-align: center;
      width: 100px;
    }
  }

  .mobile-content {
    display: none;
  }
}

@include mobile {
  .mobile-content {
    background: #fff;
    display: flex;
    flex-direction: column;
  }

  .front {
    position: relative;

    .image {
      height: 200px;
      object-fit: cover;
      width: 100%;
    }

    .provided {
      color: #fff;
      font-weight: 500;
      position: absolute;
      right: 15px;
      top: 15px;
    }

    .date {
      bottom: 15px;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      position: absolute;
      left: 15px;
    }

    .price {
      background: #56CCF2;
      border-radius: 25px 0 0 25px;
      bottom: 15px;
      color: #fff;
      padding: 7px 25px 7px 35px;
      position: absolute;
      right: 0;
    }
  }

  .section {
    color: #463A3E;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;

    .title {
      font-size: 17px;
      font-weight: bold;
    }

    .arrow {
      align-items: center;
      display: flex;
    }
  }

  .place {
    align-items: center;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    color: #918A8C;
    display: flex;
    font-size: 12px;
    font-weight: 300;

    .target {
      align-items: center;
      display: flex;
      flex: 1;
      padding: 10px 0 10px 20px;

      img {
        margin-right: 5px;
      }
    }

    .icons {
      display: flex;

      img {
        border-left: 1px solid #ddd;
        padding: 10px;
      }
    }
  }

  .desktop-content {
    display: none;
  }
}
</style>
