const PaginaSobre = {
    data() {
        return {
            message: "mensagem padrão"
        }
    },
    methods: {
        trocaMessage() {
            this.message = "ALTEREI VIA VUE JS"
        }
    },
    template: `
        <h4>Está é a minha página sobre.</h4>
        <h1>INJECT DO VUE JS {{ message }}</h1>
        <button @click="trocaMessage()">Troca message</button>
    `
}