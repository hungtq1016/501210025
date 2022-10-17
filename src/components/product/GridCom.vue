<template>
  <div class="col-lg-9 col-md-12">
    <div class="row justify-content-end">
      <div class="col-4 pb-3">
        <select class="form-select" aria-label="Default select example" v-model="sortBy">
          <option value="0">Lọc Theo:</option>
          <option value="1">Tên: A-Z</option>
          <option value="2">Tên: Z-A</option>
          <option value="3">Giá: Cao-Thấp</option>
          <option value="4">Giá: Thấp-Cao</option>
        </select>
      </div>
    </div>
    <div class="row pb-3">
      <ProductItem v-for="product in productsBy" :key="product.id" :product="product"
        class="col-lg-4 col-md-6 col-sm-12 pb-1" />
    </div>
    <div class="row">
      <div class="col-12 pb-1">
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center mb-3">
            <li class="page-item">
              <button class="page-link" type="button" @click="onClickBtn(1)">
                First
              </button>
            </li>

            <li class="page-item">
              <button class="page-link" type="button">
                Previous
              </button>
            </li>

            <!-- Visible Buttons Start -->

            <li class="page-item" v-for="i in total" :key="i.id">
              <button class="page-link" type="button" @click="onClickBtn(i)">
                {{ i }}
              </button>
            </li>

            <!-- Visible Buttons End -->

            <li class="page-item">
              <button class="page-link" type="button">
                Next
              </button>
            </li>

            <li class="page-item">
              <button class="page-link" type="button" @click="onClickBtn(totalPages)">
                Last
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { APIURL } from '../../constant';
import ProductItem from './ProductItem.vue';
import PaginateCom from './PaginateCom.vue';
import { mapGetters } from 'vuex';
export default {
  props: ['brand','price'],
  data() {
    return {
      productsBy: [],
      req: '1',
      total: Number,
      sortBy:0,
    };
  },
  components: { ProductItem, PaginateCom },
  computed: {
    ...mapGetters(['getProducts']),
  },
  async mounted() {
    if (this.brand) {
      await axios.get(`${APIURL}/brands/${this.brand}?_embed=products&_limit=6&price_lte=${this.price}`).then((response) => {
        this.productsBy = response.data.products
        this.total = parseInt(response.data.products.length / 6) + 1;
      });
    } else {
      await axios.get(`${APIURL}/products?_page=${this.req}&_limit=6&price_lte=${this.price}`).then((response) => this.productsBy = response.data);
      this.total = parseInt(this.getProducts.length / 6) + 1;
    }
  },
  methods: {
    async onClickBtn(value) {
      await axios.get(`${APIURL}/products?_page=${value}&_limit=6&price_lte=${this.price}`).then((response) => this.productsBy = response.data);
    },
  },
}
</script>

<style lang="scss" scoped>

</style>