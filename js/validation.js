$(function () {

    function myviewmodel() {
		var self = this;

		//Employee Number Validation
		self.employeeNo = ko.observable().extend({ required: true, number: true });
		

		//First Name        
		self.firstname = ko.observable("").extend({ 
			required: { message: 'Please input alphabet only!!' },			
			pattern: {  
				message: 'Please input alphabet only!!',  
				params: '^[a-zA-Z]+$' 
			}, 

			validation: {				
				message: "Input between 1 to 50 characters!!",
				validator: function(value){
					return value.length <= 50
				}
			}
		});
		
		//LastName 
		self.lastname = ko.observable("").extend({ 
			required: { message: 'Please input alphabet only!!' },			
			pattern: {  
				message: 'Please input alphabet only!!',  
				params: '^[a-zA-Z]+$' 
			}, 

			validation: {				
				message: "Input between 1 to 50 characters!!",
				validator: function(value){
					return value.length <= 50
				}
			}
		});

		//Date of Birth 
		self.dob = ko.observable("").extend({ 
			required: { message: 'Please input valid date in dd/mm/yyyy format' },			
			date: true,
			validation: {				
				message: "Please enter a valid date , age must be >=20",
				validator: function(value){
						var res = value.split("/"); 
						var dob = res[2]+''+res[1]+''+res[0];
						var year = Number(dob.substr(0, 4));
						var month = Number(dob.substr(4, 2)) - 1;
						var day = Number(dob.substr(6, 2));
						var today = new Date();
						var age = today.getFullYear() - year;
						if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
							age--;							
						}										
						return age < 20 ? false : true;															
				}
			}
		});
		
		//Gender 
		self.gender = ko.observable("").extend({ 
			required: { message: 'Please input valid gender!' },
		});

		//Mobile Number
		self.mobile = ko.observable("").extend({ 
			required: { message: 'Please input numeric only!' },	
			maxLength: 10,					
			validation: {				
				message: "Please input 10 numers only!",
				validator: function(value){
					return value.length >= 10
				}
			}
		});

		
		//Email ID
		self.email = ko.observable("").extend({ 	
			required: { message: 'Please input a valid email!' },						
			email: { message: 'Please input a valid email!' }
		});
		
		//Date on Joining
		self.doj = ko.observable("").extend({ 
			required: { message: 'Please input valid date in dd/mm/yyyy format' },			
			date: true			
		});

		//Grade Level 
		self.level = ko.observable("").extend({ 
			required: { message: 'Please select a value between 7 to 13!' },
			validation: {				
				message: "Please select a value between 7 to 13!",
				validator: function(value){								
						return (value >=7 && value<=13) ? true : false;															
				}
			}

		});

		//Post Name
		self.postName = ko.observable("").extend({ 
			required: { message: 'Please input only alphabet and space' },			
			pattern: {  
				message: 'Please input only alphabet and space',  
				params: '^[a-z A-Z]+$' 
			}, 
			validation: {				
				message: "Please input within 30 characters",
				validator: function(value){
					return value.length <= 30
				}
			}
		});

		//Blood Group 
		self.bloodGroup = ko.observable("").extend({ 
			required: { message: "Please select valid blood group!" }			
		});
		
		//Basic Pay
		self.basicPay = ko.observable("").extend({ 
			required: { message: 'Please input  between 3 to 8 characters!' },	
			pattern: {  
				message: 'Please input numeric only!',  
				params: '^[0-9]+$' 
			}, 						
			validation: {				
				message: "Please input  between 3 to 8 characters!",
				validator: function(value){
					return (value.length >=3 && value.length <=8) ? true : false;		
				}
			}
		});

		//House Allowance
		self.houseAllowance = ko.observable("").extend({ 
			required: { message: 'Please input  between 3 to 8 characters!' },	
			pattern: {  
				message: 'Please input numeric only!',  
				params: '^[0-9]+$' 
			}, 						
			validation: {				
				message: "Please input  between 3 to 5 characters!",
				validator: function(value){
					return (value.length >=3 && value.length <=5) ? true : false;		
				}
			}
		});

		//PAN Card No		
		self.panCardNo = ko.observable("").extend({ 			
			pattern: {  
				message: 'Please input alphanumeric only!',  
				params: '^[A-Za-z0-9]+$' 
			}, 						
			validation: {				
				message: "Please input 10 characters only!",
				validator: function(value){
					return (value.length == 0 || value.length == 10 ) ? true : false;		
				}
			}
		});
		
		//Aadhar Card No
		self.aadharCardNo = ko.observable("").extend({ 			
			pattern: {  
				message: 'Please input numeric only!',  
				params: '^[0-9]+$' 
			}, 						
			validation: {				
				message: "Please input 12 characters only!",
				validator: function(value){
					return (value.length == 0 || value.length == 12 ) ? true : false;		
				}
			}
		});

		//Permanent address
		self.permanentAddress = ko.observable("").extend({ 						 						
			validation: {				
				message: "Text should not exceeds 200 characters!",
				validator: function(value){
					return (value.length == 0 || value.length <= 200 ) ? true : false;		
				}
			}
		});

		//Present address
		self.presentAddress = ko.observable("").extend({ 						 						
			validation: {				
				message: "Text should not exceeds 200 characters!",
				validator: function(value){
					return (value.length == 0 || value.length <= 200 ) ? true : false;		
				}
			}
		});

		//Number Only Keyup
		 ko.bindingHandlers.NumberOnly = {
			init: function (element, valueAccessor) {
				$(element).on("keydown", function (event) {
					// Allow: backspace, delete, tab, escape, and enter
					if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
						// Allow: Ctrl+A
						(event.keyCode == 65 && event.ctrlKey === true) ||
						// Allow: . ,
						(event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 110) ||
						// Allow: home, end, left, right
						(event.keyCode >= 35 && event.keyCode <= 39)) {
						// let it happen, don't do anything
						return;
					}
					else {
						// Ensure that it is a number and stop the keypress
						if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
							event.preventDefault();
						}
					}
				});
			}
		};

		self.Message = ko.observable("")
		self.styleClass = ko.observable("")

		self.handleSubmit = function(){			
			var error = ko.validation.group(self);
			if(error().length > 0){				
				error.showAllMessages();	
				self.Message("Form has invalid input data, please correct the errors and submit again!!");
				self.styleClass("panel-danger");
				error.showAllMessages();
				return;
			}
			else{
				self.Message("Employee record has been saved successfully.");				
				self.styleClass("panel-success");				  
			}
			console.log("Submitting the Form");
			var payload = {
				employeeNo : self.employeeNo(),
				firstname : self.firstname(),
				lastname : self.lastname(),
				dob : self.dob(),
				gender : self.gender(),
				mobile : self.mobile(),
				email : self.email(),
				doj : self.doj(),
				level : self.level(),
				postName : self.postName(),
				level : self.level(),
				basicPay : self.basicPay(),
				houseAllowance : self.houseAllowance(),
				panCardNo : self.panCardNo(),
				aadharCardNo : self.aadharCardNo(),
				permanentAddress : self.permanentAddress(),
				presentAddress : self.presentAddress()
			 }
			 console.log(payload);			
		}

		self.handleCancel = function(){			
			var error = ko.validation.group(self);
			if(error().length > 0){				
				error.showAllMessages();	
				self.Message("");
				self.styleClass("");
				error.showAllMessages(false);
				return;
			}
			else{
				self.Message("");				
				self.styleClass("");				  
			}
		}
		 
    };

    ko.applyBindings(new myviewmodel());

});