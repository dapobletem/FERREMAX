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


### Paso 1: Clonar el repositorio

- En la terminal, ejecuta el siguiente comando para clonar el repositorio:

    ```sh
    git clone https://github.com/JonjimenezF/FotoFerremax.git
    ```
