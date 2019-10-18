//B1

//1. Doe een POST request op [https://httpbin.org/post](https://httpbin.org/post), met als 
//**body** het onderstaande object, maar dan omgebouwd tot json (je kunt Googlen hoe je dit doet 😃)

var obj = {opleiding:'Winc Academy' 
oordeel:'is de allerbeste'};
var myJSON = JSON.stringify(obj);

//- Wat is de response?
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<title>404 Not Found</title>
<h1>Not Found</h1>
<p>The requested URL was not found on the server. If you entered the URL manually please check your spelling and try
	again.</p>

//- Waar zie je de HTTP status code?
In de h1 in HTMLBodyElement


//B2

// 2. Behoud de json die je stuurt, maar verander de request naar een DELETE en de url 
//naar [https://httpbin.org/delete-alles](https://httpbin.org/deletealles)

- Wat is nu de response?
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<title>404 Not Found</title>
<h1>Not Found</h1>
<p>The requested URL was not found on the server. If you entered the URL manually please check your spelling and try
	again.</p>

    