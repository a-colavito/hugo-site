---
title: "Info e contatti"
layout: "about"
---

Ciao! Sono Adolfo, classe '97, diplomato al classico e attualmente studente presso la facoltà di Ingegneria Informatica del Politecnico di Bari, ma queste cose potrai leggerle nel
<a href='#' onclick="window.open('/PDF/CV_it_.pdf')" class="text-blue-600 hover:underline">curriculum</a>, quindi saltiamo alla parte meno noiosa ecco una lista di cose che mi piacciono:

<ul class="list-disc pl-6 mb-4">
  <li>I gatti</li>
  <li>Correre</li>
  <li>I Radiohead</li>
</ul>

Hai un'idea da condividere, una proposta di collaborazione o semplicemente vuoi fare due chiacchiere? Compila il form qui sotto, e sarò felice di sentirti!

<br><br>

<form name="contact" action="/success" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="space-y-6">
  <input type="hidden" name="form-name" value="contact" />

  <!-- Honeypot per prevenzione spam -->
  <div hidden>
    <label>Don’t fill this out if you're human: <input name="bot-field" class="border p-2" /></label>
  </div>

  <!-- Campo Nome -->
  <div class="mb-4">
    <label for="name" class="block text-sm font-medium text-gray-700">Nome:</label>
    <input type="text" id="name" name="name" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
    
  </div>

  <!-- Campo Email -->
  <div class="mb-4">
    <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
    <input type="email" id="email" name="email" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
    
  </div>

  <!-- Campo Messaggio -->
  <div class="mb-4">
    <label for="message" class="block text-sm font-medium text-gray-700">Messaggio:</label>
    <textarea id="message" name="message" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" required></textarea>
    
  </div>

  <!-- Pulsante di invio -->
  <div class="text-center py-4">
    <button type="submit" class="bg-gray-800 text-white px-6 py-3 rounded-md text-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Invia</button>
  </div>
</form>
