<template>
  <div class="all">
    <Header />
    <div class="container">
      <div class="holder">
        <div class="first-card">
          <img class="bg-card" src="../assets/images/div-bg.png" alt="imagem hotel"/>
          <div class="text-card">
            <h1>Aproveite suas<br />Férias conosco!!</h1>
            <img src="../assets/images/sunshine-text.png" alt="logo hotel"/>
          </div>
        </div>
        <div class="second-card">
          <div class="benefits">
            <div class="first-line">
              <div class="aling-center">
                <div>
                  <h2>Benefícios</h2>
                </div>
                <div>
                  <span>Saiba mais</span>
                </div>
              </div>
              <div class="aling-center">
                <h3>Melhores preços</h3>
                <font-awesome-icon :icon="['fas', 'hotel']" />
              </div>
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
              <div class="box-price">
                  <font-awesome-icon :icon="['fas', 'check-circle']" />
                  <span>R$ 2400,00</span>
              </div>
              <div class="circle-hotel">
                <div class="circle">
                  <img src="../assets/images/circle/first.jpg" alt="imagem hotel">
                </div>
                <div class="circle">
                  <img src="../assets/images/circle/second.jpg" alt="imagem hotel">
                </div>
                <div class="circle">
                  <img src="../assets/images/circle/third.jpg" alt="imagem hotel">
                </div>
                <div class="circle">
                  <img src="../assets/images/circle/fourth.jpg" alt="imagem hotel">
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="best-price">
            <div class="first-line">
              
            </div>
            <div class="second-line"></div>
          </div> -->
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
    padding: 25px 30px;
    .benefits {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .first-line {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .aling-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 45%;
        h2 {
          font-family: fontBold;
          font-size: 2em;
        }
        span {
          font-family: fontBold;
          font-size: 0.95em;
          color: var(--orange1);
        }
        h3 {
          font-size: 1.3em;
        }
        svg {
          font-size: 1.5em;
          color: var(--secondary);
        }
      }
    }
    .second-line {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      .icon {
        position: relative;
        display: flex;
        height: 50px;
        width: 60px;
        border: 1px solid #cccccc;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #fff;
        align-items: center;
        justify-content: center;
        svg {
          font-size: 1.5em;
          color: var(--secondary);
        }
      }
      .box-price {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 130px;
        border: 1px solid #cccccc;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #fff;
          text-align: center;
        svg {
          font-size: 1.5em;
          color: var(--secondary);
          margin-right: 10px;
        }
        span {
          font-family: fontRegular;
          font-size: 1.1em;
          height: 17px;
        }
      }
      .circle-hotel {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 25%;
        height: 60px;
        .circle {
          display: flex;
          width: 50px;
          height: 100%;
          clip-path: circle(40%);
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
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
        color: #8c8c8c;
      }
      svg {
        font-size: 1.3em;
      }
    }
  }
}
</style>
