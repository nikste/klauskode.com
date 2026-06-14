/* Assemble email links at runtime so the address never appears as scrapeable
   "mailto:" or "user@domain" text in the served HTML. This defeats the large
   majority of spam-harvesting bots, which parse HTML but do not execute JS.

   Usage: give a link class "js-email".
     - add data-show to render the address as the visible link text
     - add data-subject="..." to pre-fill the email subject line */
(function () {
  var addr = 'contact' + '@' + 'klauskode.com';
  var links = document.querySelectorAll('a.js-email');
  for (var i = 0; i < links.length; i++) {
    var a = links[i];
    var subject = a.getAttribute('data-subject');
    a.href = 'mailto:' + addr + (subject ? '?subject=' + encodeURIComponent(subject) : '');
    if (a.hasAttribute('data-show')) {
      a.textContent = addr;
    }
  }
})();
