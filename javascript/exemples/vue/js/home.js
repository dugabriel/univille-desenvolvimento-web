const PaginaHome = {
    template: `
        <div>
            <h1>Bem-vindo a página Inicial</h1>
            <p>Olá!!</p>
            <p>novo paragrafo</p>
        </div>
    `
}


const home = Vue.createApp({
    data() {
        return {
            paginaAtual: "home",
            componentes: {
                home: PaginaHome,
                sobre: PaginaSobre,
                contato: PaginaContato
            }
        }
    },
    methods: {
        trocaPagina(paginaAtual) {
            this.paginaAtual = paginaAtual;
        }
    },
    template: `
        <nav>
            <button @click="trocaPagina('home')">Página Inicial</button>
            <button @click="trocaPagina('sobre')">Sobre</button>
            <button @click="trocaPagina('contato')">Contato</button>
        </nav>

        <section>
            <component :is="componentes[paginaAtual]"></component>
        </section>
    `
});

home.mount("#app");