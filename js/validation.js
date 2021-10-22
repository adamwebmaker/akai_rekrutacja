/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript
    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.
    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
function check(){
  var imie = document.getElementById("first-name").value;
  var nazwisko = document.getElementById("last-name").value;
  var komunikat = document.getElementById("po");
  if(imie.length==0 || nazwisko.length==0 || imie.search(["[0-9]"])!=-1 || nazwisko.search(["[0-9]"])!=-1){
  komunikat.innerHTML="Wpisz poprawnie imie lub nazwisko.";
  document.getElementById("sub").style.display = "none";
  setTimeout(() => { komunikat.innerHTML=""; document.getElementById("sub").style.display = "block"; document.getElementById("sub").style.margin =" 20px auto" }, 5000);
  }
  else{
    komunikat.innerHTML="Zgłoszenie zostało wysłane!";
  }
  if(!document.getElementById("frontend-checkbox").checked && !document.getElementById("frontend-checkbox").checked && !document.getElementById("frontend-checkbox").checked && !document.getElementById("frontend-checkbox").checked ){
    komunikat.innerHTML+="</br>Wybierz chociaż jedną sekcje.";
  }
}
