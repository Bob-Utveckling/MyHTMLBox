<?php

/*include "./UniqueBox.html";*/


if (!function_exists('have_the_placeholders_for_myhtmlbox5')) {
	function have_the_placeholders_for_myhtmlbox5() {
		echo "<div id='placeForRequestNewBox'></div>";
		echo "<div id='areaForBoxAndInteract'></div>";
	}
	have_the_placeholders_for_myhtmlbox5();
}

/*function see_that_the_MyHTMLBox5_files_are_available_for_running() {	*/
if (!function_exists('include_the_scripts_for_the_MyHTMLBox5_inputbox_to_call_once')) {
	function include_the_scripts_for_the_MyHTMLBox5_inputbox_to_call_once() {
		$have_loaded_once = 0; //this should be set only once. For this this file should be called properly in a way where
		//this is activated once and the next time it is called, it is inside the call_the_scripts_for_the_myhtml5_box_once function and not set again

		echo "
		<script src=\"0_startintro.js\"></script>
		<script src=\"0_varying_content.js\"></script>
		<script src=\"1_Ribbon_(css_&_html_for_buttons_and_preview_box).js\"></script>
		<script src=\"2_Ribbon_functions.js\"></script>
		<script src=\"3_InputBox_and_InnerHTMLInteractionBox_(css_&_html_&_functions).js\"></script>
		<script src=\"4_TheEventListenersFile.js\"></script>
		<script src=\"basedon_0_1_2_3_4_haveTheBox.js\"></script>
		";
	}
	include_the_scripts_for_the_MyHTMLBox5_inputbox_to_call_once();
	$have_loaded_once = 1;
	echo "have_loaded_once=".$have_loaded_once;
}

function wrap_this_content_in_the_myHTMLBox5($whatContent) {
	//echo $whatContent;
	$thisContent = $whatContent;
	/*function set_a_new_InputBox_and_have_this_content_in_it($thisContent) {*/
	//yes: echo "<script>basedon_0_1_2_3_4_haveTheBox_setupInputBoxAndItsFeatures('if this content loads then load $ this Content');</script>";
	echo "<script>basedon_0_1_2_3_4_haveTheBox_setupInputBoxAndItsFeatures('if this content loads then load $ this Content');</script>";
	//echo "<script>basedon_0_1_2_3_4_haveTheBox_setupInputBoxAndItsFeatures('".$thisContent."');</script>";
}


/*wrap_this_content_in_the_myHTMLBox5t(123);*/
?>