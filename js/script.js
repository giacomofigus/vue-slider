/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
*/

const {createApp} = Vue 


    createApp({
        data(){
            return{
                currentSlide: 0,
                currentText: 0,
                currentTitle: 0,
                autoScroll: null,
                
                slides: [
                    {
                            image: 'img/01.webp',
                            title: 'Marvel\'s Spiderman Miles Morale',
                            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                        }, {
                            image: 'img/02.webp',
                            title: 'Ratchet & Clank: Rift Apart',
                            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                        }, {
                            image: 'img/03.webp',
                            title: 'Fortnite',
                            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                        }, {
                            image: 'img/04.webp',
                            title: 'Stray',
                            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                        }, {
                            image: 'img/05.webp',
                            title: "Marvel's Avengers",
                            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                            
                        }
                        
                    ]
                    
            }
            
        },

        created(){
            this.autoSlider()
        },

        methods: {
            
            nextImg(){
                this.currentSlide++
                this.currentTitle++
                this.currentText++

                
                let thumb = document.querySelector(".thumb").classList.remove("active");
                

                if(this.currentSlide >= this.slides.length ){
                    this.currentSlide = 0
                    this.currentTitle = 0
                    this.currentText = 0
                }
            },
            prevImg(){
                this.currentSlide--
                this.currentTitle--
                this.currentText--

                if(this.currentSlide < 0){
                    this.currentSlide = this.slides.length - 1
                    this.currentTitle = this.slides.length - 1
                    this.currentText = this.slides.length - 1
                }
            },
            choseImg(index){
                this.currentSlide = index
                this.currentText = index
                this.currentTitle = index
            },
            autoSlider(){
                this.autoScroll = setInterval(() => {
                    this.nextImg()
                }, 3000);
            },
            stopAutoSlider(){
                clearInterval(this.autoScroll)
            }

            

        }
        
    }).mount("#app")

    