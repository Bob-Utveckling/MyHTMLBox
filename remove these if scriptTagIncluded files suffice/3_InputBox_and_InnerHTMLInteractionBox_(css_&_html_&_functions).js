    function setStyle1_set2() {
        styleToAdd1_set2 = "#holdHTMLBox_and_innerHTMLPreviewBox" + "_" + pieceNumber + "{\
            /*background-image: url('./tree1.png') ; */ \
            border: 1px solid rgb(250, 253, 34);*/    /* bug maybe. (repeated border that is yellow?) */ \
            width: 600px; \
            }";
        return styleToAdd1_set2;
    }

    function setStyle2_set2() {
        styleToAdd2_set2 = "#div_to_interactWithInnerHTML_ofInputBox" + "_" + pieceNumber + "{\
                        border: 1px solid gray;background-color: green;color: white; \
                        width: 100px;height: 200px;resize: both;overflow: auto; vertical-align: top; }";            
        return styleToAdd2_set2;
    }

    function setStyle3_set2() {
        styleToAdd3_set2 = "#span_for_interactAreaTitle" + "_" + pieceNumber + "{\
            font-size: 9px; font-family: Tahoma; color:white;}";
        return styleToAdd3_set2;
    }

    function setStyle4_set2() {
        styleToAdd4_set2 = "#interactTextBox" + "_" + pieceNumber + "{ \
            width:80px; height:140px; font-size: 11px; font-family: Tahoma;}";
        return styleToAdd4_set2;
    }
    
    function createNewStyleSheet2() {
        newStyleSheet_set2 = document.createElement("style");
        return newStyleSheet_set2;
    }

    function setTheInnerHTML_ie_Styles_of_StyleSheet2(whichVariable) {
        whichVariable.innerHTML = setStyle1_set2() + setStyle2_set2() +
        setStyle3_set2() + setStyle4_set2();
    }

    function createTheDivInDocumentWhichHoldsInputAndInteractDivs() {
        holdHTMLBox_and_innerHTMLPreviewBox = document.createElement("div");
        holdHTMLBox_and_innerHTMLPreviewBox.id = "holdHTMLBox_and_innerHTMLPreviewBox_" + pieceNumber;
        holdHTMLBox_and_innerHTMLPreviewBox.innerHTML =
            "<table id='holdHTMLBox_and_innerHTMLPreviewBox_" + pieceNumber + "'>" +
            "    <tr id='tr_forinputandinteract_" + pieceNumber + "'>" +
            "        <td id='td1_ie_htmlbox" + "_" + pieceNumber + "'> <!--where the inputbox is added. it has a dynamic name, eg. box1. probably rest of elements in page should be wrapped around this, but " +
            "        since the parent element, i.e. td1_ie_htmlbox is where the box is added, then the //dynamicness should be around this element (td1_ie_htmlbox) or a container" +
            "        over that has a dynamic name. If all elements are around this dynamic name, then all elements should have dynamic ids, right? because this way you can have as many " +
            "        boxes as needed in the same page (html page)-->" +
            "        </td>" +
            "        <td>" +
            "            <div id='div_to_interactWithInnerHTML_ofInputBox_" + pieceNumber + "' contenteditable='true'>" +
            "                <span id='span_for_interactAreaTitle_" + pieceNumber + "'></span>" +
            "                <textarea id='interactTextBox_" + pieceNumber + "'>When entering content in the input box, you can edit its HTML code here.</textarea>" +
            "            </div>" +                 
            "        </td>" +
            "    </tr>" +
            "</table>";
        return holdHTMLBox_and_innerHTMLPreviewBox;
    }

    /* here can create the css and the div (holder) */

    function setThisBoxAsMainBox(mainboxname_ie_id, includeThisContentInTheBox) {
		//regarding correct content passing: alert("ok include this when setting box: " + includeThisContentInTheBox);
        //alert("set this name for the new input box: " + mainboxname_ie_id);
        mainbox = document.getElementById(mainboxname_ie_id);
        //alert("mainbox = " + mainbox); //if this is null, then need to create a box		
        mainbox == null ? mainbox=createTheNewInputBox(mainboxname_ie_id, includeThisContentInTheBox) : true; 
        //regarding correct content passing: alert("main box is now: " + mainbox.id);
		//regarding correct content passing: alert("now pass this as content: " + includeThisContentInTheBox);
        return mainbox;   
    }
    
    //this next function related/part of function_ setThisBoxAsMainBox
    function createTheNewInputBox(withThisId, getAnyContentForTheBox) { //this would create AND position the div
        //alert("create new box given id: " + withThisId);
        toBeBox = document.createElement("div");
        toBeBox.id = withThisId;
        toBeBox.style.cssText = "font-family:Tahoma; border: 2px dotted gray; width: 484px; height: 200px; resize: both; overflow: auto;";
        toBeBox.contentEditable = "true";
		//regarding correct content passing: alert("ok type of getAnyContentForTheBox: " + typeof(getAnyContentForTheBox) + "\nits value: " + getAnyContentForTheBox);
        const boxContent = (getAnyContentForTheBox != "" ? document.createTextNode(getAnyContentForTheBox) : document.createTextNode("input box"));
        //regarding correct content passing: alert("boxContent is now: " + boxContent);
		toBeBox.appendChild(boxContent);
		//regarding correct content passing: alert("the text is: " + toBeBox.textContent);
        document.body.append(toBeBox);
        //alert("toBeBox id: " + toBeBox.id);
        return toBeBox;
    }

    function positionTheNewInputBox(getMainBoxName) {        
        theCreatedBox = document.getElementById(getMainBoxName);
        //alert("position the created box:" + theCreatedBox);
        //g:
        appendToWhereThisNewlyCreatedBox = document.getElementById("td1_ie_htmlbox"+"_"+pieceNumber);
        appendToWhereThisNewlyCreatedBox.appendChild(theCreatedBox);
    }




