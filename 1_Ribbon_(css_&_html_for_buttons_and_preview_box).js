
function createElementStyle() {
    //maybe newStylesheet needs to be dynamic in name? but if added to document, then not neccessary?
    newStylesheet = document.createElement("style");
    return newStylesheet;
}

function setStyle1_ribbonAnd_preview () {
    styleToAdd1 = "#show_ribbon_and_previewBox" + "_" + pieceNumber + "{ \
        /*(ij)*/ \
        border:1px solid darkblue; \
        width:600px; \
        resize: both; \
        overflow: auto; \
    }";
    return styleToAdd1;
}

function setStyle2_ribbon() { 
    /* when the ribbon and the preview box is show, then: box1 */
    styleToAdd2 = "#ribbon" + "_" + pieceNumber + "{ \
        /*see note (ij) also regarding visibility hidden */ \
        /*visibility: hidden;*/ \
        border-bottom: 2px solid green; \
        display: inline-block; \
        background-image: url('./background-tree1.png'); \
    }";
    return styleToAdd2;
}

function setStyle3_preview() { 
    styleToAdd3 = "#boxToPreviewInsertText_HTML" + "_" + pieceNumber + "{ \
        /* can see note (ij) regarding visiblity */ \
        display: inherit; \
        border: 1px solid green; \
        background-color: greenyellow; \
        font-family: Tahoma; \
        font-size: 12px; \
        height: 40px; \
        resize: both; \
        overflow: auto; \
        vertical-align: top; \
    }";
    return styleToAdd3;
}

function setStyle4_button() { 
    styleToAdd4 = "#button" + "_" + pieceNumber + "{ \
        vertical-align: top; \
        width: 60px; \
        height: 50px; \
        font-size: 10px; \
        text-align: center; \
    }";
    return styleToAdd4;
}

function setStyl5_button_long() {
    styleToAdd5 = "#button-long" + "_" + pieceNumber + "{ \
        vertical-align: top; \
        width: 120px; \
        height: 50px; \
        font-size: 10px; \
        text-align: center; \
    }";
    return styleToAdd5;
}

function setStyle6_button_more() {
    styleToAdd6 = "#button-more-width" + "_" + pieceNumber + "{ \
        vertical-align: top; \
        width: 80px; \
        height: 50px; \
        font-size: 10px; \
        text-align: center; \
    }";
    return styleToAdd6;
}

function setStyle7_button_more_2() {
    styleToAdd7 = "#button-more-width-2" + "_" + pieceNumber + "{ \
        vertical-align: top; \
        width: 120px; \
        height: 50px; \
        font-size: 10px; \
        text-align: center; \
    }";
    return styleToAdd7;
}

function setStyle8_fontButton() {
    styleToAdd8 = ".fontButton" + "_" + pieceNumber + "{ \
        font-size: 10px; \
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; \
        cursor: pointer; \
        border: 1px solid black; \
        background-color: lightblue; \
        border-radius: 4px; \
    }";
    //alert(styleToAdd8);
    return styleToAdd8;
}

function setStyle9_previewOkButton() {
    styleToAdd9 = "#previewOkButton" + "_" + pieceNumber + "{ \
        width: 50px; \
        visibility: hidden; \
    }";
    return styleToAdd9;
}

function setStyle10_ribbonTag_boxname() {
    styleToAdd10 = "#ribbonTag_boxname" + "_" + pieceNumber + "{ font-size: 10px; \
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; } ";
    return styleToAdd10;
}


