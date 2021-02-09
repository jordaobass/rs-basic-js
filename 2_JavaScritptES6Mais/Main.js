class List{
    constructor()
    {
        this.data = [];
    }
    add(data){
        this.data.push(data);
    }
}

class TodoList extends List
{

}

const MinhaLista = new TodoList();

document.getElementById("novotodo").onclick  =  function () {
    MinhaLista.add("novo todo");
}