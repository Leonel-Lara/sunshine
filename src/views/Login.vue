<template>
  <div class="all">
    <div class="bg-wrapper">
      <img src="../assets/images/bg-login.jpg" alt="Background image" />
    </div>
    <div class="container">
      <div class="holder">
        <img
          src="../assets/images/logo-login.png"
          alt="Logo"
          class="logo animated zoomIn"
          style="animation-delay: 300ms"
        />
        <h1 class="title animated zoomIn" style="animation-delay: 500ms">
          Já sou cadastrado
        </h1>
        <div
          class="input-item animated fadeInLeft"
          style="animation-delay: 750ms"
        >
          <input type="email" placeholder="Email" />
        </div>
        <div
          class="input-item animated fadeInRight"
          style="animation-delay: 850ms"
        >
          <input type="password" placeholder="Senha" />
        </div>
        <button @click="submitLogin" class="btn animated flipInX" style="animation-delay: 1100ms">
          <span v-show="!loading">Entrar</span>
          <div v-show="loading" class="loading2 white"></div>
        </button>
        <div
          class="flex-center animated fadeInUp"
          style="animation-delay: 1300ms"
        >
          <router-link to="/cadastro" class="create-account">
            <p>Criar conta</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
    };
  },
  methods: {
    submitLogin () {
      // http get
     this.$router.push('/home');
    },
  },
};
</script>
<style lang="scss" scoped>
.bg-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  filter: brightness(0.4);
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.holder {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 45%;
  height: 70%;
  margin: 0 auto;
  padding: 45px 15px;

  .logo {
    position: relative;
    display: block;
    margin: 0 auto;
  }

  h1.title {
    font-family: fontRegular;
    font-weight: 500;
    font-size: 1.5em;
    margin-top: 40px;
    color: #fff;
    line-height: 21.09px;
  }

  .input-item input::placeholder {
    font-family: fontLight;
    font-size: 0.95em;
    color: #ccc;
  }

  .create-account p {
    position: relative;
    font-family: fontRegular;
    font-weight: 400;
    color: #ffb800;
    font-size: 1.4em;
    margin: 0 auto;
  }

  .btn {
    background-color: var(--secondary);
    margin-top: 36px;
    margin-bottom: 36px;
    width: 100%;
  }
}
</style>
