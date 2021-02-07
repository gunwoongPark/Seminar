<template>
  <div>
    <div class="footer">
      <div>
        <ul>
          <li>bung1438@gmail.com</li>
          <li>박건웅</li>
          <li>+82 10-5217-5646</li>
        </ul>
      </div>

      <div>
        <li class="copyright">ⓒ 2021 gunwoongPark All Rights Reserved.</li>
      </div>

      <!-- <li class="copyright">ⓒ 2021 gunwoongPark All Rights Reserved.</li> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  margin-top: 20px;
  padding: 50px;
  background: rgb(241, 241, 241);
  border-top: solid 1px rgb(197, 197, 197);
}

ul {
  display: flex;
  list-style: none;
  justify-content: space-evenly;
}

.copyright {
  margin-top: 20px;
  list-style: none;
  text-align: center;
}
</style>