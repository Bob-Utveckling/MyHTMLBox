<script>
//pieceNumber = 1;
pieceNumber = 0;
templateForBoxName = "box";
mainboxname = templateForBoxName+pieceNumber;

file0_placeHolderDivForButtonToRequestANexBox = "placeForRequestNewBox";
file0_whereShouldTheBoxesBe = "areaForBoxAndInteract";

file0_justToKnow_howManyEventListenersHaveISetup = 100; //in file 4

function specificBoxName_f0(get_a_box_number) {
	return (templateForBoxName + get_a_box_number);
}

function updateThe_mainboxname_f0() {
	mainboxname = templateForBoxName+pieceNumber;
}

f0_listOf_pieceNumbers = []; //can be used in file 4, where based on length of this
function addCurrent_pieceNumber_to_listOf_pieceNumbers_f0() {
	f0_listOf_pieceNumbers.push(pieceNumber);
	console.log("current listOf_pieceNumbers now: " + f0_listOf_pieceNumbers);
}

//file0_currenUploadLocation = "http://localhost/kdb/media/";
file0_currenUploadLocation = "../media/";
</script>