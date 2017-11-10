
var txtfullname,cmbcourse,txtaddres = null;
var lstitem = ["BSCS","BEED","BSBA"];
var count,itemscollection = 0;
var getitem ;
	
Template.set_student.helpers({
	'items' : function() {
		itemscollection = Items.find({});
		return Items.find({});
	}
});


Template.get_student.helpers({
	'dbstudents' : function() {
		return ListStudent.find({});

	}
});


	
$(document).ready(function(){
	

	if(itemscollection == 0){
				for( var i = 0; i < lstitem.length; i++)
				{
						Items.insert({
						lstcourseitem : lstitem[i].toString()
					
						});
				}
				
		}else{}
	
$('#btnaddcoursedone').on("click",function(){
		
		if($('#txtaddcourse').val().trim().length != 0){
							Items.insert({
							lstcourseitem :$('#txtaddcourse').val().toUpperCase()
							});
					alert('Succes')
		}						
		else{alert('Make sure your Course name is valid and not empty')}
		});




$('#btnsave').on("click",function(){
	txtfirstname = $('#txtfirstname').val();
	txtlastname = $('#txtlastname').val();
	 cmbcourse1 =  $('#cmbcourse').val();
	 cmbgender = $('#cmbgender').val();

	
	if(txtfirstname.trim().toString().length != 0 &&  txtlastname.toString().length != 0){
			 DBStudents.insert({
						fullanme : txtfirstname,
						lastname : txtlastname,
						course : cmbcourse1,
						gender : cmbgender
					});
					
					
					
				$('#txtfirstname').text("");
				$('#txtlastname').text("");
				$('#cmbcourse').text("");	
		}
		else {alert('Please complete the requirments');}
		
		});
	
		
});