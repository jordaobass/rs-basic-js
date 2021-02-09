import api from './api';

class App {

    constructor() {
        this.repositories = [];

        this.formElement = document.getElementById('repo-form');
        this.ListElements = document.getElementById('repo-list');
        this.inputELement = document.getElementById('textoBusca');

        this.registerHandlers();

    }

    registerHandlers()
    {
        this.formElement.onsubmit = event =>  this.addRepository(event);
    }

    async  addRepository(event){
        const repoInput = this.inputELement.value;
        if (repoInput.length === 0)
        {
            return;
        }
        this.setLoading();
        try {
            const response = await  api.get(`/repos/${repoInput}`);
            const {name, description, html_url, owner:{avatar_url}}  = response;

            console.log(response);

            event.preventDefault();
            this.repositories.push(
                {
                    name  ,
                    description,
                    avatar_url,
                    html_url
                })   ;

            this.render();
            console.log(this.repositories);
        }catch (e) {
            alert("o repositorio nao existe")
        }


    }

    setLoading(loading = true){
        if (loading === true)
        {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createElement('Carregando'));
            loadingEl.setAttribute('id','loading');
            this.formElement.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();

        }
    }

    render(){
        this.ListElements.innerHTML = '';

        this.repositories.forEach(repo => {

            let imgElement = document.createElement('img');
            imgElement.setAttribute("src", repo.avatar_url)

            let strongElement = document.createElement('strong');
            strongElement.appendChild(document.createElement(repo.name));

            let descriptionElement = document.createElement("p");
            descriptionElement.appendChild(document.createTextNode(repo.description));

            let linkElement = document.createElement("a");
            linkElement.setAttribute("target","_blank");
            linkElement.appendChild(document.createTextNode("acessar"));

            let listItemElemente = document.createElement("li");

            listItemElemente.appendChild(imgElement);
            listItemElemente.appendChild(strongElement);
            listItemElemente.appendChild(descriptionElement);
            listItemElemente.appendChild(linkElement);

            this.ListElements.appendChild(listItemElemente);
        });
        this.setLoading( false);
    }

}

new App();