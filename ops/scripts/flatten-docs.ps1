$ErrorActionPreference = "Stop"

$src = Join-Path "docs" "docs"
$dst = "docs"

if (!(Test-Path $src)) {
  Write-Host "ERROR: $src does not exist."
  exit 1
}

Write-Host "Flattening $src -> $dst"

Get-ChildItem -Force $src | ForEach-Object {
  $from = Join-Path $src $_.Name
  $to   = Join-Path $dst $_.Name
  Write-Host "git mv -- $from $to"
  git mv -- $from $to
}

# Remove nested folder if empty
if (-not (Get-ChildItem -Force $src | Select-Object -First 1)) {
  Remove-Item -Force $src
  Write-Host "Removed empty folder: $src"
} else {
  Write-Host "WARNING: $src not empty after move."
}

Write-Host "Done."
