let isDetailsExpanded = false;

const detailsActionBtn = document.querySelector('.maintenance__card--details__action');
const details = document.querySelector('.maintenance__card--details');
const detailsContent = document.querySelector('.maintenance__card--details__content');

detailsActionBtn.addEventListener('click', (ev) => {
    const errorDetails = document.querySelector('.cf-error-details');
    const detailsActionText = detailsActionBtn.querySelector('.maintenance__card--details__action--text');

    if (isDetailsExpanded) {
        detailsContent.style.height = `${0}px`;
        details.classList.remove('expanded');
        detailsActionText.textContent = 'Show more';
    } else {
        detailsContent.style.height = `${errorDetails ? errorDetails.clientHeight : 0}px`;
        details.classList.add('expanded');
        detailsActionText.textContent = 'Show less';
    }

    isDetailsExpanded = !isDetailsExpanded;
});
