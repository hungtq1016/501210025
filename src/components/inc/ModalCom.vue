<template>
   <div class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Danh Sách Yêu Thích</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div v-for="item in array" :key="item.id">
          <router-link :to="{name: 'product-detail', params: {id : item.productId}}">
            {{item.productId}}
          </router-link>
          
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
       props:['array']
    }
</script>

<style lang="scss" scoped>

</style>