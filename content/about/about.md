---
title: "Info e contatti"
layout: "about"
---
Ciao! Sono Adolfo, classe 97', diplomato al classico e attualmente studente presso la facoltà di Ingegneria Ingormatica del Politecnico di Bari, ma queste cose potrai leggerle nel {{< embed-pdf url="/PDF/CV_eng_.pdf" >}} quindi saltiamo alla parte meno noiosa ecco una lista di cose che mi piacciono:
<ul style ="list-style: circle">
<li> I gatti
<li> Correre
<li> I Radiohead
</ul>
per tutto il resto, se ti va, facciamoci una chiacchierata:

<br>
<br>
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success" class="contact-form">
  <input type="hidden" name="form-name" value="contact" />
  <div class="form-group">
    <label for="name">Nome</label>
    <input type="text" class="form-control" id="name" name="name" required>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="message">Messaggio</label>
    <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
  </div>
  <button type="submit" class="btn btn-dark" href ="/success">Invia</button>
 
</form>

