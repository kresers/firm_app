@echo off
rem npm install -g @angular/cli  // d�comment� pour install� angular
SET title=
set /p title=Name of component :
ng generate component %title%
pause