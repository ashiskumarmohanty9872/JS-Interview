const url = 'https://catfact.ninja/fact'
fetch(url)
.then(response=> response.json())
.then(data=> console.log(data.fact))
.catch(err => console.error(err))