function createTheRibbonAndItsPreview() {
    /*create the ribbon/preview insertion divs with an id that have to
    do with the piece number */
    ribbonAndPreviewBox = document.createElement("div");
    ribbonAndPreviewBox.id = "show_ribbon_and_previewBox_" + pieceNumber;
    ribbonAndPreviewBox.contenteditable = 'true';
    ribbonAndPreviewBox.innerHTML = 
        "    <div id='ribbon_" + pieceNumber + "'>" +
        "        <button id='button_" + pieceNumber + "' onClick='addImage("+pieceNumber+")'><img src='imageForIcon-tree-100x66.png' width='30' height='20'>Insert image</button>" +
        "        <button id='button_" + pieceNumber + "' onClick='addOrderedList("+pieceNumber+")'><img src='imageForIcon-list-numbered-100x66.png' width='30' height='20'>Ordered list</button>" +
        "        <button id='button_" + pieceNumber + "' onClick='addUnorderedList("+pieceNumber+")'><img src='imageForIcon-list-100x66.png' width='30' height='20'>Unordered list</button>" +
        "        <button id='button_" + pieceNumber + "' onClick='bold("+pieceNumber+")''><img src='imageForIcon-bold.png' width='30' height='20'>Bold Text</button>" +
        "        <div style='display: inline-block;'>" +
        "            <div class='fontButton_" + pieceNumber + "' onclick='javascript:addTextWithFont1("+pieceNumber+");'>Font style 1</div>" +
        "            <div class='fontButton_" + pieceNumber + "' onclick='javascript:addTextWithFont2("+pieceNumber+");'>Font style 2</div>" +
        "            <div class='fontButton_" + pieceNumber + "' onclick='javascript:addTextWithFont3("+pieceNumber+");'>Font style 3</div>" +
        "        </div>" +
        "        <button id='button_" + pieceNumber + "' onClick='cross("+pieceNumber+")'><img src='imageForIcon-cross.png' width='30' height='20'><s>Cross</s></button>" +
        "        <button id='button_" + pieceNumber + "' onClick='code("+pieceNumber+")'>&#60;Code&#62</button>" +
        "        <button id='button-long_" + pieceNumber + "' onClick='lessThanGreaterThanSignWithCode("+pieceNumber+")'>Less than symbol<br>Greater than symbol<br> with its code</button>" +
        "        <button id='button_" + pieceNumber + "' onClick='uploadFile_putLink("+pieceNumber+")'><img src='imageForIcon-link.png' width='10' height='10'>Upload file, put link</button>" +
        "        <button id='button-more-width_" + pieceNumber + "' onClick='uploadFile_putHTML("+pieceNumber+")'><img src='imageForIcon-link_and_html_of_file.png' width='30' height='20'>Upload file, put its HTML</button>" +
        "        <button id='button-more-width-2_" + pieceNumber + "' onClick='referenceContent_WithUpdates("+pieceNumber+")'><img src='imageForIcon-reference-live.png' width='30' height='20'>Reference content with its updates</button>" +
        "        <button id='button-more-width-2_" + pieceNumber + "' onClick='referenceContent_CopyContent("+pieceNumber+")'><img src='imageForIcon-reference-copy.png' width='30' height='20'>Reference, copy, keep a content</button>" +
        "        <span id='ribbonTag_boxname_" + pieceNumber + "'>" + templateForBoxName + pieceNumber + "</span>" +
        "    </div>" +
        "    <div id='boxToPreviewInsertText_HTML_" + pieceNumber + "' contenteditable='true'>Preview of what text (html) will be added</div>" +
        "    <button id='previewOkButton_" + pieceNumber + "' onclick='enterTheInsert("+pieceNumber+"); resetThePreviewedHTMLBox("+pieceNumber+");'>OK</button>" +
        "</div>";
    return ribbonAndPreviewBox;
}

//1_a_last
function inFile1_regardingTheRibbonAndPreview_runAFreshSetOfStyles_and_runCreatingDivs_andAppendToDocument() {
    myStyleSheet = createElementStyle();
    myStyleSheet.innerHTML = setStyle1_ribbonAnd_preview() +
         setStyle2_ribbon() + setStyle3_preview() +
         setStyle4_button() + setStyl5_button_long() +
         setStyle6_button_more() + setStyle7_button_more_2() +
         setStyle8_fontButton() + setStyle9_previewOkButton() + setStyle10_ribbonTag_boxname();
    document.body.append(myStyleSheet); //1_a1
    document.getElementById(file0_whereShouldTheBoxesBe).append(createTheRibbonAndItsPreview()); //1_a2
	console.log ("file 1 - created stylesheet styles and the preview box in the ribbon area");
}
		
		