/* interact with html - the functions for the interact area */
    function takeHTML_fromInputBox_and_updateTheInteractionBox(fromThis_mainboxname, thePieceNumber) {
        whatIsThe_mainbox = fromThis_mainboxname;
        getInnerHTML_ofmainbox = document.getElementById(whatIsThe_mainbox).innerHTML;
        //alert("work with this: " + getInnerHTML_ofmainbox);
        innerHTML_to_interactWith = getInnerHTML_ofmainbox;
        //yes, ok: alert("have this as interact HTML: " + innerHTML_to_interactWith);
        //ok - check2: alert("will now interact with this innerHTML: " + innerHTML_to_interactWith);
        
        whatIsTheIdOfTheInteractionPanel = "div_to_interactWithInnerHTML_ofInputBox_"+thePieceNumber;					
		
        document.getElementById(whatIsTheIdOfTheInteractionPanel).innerHTML = 
				"<span id='span_for_interactAreaTitle_" + thePieceNumber + "'>Update HTML of input:</span> \
                <br> \
                <button id='interactOkButton_" + thePieceNumber + "' onclick='nowUpdateTheInputBoxThroughThisHTMLInteractionPanel(" + thePieceNumber + ");'>Ok</button> \
                <textarea id='interactTextBox_" + thePieceNumber + "'>" + /*withThisContent*/ document.getElementById(specificBoxName_f0(thePieceNumber)).innerHTML + " \
                </textarea>";		
		}

	function nowUpdateTheInputBoxThroughThisHTMLInteractionPanel(getPieceNumber) {
        forThisBoxNumber = getPieceNumber;
        //might want to make div id, the div style, the naming auto/dynamic so that don't have to call id in a constant way:
        TheInteractTextAreaValue = document.getElementById('interactTextBox_'+forThisBoxNumber).value;
        document.getElementById(specificBoxName_f0(getPieceNumber)).innerHTML = TheInteractTextAreaValue;
    }

    function inFile3_regardingCreating_inputBox_and_InnerHTMLInteractBox_createAndSet(whatToHaveAsContentOfTheInputBox) { //note: now have parameter to add content to input box
		console.log("file 3 - create the input box and the inner html interaction box...");
		//regarding correct content passing: alert("file 3 got content: " + whatToHaveAsContentOfTheInputBox);
        newStyleSheet2 = createNewStyleSheet2();
        setTheInnerHTML_ie_Styles_of_StyleSheet2(newStyleSheet2);
        
        document.body.append(newStyleSheet2); //3_b1

        //document.body.append(createTheDivInDocumentWhichHoldsInputAndInteractDivs()); //3_b2
        document.getElementById(file0_whereShouldTheBoxesBe).append(createTheDivInDocumentWhichHoldsInputAndInteractDivs()); //3_b2

        updateThe_mainboxname_f0(); //m.this is a function from 0 varying content in order to work with mainboxname with its update when piece number updates
        myInputBox = setThisBoxAsMainBox(mainboxname, whatToHaveAsContentOfTheInputBox); //m.so that mainboxname is up to date //note2: I now added a parameter where calling this function can get the parameter to set the input of the box, i.e. the CreateTextNode
        positionTheNewInputBox(myInputBox.id);
		console.log("file 3 - created new stylesheet, created the DIV for the boxes, know the mainboxname, positioned the box in its placeholder");
    }
