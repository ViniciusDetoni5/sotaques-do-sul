@echo off
REM ============================================================
REM  Sotaques do Sul - abre a aula num servidor local (http)
REM  para que os videos do YouTube toquem dentro do site.
REM ============================================================
cd /d "%~dp0"
echo Iniciando servidor local em http://localhost:8000 ...
echo (Deixe esta janela aberta durante a aula. Feche para encerrar.)
start "" http://localhost:8000/index.html
python -m http.server 8000
