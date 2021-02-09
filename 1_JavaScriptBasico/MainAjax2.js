var minhaPromise = function () {
    return new Promise( function (resolve,reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/jordaobass');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4)
            {
                if (xhr.status === 200)
                {
                    resolve(((JSON.parse(xhr.responseText))))
                }
                else
                {
                    reject('erro na requisição')
                }
            }
        }
    })
}

minhaPromise().then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error)
})

var resultado  = minhaPromise();
console.log(resultado);





