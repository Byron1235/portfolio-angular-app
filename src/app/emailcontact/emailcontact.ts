import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-emailcontact',
  templateUrl: './emailcontact.html',
  styleUrls: ['./emailcontact.css'],
})
export class Emailcontact implements OnInit {

  ngOnInit(): void {
    emailjs.init('Z_8MpA5Iy4IRRtGlb'); // tu public key
  }

  sendEmail(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      message: formData.get('message'),
    };

    // 1️⃣ Enviar correo al usuario (confirmación)
    emailjs.send('service_n8uqmo4', 'template_bd3j281', templateParams)
      .then(() => {
        console.log('Correo enviado al usuario ✅');
      })
      .catch(error => console.error('Error al enviar al usuario ❌', error));

    // 2️⃣ Enviar correo a ti mismo (notificación)
    const notifyParams = {
      from_name: templateParams.from_name,
      from_email: templateParams.from_email,
      message: templateParams.message,
    };

    emailjs.send('service_n8uqmo4', 'template_bd3j281', notifyParams)
      .then(() => {
        console.log('Notificación enviada a Byron ✅');
        alert('Tu mensaje ha sido enviado correctamente ✅');
        form.reset();
      })
      .catch(error => console.error('Error al enviar notificación ❌', error));
  }

}
