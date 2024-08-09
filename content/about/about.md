---
title: "Info e contatti"
layout: "about"
---
Ciao! Sono Adolfo, classe 97', diplomato al classico e attualmente studente presso la facoltà di Ingegneria Informatica del Politecnico di Bari, ma queste cose potrai leggerle nel <a href="/PDF/CV_it_.pdf" download>curriculum</a> quindi saltiamo alla parte meno noiosa ecco una lista di cose che mi piacciono:
<ul style ="list-style: circle">
<li> I gatti
<li> Correre
<li> I Radiohead
</ul>
Hai un'idea da condividere, una proposta di collaborazione o semplicemente vuoi fare due chiacchiere? Compila il form qui sotto, e sarò felice di sentirti!

<br>
<br>
<form name="contact"  action ="/success" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="needs-validation" novalidate>
  <input type="hidden" name="form-name" value="contact" />

  <!-- Honeypot field for spam prevention -->
  <div hidden>
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </div>

  <div class="form-group">
    <label for="name">Nome:</label>
    <input type="text" id="name" name="name" class="form-control" required />
    <div class="invalid-feedback">Per favore inserisci il tuo nome.</div>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" class="form-control" required />
    <div class="invalid-feedback">Per favore inserisci un'email valida.</div>
  </div>
  <div class="form-group">
    <label for="message">Messaggio:</label>
    <textarea id="message" name="message" class="form-control" rows="4" required></textarea>
    <div class="invalid-feedback">Per favore inserisci il tuo messaggio.</div>
  </div>
  <div class="text-center py-4">
  <button type="submit" class="btn btn-dark btn-lg" >Invia</button>
  </div>
  
</form>

