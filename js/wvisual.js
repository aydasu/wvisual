/**
 * wvisual JS Utilities
 * Developed for Aydasu Projects
 */

document.addEventListener('DOMContentLoaded', () => {
    // Basic ripple effect for primary buttons
    const buttons = document.querySelectorAll('.wv-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let ripple = document.createElement('span');
            ripple.classList.add('wv-ripple');
            this.appendChild(ripple);
            
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Code block copy functionality
    const codeBlocks = document.querySelectorAll('.wv-code-block');
    codeBlocks.forEach(block => {
        block.addEventListener('click', () => {
            const textToCopy = block.getAttribute('data-copy') || block.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalHTML = block.innerHTML;
                block.innerHTML = '<span style="color: #6ee7b7">Copied!</span>';
                setTimeout(() => {
                    block.innerHTML = originalHTML;
                }, 2000);
            });
        });
    });
});
