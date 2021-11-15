const dailyCanvas = document.getElementById('daily-chart');
const dailyLabels = [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
];
const dailyData = {
    labels: dailyLabels,
    datasets: [{
        label: '',
        backgroundColor: 'rgb(143, 135, 255)',
        data: randomDataList(250, dailyLabels),
        fill: true,
    }]
};
const dailyConfig = {
    type: 'bar',
    data: dailyData,
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

const dailyChart = new Chart(dailyCanvas, dailyConfig);