<script>
	function create_or_update_the_submission_form(formAction,tableNameOnServerSide, rowIdOnServer) {
		file0with_form_inputBoxesSubmission = document.createElement("form");
		file0with_form_inputBoxesSubmission.id = "form_for_inputBoxes";
		file0with_form_inputBoxesSubmission.method = "POST";
		file0with_form_inputBoxesSubmission.action = formAction;
		document.body.append(file0with_form_inputBoxesSubmission);
		
		hiddenInputTableName = document.createElement("input");
		hiddenInputTableName.type = "hidden";
		hiddenInputTableName.name = "tableName";
		hiddenInputTableName.value = tableNameOnServerSide;
		
		hiddenInputRowId = document.createElement("input");
		hiddenInputRowId.type = "hidden";
		hiddenInputRowId.name = "rowId";
		hiddenInputRowId.value = rowIdOnServer;
		
		file0with_form_inputBoxesSubmission.appendChild(hiddenInputTableName);
		file0with_form_inputBoxesSubmission.appendChild(hiddenInputRowId);
		
		
		file0with_form_inputBoxesSubmission.addEventListener("submit", function() {
			console.log("*** submit to: " + formAction);
		})
		console.log("file0_with... created /updated form for submission. form id: "+file0with_form_inputBoxesSubmission.id+" \nform action: "+file0with_form_inputBoxesSubmission.action);
	}
</script>