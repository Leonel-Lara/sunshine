<template>
  <div class="all">
    <div class="container">
      <div class="holder">
        <div
          class="card-holder animated fadeInDownBig"
          style="animation-delay: 300ms"
        >
          <img src="../assets/images/travel.svg" alt="" />
        </div>
        <div
          class="card-holder animated fadeInUpBig"
          style="animation-delay: 500ms"
        >
          <div class="card-login">
            <div class="logo animated zoomIn" style="animation-delay: 1300ms">
              <img src="../assets/images/sunshine.png" alt="" />
            </div>
            <h2>Bem-vindo(a)</h2>
            <h1>Entre na sua conta</h1>
            <div class="input-item">
              <input v-model="user.email" type="email" placeholder="E-mail" />
            </div>
            <div class="input-item">
              <input
                v-model="user.password"
                type="password"
                placeholder="Senha"
              />
            </div>
            <button @click="submitLogin" class="btn">
              <span v-show="!loading">Entrar</span>
              <div v-show="loading" class="loading2"></div>
            </button>
            <span
              >Ainda não possui uma conta?
              <router-link to="/cadastro">Cadastre-se</router-link></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/http";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    async submitLogin() {
      this.loading = true;

      try {
        const response = await http.post("user/login", this.user);
        if (response.status === 200) {
          localStorage.user = JSON.stringify(response.data);
          this.$router.push("/home");
        }
      } catch (error) {
        console.log(error);
      }

      this.loading = false;
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
    .card-login {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 65%;
      width: 70%;
      padding: 30px;
      border-radius: 30px;
      background-color: #003c80;
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
      h2 {
        font-family: fontBold;
        font-size: 1.5em;
        margin-bottom: 10px;
        color: rgba(204, 204, 204, 0.84);
      }
      h1 {
        font-family: fontBold;
        font-size: 2em;
        color: #fff;
        margin-bottom: 2em;
      }
      .input-item {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
      }

      .input-item input {
        position: relative;
        font-family: fontRegular;
        font-size: 1.3em;
        width: 90%;
        border-radius: 20px;
        padding: 10px 15px;
        border: 1.7px solid var(--secondary);
        background-color: transparent;
        color: #fff;
      }

      .input-item input::placeholder {
        font-family: fontLight;
        font-size: 0.95em;
        color: #fff;
      }

      .btn {
        width: 90%;
        position: relative;
        padding: 17px 38px;
        border-radius: 20px;
        background-color: var(--secondary);
        margin: 25px auto 25px auto;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
        span {
          font-family: fontBold;
          font-size: 1.5em;
          color: #fff;
        }
      }
      span {
        font-family: fontBold;
        font-size: 1.2em;
        color: rgba(204, 204, 204, 0.84);
      }
      a {
        font-family: fontBold;
        font-size: 1.05em;
        color: #fff;
        margin-left: 5px;
      }
    }
  }
}
</style>
