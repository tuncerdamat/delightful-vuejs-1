<template>
    <div class="row">
        <div class="col-12">
            <div class="mt-4">
                <loading v-show="loading" />
              
              <h5
                  v-show="!loading && products.length === 0"
              >
                No products found!
              </h5>
            </div>
            <product-card
                v-for="product in products"
                v-show="!loading"
                :key="product['@id']"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
import Loading from '@/components/loading';
import ProductCard from '@/components/product-list/product-card';

export default {
    name: 'ProductList',
    components: {
        ProductCard,
        Loading,
    },
    props: {
        products: {
            type: Array,
            required: true,
        },
      loading: {
          type: Boolean,
          required: true,
      },
    },
};
</script>

<style scoped>

</style>
