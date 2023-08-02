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
            <div class="search-section col-md-6 col-12">
                <section class="row h-100 py-5">
                    <div class="col-5">
                        <img class="img-fluid" src="https://books.google.com/books/publisher/content/images/frontcover/t_ZYYXZq4RgC?fife=w400-h600&source=gbs_api" alt="">
                    </div>
                    <div class="col-7 h-100">
                        <div class="d-flex flex-column h-100">
                            <h2>Mistborn: The Final Empire</h2>
                            <h3>By Brandon Sanderson</h3>
                            <p class="book-description">Now with over 10 million copies sold, The Mistborn Series has the thrills of a heist story, the twistiness of political intrigue, and the epic scale of a landmark fantasy saga. For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler, the "Sliver of Infinity," reigned with absolute power and ultimate terror, divinely invincible. Then, when hope was so long lost that not even its memory remained, a terribly scarred, heart-broken half-Skaa rediscovered it in the depths of the Lord Ruler's most hellish prison. Kelsier "snapped" and found in himself the powers of a Mistborn. A brilliant thief and natural leader, he turned his talents to the ultimate caper, with the Lord Ruler himself as the mark. Kelsier recruited the underworld's elite, the smartest and most trustworthy allomancers, each of whom shares one of his many powers, and all of whom relish a high-stakes challenge. 
                                Only then does he reveal his ultimate dream, not just the greatest heist in history, but the downfall of the divine despot. But even with the best criminal crew ever assembled, Kel's plan looks more like the ultimate long shot, until luck brings a ragged girl named Vin into his life. Like him, she's a half-Skaa orphan, but she's lived a much harsher life. Vin has learned to expect betrayal from everyone she meets, and gotten it. She will have to learn to trust, if Kel is to help her master powers of which she never dreamed. This saga dares to ask a simple question: What if the hero of prophecy fails? Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero 
                                of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener's Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.
                            </p>
                            <p class="mb-0">686 Pages</p>
                        <p class="mb-0">Published 2010-04-01</p>
                        <p class="mb-0">Clubs that have read this book: 10</p>
                        <p class="mb-0">Clubs reading this book: 3</p>
                        <button class="btn orange-btn ms-auto">Add To List</button>
                        </div>
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

.book-description {
    height: 50%;
    overflow-y: scroll;
}

.search-section {
    height: 80dvh;
}

</style>