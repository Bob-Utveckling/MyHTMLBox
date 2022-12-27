
/*this could be a good idea (putting the javascript sources in here. but should find way to call
javascript from javascript file

<script src="0_variablesToTrack.js"></script>
<script src="1_Ribbon_(css_&_html_for_buttons_and_preview_box).js"></script>
<script src="2_Ribbon_functions(common_and_not_bound_to_pieceNumber).js"></script>
<script src="3_InputBox_and_InnerHTMLInteractionBox_(css_&_html_&_functions).js"></script>
*/

console.log("file basedon_0_1... - length of f0_listOf_pieceNumbers at time of calling the file basedon_0_1_2_3_4_haveTheBox... is " + f0_listOf_pieceNumbers.length);
function basedon_0_1_2_3_4_haveTheBox_setupInputBoxAndItsFeatures(withThisContentGiven) {
	pieceNumber += 1; //pieceNumber is one of the variables we manager in variables file (# 0)
	//regarding correct content passing: alert("based on 0_1_etc with content: " + withThisContentGiven);
	addCurrent_pieceNumber_to_listOf_pieceNumbers_f0(); //we manage a list of all piece numbers in file 0. needed eg. to add event listeners for all, in one function, in say file3: input box and interaction box
	inFile1_regardingTheRibbonAndPreview_runAFreshSetOfStyles_and_runCreatingDivs_andAppendToDocument(); //1_a_last
	inFile3_regardingCreating_inputBox_and_InnerHTMLInteractBox_createAndSet(withThisContentGiven);
	activateEventListener_asMany_f4(); //file 4
	console.log("length of f0_listOf_pieceNumbers rigth now: " + f0_listOf_pieceNumbers.length);
/*	document.body.append(newStyleSheet_set2); //3_b1
	document.body.append(holdHTMLBox_and_innerHTMLPreviewBox); //3_b2
	//3_b3
	/*adding event listener: * /
	document.getElementById(mainboxname).addEventListener("input", function() {
		takeHTML_fromInputBox_and_updateTheInteractionBox();
	});
	*/

}

/* can set up one by just calling the file:
basedon_0_1_2_3_4_haveTheBox_setupInputBoxAndItsFeatures("");
*/

