const trafficCanvas = document.getElementById('traffic-chart');
const trafficLabels = [
    '16-22',
    '23-29',
    '30-5',
    '6-12',
    '13-19',
    '20-26',
    '27-3',
    '4-10',
    '11-17',
    '18-24',
    '25-31',
];
const trafficData = {
    labels: trafficLabels,
    datasets: [{
        label: '',
        backgroundColor: 'rgba(143, 135, 255, .3)',
        data: randomDataList(2500, trafficLabels),
        fill: true,
        tension: .4,
    }]
};
const trafficConfig = {
    type: 'line',
    data: trafficData,
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

const trafficChart = new Chart(trafficCanvas, trafficConfig);