<template>
  <div class="all">
    <Header />
    <section>
      <FilterBedroom
        v-show="requestInfos && !reserveApprove"
        @submitFilter="getBedrooms"
      />
      <Reserve
        v-show="reserveApprove && !requestInfos"
        :reserveDescript="userReserve"
      />
      <div
        class="btn-back"
        v-show="!requestInfos && !reserveApprove"
        @click="requestInfos = true"
      >
        <span>Voltar ao filtro</span>
      </div>
      <div class="cards-holder">
        <div
          v-show="!requestInfos && !reserveApprove"
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
            <button @click="reserve(bedroom)" class="btn">
              <span>Reservar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import http from "@/http";
import Header from "@/components/Header";
import FilterBedroom from "@/components/FilterBedroom";
import Reserve from "@/components/Reserve";
export default {
  components: {
    Header,
    FilterBedroom,
    Reserve,
  },
  data() {
    return {
      userReserve: {
        id_user: "",
        id_bedroom: "",
        start_date: "",
        end_date: "",
        room_number: "",
      },
      requestInfos: false,
      reserveApprove: false,
      listBedroom: [],
      filterBedroom: {},
      userStorage: {},
    };
  },
  created() {
    this.userStorage = JSON.parse(localStorage.user);
  },
  methods: {
    async getBedrooms(value) {
      this.filterBedroom = value;
      try {
        const response = await http.get(
          `booking/list?start_date=${this.filterBedroom.startDate}&end_date=${this.filterBedroom.endDate}`
        );
        if (response.status === 200) {
          this.listBedroom = response?.data;
          this.requestInfos = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async reserve(value) {
      this.userReserve.id_user = this.userStorage.id;
      this.userReserve.id_bedroom = value.id;
      this.userReserve.start_date = this.filterBedroom.startDate;
      this.userReserve.end_date = this.filterBedroom.endDate;

      try {
        const response = await http.post("booking/insert", this.userReserve);
        if (response.status === 200) {
          this.userReserve = response?.data;
          this.$swal
            .fire({
              position: "center",
              icon: "success",
              title: "Reserva realizada!!",
              text: "Você será redirecionado para os detalhes",
              showConfirmButton: true,
            })
            .then(() => {
              this.reserveApprove = true;
            });
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
  justify-content: flex-start;
}
.cards-holder {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 60px;
  padding: 0 5em 0 5em;
}
.card-bedroom {
  position: relative;
  display: flex;
  width: 45%;
  height: 180px;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 60px;
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

.btn-back {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto !important;
  width: 170px;
  height: 50px;
  padding: 10px 5px;
  margin: 0px;
  background-color: var(--secondary);
  border-radius: 15px;
  span {
    font-family: fontBold;
    font-size: 1.3em;
    color: #fff;
  }
}
</style>
