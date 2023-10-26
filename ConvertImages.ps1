# Outputs a bunch of pngs as a javascript blob for inserting into the divwalker.js script.
"let images = [`n"
(Get-ChildItem "*.png" | %{
    $data = [convert]::ToBase64String((get-content $_ -encoding byte))
    "`"data:image/png;base64, $data`""
}) -Join ",`n"
"];"