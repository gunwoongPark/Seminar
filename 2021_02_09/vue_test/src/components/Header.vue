<template>
  <div>
    <div class="haederBlock">
      <h1 class="title">PHOTO</h1>
      <div class="menuBlock">
        <ul>
          <li>GALLERY</li>
          <li>NOTICE</li>
          <li>MY MENU</li>
          <li>LOGOUT</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.haederBlock {
  padding: 15px;
  display: flex;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  background: rgb(255, 255, 255, 0.7);
  justify-content: space-between;
  z-index: 10;
}

.menuBlock ul {
  display: flex;
  list-style: none;
}

.menuBlock ul li {
  margin-right: 20px;
  cursor: pointer;
  font-weight: bold;
}
</style>