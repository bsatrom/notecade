import Chart from 'chart.js';
import moment from 'moment';
import 'chartjs-adapter-moment';
import { getPlatform, getGame } from './lookupHelpers';

Chart.defaults.global.defaultFontFamily = "'Press Start 2P', sans-serif";

const createPieChart = (ctx, labels, data, dataLabel) => {
  new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: dataLabel,
            data: data,
            backgroundColor: [
                '#92cb41',
                '#299cee',
                '#e76e55',
                '#f7d51c',
                '#fcf105',
                '#5ceee1'
            ]
        }]
    }
  });
};

const createLineChart = (ctx, labels, data, label) => {
  new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          backgroundColor: [
            'rgba(1, 148, 63, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(1, 148, 63, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(1, 148, 63, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(1, 148, 63, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(1, 148, 63, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(1, 148, 63, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(1, 148, 63, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        tooltips: {
          callbacks: {
            title : function(tooltipItem, data) {
              const idx = tooltipItem[0].datasetIndex;
              const itemIdx = tooltipItem[0].index;
              const label = tooltipItem[0].label;
              const item = data.datasets[idx].data[itemIdx];
              return `${item.x}: ${label}`;
            },
            label : function(tooltipItem, data) {
                return ` ${tooltipItem.yLabel} minutes`;
            }
          }
        },
        scales: {
          scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month'
                }
              }
        }
      }
    }
  });
};

const createBarChart = (ctx, labels, data, dataLabel) => {
  new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: labels,
        datasets: [{
            label: dataLabel,
            data: data,
            backgroundColor: [
              '#92cb41',
              '#299cee',
              '#e76e55',
              '#f7d51c',
              '#fcf105',
              '#5ceee1',
              '#92cb41',
              '#299cee',
              '#e76e55',
              '#f7d51c',
              '#fcf105',
              '#5ceee1',
              '#92cb41',
              '#299cee',
              '#e76e55',
              '#f7d51c',
              '#fcf105',
              '#5ceee1'
            ]
        }]
    }
  });
};

export const createPlatformPie = (ctx, platforms) => {
  let labels = [];
  let data = [];

  for (const [key, value] of Object.entries(platforms)) {
    labels.push(getPlatform(key));
    let sessions = [...value];
    data.push(sessions.reduce((total, current) => {
      return total + Math.round(current.time_played / 60);
    }, 0));
  }

  createPieChart(ctx, labels, data, '# of minutes played');
};

export const createGameChart = (ctx, platforms) => {
  let labels = [];
  let data =[];
  let allSessions = [];

  for (const [key, value] of Object.entries(platforms)) {
    let sessions = [...value];
    allSessions = allSessions.concat(sessions);
  }

  allSessions.map((session, index) => {
    const labelIndex = labels.indexOf(getGame(session.game));
    if (labelIndex === -1) {
      labels.push(getGame(session.game));
      data.push(Math.round(session.time_played / 60));
    } else {
      data[labelIndex] = data[labelIndex] + Math.round(session.time_played / 60);
    }
  });

  createBarChart(ctx, labels, data, '# of minutes played');
};

export const createHistogram = (ctx, platforms) => {
  let labels = [];
  let data = [];
  let allSessions = [];

  for (const [key, value] of Object.entries(platforms)) {
    let sessions = [...value];
    allSessions = allSessions.concat(sessions);
  }

  allSessions = allSessions.sort((first, second) => second.start - first.start);
  allSessions.map(session => {
    labels.push(moment(session.start).format('MMM Do h:mm:ss'));
    data.push({
      t: new Date(session.start).toISOString(),
      y: Math.round(session.time_played / 60),
      x: getGame(session.game)
    });
  });

  createLineChart(ctx, labels, data, 'Session Length');
};