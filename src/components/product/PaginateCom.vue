<template>
  <div class="col-12 pb-1">
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center mb-3">
        <li class="page-item">
          <button class="page-link" type="button">
            First
          </button>
        </li>

        <li class="page-item">
          <button class="page-link" type="button" >
            Previous
          </button>
        </li>

        <!-- Visible Buttons Start -->

        <li class="page-item" v-for="i in 5" :key="i.id">
          <button class="page-link" type="button" >
            {{ i }}
          </button>
        </li>

        <!-- Visible Buttons End -->

        <li class="page-item">
          <button class="page-link" type="button" >
            Next
          </button>
        </li>

        <li class="page-item">
          <button class="page-link" type="button">
            Last
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

  computed: {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>