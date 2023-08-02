<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-md-6 col-12">
                <div class="px-5">
                    <form @submit.prevent="searchBooks">
                        <div class="my-3">
                            <label for="searchBooks" class="fs-3 form-label">Add books to your club!</label>
                            <div class="d-flex me-5">
                                <input v-model="searchQuery" type="text" id="searchBooks" minlength="2" maxlength="50" class="form-control" placeholder="Search books...">
                                <button class="btn orange-btn">
                                    <i class="mdi mdi-magnify"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <section class="row py-5">
                    <div class="col-5">
                        <img class="img-fluid" src="https://books.google.com/books/publisher/content/images/frontcover/t_ZYYXZq4RgC?fife=w400-h600&source=gbs_api" alt="">
                    </div>
                    <div class="col-7">
                        <h2>Mistborn: The Final Empire</h2>
                        <h3>By Brandon Sanderson</h3>
                        <p></p>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger';

export default {
    setup() {
        
        const searchQuery = ref("")
        return {
            async searchBooks(){
                logger.log(searchQuery.value)
            },
            searchQuery
        }
    }
}
</script>

<style lang="scss" scoped>

</style>