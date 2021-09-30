    //nom doit etre inferieur ou egal à 60 caractère
// sinon  alert votre nom doit <=60 caractères

// l'email doit contenir @gmail.com ou @yahoo ou @ymail ou @outlook
//affiche votre email n'est pas au bon format

//les mot de pass doivent etre identique
// sinon affiche les mot de pass ne sont pas identique
function recupererFormulaire() {
    var nom = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var newPassord = document.getElementById('newPassord').value;
  if (nom.length == ' ') {
      var myname = 'vous devez saisir un nom';
  }
  else if (nom.length < 2) {
       myname = 'votre nom doit comportez au moins deux caractères';
  }
  else if (nom.length > 60) {
       myname = 'Votre nom doit inférieur à 61 caractères';
  }
  else{
   myname = 'votre nom est valide';
  }

  //gestion de l'email
var gmail = '@gmail.com' ;
var yahoo = '@yahoo';
var ymail =  '@ymail'; 
var outlook =  '@outlook';

var m_gmail = email.search(gmail);
var m_yahoo = email.search(yahoo);
var m_ymail = email.search(ymail);
var m_outlook = email.search(outlook);

if(m_gmail >= 1 || m_yahoo >= 1 || m_ymail >= 1 || m_outlook >= 1){
  var myEmail = "Votre email est valide";
}else if(email == ''){
  myEmail = "Vous devez entrer un email";
}else{
  myEmail = "Votre email n'est pas au bon format";
}
//gestion du mot de pass
if(password != '' && newPassword != '' &&  password == newPassword ){
 var myPassword = "vos mots de pass sont identique";
}else if(password == '' && newPassord == ''){
  myPassword = "Vous devez obligatoirement entrer de mot de pass";
}else{
  myPassword = "les mots de pass ne sont pas identique";
}
//message d'affichage

alert(myname + '\n' + myEmail + '\n' + myPassword);

}
// alert(mEmail);
// alert(mNom);
