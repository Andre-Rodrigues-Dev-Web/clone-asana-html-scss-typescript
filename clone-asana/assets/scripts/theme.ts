//Validation date
const startDate: Date = new Date();

const checkTrialPeriod = (): void => {
    const currentDate: Date = new Date();
    const endDate: Date = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    if (currentDate >= startDate && currentDate <= endDate) {
        const dateParagraph: HTMLElement | null = document.querySelector('.date');
        if (dateParagraph) {
            dateParagraph.textContent = "você está no modo trial";
        }
    }
};

window.onload = checkTrialPeriod;


