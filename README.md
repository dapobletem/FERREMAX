# Instrucciones

## Instalar Node

1. Ingresa a [Node.js](https://nodejs.org/en/download/) y descarga Node.js.
2. Selecciona LTS.
3. Selecciona el instalador de tu sistema operativo.
4. Ejecútalo.
5. Sigue las instrucciones de la instalación.
6. Valida la instalación y versión:

    ```sh
    node -v
    npm -v
    ```

## Instalar Ionic CLI

Hasta el paso anterior, solo hemos instalado Node y npm. Ahora, instalaremos Ionic CLI, que nos permitirá ejecutar comandos CLI.

1. Instalar Ionic CLI:

    En PowerShell, ejecuta:

    ```sh
    npm install -g @ionic/cli
    ```

    Con el comando anterior, instalaremos Ionic CLI de forma global en toda la sesión.

2. Comprobar la instalación:

    ```sh
    ionic --version
    ```

    Con el comando `ionic`, se mostrará información relacionada con Ionic.

3. En caso de error indicando que no se puede ejecutar script en modo administrador, ejecuta en PowerShell:

    ```sh
    Set-ExecutionPolicy Unrestricted
    ```

**Recomendaciones:** Instala la última versión disponible de Ionic. Desde la versión 5, Ionic trabaja de forma nativa con Capacitor (dejando atrás Cordova) para utilizar los plugins nativos del dispositivo móvil. Esta información es relevante a la hora de buscar tutoriales o proyectos en la nube, ya que los comandos CLI mencionados están estrechamente relacionados con el complemento instalado.

## Instalación de Git

1. Instalar Git (si no lo tienes instalado):

    - [Descargar Git](https://git-scm.com/downloads)


## Desplegar la aplicación Ferremax de manera local

Sigue estos pasos para desplegar la aplicación Ferremax en tu entorno local.

### Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Ionic CLI](https://ionicframework.com/docs/cli)

### Pasos para desplegar la aplicación

#### Paso 1: Crear una carpeta

1. Crea una carpeta con cualquier nombre en tu sistema.
2. Dentro de la carpeta, abre el terminal (haz clic derecho dentro de la carpeta y selecciona "Abrir terminal").

#### Paso 2: Clonar el repositorio

1. En la terminal, ejecuta el siguiente comando para clonar el repositorio:

    ```bash
    git clone https://github.com/dapobletem/FERREMAX.git
    ```

#### Paso 3: Ingresar a la carpeta clonada

1. En la terminal, ejecuta el siguiente comando para acceder a la carpeta clonada:

    ```bash
    cd FERREMAX
    ```

#### Paso 4: Instalar las dependencias

1. En la terminal, ejecuta el siguiente comando para descargar las dependencias:

    ```bash
    npm install
    ```

#### Paso 5: Ejecutar la aplicación

1. En la terminal, ejecuta el siguiente comando para iniciar el servidor local:

    ```bash
    ionic serve
    ```

    O bien, puedes usar el comando abreviado:

    ```bash
    ionic s
    ```

Ejecutar las pruebas unitarias

Sigue estos pasos para ejecutar las pruebas unitarias de la aplicación:

1. Asegúrate de estar en la carpeta raíz del proyecto `FERREMAX`.
2. En la terminal, ejecuta el siguiente comando para ejecutar las pruebas unitarias:

    ```bash
    ng test
    ```

---
