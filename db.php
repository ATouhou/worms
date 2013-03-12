<?
	$req_dump = print_r($_REQUEST, TRUE);
	$fp = fopen('request.log', 'a');
	fwrite($fp, $req_dump);
	fclose($fp);

	if ( array_key_exists( 'action', $_REQUEST) && 
		array_key_exists( 'table_name', $_REQUEST) &&
		array_key_exists( 'rows', $_REQUEST)
		) {
		$action = $_REQUEST['action'];
		$table_name = $_REQUEST['table_name'];
		$rows = $_REQUEST['rows'];
		if ( $action == 'save' ) {
			if ( file_put_contents ( "db/$table_name.txt", $rows)) {
				print "Entry saved.";
				exit( 0);
			} else { 
				print "Entry NOT saved!"; 
				exit( 1); 
			}
		}

	} else {
?>
<html><head><title>WORMS</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head><body>
<h1>DBs and their contents</h1>
<pre>
<?
		$files = glob('db/*.txt');
		foreach ( $files as $file) {
    	#printf("%1\$s - %2\$s - %3\$s<br>",
    	printf("%1\$s - %2\$s\n----\n%3\$sEOF\n----\n\n", 
            date('F d Y, H:i:s', filemtime($file)),
            $file, // or basename($file) for just the filename w\out path
						file_get_contents( $file)
						);
		}
	}
?>
