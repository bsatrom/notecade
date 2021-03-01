import Chart from 'chart.js';
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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
  });
};

const createLineChart = (ctx, labels, data, dataLabel) => {
  new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: dataLabel,
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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

export const createGamePie = (ctx, platforms) => {
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

  createLineChart(ctx, labels, data, '# of minutes played');
};

export const createHistogram = (ctx) => {

};