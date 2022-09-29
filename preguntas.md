### ¿Qué diferencias hay entre bases de datos relacionales y no relacionales?

Una base de datos relacional usa un modelo de datos de tablas que se pueden relacionar entre si, a diferencia de una bd no relacional que puede usar distintos modelos de datos como documentos , clave - valor.
La diferencia mas notable entre SQL y noSQL es que las bd noSQL se pueden escalar mas facilmente y tienen un mejor rendimiento(necesitan menos recursos de hardware).

### ¿Qué diferencias hay entre JWT y Session Cookie, qué ventajas da cada uno?

La autenticación basada en cookies tiene un estado (es stateful), Al iniciar sesión, luego que un usuario envía sus credenciales (y estas se validan), el servidor registra datos (con el fin de recordar que el usuario se ha identificado correctamente). Estos datos que se registran en el backend, en correspondencia con el identificador de sesión, es lo que se conoce como estado.
La autenticación basada en tokens no tiene estado (es stateless), El servidor ya no guarda información de qué usuarios están conectados o qué tokens se han emitido. Esto es así porque cada peticion realizada al servidor va acompañada de un token, y el servidor verifica la autenticidad de la solicitud basándose únicamente en el token.

En las aplicaciones web , los JWT se utilizan mas ampliamente, ya que escalan mejor que los basados en cookies de sesión porque los tokens se almacenan en el lado del cliente mientras que la sesión utiliza la memoria del servidor para almacenar los datos del usuario, y esto podría ser un problema cuando un gran cantidad de usuarios están accediendo a la aplicación a la vez.

### ¿Para qué sirve el protocolo OAuth?

OAuth es un estandar abierto para autorizacion, fue diseñado para que un sitio web o aplicacion acceda a recursos alojados por otras aplicaciones web en nombre de un usuario, sin tener que compartir informacion sensible o una identidad, OAuth 2.0 le facilita al usuario no tener que estar registrandose en apps completando con sus datos el registro varias veces, con OAuth lo tiene que hacer solo una vez, como por ej. google, se utiliza la cuenta de google para registrarse donde el usuario quiera, sin tener que estar repitiendo los datos.
OAuth tambien ayuda a los desarrolladores, ya que no tienen que escribir codigo de cero para manejar la autorizacion de un usuario, con solo implementar OAuth, este se encarga de la autorizacion.
