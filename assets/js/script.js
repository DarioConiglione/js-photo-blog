axios.get('https://lanciweb.github.io/demo/api/pictures/')
.then(response => {
    const result = response.data;
    console.log(result);    
})
.catch(error => {
    console.error(error)
})



