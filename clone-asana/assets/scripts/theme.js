//Validation date
const startDate = new Date();
const checkTrialPeriod = () => {
    const currentDate = new Date();
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);
    if (currentDate >= startDate && currentDate <= endDate) {
        const dateParagraph = document.querySelector('.date');
        if (dateParagraph) {
            dateParagraph.textContent = "você está no modo trial";
        }
    }
};
window.onload = checkTrialPeriod;
