window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header_list_li'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__list_active');
        });
    });

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalCloseBtn = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal');

        modalTrigger.forEach(btns => {
            btns.addEventListener('click', () => {
                modal.classList.add('show');
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });
         
        modalCloseBtn.addEventListener('click', closeModal);

        function closeModal () {
            modal.classList.remove('show');
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });
});



