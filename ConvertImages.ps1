foreach($x in Get-ChildItem "*.png")
{
    $data = [convert]::ToBase64String((get-content $x -encoding byte))
    $data | Out-File -FilePath "x64_$($x.Name)".TrimEnd(".png")
}