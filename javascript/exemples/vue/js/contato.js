const PaginaContato = {
    template: `
        <label>Nome</label>
        <input class="form-control" type="text" name="nome" id="nome"/>
        <button @click="hello()">Clica aqui</button>
    `,
    methods: {
        hello() {
            alert('olá')
        }
    }
}