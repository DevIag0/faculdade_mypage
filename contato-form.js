/**
 * SCRIPT DE INTERAÇÃO DO FORMULÁRIO DE CONTATO
 * ------------------------------------------------------------------
 * Este script gerencia as interações do formulário de contato,
 * incluindo validação de campos e feedback para o usuário.
 * 
 * ESTRUTURA DE ORGANIZAÇÃO:
 * 1. INICIALIZAÇÃO E SELEÇÃO DE ELEMENTOS
 * 2. FUNÇÕES UTILITÁRIAS 
 * 3. VALIDAÇÃO DE CAMPOS
 * 4. MANIPULAÇÃO DE EVENTOS DE FORMULÁRIO
 * 5. FEEDBACK VISUAL AO USUÁRIO
 */

// 1. INICIALIZAÇÃO E SELEÇÃO DE ELEMENTOS
// ----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona elementos do formulário
    const form = document.querySelector('.contato-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.querySelector('.button');

    // 2. FUNÇÕES UTILITÁRIAS
    // ----------------------------------------------
    
    // Função para validar o formato de email
    function isValidEmail(email) {
        // Regex básico para validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // 3. VALIDAÇÃO DE CAMPOS
    // ----------------------------------------------
    
    // Validação do campo de email
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

    // Validação do tamanho da mensagem
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

    // 4. FEEDBACK VISUAL AO USUÁRIO
    // ----------------------------------------------
    
    // Feedback visual durante digitação
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', () => {
            // Remove classe de inválido enquanto o usuário está digitando
            input.classList.remove('invalid');
        });
    });

    // 5. MANIPULAÇÃO DE EVENTOS DE FORMULÁRIO
    // ----------------------------------------------
    
    // Gerenciamento do envio do formulário
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
        
            submitButton.classList.add('sending');
            submitButton.textContent = 'Enviando...';
            
          
          
        }
    });
});