// Doe een GET request op [https://api.thecatapi.com/v1/breeds](https://api.thecatapi.com/v1/breeds)

//- Wat is de response?
//- Welke status code krijg je terug?

200 Code (Succes)


//Doe een GET request op [http://www.omdbapi.com/?i=tt3896198](http://www.omdbapi.com/?i=tt3896198)

//- Wat is de response?
//- Welke status code krijg je terug?

{
    "Response": "False",
    "Error": "No API key provided."
}

401 Code (Client Error, Unauthorized)

// Voeg nu aan de Parameters het volgende toe en doe opnieuw de GET request:  

//**key**: apikey **value:** 896f18d6

//- Welke response krijg je nu?

Hetzelfde:

{
    "Response": "False",
    "Error": "No API key provided."
}