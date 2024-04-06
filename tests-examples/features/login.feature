Feature: Login en la pagina Todoly

Scenario: login exitoso
  Given navego por la pagina Todoly
  When ingreso mi username and password
  And hago Click en el boton de login
  Then me logueo con exito