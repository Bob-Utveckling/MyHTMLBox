In PHP:

//To have the the MyHTMLBox app, call the wrapper
//and call the function in it where the submission form is also set for the inputboxes:
include ("./MyHTMLBox5_wrapper_1.php");
run_once_the_scripts_for_the_MyHTMLBox5_inputbox("structuredSet_db_editRow_save.php",
												$tableName, //after validating $tableName, it can be used here
												$rowId //after validating $rowId, it can be used here
												);

			//MyHTMLBox5:
			$boxArea_i += 1;
			//for the MyHTMLBox, create a predefined div area/location where the box should be placed:
			$BoxAreaLocation = "BoxAreaLocation".$boxArea_i; //BoxAreaLocation1, BoxAreaLocation2, etc.
			echo "<div id='".$BoxAreaLocation."'></div>"; 
			//include this as content for the MyHTMLBox:
			$this_content = $row_columnValues[    $row_columnNames['Field']    ]; //show the content of a field			
			//call the MyHTMLBox, adding to the predefined area:
			wrap_this_content_in_the_myHTMLBox5($BoxAreaLocation, $this_content, $row_columnNames['Field']);
			//wrap_this_content_in_the_myHTMLBox5($this_content);
