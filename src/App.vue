<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
:root {
  --primary: #001845;
  --secondary: #0466c8;
  --orange1: #e48900;
}

*:not(path) {
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  font-family: fontRegular;
  text-decoration: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
label,
a,
svg,
div {
  font-size: 13px;
  color: #fff;
}

@font-face {
  font-family: "fontRegular";
  src: url("./assets/fonts/Montserrat-Regular.ttf");
  font-display: swap;
}

@font-face {
  font-family: "fontLight";
  src: url("./assets/fonts/Montserrat-Light.ttf");
  font-display: swap;
}

@font-face {
  font-family: "fontBold";
  src: url("./assets/fonts/Montserrat-Bold.ttf");
  font-display: swap;
}

html,
body {
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--primary);
}

ul {
  list-style: none;
}

.pointer {
  cursor: pointer;
}

.all {
  width: 100vw;
  height: 100vh;
}

section {
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 5em;
}

.loading2 {
  animation-duration: 0.75s;
  animation-iteration-count: infinite;
  animation-name: rotate-forever;
  animation-timing-function: linear;
  height: 20px;
  width: 20px;
  border: 2px solid #fff;
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
}

@keyframes rotate-forever {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
