{
    let faqList = document.querySelector('.faq__list');
    if(faqList) {

        
        faqList.querySelectorAll('.faq__collapse').forEach(btn => {
            btn.addEventListener('click', function(e){
                e.preventDefault();
                _slideUp(this.closest('.faq__collapse-content'));
                this.closest('.faq__collapse-content').previousElementSibling.classList.remove('_active')
            })
        })
    }
}