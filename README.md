# Práctica CRUD de Tareas con Backend

El proyecto consiste en una aplicación backend para gestionar tareas, que nos va a permitir realizar operaciones __*CRUD*__, es decir:
- **Crear**
- **Leer**
- **Actualizar**
- **Eliminar**

## Librerias necesarias para que el proyecto funcione:
 - `Express`
 - `mySQL2`

## Los pasos para ejecutar el proyecto localmente son:
**A través de git bash:**

 **1-** Puede clonar este repositorio con:
 ```bash
 $git clone https://github.com/juanq348/crud-tasks-backend
 ```
 **2-** Dirigete a donde hayas clonado el repositorio usando:
 ```bash
 $git cd Ubicación de repositorio (puedes arrastrar la carpeta a la ventana de Git Bash)
 ```
 
 **3-** Si quieres revisar el código y probarlo por ti mismo, puedes abrir la aplicación Visual Studio Code directamente con git bash abierto escribiendo lo siguiente:
 ```bash
 $ code . 
 ```
 O simplemente puedes abrir la carpeta a través de Visual Studio Code.
 
 **4-** Ahora para que el proyecto pueda funcionar, debes abrir la terminal para ingresar el siguiente comando e iniciar el servidor:
 ```bash
 npm init -y
 ```

 **5-** Una vez iniciado el servidor, necesitaras instalar las siguiente dependencias que son __*express*__ y __*mySQL2*__:
 ```bash
 npm install express
 npm install mysql2
 ```
 **6-** Necesitaras conectarte con una base de datos, así que vas a tener que subir la que esta en el repositorio a la plataforma PHPMyAdmin para que el proyecto pueda funcionar correctamente.
 
 **7-** Como mencione anteriormente, se pueden realizar las operaciones __*CRUD*__ las cuáles son:
 - `Crear`: Vas a poder crear tareas ingresando su título, descripción y si esta completado o no.
- `Leer`: Te va a permitir consultar las tareas que se encuentran en la base de datos **(por ID o todas)**.
- `Actualizar`: Vas a poder editar el título, la descripción y estado de una tarea ya existente.
- `Eliminar`: Vas a poder eliminar una tarea existente.
