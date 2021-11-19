<template>
  <div class="all">
    <section>
      <div class="card-profile animated zoomIn" style="animation-delay: 500ms">
        <img src="../assets/images/logo-header.png" />
        <div class="profile">
          <h1>Meu perfil</h1>
          <div class="input-item">
            <input v-model="user.name" type="text" placeholder="Nome" />
            <the-mask
              v-model="user.document"
              type="text"
              :mask="['###.###.###-##']"
              placeholder="CPF"
            />
          </div>
          <div class="input-item">
            <input v-model="user.email" type="email" placeholder="Email" />
            <input
              v-model="user.password"
              type="password"
              placeholder="Senha"
            />
          </div>
        </div>
        <button @click="submitForm" class="btn">
          <span v-show="!loading">Cadastrar</span>
          <div v-show="loading" class="loading2"></div>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import http from "@/http";
export default {
  data() {
    return {
      user: {
        name: "",
        document: "",
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    async submitForm() {
      this.loading = true;

      try {
        const response = await http.post("user/insert", this.user);
        if (response.status === 200) {
          this.$swal
            .fire({
              position: "center",
              icon: "success",
              title: "Cadastro realizado!!",
              text: "Você será redirecionado para o Login",
              showConfirmButton: true,
            })
            .then(() => {
              this.$router.push("/");
            });
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
section {
  height: 100%;
}
.card-profile {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  width: 35%;
  background-color: var(--secondary);
  border-radius: 36px;
  padding: 32px 48px;
  img {
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }
  .profile {
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
      margin-bottom: 24px;
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
  width: 90%;
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
</style>
