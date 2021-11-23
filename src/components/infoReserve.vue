<template>
  <div class="card animated zoomIn" style="animation-delay: 500ms">
    <img src="../assets/images/logo-header.png" />
    <div class="filter">
      <h1>Filtre o melhor quarto para você</h1>
      <div class="input-item">
        <input v-model="filter.name" type="text" placeholder="Nome" />
      </div>
      <div class="input-item">
        <select v-model="filter.quality">
          <option value="" disabled selected>Qualidade</option>
          <option v-for="(star, index) in stars" :key="index" :value="star">
            {{ star }}
          </option>
        </select>
        <select v-model="filter.price">
          <option value="" disabled selected>Valor aproximado</option>
          <option v-for="(price, index) in prices" :key="index" :value="price">
            {{ price }}
          </option>
        </select>
      </div>
    </div>
    <button @click="submitFilter" class="btn">
      <span v-show="!loading">Buscar</span>
      <div v-show="loading" class="loading2"></div>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        name: "",
        quality: "",
        price: "",
      },
      stars: [1, 2, 3, 4, 5],
      prices: [100, 200, 300, 400, 500],
      loading: false,
    };
  },
  created() {
    this.loading = false;
  },
  methods: {
    submitFilter() {
      this.loading = true;
      this.$emit("submitFilter", this.filter);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  width: 35%;
  background-color: var(--secondary);
  border-radius: 36px;
  padding: 32px 48px;
  img {
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }
  .filter {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    align-items: flex-start;
    justify-content: center;
    h1 {
      font-family: fontBold;
      font-size: 2em;
      margin-bottom: 36px;
    }
  }
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

.btn {
  width: 40%;
  position: relative;
  padding: 17px 38px;
  border-radius: 20px;
  background-color: var(--primary);
  margin: 16px auto 16px auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
  span {
    font-family: fontBold;
    font-size: 1.3em;
    color: #fff;
  }
}

select {
  background: transparent;
  position: relative;
  font-family: fontRegular;
  font-size: 1.3em;
  width: 100%;
  padding: 10px 0px;
  border-bottom: 1.7px solid #fff;
  background-color: var(--secondary);
  color: #fff;
  margin-right: 24px;
}
</style>
