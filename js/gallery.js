document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.photo-thumbnail');
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            modalImage.src = thumbnail.src;
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});