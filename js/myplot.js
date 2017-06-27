/**
 * Created by alan on 2017/6/27.
 */
TESTER = document.getElementById('test-plot');
Plotly.plot( TESTER, [{
x: ['2/1', '3/1', '4/1', '5/1', '6/1'],
y: [10, 20, 40, 80, 160] }], {
margin: { t: 0 },
xaxis: {title: 'Date (Year:2017)'},
yaxis: {title: 'Number of People'},} );