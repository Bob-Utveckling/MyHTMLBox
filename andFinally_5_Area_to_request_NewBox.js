/* can call the addNewInputBox directly or via the file here where a small content is also set for the input box it creates */

    function addNewInputBox(DoYouWantAnyContentInTheInputBox) {
		console.log("create new box...");
        //alert(true);
		basedon_0_1_2_3_4_haveTheBox_setupInputBoxAndItsFeatures(DoYouWantAnyContentInTheInputBox); //this function is the basedon_0_1_2_3_4... file
		//note: should have file 0 active listeners also. because I go this path to have listeners since I can't auto add eventlisteners to boxes, right? see file 3
		//make it based on 0_1_2_3_4 and have the below function there:
		console.log("file basedon - have now apparently created a new box - pieceNumber = " + pieceNumber);
		console.log("file basedon - There are now " + f0_listOf_pieceNumbers.length + " boxes");
					
		if (f0_listOf_pieceNumbers.length > file0_justToKnow_howManyEventListenersHaveISetup) {
			console.log ("\n\nfile basedon - NOTE: You have " + f0_listOf_pieceNumbers.length + " boxes/pieces, apparently, but event listeners are only set up for " + file0_justToKnow_howManyEventListenersHaveISetup + " items. (file 0 and file 4). To fix this, maybe add more event listeners, or reduce number of pieces you use, or another way to manage event listeners on all input boxes - without this limitation.\n\n");
		}

    }


	function presentTheClickablePartToCreateNewBox() {
		presentClickableItemToCreateNewBox = document.createElement("div");
		setASmallContent = "add new content";
		presentClickableItemToCreateNewBox.innerHTML = "<p><p><button onClick='addNewInputBox(setASmallContent)'>Add a new input box</button>";
		document.getElementById(file0_placeHolderDivForButtonToRequestANexBox).append(presentClickableItemToCreateNewBox);
	}
	
presentTheClickablePartToCreateNewBox();
