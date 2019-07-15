const CHART_OPTIONS = {
  byDay: {
    credits: false,
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{point.y}'
    },
    xAxis: {
      categories: ['1/8', '2/8', '3/8', '4/8', '5/8', '6/8'],
      title: ''
    },
    yAxis: {
      min: 0,
      title: ''
    },
    series: []
  },
  byTime: {
    credits: false,
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{point.y}'
    },
    xAxis: {
      categories: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23', '23-24'],
      title: ''
    },
    yAxis: {
      min: 0,
      title: ''
    },
    series: []
  }
}
export default CHART_OPTIONS
