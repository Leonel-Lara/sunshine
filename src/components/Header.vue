<template>
  <header>
    <div class="container">
      <div class="logo-wrapper pointer">
        <img src="../assets/images/logo-header.png" alt="Logo image" />
      </div>
      <nav>
        <ul class="nav-list">
          <li><router-link to="/home"> Home </router-link></li>
          <li><router-link to="#"> Quartos </router-link></li>
          <li><router-link to="#"> Contato </router-link></li>
        </ul>
      </nav>
      <div class="user-wrapper">
          <img src="../assets/images/user.jpg" alt="User image">
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  margin: 20px 0px 50px 0px;
  padding: 0px 100px 0px 100px;
  .container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    .logo-wrapper {
      width: 100px;
      height: 100px;
      margin-right: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .nav-list {
      display: flex;
      align-items: center;
      height: 20px;
      a {
        font-family: fontBold;
        font-size: 1.6em;
        color: #fff;
        margin-left: 30px;
      }
    }
    .user-wrapper {
        width: 70px;
        height: 70px;
        clip-path: circle(40%);
        margin-left: 100px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
  }
}
</style>
