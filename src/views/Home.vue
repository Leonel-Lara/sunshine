<template>
  <div class="all">
    <Header />
    <section>
      <div class="holder animated fadeInDown" style="animation-delay: 700ms">
        <div class="first-card">
          <img
            class="bg-card"
            src="../assets/images/div-bg.png"
            alt="imagem hotel"
          />
          <div class="title-card">
            <h1>Aproveite suas<br />Férias conosco!!</h1>
            <img src="../assets/images/sunshine-text.png" alt="logo hotel" />
          </div>
        </div>
        <div class="second-card">
          <div class="benefits">
            <div class="first-box">
              <div class="aling-center">
                <h3>Benefícios</h3>
                <span>Saiba mais</span>
              </div>
              <div class="icon-benefits">
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
            <div class="second-box">
              <div class="aling-center">
                <h3>Melhores preços</h3>
                <font-awesome-icon :icon="['fas', 'hotel']" />
              </div>
              <span class="day">5 dias e 6 noites</span>
              <div class="box-circle">
                <div class="box-price">
                  <font-awesome-icon :icon="['fas', 'check-circle']" />
                  <span>R$ 2400.00</span>
                </div>
                <div class="circle-hotel">
                  <div class="circle">
                    <img
                      src="../assets/images/circle/first.jpg"
                      alt="imagem hotel"
                    />
                  </div>
                  <div class="circle">
                    <img
                      src="../assets/images/circle/second.jpg"
                      alt="imagem hotel"
                    />
                  </div>
                  <div class="circle">
                    <img
                      src="../assets/images/circle/third.jpg"
                      alt="imagem hotel"
                    />
                  </div>
                  <div class="circle">
                    <img
                      src="../assets/images/circle/fourth.jpg"
                      alt="imagem hotel"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="choise animated fadeInDown" style="animation-delay: 1000ms">
        <h2 class="title">Escolha uma acomodação</h2>
        <div class="cards">
          <div class="bedroom-card">
            <img
              class="bedroom-img"
              src="../assets/images/teste1.jpg"
              alt="imagem hotel"
            />
            <div class="price-logo">
              <div class="price-stars">
                <div class="price">
                  <span>R$ 420.00</span>
                </div>
                <div class="stars">
                  <font-awesome-icon :icon="['fas', 'star']" />
                  <font-awesome-icon :icon="['fas', 'star']" />
                  <font-awesome-icon :icon="['fas', 'star']" />
                  <font-awesome-icon :icon="['fas', 'star']" />
                </div>
              </div>
              <div class="logo">
                <img src="../assets/images/logo-card.png" alt="imagem logo" />
              </div>
            </div>
          </div>
          <div class="bedroom-card">
            <img
              class="bedroom-img"
              src="../assets/images/teste2.jpg"
              alt="imagem hotel"
            />
            <div class="price-logo">
              <div class="price-stars">
                <div class="price">
                  <span>R$ 360.00</span>
                </div>
                <div class="stars">
                  <font-awesome-icon :icon="['fas', 'star']" />
                  <font-awesome-icon :icon="['fas', 'star']" />
                  <font-awesome-icon :icon="['fas', 'star']" />
                </div>
              </div>
              <div class="logo">
                <img src="../assets/images/logo-card.png" alt="imagem logo" />
              </div>
            </div>
          </div>
          <div class="bedroom-card">
            <img
              class="bedroom-img"
              src="../assets/images/teste3.jpg"
              alt="imagem hotel"
            />
            <div class="price-logo">
              <div class="price-stars">
                <div class="price">
                  <span>R$ 620.00</span>
                </div>
                <div class="stars">
                  <font-awesome-icon :icon="['fas', 'star']" />
                  <font-awesome-icon :icon="['fas', 'star']" />
                  <font-awesome-icon :icon="['fas', 'star']" />
                  <font-awesome-icon :icon="['fas', 'star']" />
                  <font-awesome-icon :icon="['fas', 'star']" />
                </div>
              </div>
              <div class="logo">
                <img src="../assets/images/logo-card.png" alt="imagem logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
.holder {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 35%;
  .first-card {
    position: relative;
    width: 80%;
    height: 90%;
    .bg-card {
      width: 100%;
      height: 100%;
      border-radius: 45px;
      object-fit: cover;
    }
    .title-card {
      position: absolute;
      top: 0;
      left: 0;
      padding-top: 24px;
      padding-left: 64px;
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
    width: 73%;
    height: 45%;
    bottom: -55px;
    background-color: #e0e1e5;
    border-radius: 30px;
    padding: 25px 30px;
    .benefits {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
    }
    .first-box {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 50%;
      justify-content: space-between;
      align-items: center;
      padding-right: 25px;
      .aling-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        width: 100%;
        h3 {
          font-family: fontBold;
          font-size: 2em;
          color: #000;
        }
        span {
          font-family: fontBold;
          font-size: 0.95em;
          color: var(--orange1);
        }
      }
      .icon-benefits {
        position: relative;
        display: flex;
        height: 50px;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin-top: 7px;
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
      }
    }
    .second-box {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 50%;
      justify-content: space-between;
      align-items: center;
      padding-left: 25px;
      .aling-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        width: 100%;
        padding-top: 5px;
        h3 {
          font-size: 1.3em;
          color: #000;
        }
        svg {
          font-size: 1.5em;
          color: var(--secondary);
        }
      }
      .day {
        margin-right: auto;
        color: #8c8c8c;
      }
      .box-circle {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        justify-content: space-between;
        height: 50px;
        width: 100%;
        .box-price {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 125px;
          border: 1px solid #cccccc;
          border-radius: 15px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          svg {
            font-size: 1.5em;
            color: var(--secondary);
            margin-right: 5px;
          }
          span {
            font-family: fontRegular;
            font-size: 1.1em;
            color: #000;
          }
        }
        .circle-hotel {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 50%;
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
    }
  }
}

.choise {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  margin-top: 90px;
  align-items: center;
  justify-content: space-between;
  .title {
    font-family: fontBold;
    color: #fff;
    font-size: 3em;
    margin-top: 36px;
  }
  .cards {
    position: relative;
    display: flex;
    width: 60%;
    height: 50%;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    .bedroom-card {
      display: flex;
      flex-direction: column;
      width: 240px;
      height: 200px;
      background-color: #fff;
      border-radius: 10px;
      .bedroom-img {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 10px 10px 0px 0px;
      }
      .price-logo {
        position: relative;
        display: flex;
        width: 100%;
        height: 40%;
        padding: 15px;
        justify-content: space-between;
        .price-stars {
          display: flex;
          height: 100%;
          width: 50%;
          flex-direction: column;
          justify-content: space-between;
          .price span {
            font-family: fontBold;
            font-size: 1.1em;
            color: var(--secondary);
          }
          .stars svg {
            color: #ffd700;
            margin-right: 5px;
          }
        }
        .logo {
          position: relative;
          display: flex;
          height: 100%;
          width: 50%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
