
// TOken de tsamuel1289@gmail.com : 031b7bdf-0f35-48ba-ab06-0f2726b99080
Email.send({
    SecureToken : "031b7bdf-0f35-48ba-ab06-0f2726b99080",
    To : 'romerotitosamuel@gmail.com',
    From : "el cliente",
    Subject : "Correo de Prueba SMTp",
    Body : "Este es un correo" 
}).then(
  message => alert(message)
);

Email.send();
