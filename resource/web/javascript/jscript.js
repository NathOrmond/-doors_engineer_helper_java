	window.onload = setAllColors();

	window.onbeforeunload = function () {
     return 'Save changes before quitting session (ctrl + s)';
	};



	$(function () {

		$("td").click(function (event){
			var tdObj = $(this);
			if(tdObj.attr("id") != "dropdownTableData"){
				
				var originalText = tdObj.text();
				var inputObj =$("<input type='text'/>");
				tdObj.html("");
			
				inputObj.width(tdObj.width())
				inputObj.height(tdObj.height())
				inputObj.val(originalText)
				inputObj.appendTo(tdObj)
				inputObj.trigger("focus")
				inputObj.trigger("select")
				inputObj.keyup(function(event){

					var typedText = $(this).val();
						
					switch(event.which){ 
						case 13:

						 	if(typedText === originalText){
								tdObj.html(originalText);
								tdObj.css({background: tdObj.style.background-color});
		
							} else { 
								tdObj.html(typedText);
								tdObj.css({background: "#FEFA09"});	
							}
							break; 

						default: 
							break;	
					}

				});
		
				inputObj.click(function(){
					return false;
				});
		    }
		});
}	);
	

	function setAllColors(){
		var selectElements = document.getElementById('data-table').getElementsByTagName('select');
		for (var i = 0; i < selectElements.length; i++) {
		    setColor(selectElements[i]);
		}
	}

	
	function setColor(element) {
	    element.parentNode.style.backgroundColor = element.options[element.selectedIndex].value;
	}
