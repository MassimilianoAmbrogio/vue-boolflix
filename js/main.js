/**
 * Bollflix
 */

// Parte Vue
const app = new Vue({
    el: '#app',
    data: {
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
            },
            /**
             * Get film/tv poster
             */
            getImg(poster) {
                return `https://image.tmdb.org/t/p/w342${poster}`;
            }
    }
});