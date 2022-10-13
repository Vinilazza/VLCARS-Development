////// Pegar nome da pagina////
var segments = window.location.pathname.split('/');
var toDelete = [];
for (var i = 0; i < segments.length; i++) {
    if (segments[i].length < 1) {
        toDelete.push(i);
    }
}
for (var i = 0; i < toDelete.length; i++) {
    segments.splice(i, 1);
}
var filename = segments[segments.length - 1];
/////////////

document.querySelector('head').innerHTML =
+'<link rel="stylesheet" type="text/css" href="/css/evo-calendar.css" />'
+'<link rel="stylesheet" type="text/css" href="/css/evo-calendar.midnight-blue.css" />'
+'<link rel="stylesheet" href="/css/admin.css">'
+`<title>${filename} - VLCARS</title>`
+'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">'
+'<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />'
+'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />'
+'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">';