const trafficCanvas = document.getElementById('traffic-chart');

const hourlyTrafficLabels = [
    '0-2',
    '2-4',
    '4-6',
    '6-8',
    '8-10',
    '10-12',
    '12-14',
    '14-16',
    '16-18',
    '18-20',
    '20-22',
    '22-0',
];
const dailyTrafficLabels = [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
];
const weeklyTrafficLabels = [
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
const monthlyTrafficLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

const hourlyTrafficData = randomDataList(2500, hourlyTrafficLabels);
const dailyTrafficData = randomDataList(2500, dailyTrafficLabels);
const weeklyTrafficData = randomDataList(2500, weeklyTrafficLabels);
const monthlyTrafficData = randomDataList(2500, monthlyTrafficLabels);

const trafficData = {
    labels: hourlyTrafficLabels,
    datasets: [{
        label: '',
        backgroundColor: 'rgba(143, 135, 255, .3)',
        data: hourlyTrafficData,
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