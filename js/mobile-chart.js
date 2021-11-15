const mobileCanvas = document.getElementById('mobile-chart');
const mobileLabels = [
    'Desktop',
    'Tablet',
    'Phones',
];
const mobileData = {
    labels: mobileLabels,
    datasets: [{
        label: '',
        backgroundColor: [
            'rgb(143, 135, 255)',
            'rgb(102, 181, 100)',
            'rgb(58, 194, 199)',
        ],
        borderWidth: 0,
        data: randomDataList(200, mobileLabels),
        hoverOffset: 4,
    }]
};
const mobileConfig = {
    type: 'doughnut',
    data: mobileData,
    options: {
        plugins: {
            legend: {
                position: 'right',
            }
        },
        maintainAspectRatio: false,
    }
};

const mobileChart = new Chart(mobileCanvas, mobileConfig);