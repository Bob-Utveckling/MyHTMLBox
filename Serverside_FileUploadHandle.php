<?php error_reporting (E_ALL ^ E_NOTICE); ?>

<?php
//php.ini file can be updated to hold these values:
/*
;memory_limit = 128M (default)
unlimited: ;memory_limit = -1 (unlimited)
memory_limit = 2000M (BL preferred)
------
;upload_max_filesize = 90M (default)
upload_max_filesize = 2000M (BL update)
------
;post_max_size = 8M (default)
post_max_size = 0 (removed limit. BL set)
*/


include ("../settings.php");

global $placeOfInstall;
global $fileUploadLimit;

//minor corrections to directory path where the upload should be:
	function endsWith($haystack, $needle) {
		$length = strlen ( $needle );
		if (!$length) {
			return true;
		}
		return (substr ( $haystack, -$length ) === $needle);
	}
	//echo "where to upload?";
	//echo " target_dir received =" . $_POST['location'] . "<br>";
	$target_dir = isset($_POST['location']) ? $_POST['location'] : "./media";
	if (!endsWith($target_dir, "/")) { $target_dir = $target_dir."/"; }
	//NOTE: can do more checks for uploading to media folder and not to root directory

$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;


if(isset($_POST["submit"])) {
	// Check if file already exists
	/*if (file_exists($target_file)) {
	  echo "Sorry, file already exists.";
	  $uploadOk = 0;
	}*/

	// Check file size
	if ($_FILES["fileToUpload"]["size"] > $fileUploadLimit) { 
	  echo "Sorry, your file is too large.";
	  $uploadOk = 0;
	}


	// Check if $uploadOk is set to 0 by an error
	if ($uploadOk == 0) {
	  echo "Sorry, your file was not uploaded.";
	// if everything is ok, try to upload file
	} else {
	  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
		//SUCCESS
		//echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded to folder: ".$target_dir;
		
		if (substr($target_dir,0,9) == "../media/") {
			$target_dir = str_replace("../media/", "/media/", $target_dir);
		}
		$shouldShowDirToUser = $placeOfInstall.$target_dir;
		//echo "upload to: " . $shouldShowDirToUser;
		
		$fileName = basename($_FILES["fileToUpload"]["name"]);
		
		//check if html is requested and if so prepare for the return of html
		$shouldReturnHTML = $_POST['getHTML'];
		
		if ($shouldReturnHTML=="yes") {
			$fileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
			$whatHTML_toReturn = "";
			$theHTML = "";
			//echo "- " . $fileType . " file<br> \n\n";
			$array_imgFileTypes=array("png","jpg","jpeg","gif");
			$array_vidFileTypes1=array("mp4");
			$array_vidFileTypes2=array("avi");
			$array_vidFileTypes3=array("ogg");
			$array_audFileTypes1=array("mp3","ogg");
			$array_audFileTypes2=array("wav");
			if (in_array($fileType, $array_imgFileTypes)) {
				$whatHTML_toReturn="Image HTML";
			} else if (in_array($fileType, $array_vidFileTypes1)) {
				$whatHTML_toReturn="mp4 Video HTML";
			} else if (in_array($fileType, $array_vidFileTypes2)) {
				$whatHTML_toReturn="avi Video HTML";
			} else if (in_array($fileType, $array_vidFileTypes3)) {
				$whatHTML_toReturn="ogg Video HTML";		
			} else if (in_array($fileType, $array_audFileTypes1)) {
				$whatHTML_toReturn="Common Audio HTML";
			} else if (in_array($fileType, $array_audFileTypes2)) {
				$whatHTML_toReturn="Wav Audio HTML";
			} else if ($fileType=="pdf") {
				$whatHTML_toReturn="Pdf HTML";
			} else if ($fileType=="txt") {
				$whatHTML_toReturn="Text file HTML";
			} else {
				$whatHTML_toReturn="not specified";
			}
			switch ($whatHTML_toReturn) {
				case "Image HTML":
					$theHTML="Image: ".$shouldShowDirToUser."".$fileName."<br>".
						"<img src='" . $shouldShowDirToUser."".$fileName .
						"' width=200><br>";
					break;
				case "mp4 Video HTML":
					$theHTML="Video: ".$shouldShowDirToUser."".$fileName."<br>".
						"<video width='320' height='240' controls>" .
						"<source src='" . $shouldShowDirToUser."".$fileName ."'".
						"type='video/mp4'>" .
						"Your browser does not support the video tag" .
						"</video><br>";
					break;
				case "ogg Video HTML":
					$theHTML="Video: ".$shouldShowDirToUser."".$fileName."<br>".
						"<video width='320' height='240' controls>" .
						"<source src='" . $shouldShowDirToUser."".$fileName ."'".
						"type='video/ogg'>" .
						"Your browser does not support the video tag" .
						"</video><br>";
					break;
				case "avi Video HTML":
					$theHTML="Video: ".$shouldShowDirToUser."".$fileName."<br>".
						"<a href='".$shouldShowDirToUser."".$fileName. "'>"
						. $fileName
						. "</a><br>";
					break;
				case "Common Audio HTML":
					$theHTML="Audio: ".$shouldShowDirToUser."".$fileName."<br>".
						"<audio controls>" .
						"<source src='" . $shouldShowDirToUser."".$fileName ."'".
						"type='audio/ogg'>" .
						"<source src='" . $shouldShowDirToUser."".$fileName ."'".
						"type='audio/mpeg'><br>";
					break;
				case "Wav Audio HTML":
					$theHTML="Audio: ".$shouldShowDirToUser."".$fileName."<br>".
						"<a href='".$shouldShowDirToUser."".$fileName. "'>"
						. $fileName
						. "</a><br>";						
					break;
				case "Pdf HTML":
					$theHTML="Pdf file: ".$shouldShowDirToUser."".$fileName."<br>".
						"<iframe src='".$shouldShowDirToUser."".$fileName. "' " .
						"width='90%' height='500px;'>" .
						"</iframe><br>";
					break;
				case "Text file HTML":
						$theHTML="Text file: ".$shouldShowDirToUser."".$fileName."<br>".
						"<iframe src='".$shouldShowDirToUser."".$fileName. "' " .
						"width='500' height='300px;' style='border:2px solid green;'>" .
						"</iframe><br>";
					break;
				case "not specified";
				default:
					$theHTML="<a href='".$shouldShowDirToUser."".$fileName. "'>"
						. $fileName
						. "</a><br>";
			}
			echo $theHTML;		

		} else if ($shouldReturnHTML=="no") {		
			echo "<br><a href='".$shouldShowDirToUser."".$fileName. "'>" .
				$fileName
				. "</a><br>";
		}
		} else {
		echo "Sorry, there was an error uploading your file.";
	  }
	}
}
//https://www.w3schools.com/php/php_file_upload.asp

?>
