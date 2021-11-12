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
  color: #000;
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

section {
  position: relative;
  width: 100vw;
  padding: 2em 0 90px 0 !important;
}

.pointer {
  cursor: pointer;
}

.all {
  width: 100vw;
  height: 100vh;
}
</style>
