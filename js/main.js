/* esercizio boolzap
Milestone 1 
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della l ista contatti: t ramite l a direttiva v-for, visualizzare
nome e i mmagine di ogni contatto */

// creiamo un'intanza per usare Vue

var container = new Vue (

    // richimiamo la sezione del dom
    {
        el: "#container",

        data: {

            chatActive: 0,
            // creiamo un'array di oggetti 

            contacts: [

                {
                    userName: "Michele",
                    profileImage: "img/avatar_1.jpg",
                    visible: false,
                    messages: [

                        {
                            date: "10/01/2020 15:30:55",
                            text: "Hai portato a spasso il cane?",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received"
                        }

                    ],
                },

                {
                    userName: "Fabio",
                    profileImage: "img/avatar_2.jpg",
                    visible: false,
                    messages: [

                        {
                            date: "20/03/2020 16:30:55",
                            text: "Ciao come stai?",
                            status: "sent"
                        },

                        {
                            date: "20/03/2020 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received"
                        },

                        {
                            date: "20/03/2020 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa",
                            status: "sent"
                        }

                    ],
                },

                {
                    userName: "Samuele",
                    profileImage: "img/avatar_3.jpg",
                    visible: false,
                    messages: [

                        {
                            date: "28/03/2020 10:10:40",
                            text: "La Marianna va in campagna",
                            status: "received"
                        },

                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent"
                        },

                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received"
                        }

                    ],
                },

                {
                    userName: "Luisa",
                    profileImage: "img/avatar_4.jpg",
                    visible: false,
                    messages: [

                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received"
                        }

                    ],
                }

            ],

            nuovoMessaggio: {

                date: "10/01/2020 15:57:00",
                text: "",
                status: "sent"
    
            },

            risposta: {
                
                date: "10/01/2020 15:58:00",
                text: "ok",
                status: "received"

            },
    
        },

        methods: {

            chatAttiva(i){

                this.chatActive = i;
                // if(this.contacts[i].visible === false){
    
                /*     this.contacts[i].visible = true;
            }*/
                 
            },

            inviaMessaggio(){
                
                this.contacts[this.chatActive].messages.push(this.nuovoMessaggio);

                setTimeout(() => {
                    this.contacts[this.chatActive].messages.push(this.risposta);
                },1000);

                this.nuovoMessaggio = {

                    date: "10/01/2020 15:57:00",
                    text: "",
                    status: "sent"
                }

                this.risposta = {

                    date: "10/01/2020 15:58:00",
                    text: "ok",
                    status: "received"

                }
            }
    
        }

    }

)

