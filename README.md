### Versión de Node.JS

v12.18.2

### Instalación

```js
$ npm install
```

### Lanzar tests unitarios

```js
$ npm install -g mocha
$ npm run test
```

### Despliegue

```js
$ sls deploy
```

### Rutas habilitadas

Las rutas marcadas con la palabra "autenticar" necesitan la cabecera de autorización tipo "Basic" para poder acceder a los recursos, donde:
Username: Será el correo ingresado al registrar usuario
Password: Será la clave ingresada al registrar usuario

```http
GET - /dev/greet
POST - /dev/users
GET - /dev/users/{email} <autenticar>
GET - /dev/vehicles/{id} <autenticar>
```

### Datos de Nuevo Usuario (post - /dev/users)

```json
{
  "correo": "jldamians@gmail.com",
  "nombres": "Jose Luis Damian Saavedra",
  "clave": "+-*123456+-*",
  "facebook": "https://www.facebook.com/jldamians"
}
```
