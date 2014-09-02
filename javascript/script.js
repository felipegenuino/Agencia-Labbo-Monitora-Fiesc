

//Plugin Carousel

$(document).ready(function() {
     
    $("#slider-main").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay: true,
         pagination : false,
        paginationNumbers: false
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });
     
});









 //codigo datepicker
 /*
    $(document).ready(function() {
        $(".datepicker").datepicker({
            dateFormat: 'dd/mm/yy',
            dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
            dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
            dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
            monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
            monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
            nextText: 'Próximo',
            prevText: 'Anterior'
        });
    });
*/




//Código jQuery para adicionar o efeito zebra na tabela, em anexo está o exemplo completo!
$(document).ready(function() {
    $('table.timeline-info tbody tr:odd').addClass('linha-a');
    $('table.timeline-info tbody tr:even').addClass('linha-b');
});




//Plugin Charts http://api.highcharts.com/highstock
// http://www.youtube.com/watch?v=x8qWCkerDNA
//subcategoria
$(function () {
    var chart;
    
    $(document).ready(function () {
        
        // Build the chart
        $('.container-chart-subcategoria').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Tipo de chart',
                data: [
                    ['Barragem',    30.0],
                    ['Autoestrada', 70.0]
                    /*{
                        name: 'Energia',
                        y: 60.0,
                        sliced: true,
                        selected: true
                    }*/
     
                ]
            }]
        });








        // Build the chart
        $('.container-chart-status').highcharts({
            chart: { plotBackgroundColor: null, plotBorderWidth: null,  plotShadow: false},
            title: { text: ''},
            tooltip: {  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Tipo de chart',
                data: [
                   // ['Falta de recursos',   60.0],
                    ['Falta de recursos',   75.0],
                    ['Estudos ambientais',   25.0]
                    /*{
                        name: 'Falta de recursos',
                        y: 60.0,
                        sliced: true,
                        selected: true
                    }*/
     
                ]
            }]
        });








        // Build the chart
        $('.container-chart-categoria').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Tipo de chart',
                data: [
                   // ['Falta de recursos',   60.0],
                    ['Energia',   80.0],
                    ['Rodovia',   20.0]
                    /* {
                        name: 'Rodovia',
                        y: 20.0,
                        sliced: true,
                        selected: true
                    } */
     
                ]
            }]
        });







  // Build the chart
        $('.container-chart-fao').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Tipo de chart',
                data: [
                    ['Barragem', 40.0],
                    ['Autoestrada', 60.0]
                 ]
            }]
        });









    });
    
});


 
 


 
