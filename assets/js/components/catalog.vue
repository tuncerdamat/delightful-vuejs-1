<template>
    <div>
        <div class="col-xs-12 col-9">
            <div class="row">
                <div class="col-12">
                    <h1>
                        Products
                    </h1>
                </div>
            </div>
        </div>
        <product-list
            :products="products"
            :loading="loading"
        />
        <div class="row">
            <legend-component :title="legend" />
        </div>
    </div>
</template>

<script>
import LegendComponent from '@/components/legend';
import ProductList from '@/components/product-list';
import { fetchProducts } from '@/services/products-service';

export default {
    name: 'Catalog',
    components: {
        LegendComponent,
        ProductList,
    },
    props: {
        currentCategoryId: {
            type: String,
            default: null, // In homepage it will be null
        },
    },
    data() {
        return {
            products: [],
            loading: false,
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
        };
    },
    async created() {
        this.loading = true;

        let response;
        try {
            response = await fetchProducts(this.currentCategoryId);

            this.loading = false;
        } catch (e) {
            this.loading = false;
        }

        this.products = response.data['hydra:member'];
    },
};
</script>

<style scoped>

</style>
