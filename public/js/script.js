$(document).ready(function(){
  $.ajax(
    '/beverages.json',
    {
      success: function(results) {
        var graph_data = $.parseJSON(results).data;
        var body = $('body');
        var colors = ['#6f4e37','skyblue','#220C0D','gold'];

        // 7 day line chart
        if (bvrg.scope === "week") {
          body.append('<div id="beverage_graph_week" class="graph"/>');
          Morris.Line({
            element: 'beverage_graph_week',
            data: graph_data,
            xkey: 'day',
            ykeys: ['coffee','water','soda','beer'],
            labels: ['coffee','water','soda','beer'],
            parseTime: false,
            lineColors: colors,
            hideHover: true
          });
        }

        // single day donut chart
        if (bvrg.scope === "today") {
          body.append('<div id="beverage_graph_day" class="graph"/>');
          var day_data = graph_data[graph_data.length - 1]
          Morris.Donut({
            element: 'beverage_graph_day',
            data: [
              {label: "Coffee", value: day_data.coffee},
              {label: "Water",  value: day_data.water},
              {label: "Soda",   value: day_data.soda},
              {label: "Beer",   value: day_data.beer}
            ],
            colors: colors
          });
        }
      }
    }
  );
});
