<template>
  <div class="all">
    <Header />
    <div class="container">
      <div class="holder">
        <div class="first-card">
          <img class="bg-card" src="../assets/images/teste.png" />
          <div class="text-card">
            <h1>Aproveite suas<br />Férias conosco!!</h1>
            <img src="../assets/images/sunshine-text.png" />
          </div>
        </div>
        <div class="second-card">
          <div class="benefits">
            <div class="first-line">
              <h2>Benefícios</h2>
              <span>Saiba mais</span>
            </div>
            <div class="second-line">
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'bath']" />
              </div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'wind']" />
              </div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'wifi']" />
              </div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'dice']" />
              </div>
            </div>
          </div>
          <div class="best-price">
            <div class="first-line">
              <div class="price">
                <h3>Melhores preços</h3>
                <span>5 dias e 6 noites</span>
              </div>
              <div class="search">
                <font-awesome-icon :icon="['fas', 'search']" />
              </div>
            </div>
            <div class="second-line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 130px 0px 130px;
}

.holder {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 35%;
  .first-card {
    position: relative;
    width: 70%;
    height: 90%;
    .bg-card {
      width: 100%;
      height: 100%;
      border-radius: 45px;
      object-fit: cover;
    }
    .text-card {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 50px;
      margin-left: 60px;
      h1 {
        font-family: fontBold;
        font-size: 3em;
        color: #fff;
        margin-bottom: 10px;
      }
    }
  }
  .second-card {
    display: flex;
    align-items: center;
    position: absolute;
    width: 60%;
    height: 45%;
    bottom: -60px;
    background-color: #e0e1e5;
    border-radius: 30px;
    padding: 30px;
    .benefits {
      position: relative;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-right: 50px;
    }
      .first-line {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        h2 {
          font-family: fontBold;
          font-size: 2em;
        }
        span {
          font-family: fontBold;
          font-size: 0.95em;
          color: var(--orange1);
        }
      }
      .second-line {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        .icon {
          display: flex;
          height: 50px;
          width: 60px;
          border: 1px solid #CCCCCC;
          border-radius: 15px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          align-items: center;
          justify-content: center;
          // margin-right: 30px;
          svg {
            font-size: 1.5em;
            color: var(--secondary);
          }
        }
      }
      .best-price {
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        h3 {
          font-size: 1.3em;
          margin-bottom: 5px;
        }
        span {
          font-size: 0.9em;
          color: #8C8C8C;
        }
      }
  }
}
</style>
