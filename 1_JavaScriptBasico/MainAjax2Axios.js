axios.get('https://api.github.com/users/jordaobass').then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error)
})
