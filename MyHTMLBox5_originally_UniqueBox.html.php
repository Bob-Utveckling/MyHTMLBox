<!DOCTYPE html>
<html lang="en-US">
<body>


<div id="placeForRequestNewBox"></div>

<table>
<tr><td>
	<div id="areaForBoxAndInteract" ></div>
	<!-- <div id="areaForBoxAndInteract" style="border:3px solid blue;"></div> -->
	<!--this probably needs to be adjusted, because each input box is just added to 
	the table: holdHTMLBox_and_innerHTMLPreviewBox_1234etc but this could be a wrapper div for that table, right?
	if there are many inputboxes all in this area, then okay. if need to add a box in a certain area, then
	maybe create a function, where the position is clarified, and the box is added to it. This new function could
	be in the file andFinally_5_... --></div>
</td><td>
<!--	<div id="placeForRequestNewBox">new</div>-->
</td></tr>
</table>

<script src="./MyHTMLBox5/0_startintro.js"></script> <!--//error GEThttp://localhost/kdb/0_startintro.js-->
<script src="./MyHTMLBox5/0_varying_content.js"></script>
<!--
Laddning misslyckades för <script> med källan “http://localhost/kdb/0_startintro.js”. structuredSet_db_editRow_showForm.php:98:1
Laddning misslyckades för <script> med källan “http://localhost/kdb/0_varying_content.js”.
-->

<script src="1_Ribbon_(css_&_html_for_buttons_and_preview_box).js"></script>
<script src="2_Ribbon_functions.js"></script>
<script src="3_InputBox_and_InnerHTMLInteractionBox_(css_&_html_&_functions).js"></script>
<script src="4_TheEventListenersFile.js"></script>

<script src="basedon_0_1_2_3_4_haveTheBox.js"></script> <!--since the file has both the function, and the function call, it
is okay I think to just call the script and it will execute the function. Later on, you can just call its function during the app
The function in it is: basedon_0_1_2_3_4_haveTheBox_setupInputBoxAndItsFeatures()  -->

<!-- instead of creating a new area to click the new button to create a new box
create a <script src="andFinally_5_Area_to_request_NewBox.js"></script>

</body>



