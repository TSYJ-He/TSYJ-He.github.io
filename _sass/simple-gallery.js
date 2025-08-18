document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.simple-gallery');
    
    galleries.forEach(gallery => {
        const items = gallery.querySelectorAll('.gallery-item');
        const dots = gallery.querySelectorAll('.gallery-dot');
        const prevBtn = gallery.querySelector('.gallery-btn.prev');
        const nextBtn = gallery.querySelector('.gallery-btn.next');
        
        let currentIndex = 0;
        
        const showItem = (index) => {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        };
        
        prevBtn.addEventListener('click', () => {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = items.length - 1;
            showItem(newIndex);
        });
        
        nextBtn.addEventListener('click', () => {
            let newIndex = (currentIndex + 1) % items.length;
            showItem(newIndex);
        });
        
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => showItem(i));
        });
        
        // 初始化
        showItem(0);
    });
});