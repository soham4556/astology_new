Get-ChildItem -Path d:\astology_new\src -Filter *.jsx -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content.Replace('7030806080', '9801165965')
    $content = $content.Replace('70308 06080', '98011 65965')
    $content = $content.Replace('contact@jaimatadiastrology.in', 'acharyaratishk@gmail.com')
    Set-Content $_.FullName $content
}
