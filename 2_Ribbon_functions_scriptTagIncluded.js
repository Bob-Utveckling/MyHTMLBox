<script>	
	/* no: these are ribbon / preview insert interaction functions.
    They do not take any parameter, param comes based on the set interaction id
    They are one time and common among all instances of boxes/repective ribbons
    yes: these functions should get a piece number because as we create more and more boxes, the functions
    should impact the specific box we want the impact on. Of course one can call these functions from outside with any piece number
*/
console.log("file 2 - activate the functions that deal with clicking the ribbon buttons for a box with a given number - pieceNumber...");
/*maybe a duplicate of calling these functions since they really need to be available for "any" box, and not called again for every box. But they
do get replaced and are the same, right? */

imageList = [
    "./MyHTMLBox5/InsertImages/000.clock.jpg",
    "./MyHTMLBox5/InsertImages/email.png",
    "./MyHTMLBox5/InsertImages/GreenCheck.png",
    "./MyHTMLBox5/InsertImages/GreenCheckCircle.png",
    "./MyHTMLBox5/InsertImages/GreenTick.png",
    "./MyHTMLBox5/InsertImages/Add.png",
    "./MyHTMLBox5/InsertImages/Anim1-circles.gif",
    "./MyHTMLBox5/InsertImages/ArrowTransitionRight.png",
    "./MyHTMLBox5/InsertImages/ArrowUpToRight.jpg",
    "./MyHTMLBox5/InsertImages/Baghimandeh.png",
    "./MyHTMLBox5/InsertImages/Cancel.png",
    "./MyHTMLBox5/InsertImages/Car.jpg",
    "./MyHTMLBox5/InsertImages/Checkpoint.jpg",
    "./MyHTMLBox5/InsertImages/Clouds1.png",
    "./MyHTMLBox5/InsertImages/Continue.png",
    "./MyHTMLBox5/InsertImages/DidInstead.png",
    "./MyHTMLBox5/InsertImages/DidNotImplement.png",
    "./MyHTMLBox5/InsertImages/Dollar.jpg",
    "./MyHTMLBox5/InsertImages/Download.png",
    "./MyHTMLBox5/InsertImages/DownUpLeftToRightArrow.png",
    "./MyHTMLBox5/InsertImages/Dua1.jpg",
    "./MyHTMLBox5/InsertImages/Family1.jpg",
    "./MyHTMLBox5/InsertImages/Folder1.png",
    "./MyHTMLBox5/InsertImages/Gandomzar.jpg",
    "./MyHTMLBox5/InsertImages/GoldArrowLeft.jpg",
    "./MyHTMLBox5/InsertImages/HorizontalLeaves.png",
    "./MyHTMLBox5/InsertImages/HrFlowers.jpg",
    "./MyHTMLBox5/InsertImages/Implemented.png",
    "./MyHTMLBox5/InsertImages/ImplementedPartially.png",
    "./MyHTMLBox5/InsertImages/ManThinking.jpg",
    "./MyHTMLBox5/InsertImages/Payan.jpg",
    "./MyHTMLBox5/InsertImages/PleaseDoThis.png",
    "./MyHTMLBox5/InsertImages/Pointer.png",
    "./MyHTMLBox5/InsertImages/PointGreen.png",
    "./MyHTMLBox5/InsertImages/QuestionMarkOrange.jpg",
    "./MyHTMLBox5/InsertImages/RedTraficLight.png",
    "./MyHTMLBox5/InsertImages/Shokr.png",
    "./MyHTMLBox5/InsertImages/Stamp-PerhapsNotNeeded.jpg",
    "./MyHTMLBox5/InsertImages/Sun.jpg",
    "./MyHTMLBox5/InsertImages/This.png",
    "./MyHTMLBox5/InsertImages/Three-dots.png",
    "./MyHTMLBox5/InsertImages/Tree1_small.jpg",
    "./MyHTMLBox5/InsertImages/UpdateDone.png",
    "./MyHTMLBox5/InsertImages/Zamin.jpg"
]
count_atWhichImageAreWe = -1;

