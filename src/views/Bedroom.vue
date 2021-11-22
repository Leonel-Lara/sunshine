<template>
  <div class="all">
    <Header />
    <section>
      <div class="card-bedroom">
        <img src="../assets/images/quartos.jpg" alt="quartos" />
        <div class="holder">
          <div class="title">
            <span>Quarto Master</span>
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <button class="btn">
            <span>Saiba mais</span>
          </button>
          </div>
          <div class="icons">
            <font-awesome-icon :icon="['fas', 'wifi']" />
            <font-awesome-icon :icon="['fas', 'mug-hot']" />
            <font-awesome-icon :icon="['fas', 'bath']" />
          </div>
          <div class="description">
            <span>
              Não tenha pressa, acorde devagar ao som dos pássaros e da brisa,
              sinta os aromas da natureza e usufrua de banhos de chuveiro com a
              água mineral das fontes do resort: seu café da manhã estará à
              disposição até o meio-dia.
            </span>
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
section {
  justify-content: flex-start;
}
.card-bedroom {
  position: relative;
  display: flex;
  width: 80%;
  height: 200px;
  background-color: #fff;
  border-radius: 40px;
  img {
    position: relative;
    width: 400px;
    height: 100%;
    object-fit: cover;
    border-radius: 35px 0px 0px 35px;
  }
  .holder {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1.5em 2.5em 1.5em 1.5em;
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 1.3em;
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
      position: relative;
      padding: 10px 12px;
      border-radius: 15px;
      background-color: var(--primary);
      margin-left: auto;
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
