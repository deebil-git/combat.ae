$('.combat-logo').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="index.html">
        <img src="assets/combat.png" width="180" alt="Combat Logo">
    </a>
    `);
});

$('.combat-logo-footer').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="index.html">
        <img src="assets/combat-footer.png" width="75" alt="Combat Icon">
    </a>
    `);
});

$('.combat-footer-description').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <p style="text-align: justify;">Combat Technical Services LLC is a proven integrated technical service provider in the United Arab Emirates (UAE), offering the full range of hard and soft technical services for a wide range of business demographics.</p>                     
    `);
});

$('.combat-info-mail').each(function () {
    var link = $(this).html();
    $(this).contents().wrap('<a href="mailto:info@combat.ae">info@combat.ae</a>');
});

$('.combat-info-icon').each(function () {
    var link = $(this).html();
    $(this).contents().wrap('<a href="mailto:info@combat.ae"></a>');
});

$('.combat-recruitment-mail').each(function () {
    var link = $(this).html();
    $(this).contents().wrap('<a href="mailto:recruitment@combat.ae">recruitment@combat.ae</a>');
});

$('.combat-appellate-mail').each(function () {
    var link = $(this).html();
    $(this).contents().wrap('<a href="mailto:appellate@combat.ae">appellate@combat.ae</a>');
});

$('.combat-linkedin').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`<a href="https://www.linkedin.com/company/combat-technical-services" target=”_blank” class="d-flex align-items-center justify-content-center"><span class="fa fa-linkedin">
    <i class="sr-only">LinkedIn</i></span></a>`);
});

$('.combat-twitter').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="https://twitter.com/combat_llc" target=”_blank”
                                class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"><i
                                        class="sr-only">Twitter</i></span></a>
    `);
});

$('.combat-facebook').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="https://www.facebook.com/combat.llc" target=”_blank”
                                class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"><i
                                        class="sr-only">Facebook</i></span></a>
    `);
});

$('.combat-instagram').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="https://www.instagram.com/combat_llc/" target=”_blank”
                                class="d-flex align-items-center justify-content-center"><span
                                    class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a>
    `);
});

$('.combat-youtube').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="https://www.youtube.com/channel/UCyYbGWV1p5aZM1xRBWl-LHQ" target=”_blank”
                                class="d-flex align-items-center justify-content-center"><span
                                    class="fa fa-youtube-play"><i class="sr-only">Youtube</i></span></a>
    `);
});

$('.combat-helpdesk-btn').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="tel:+971 55 335 5868" class="btn btn-primary">
                                <i class="fa fa-phone"></i> Helpdesk (24/7)</a>
    `);
});

$('.combat-helpdesk-call-icon').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="tel:+971 55 335 5868"></a>
    `);
});

$('.combat-helpdesk-call').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="tel:+971 55 335 5868">+971 55 335 5868</a>
    `);
});

$('.combat-location-icon').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="https://g.page/combat-technical-services-llc" target=”_blank”></a>
    `);
});


$('.combat-location-header').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="https://g.page/combat-technical-services-llc" target=”_blank”>
        Warehouse No. 3, 19D Street, Ras Al Khor Ind. 1st, Dubai, UAE | PO Box - 91136
    </a>
    `);
});

$('.combat-location-contact').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="https://g.page/combat-technical-services-llc" target=”_blank”>
        Warehouse No. 3, 19D Street<br>Ras Al Khor Ind. 1st<br>Dubai, UAE<br>PO Box - 91136
    </a>
    `);
});

$('.combat-location-footer').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="https://g.page/combat-technical-services-llc" target=”_blank”>
    Warehouse No. 3, 19D Street<br>Ras Al Khor Ind. 1st<br>
    Dubai, UAE<br>
    PO Box - 91136
    </a>
    `);
});

$('.combat-phone1-footer').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="tel:+971 4 548 4284">+971 4 548 4284</a>
    `);
});

$('.combat-phone2-footer').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="tel:+971 55 335 5868"> +971 55 335 5868</a> 
    `);
});

$('.combat-whatsap-footer').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="https://api.whatsapp.com/send/?phone=%2B971553355868" target=”_blank”>
    +971 55 335 5868 </a>
    `);
});

$('.combatquoterequisitionform').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="https://api.whatsapp.com/send/?phone=%2B971553355868" target=”_blank”>
    +971 55 335 5868 </a>
    `);
});

$('.inquire-btn-nav').each(function () {
    var link = $(this).html();
    $(this).contents().wrap(`
    <a href="#" class="btn-custom" data-toggle="modal" data-target="#exampleModalCenter">Inquire Now</a>
    `);
});

function combatquoterequisitionform(form) {
    form.action = "https://formsubmit.co/2f1758528421b05840c6d257986d2181";
    form.method = "POST";
  }

  document.getElementById("_next").value = "https://deebil-nayif.github.io/combat.ae/thanks";
  document.getElementById("_webhook").value = "https://script.google.com/a/macros/deebil.com/s/AKfycbw3Gh0PQhJb42eqqVbE3w6szylS8voUrbk0LExF05tvETtC5wOTcxciBhWR7DcNPpcKUQ/exec";


  
var slide_url = "assets/slide.webp";
 
document.getElementById("bg_slide").style.backgroundImage = `url(${slide_url})`;

