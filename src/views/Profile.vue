<template>
  <div class="all">
    <Header :logout="true" />
    <div v-show="loading" class="center mt-3">
      <div class="loading2"></div>
    </div>
    <section v-show="!loading">
      <div class="card-profile animated zoomIn" style="animation-delay: 500ms">
        <img src="../assets/images/user.png" />
        <div class="profile">
          <h1>Meu perfil</h1>
          <div class="input-item">
            <input v-model="user.name" type="text" placeholder="Nome" />
          </div>
          <div class="input-item">
            <input v-model="user.email" type="email" placeholder="Email" />
          </div>
          <div class="input-item">
            <input v-model="user.password" type="password" placeholder="Senha" />
          </div>
        </div>
        <button @click="updateUser" class="btn">
          <span v-show="!updating">Atualizar</span>
          <div v-show="updating" class="loading2"></div>
        </button>
      </div>
      <div class="cards">
        <div class="reserve animated zoomIn" style="animation-delay: 700ms">
          <div class="title">
            <h2>Formas de pagamento</h2>
          </div>
          <div v-show="debitPayment" class="item">
            <img src="../assets/images/icon-debit.png" />
            <span>Cartão de débito</span>
            <button @click="debitPayment = false" class="btn">
              <span>Excluir</span>
            </button>
          </div>
          <div v-show="!debitPayment" class="item">
            <button
              @click="debitPayment = true"
              class="btn"
              :class="{ active: !debitPayment }"
            >
              <span>adicionar débito</span>
            </button>
          </div>
          <div v-show="creditPayment" class="item">
            <img src="../assets/images/icon-credit.png" />
            <span>Cartão de crédito</span>
            <button @click="creditPayment = false" class="btn">
              <span>Excluir</span>
            </button>
          </div>
          <div v-show="!creditPayment" class="item">
            <button
              @click="creditPayment = true"
              class="btn"
              :class="{ active: !creditPayment }"
            >
              <span>adicionar crédito</span>
            </button>
          </div>
        </div>
        <div class="reserve animated zoomIn" style="animation-delay: 1000ms">
          <div class="title">
            <h2>Minhas reservas</h2>
          </div>
          <div class="item">
            <img class="circle" src="../assets/images/teste2.jpg" />
            <span>Reserva em andamento</span>
            <button class="btn">
              <span>Check-in</span>
            </button>
          </div>
          <div class="item">
            <img class="circle" src="../assets/images/teste3.jpg" />
            <span>Reserva finalizada</span>
            <button class="btn">
              <span>Check-in</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
import http from "@/http";
export default {
  components: {
    Header,
  },
  data() {
    return {
      user: {
        name: "",
        document: "",
        email: "",
        password: "",
      },
      userStorage: "",
      getUser: [],
      loading: true,
      updating: false,
      creditPayment: true,
      debitPayment: true,
    };
  },
  async created() {
    this.userStorage = JSON.parse(localStorage.user);

    try {
      const response = await http.get(`user/list?id=${this.userStorage.id}`);
      if (response.status === 200) {
        this.getUser = response.data;
        this.user = this.getUser[0];
      }
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  },
  methods: {
    async updateUser() {
      this.updating = true;

      try {
        const response = await http.put(`user/update?id=${this.userStorage.id}`, this.user);
        if (response.status === 200) {
          this.user = response.data;
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: "Alteração bem sucedida.",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      } catch (error) {
        console.log(error);
      }

      this.created();
      this.updating = false;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  flex-direction: row;
  justify-content: space-evenly;
}

.card-profile {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  .profile {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 50%;
    align-items: flex-start;
    justify-content: flex-end;
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

.cards {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 35%;
  padding: 0px 48px;
  justify-content: space-between;
  .reserve {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 40%;
    width: 100%;
    background-color: var(--secondary);
    border-radius: 36px;
    padding: 40px 0px;
    .title {
      display: flex;
      padding: 0px 40px;
      width: 100%;
      border-bottom: 1px solid #fff;
      h2 {
        font-family: fontBold;
        font-size: 1.8em;
        color: #fff;
        margin-bottom: 16px;
      }
    }
    .item {
      position: relative;
      display: flex;
      padding: 16px 40px 0px 40px;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .circle {
        clip-path: circle(45%);
      }
      img {
        width: 60px;
        height: 60px;
      }
      span {
        font-size: 1.6em;
      }
      .btn {
        width: 20%;
        padding: 10px 5px;
        margin: 0px;
        span {
          font-family: fontBold;
          font-size: 1em;
          color: #fff;
        }
        &.active {
          margin: 8px 0px;
          width: 30%;
        }
      }
    }
  }
}
</style>
