/*const API_KEY = '6f20a87b34424255e73960e4b7bedafa'
const getMovies = async function () {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?apikey=${API_KEY}`
    fetch(apiUrl, { method: 'GET' })
        .then(res => res.json())
        .then(responseJson => {
            const myData = responseJson
            document.body.innerHTML =
               "<pre>" + JSON.stringify(myData, null, " ") + "</pre>"
     })
    
     getMovies() ;*/

     const API_KEY = "6f20a87b34424255e73960e4b7bedafa"
     async function getMovies() {
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        const result = fetch(apiUrl, {method: 'GET'})
        
        /* .then(response => response.json())
         .then(responseJson => {
             const myData = responseJson
             document.body.innerHTML =
                "<pre>" + JSON.stringify(myData, null, " ") + "</pre>"
      })
     

      getMovies()*/

    return await result}