<template>
  <div class="all">
    <Header />
    <section>
      <infoReserve v-show="requestInfos" @submitFilter="getBedrooms" />
      <div
        v-show="!requestInfos"
        class="card-bedroom"
        v-for="bedroom in listBedroom"
        :key="bedroom.id"
      >
        <img src="../assets/images/quartos.jpg" alt="quartos" />
        <div class="holder">
          <div class="title">
            <span>{{ bedroom.name }}</span>
            <div v-for="(star, index) in bedroom.quality" :key="index">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
          </div>
          <div class="icons">
            <font-awesome-icon :icon="['fas', 'wifi']" />
            <font-awesome-icon :icon="['fas', 'mug-hot']" />
            <font-awesome-icon :icon="['fas', 'bath']" />
          </div>
          <div class="description">
            <span>
              {{ bedroom.description }}
            </span>
          </div>
          <button class="btn">
            <span>Saiba mais</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import http from "@/http";
import Header from "@/components/Header";
import infoReserve from "@/components/infoReserve";
export default {
  components: {
    Header,
    infoReserve,
  },
  data() {
    return {
      requestInfos: true,
      listBedroom: [],
      filterBedroom: {},
    };
  },
  methods: {
    async getBedrooms(value) {
      this.filterBedroom = value;
      console.log(typeof this.filterBedroom.quality);

      try {
        const response = await http.get(`bedroom/list?quality=${this.filterBedroom.quality}&value=${this.filterBedroom.price}`);
        if (response.status === 200) {
          this.listBedroom = response?.data;
          this.requestInfos = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  justify-content: space-around;
}
.card-bedroom {
  position: relative;
  display: flex;
  width: 80%;
  height: 200px;
  background-color: #fff;
  border-radius: 20px;
  img {
    position: relative;
    width: 400px;
    height: 100%;
    object-fit: cover;
    border-radius: 18px 0px 0px 18px;
  }
  .holder {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1.5em;
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 1.1em;
      width: 100%;
      span {
        font-family: fontBold;
        font-size: 1.3em;
        color: #000;
      }
      svg {
        color: #ffd700;
        margin-left: 10px;
      }
    }
    .icons {
      display: flex;
      align-items: center;
      margin-bottom: 1.4em;
      svg {
        font-size: 1.2em;
        color: #000;
        margin-right: 20px;
      }
    }
    .description {
      display: flex;
      width: 100%;
      span {
        font-family: fontRegular;
        font-size: 1.2em;
        color: #000;
      }
    }

    .btn {
      width: 100px;
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 10px 12px;
      border-radius: 15px;
      background-color: var(--primary);
      margin: 0px 1.5em 1.5em auto;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
      span {
        font-family: fontBold;
        font-size: 1em;
        color: #fff;
      }
    }
  }
}
</style>
