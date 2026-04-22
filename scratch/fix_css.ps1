$f = 'd:\astology_new\src\index.css'
$c = [System.IO.File]::ReadAllText($f)
$reg = '/\* Unified Celestial Dark Theme \*/[\s\S]*?body \{[\s\S]*?background-color: var\(--cosmos\);[\s\S]*?\}'
$rep = "/* Unified Traditional Saffron Theme */
header, header.scrolled, .top-bar {
  background: #fffcf6 !important;
  border-bottom: 2px solid rgba(183, 121, 50, 0.2) !important;
}

.nav-item-link span, .name-devanagari, .lang-bar span, .top-bar-meta {
  color: #3d3328 !important;
}

.name-english {
  color: #8b5a2b !important;
}"
$c = [regex]::Replace($c, $reg, $rep)
[System.IO.File]::WriteAllText($f, $c)
