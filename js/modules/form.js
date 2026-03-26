/**
 * @file form.js
 * @description Handles contact form validation, styling error states, and sending message via WhatsApp API.
 */

export function initForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    // WhatsApp Number configuration
    const WHATSAPP_NUMBER = '5521992528480';

    // URL do Backend (Detecção Automática)
    // No PC usa localhost, no Celular usa o IP fixo da sua máquina no Wi-Fi
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const API_URL = isLocal 
        ? 'http://localhost:3001/api/contatos' 
        : 'http://192.168.0.228:3001/api/contatos';

    if (contactForm && submitBtn) {
        
        // Setup inputs for real-time validation styling
        const inputs = contactForm.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.validity.valid) {
                    input.classList.remove('error');
                } else {
                    input.classList.add('error');
                }
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Client-side visual validation
            let isValid = true;
            inputs.forEach(input => {
                if (!input.validity.valid) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                }
            });

            if (!isValid) return;

            // Form valid -> proceed
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            const name = document.getElementById('name').value.trim();
            const company = document.getElementById('company').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subjectEl = document.getElementById('subject');
            const subjectText = subjectEl.options[subjectEl.selectedIndex].text;

            // Envia para o Banco de Dados Local (ATSA-Backend)
            const payload = {
                Data: new Date().toLocaleString('pt-BR'),
                Nome: name,
                Empresa: company,
                Email: email,
                Telefone: phone,
                Assunto: subjectText
            };

            fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }).catch(err => console.error('Erro ao salvar contato no backend:', err));

            // Montagem para o WhatsApp
            const message = 
                `*Novo contato via site ATSA*\n\n` +
                `📌 *Nome:* ${name}\n` +
                `🏢 *Empresa:* ${company}\n` +
                `📧 *E-mail:* ${email}\n` +
                `📱 *Telefone:* ${phone}\n` +
                `📋 *Assunto:* ${subjectText}`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

            // Reset UI state directly since it is synchronous window open
            submitBtn.textContent = 'Enviar Contato';
            submitBtn.disabled = false;
            
            window.open(whatsappURL, '_blank');
            contactForm.reset();
        });
    }
}
