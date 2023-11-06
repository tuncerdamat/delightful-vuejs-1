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
import axios from 'axios';
import LegendComponent from '@/components/legend';
import ProductList from '@/components/product-list';

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
        const params = {};
        if (this.currentCategoryId) {
            params.category = this.currentCategoryId;
        }

        this.loading = true;

        let response;
        try {
            response = await axios.get('/api/products', {
                params,
            });

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
