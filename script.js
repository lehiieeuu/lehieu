// Thay đổi kích thước Header khi cuộn 
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.style.height = '60px';
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.height = '80px';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Hiệu ứng Fade-in 
const steps = document.querySelectorAll('.step-row');

const checkVisibility = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    steps.forEach(step => {
        const stepTop = step.getBoundingClientRect().top;
        if(stepTop < triggerBottom) {
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
        }
    });
};

// Khởi tạo style ban đầu cho hiệu ứng
steps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(30px)';
    step.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Kiểm tra ngay khi tải trang