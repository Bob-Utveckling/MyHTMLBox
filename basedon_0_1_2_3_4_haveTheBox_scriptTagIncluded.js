<script>

console.log("file basedon_0_1... - length of f0_listOf_pieceNumbers at time of calling the file basedon_0_1_2_3_4_haveTheBox... is " + f0_listOf_pieceNumbers.length);
function basedon_0_1_2_3_4_haveTheBox_setupInputBoxAndItsFeatures(aSuggestionForBoxLocationIsGiven, withThisContentGiven, inputBox_should_represent_what_field_in_a_system) {
	pieceNumber += 1; //pieceNumber is one of the variables we manager in variables file (# 0)
	//regarding correct content passing: alert("based on 0_1_etc with content: " + withThisContentGiven);
	addCurrent_pieceNumber_to_listOf_pieceNumbers_f0(); //we manage a list of all piece numbers in file 0. needed eg. to add event listeners for all, in one function, in say file3: input box and interaction box
	
	if (aSuggestionForBoxLocationIsGiven != "") { //there is a suggestion, so place the box there:
		uniqueArea = document.getElementById(aSuggestionForBoxLocationIsGiven);
		uniqueArea.style.cssText = "border: 10px solid green; /* background-color:white; */";
		
	} else { //the suggestion is "", so no suggestion, so append to end of document:
		
		whereShouldOneUniqueSingleBoxAreaBe =  "areaForOneUniqueBoxPackage" + pieceNumber; //repeated - remove and call from state in next versions
		// => areaForOneUniqueBoxPackage1, areaForOneUniqueBoxPackage2, areaForOneUniqueBoxPackage3, etc.
		//now that made a name, create the div with this id (name):
		uniqueArea = document.createElement("div");
		uniqueArea.id = whereShouldOneUniqueSingleBoxAreaBe;
		uniqueArea.style.cssText = "border: 10px solid orange;";
		document.body.append(uniqueArea);
		//alert ("in file: 'based...' - created unique box area w/ id:" + uniqueArea.id);
	}
	inFile1_regardingTheRibbonAndPreview_runAFreshSetOfStyles_and_runCreatingDivs_andAppendToDocument(); //1_a_last
	inFile3_regardingCreating_inputBox_and_InnerHTMLInteractBox_createAndSet(withThisContentGiven, inputBox_should_represent_what_field_in_a_system);
	
	activateEventListener_asMany_f4(); //file 4
	console.log("length of f0_listOf_pieceNumbers rigth now: " + f0_listOf_pieceNumbers.length);
	if (f0_listOf_pieceNumbers.length > file0_justToKnow_howManyEventListenersHaveISetup) {
		console.log ("\n\nfile basedon - NOTE: You have " + f0_listOf_pieceNumbers.length + " boxes/pieces, apparently, but event listeners are only set up for " + file0_justToKnow_howManyEventListenersHaveISetup + " items. (file 0 and file 4). To fix this, maybe add more event listeners, or reduce number of pieces you use, or another way to manage event listeners on all input boxes - without this limitation.\n\n");
	}

}


</script>