/*the program does not calculate width and height when apparently the img object is created
and continually gives x=0, y=0 */ /*bug (object_not_available?) */
    function presentAnImageFromList() {
        howManyImages = imageList; //bty this should be imageList.length
        //count_atWhichImageAreWe is outside the function so that it is set once and does not refresh everytime we call the function:
        if (count_atWhichImageAreWe >= imageList.length-1) { count_atWhichImageAreWe = 0; } else { count_atWhichImageAreWe++}        
        //know the image:
        thisImg = document.createElement("img");
        thisImg.id="insertImage_"+count_atWhichImageAreWe;
        thisImg.src = imageList[count_atWhichImageAreWe];
        //document.body.append(thisImg); had to add this because not sure why the image does exist but the width and height are sometimes 0
        console.log("file 2 - add this image? src: " + thisImg.src);
        console.log("file 2 - image size apparently: " + thisImg.width + " x " + thisImg.height );

        return [count_atWhichImageAreWe+1, thisImg]; //return the count+1 since starting from 0, the image object created
    }

    function addImage(toWhichPieceNumber) {  
        img_countAndobject = presentAnImageFromList();
        imgCount = img_countAndobject[0];
        imgObj = img_countAndobject[1];

        //the imgObj.width and imgObj.height sometimes give 0. note sure if it is JavaScript error or my implementation
        //this keeps giving 0 for widht and 0 for height for "some" of the images. don't know what the bug is (object_not_available?)
         //so maybe this solution: if x and y are 0, then set it yourself:
         //this didn't work: (imgObj.width==0 || imgObj.height==0) ? (imgObj.width=50; imgObj.height=50;) : true;
         imgObj.width==0?imgObj.width=40:true;
         imgObj.height==0?imgObj.height=40:true;

         //also make that img width maybe not more than 40?
         imgObj.width>50?imgObj.width=40:true;

         details = 
         /*"<img src='https://bamshad.se/wp-content/uploads/2022/05/bamshad_se_tulips_header.jpg?id=730' width=500>"*/         
         /*"<img src='imageForIcon-tree-100x66.jpg'>"*/

         /* "<img src='"+ imgObj.src +"' style='width:" + imgObj.width + "px; height:" + imgObj.height + "px;'>"; */
         "<img src='"+ imgObj.src +"' style='width:" + imgObj.width + "px;'>";         

        createInsertPreview(toWhichPieceNumber, details);
        //update also the button itself with the image. should have a way to see what image we are working with visually, right?
        document.getElementById("button_"+toWhichPieceNumber).innerHTML =
            "<img src='"+imgObj.src +"' width='30' height='20'>Insert image ("+imgCount+")";
        //console.log("now that added in document, is right widht and height available? " + imgObj.width + " x " + imgObj.height);
    }

    function addOrderedList(toWhichPieceNumber) {        
        details =
         "<ol> \
            <li>Line 1</li> \
            <li>Line 2</li> \
            </ol> \
            <p>...";
        createInsertPreview(toWhichPieceNumber, details);
    }

    function addUnorderedList(toWhichPieceNumber) {        
        //document.getElementById("box1").innerHTML +=
        details = 
         "<ul> \
            <li>Line 1</li> \
            <li>Line 2</li> \
            </ul> \
            <p>...";
        createInsertPreview(toWhichPieceNumber, details);
    }

    function bold(toWhichPieceNumber) {
        details = "<strong>Bold text</strong><br>...";
        createInsertPreview(toWhichPieceNumber, details);
    }

    function addTextWithFont1(toWhichPieceNumber) {        
        details = "<span style='font-family: Tahoma, Geneva, Verdana, sans-serif; font-size: 10px;'>Text with font style 1</span> ..."
        createInsertPreview(toWhichPieceNumber, details);
    }

    function addTextWithFont2(toWhichPieceNumber) {
        details = "<span style='font-family: Tahoma, Geneva, Verdana, sans-serif; font-size: 15px;'>Text with font style 2</span> ..."
        createInsertPreview(toWhichPieceNumber, details);
    }

    function addTextWithFont3(toWhichPieceNumber) {        
        details = "<span style='font-family: Tahoma, Geneva, Verdana, sans-serif; font-size: 24px;'>Text with font style 3</span> ..."
        createInsertPreview(toWhichPieceNumber, details);
    }

    function cross(toWhichPieceNumber) {        
        details = "<s>Crossed text</s><br>...";
        createInsertPreview(toWhichPieceNumber, details);
    }

    function code(toWhichPieceNumber) {        
        details = "<code style='background-color: #abf782;'>Code block line 1<br>Line 2</code><br>...";
        createInsertPreview(toWhichPieceNumber, details);
    }

    function lessThanGreaterThanSignWithCode(toWhichPieceNumber) {
        details = "&lt;code &gt;Inside text&lt;/code&gt;"; //The problem here is that even if I add a space between &lt;code and &gt;
        //the browser considers it as <code> and not <code >
        //If I do take the content away from the box, the <code></code> remains in the box. (plus the <br> before the tags, OR inside the code tags)
        //sdf
        //test <code>
        //    ...
        //start here
        //But if you do enter html symbol char and the actual code, i.e. if both are in the innerHTML of the box,
        //then the output of both is in < > these chars,eg:
        //box1.innerHTML
        //"<br><code style=\"background-color: #abf782;\">Code block line 1<br>Line 2</code><br><div>...</div><div><br></div><code>Inside text</code>" 

        createInsertPreview(toWhichPieceNumber, details);
    }

    function createInsertPreview(getPieceNumber, getDetails) {
        //work on getting text preview of the html, then adding this html to the box.
        
        ////alert ("the details were:" + getDetails);        
        //showThis = getDetails.textContent || getDetails.innerText || "";
        //showThis = getDetails.textContent;
        //disable < and > in html, i.e. convert to html text equivalent.
        showThis = getDetails;
        showThis = showThis.replaceAll("<","&#60;"); //replace < sign
        //alert(showThis);
        showThis = showThis.replaceAll(">","&#62;"); //replace > sign

        //document.getElementById("boxToPreviewInsertText_HTML").innerHTML = getDetails;
        //thePreviewBox = "boxToPreviewInsertText_HTML" + "_" + pieceNumber; //note k: this is always the newest
        thePreviewBox = "boxToPreviewInsertText_HTML" + "_" + getPieceNumber; //note k: this comes from previously set function, thus can be any box
        document.getElementById(thePreviewBox).innerHTML = showThis;

        //previewOkButton = "previewOkButton" + "_" + pieceNumber; 
        previewOkButton = "previewOkButton" + "_" + getPieceNumber; 
        document.getElementById(previewOkButton).style.visibility = "visible";
    }

     function enterTheInsert(getPieceNumber) {
        //idOfPreviewBox = "boxToPreviewInsertText_HTML_" + pieceNumber; //this is auto. see note k also
        idOfPreviewBox = "boxToPreviewInsertText_HTML_" + getPieceNumber; //this is predefined
        whatToInsert = document.getElementById(idOfPreviewBox).innerHTML;
        whatToInsert = whatToInsert.replaceAll("&lt;", "<");
        whatToInsert = whatToInsert.replaceAll("&gt;", ">");
        //alert(whatToInsert);
        document.getElementById(specificBoxName_f0(getPieceNumber)).innerHTML += whatToInsert; //note: specificBoxName is function in file 0_varying_content
     }

     function resetThePreviewedHTMLBox(getPieceNumber) {
        //document.getElementById("boxToPreviewInsertText_HTML").innerHTML = null;
        thePreviewBox = "boxToPreviewInsertText_HTML" + "_" + getPieceNumber; //note pieceNumber but a predefined getPieceNumber
        thePreviewBox.innerHTML = null; //very nice. call the id directly rather than document.getElementById("id")
     }

	 function nowUpload(getPieceNumber, requestHTML) {
		//alert("pice:" + getPieceNumber);
		//alert("requestHTML?" + requestHTML); //for put link: no, for put html: yes
		//first place where requestHTML is checked
		if (requestHTML=="no") {
			//alert("requestHTML?" + requestHTML); //for put link: no, for put html: yes
			document.getElementById("uploadFilePutLink_"+getPieceNumber).style.cssText="display:inline-block;";
			//let theFile = document.getElementById("uploadFilePutLink_"+getPieceNumber).files[0];
			theFile = document.getElementById("uploadFilePutLink_"+getPieceNumber).files[0];
		} else if (requestHTML=="yes") {
			//alert("requestHTML?" + requestHTML); //for put link: no, for put html: yes
			theFile = document.getElementById("uploadFilePutHTML_"+getPieceNumber).files[0];			
		}
		//alert("theFile: " + theFile);
		
		let xhr = new XMLHttpRequest();
		
		xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				//second place where requestHTML is checked.
				if (requestHTML=="no") {
					//update the first file upload directory box and ok button
					document.getElementById("ok_to_upload_"+getPieceNumber).style.cssText = "display: inline-block; background-color:greenyellow;";
					document.getElementById("where_to_upload_"+getPieceNumber).style.cssText = "display: inline-block; background-color:greenyellow;";
				}else if (requestHTML=="yes") {
					document.getElementById("ok_to_upload2_"+getPieceNumber).style.cssText = "display: inline-block; background-color:greenyellow;";
					document.getElementById("where_to_upload2_"+getPieceNumber).style.cssText = "display: inline-block; background-color:greenyellow;";					
				}
				
				console.log(xhr.responseText);
				details = xhr.responseText;
				toWhichPieceNumber = getPieceNumber;
				createInsertPreview(toWhichPieceNumber, details);
			}
		}
		//repeated work for the two requestHTML uploads. can be checked and improved:
		formData = new FormData();		
		formData.append("fileToUpload",theFile);
		//alert("fileToUpload: " + theFile);
		//third place where requestHTML is checked.
		//the getHTML, open and send are repeated. Tried to fix the bug described above but hasn't helped
		if (requestHTML=="no") {
			formData.append("submit","submit");
			theLocation = document.getElementById("where_to_upload_"+getPieceNumber).value;
			file0_currenUploadLocation = theLocation;
			formData.append("location",theLocation);
			formData.append("getHTML",requestHTML);
			//alert("the file: " + theFile);
			//alert("location: " + theLocation);
			xhr.open("POST", './MyHTMLBox5/Serverside_FileUploadHandle.php');
			xhr.send(formData);
		} else if (requestHTML=="yes") {
			formData.append("submit","submit");
			theLocation = document.getElementById("where_to_upload2_"+getPieceNumber).value;
			file0_currenUploadLocation = theLocation;
			formData.append("location",theLocation);
			formData.append("getHTML",requestHTML);
			//alert("location: " + theLocation);
			xhr.open("POST", './MyHTMLBox5/Serverside_FileUploadHandle.php');
			xhr.send(formData);
		}
	}
	
     function uploadFile_putLink(getPieceNumber) {
        //alert ("upload file put link");
        //open file selection window (f)
		document.getElementById("uploadFilePutLink_"+getPieceNumber).click();
		document.getElementById("where_to_upload_"+getPieceNumber).style.cssText = "display: inline-block; background-color:orange;";
		document.getElementById("where_to_upload_"+getPieceNumber).value = file0_currenUploadLocation;
		document.getElementById("ok_to_upload_"+getPieceNumber).style.cssText = "display: inline-block; background-color:orange;";
		/*doesn't load because it needs time to get the file first
		document.getElementById("name_of_file_"+getPieceNumber).style.cssText = "display: inline-block; background-color:gray; border:1px solid brown;";
		document.getElementById("name_of_file_"+getPieceNumber).innerHTML = document.getElementById("uploadFilePutLink_"+getPieceNumber).files[0];*/
	}
	
     function uploadFile_putHTML(getPieceNumber) {
		document.getElementById("uploadFilePutHTML_"+getPieceNumber).click();
		document.getElementById("where_to_upload2_"+getPieceNumber).style.cssText = "display: inline-block; background-color:#F4D03F;";
		document.getElementById("where_to_upload2_"+getPieceNumber).value = file0_currenUploadLocation;
		document.getElementById("ok_to_upload2_"+getPieceNumber).style.cssText = "display: inline-block; background-color:#F4D03F;";		
     }
     //------------
	 
	 //pop up for the next two functions:
	 const popupCenter = ({url, title, w, h}) => {
		const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ?  documentElement.clientWidth : screen.width;
		const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? documentElement.clientHeight : screen.height;
		
		const systemZoom = width / window.screen.availWidth;
		const left = (width - w) / 2 / systemZoom;
		const top = (height - h) / 2 / systemZoom;
		const newWindow = window.open(url, title, 
		`
		scrollbars=yes,
		width=${(w / systemZoom)/2},
		height=${(h / systemZoom)/2},
		top=${top},
		left=${left}`
		)
		if (window.focus) newWindow.focus();
	 }
	 
	 function referenceContent_WithUpdates(getPieceNumber) {
        alert ("reference content with updates");
		
     }
     function referenceContent_CopyContent(getPieceNumber) {
        alert ("reference content copy content");
		popupCenter({url:'reference_referToAndKeep.php',title:'Select Table or Record', w:900, h:500});
     }
</script>