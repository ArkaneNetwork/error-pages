let isDetailsExpanded = !1;
const detailsActionBtn = document.querySelector(".maintenance__card--details__action"), details = document.querySelector(".maintenance__card--details"), detailsContent = document.querySelector(".maintenance__card--details__content");
detailsActionBtn.addEventListener("click", (e)=>{
    const t = document.querySelector(".cf-error-details"), n = detailsActionBtn.querySelector(".maintenance__card--details__action--text");
    isDetailsExpanded ? (detailsContent.style.height = "0px", details.classList.remove("expanded"), n.textContent = "Show more") : (detailsContent.style.height = `${t ? t.clientHeight : 0}px`, details.classList.add("expanded"), n.textContent = "Show less"), isDetailsExpanded = !isDetailsExpanded;
});

//# sourceMappingURL=5xx.2560626e.js.map
