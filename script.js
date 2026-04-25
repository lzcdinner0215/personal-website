// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 导航链接高亮
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = getCurrentPage();
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 移除所有链接的active类
            navLinks.forEach(l => l.classList.remove('active'));
            // 为当前链接添加active类
            this.classList.add('active');
        });
    });
    
    // 为作品集页面添加筛选功能
    if (currentPage === 'portfolio') {
        initPortfolioFilter();
    }
    
    // 为联系页面添加表单处理
    if (currentPage === 'contact') {
        initContactForm();
    }
});

// 获取当前页面名称
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '');
    return page || 'index';
}

// 作品集筛选功能
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 为当前按钮添加active类
            this.classList.add('active');
            
            // 获取筛选类别
            const filter = this.dataset.filter;
            
            // 筛选作品卡片
            portfolioCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// 联系表单处理
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 简单验证
            if (name && email && message) {
                // 这里可以添加实际的表单提交逻辑
                alert('感谢您的消息！我会尽快回复您。');
                contactForm.reset();
            } else {
                alert('请填写所有必填字段。');
            }
        });
    }
}

// 添加悬停效果到所有按钮
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn, .filter-btn, .social-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// 添加霓虹灯效果到特定元素
document.addEventListener('DOMContentLoaded', function() {
    const neonElements = document.querySelectorAll('.neon-text, .nav-brand, .skill-tag, .timeline-date h3, .portfolio-card-content h3');
    neonElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 15px #00ffea, 0 0 30px #00ffea, 0 0 45px #00ffea';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 10px #00ffea, 0 0 20px #00ffea';
        });
    });
});