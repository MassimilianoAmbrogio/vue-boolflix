/**
 * Milestone 1:
   Creare un layout base con una searchbar 
   (una input e un button) in cui possiamo scrivere 
   completamente o parzialmente il nome di un film. 
   Possiamo, cliccando il  bottone, cercare sull’API 
   tutti i film che contengono ciò che ha scritto l’utente.
   Vogliamo dopo la risposta dell’API visualizzare a schermo 
   i seguenti valori per ogni film trovato: 
   Titolo
   Titolo Originale
   Lingua
   Voto
 */

// Parte Vue
const app = new Vue({
    el: '#app',
    data: {
    films: [],
        newSearch: ''
    },
    created() {
        /**
         * AJAX
         */
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query: 'string',
                api_key: '8aa959f205e621817b2ca0044b7b0223',
                language: 'it-IT'
            }
        })
        .then(result => {
            console.log(result.data);

            this.results = result.data.response;
        })
        .catch(error => {
            console.log(error);
        });
    },
    methods: {
        /**
         * Add new Film
         */
        addFilm() {
            if (this.newSearch.trim() !== '') {
                this.films.push(this.newSearch);
              }
        }
    }
});