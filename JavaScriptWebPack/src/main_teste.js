import axios from 'axios';








class Api{
    static async getUserInfo(usename){
        try {

            const response = await axios.get('https://api.github.com/users/'+usename)
            console.log(response)

        }catch (e) {
            console.warn("erro na api")
        }
    }
}

Api.getUserInfo("jordaobass");

Api.getUserInfo("jordaobassa");

const minhaPromese = () => new Promise((resolve,reject ) => {
    setTimeout(() =>{ resolve('ok')},2000);
})


async function  executaPromisse() {

    console.log(await minhaPromese());

    console.log(await minhaPromese());

    console.log(await minhaPromese());
}


executaPromisse();