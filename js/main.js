/**
 * Bollflix
 */

// Parte Vue
const app = new Vue({
    el: '#app',
    data: {
        coverImage: [],
        query: '',
        results: [],
        availableFlags: ['it', 'en']
    },
    methods: {
        /**
         * Search result on API
         */
        search() {

            this.results = [];

            /**
             * Movies
             */
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '8aa959f205e621817b2ca0044b7b0223',
                    poster_path: '/AkmUoSHkxW9txpzZ52gCcWweEkE.jpg',
                    query: this.query,
                    language: 'it-IT'
                }
            })
            .then(response => {
                const res = response.data.results;
                // console.log(res);
                // Mile 1
                // this.results = res;

                // Mile 2
                this.results = this.results.concat(res);
            })
            .catch(error => {
                console.log(error);
            });
                
            /**
             * Serie tv
             */
            axios.get('https://api.themoviedb.org/3/search/tv', {
                params: {
                    api_key: '8aa959f205e621817b2ca0044b7b0223',
                    poster_path: '/AkmUoSHkxW9txpzZ52gCcWweEkE.jpg',
                    query: this.query,
                    language: 'it-IT'
                }
            })
            .then(response => {
                const res = response.data.results;
                    this.results = this.results.concat(res);
                })
                .catch(error => {
                    console.log(error);
                });
            },
            /**
             * Get Cover Img
             */
            getImg(coverImage) {
                return coverImage = `https://image.tmdb.org/t/p/w342/AkmUoSHkxW9txpzZ52gCcWweEkE.jpg`;
            },
            /**
             * Converte vote
             */
            getVote(vote) {
                return Math.ceil(vote / 2);
            },
            /**
             * Check Lang
             */
            isLangFlag(lang) {
                return this.availableFlags.includes(lang);
            },
            /**
             * Get flag image
             */
            getFlag(lang) {
                return `./img/${lang}.png`;
            }     
    }
});