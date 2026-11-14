const form = document.getElementById('feedbackForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            nameInput.classList.remove('error');
            emailInput.classList.remove('error');
            messageInput.classList.remove('error');


            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const messageValue = messageInput.value.trim();

            let isEmpty = false;


            if (nameValue === '') {
                nameInput.classList.add('error');
                isEmpty = true;
            }
            if (emailValue === '') {
                emailInput.classList.add('error');
                isEmpty = true;
            }
            if (messageValue === '') {
                messageInput.classList.add('error');
                isEmpty = true;
            }

            if (isEmpty) {
                alert('Данные не заполнены! Пожалуйста, заполните все поля.');
                return;
            }

            if (!emailPattern.test(emailValue)) {
                emailInput.classList.add('error');
                alert('Некорректный e-mail! Введите адрес в формате example@mail.ru');
                return; 
            }

            alert('Выполнено! Ваше сообщение отправлено.');
            form.reset();
        });