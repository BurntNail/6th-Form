$base_path = ".\"
$eqe = "english-quotes.exe"
$zip = "GUI_Windows.zip"

Remove-Item ($base_path + $eqe)

Expand-Archive -LiteralPath ($base_path + $zip) -DestinationPath $base_path
Remove-Item ($base_path + $zip)

Rename-Item -Path ($base_path + "english_quotes_egui.exe") -NewName ($base_path + $eqe)