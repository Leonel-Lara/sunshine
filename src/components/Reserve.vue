<template>
  <div class="all">
    <div class="container">
      <div class="holder">
        <div
          class="card-holder animated fadeInDownBig"
          style="animation-delay: 300ms"
        >
          <img src="../assets/images/beach.svg" alt="" />
        </div>
        <div
          class="card-holder animated fadeInUpBig"
          style="animation-delay: 500ms"
        >
          <div class="card">
            <div
              @click="$router.push('/')"
              class="logo animated zoomIn"
              style="animation-delay: 1300ms"
            >
              <img src="../assets/images/sunshine.png" alt="" />
            </div>
            <h1>Falta pouco para diversão</h1>
            <div class="input-item">
              <div class="input-holder">
                <span>Nome do quarto</span>
                <input type="text" v-model="reserveDescript.room_name" />
              </div>
              <div class="input-holder">
                <span>Número do quarto</span>
                <input type="text" v-model="reserveDescript.romm_number" />
              </div>
            </div>
            <div class="input-item">
              <div class="input-holder">
                <span>Data de entrada</span>
                <input type="text" v-model="reserveDescript.start_date" />
              </div>
              <div class="input-holder">
                <span>Data de saída</span>
                <input type="text" v-model="reserveDescript.end_date" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reserveDescript: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 120px;
  overflow: hidden;
}

.holder {
  position: relative;
  display: flex;
  height: 80%;
  width: 100%;
  .card-holder {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    img {
      height: 80%;
      width: 80%;
    }
    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 80%;
      width: 75%;
      padding: 30px;
      border-radius: 30px;
      background-color: #003c80;
      align-items: flex-start;
      justify-content: space-between;
      .logo {
        position: absolute;
        top: -8rem;
        left: 50%;
        transform: translateX(-50%);
        width: 250px;
        img {
          width: 100%;
        }
      }
      h1 {
        font-family: fontBold;
        font-size: 2em;
        color: #fff;
        margin-bottom: 10px;
      }

      .input-holder {
        position: relative;
        width: 100%;
        padding: 10px 0px;
        margin-right: 24px;
      }

      .input-item {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 30px;
      }

      .input-item input {
        position: relative;
        font-family: fontRegular;
        font-size: 1.3em;
        width: 100%;
        padding: 10px 0px;
        border-bottom: 1.7px solid #fff;
        background-color: transparent;
        color: #fff;
        margin-right: 24px;
      }

      .input-item input::placeholder {
        font-family: fontLight;
        font-size: 0.85em;
        color: #fff;
      }

      span {
        font-family: fontBold;
        font-size: 1.2em;
        color: rgba(204, 204, 204, 0.84);
      }
    }
  }
}
</style>
