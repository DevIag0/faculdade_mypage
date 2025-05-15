/**
 * SCRIPT DE INTERAÇÃO DO FORMULÁRIO DE CONTATO
 * ------------------------------------------------------------------
 * Este script gerencia as interações do formulário de contato,
 * incluindo validação de campos e feedback para o usuário.
 */

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona elementos do formulário
    const form = document.querySelector('.contato-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.querySelector('.button');

    // Função para validar o formato de email
    function isValidEmail(email) {
        // Regex básico para validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Adiciona validação customizada para o campo de email
    emailInput.addEventListener('blur', () => {
        if (emailInput.value && !isValidEmail(emailInput.value)) {
            // Se o email for inválido, define um estilo visual e mensagem
            emailInput.setCustomValidity('Por favor, insira um endereço de email válido.');
            emailInput.classList.add('invalid');
        } else {
            // Remove mensagem de erro se o email for válido
            emailInput.setCustomValidity('');
            emailInput.classList.remove('invalid');
        }
    });

    // Adiciona validação para o tamanho mínimo do campo de mensagem
    messageInput.addEventListener('blur', () => {
        if (messageInput.value.length < 10) {
            // Se a mensagem for muito curta
            messageInput.setCustomValidity('Por favor, digite uma mensagem com pelo menos 10 caracteres.');
            messageInput.classList.add('invalid');
        } else {
            // Remove mensagem de erro se a mensagem for adequada
            messageInput.setCustomValidity('');
            messageInput.classList.remove('invalid');
        }
    });

    // Adiciona feedback visual quando o usuário começar a digitar
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', () => {
            // Remove classe de inválido enquanto o usuário está digitando
            input.classList.remove('invalid');
        });
    });

    // Gerencia o envio do formulário
    form.addEventListener('submit', (event) => {
        // Verifica se todos os campos são válidos
        const isValid = nameInput.checkValidity() && 
                       emailInput.checkValidity() && 
                       messageInput.checkValidity();
        
        if (!isValid) {
            // Impede o envio se houver campos inválidos
            event.preventDefault();
            
            // Verifica qual campo está com erro e foca nele
            if (!nameInput.checkValidity()) {
                nameInput.focus();
            } else if (!emailInput.checkValidity()) {
                emailInput.focus();
            } else if (!messageInput.checkValidity()) {
                messageInput.focus();
            }
        } else {
            // Se tudo estiver válido, adiciona animação ao botão de envio
            submitButton.classList.add('sending');
            submitButton.textContent = 'Enviando...';
            
            // Opcional: simulação de envio (em caso de implementação futura de AJAX)
            // Remover o setTimeout e implementar o envio real quando necessário
            /* 
            setTimeout(() => {
                // Aqui entraria a lógica de finalização do envio
                submitButton.classList.remove('sending');
                submitButton.textContent = 'Enviado!';
                form.reset();
            }, 2000);
            */
        }
    });
});