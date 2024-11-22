// COMPONENTE HOME (PRINCIPAL)

const home = Vue.createApp({
    data() {
      return {
        paginaAtual: 'home', // Página inicial
        componentes: {
          home: {
            template: `
              <div>
                <h1>Bem-vindo à Página Inicial</h1>
                <p>Selecione uma das opções acima para ver mais informações.</p>
              </div>
            `
          },
          sobre: PaginaSobre, // Carrega o componente "Sobre"
          contato: PaginaContato // Carrega o componente "Contato"
        }
      };
    },
    methods: {
        trocaPagina(paginaAtual) {
            this.paginaAtual = paginaAtual;
        }
    },
    template: `
      <div>
        <nav>
          <!-- Navegação entre as páginas -->
          <button @click="trocaPagina('home')">Página Inicial</button>
          <button @click="trocaPagina('sobre')">Sobre Nós</button>
          <button @click="trocaPagina('contato')">Contato</button>
        </nav>
  
        <section>
          <!-- Carrega o componente dinamicamente -->
          <component :is="componentes[paginaAtual]"></component>
        </section>
      </div>    `
  });
  
  // Monta a aplicação Vue no elemento com id "app"
  home.mount('#app');
  