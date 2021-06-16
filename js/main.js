$(document).ready(function(){
	$('.datepicker').datepicker({
	dateFormat: 'dd/mm/yy'          
	});

	$('#myTable').DataTable( {
	  dom: 'Brtp',
	  pageLength: 20,          
	  buttons: [
		{
			text: 'Add New Employee',
			className: 'addEmployeeButton',
			action: function ( e, dt, node, config ) {
				$("#exampleModal #employeeForm ")[0].reset();
				$("#exampleModal").modal("show");                    				
			}
		},
		{
			text: 'CSV Download',
			className: 'csvButton',			
		}
	]
	});
	$('.dt-button').addClass('btn btn-primary');
	var table = $('#myTable').dataTable();      
	$(".countRowsData").text(table.fnGetData().length);      
});