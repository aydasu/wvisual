/**
 * wvisual JS Utilities - 2019 Flat Aesthetic
 * Developed for Aydasu Projects
 */

document.addEventListener('DOMContentLoaded', () => {
    // Basic code block copy functionality
    const codeBlocks = document.querySelectorAll('.wv-code-block');
    codeBlocks.forEach(block => {
        block.addEventListener('click', () => {
            const textToCopy = block.getAttribute('data-copy') || block.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalHTML = block.innerHTML;
                block.innerHTML = '<span style="color: #28a745">Copied!</span>';
                setTimeout(() => {
                    block.innerHTML = originalHTML;
                }, 2000);
            });
        });
    });
});
