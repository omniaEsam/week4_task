<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/notes">Notes</router-link> 
    </nav>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 background: #2c3e50;
}
nav{
  padding: 15px 0;
  background: rgb(10, 173, 146);
  margin-bottom: 20px;
}
nav a{
 text-decoration: none;
  color: white;
    margin: 15px;
    font-size: 20px;
    font-weight: bold;
}


</style>
