const btn = document.getElementById('button');

const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'service_0htlcbh';
  const templateID = 'template_7v7pnxg';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado con exito!');
      form.reset()
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
      form.reset()
    });
});