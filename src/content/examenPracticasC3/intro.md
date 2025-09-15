---
title: "Enunciado examen de prácticas C3 2025"
description: "Enunciado examen de prácticas C3 2025"
order: 0
---
Para facilitarte el estudio y la preparación para el examen de prácticas de la asignatura, aquí podrás encontrar el enunciado del examen de prácticas de la convocatoria C3 de 2025.
Te recomendamos que intentes hacerlo desde 0 para simular un examen de prácticas y también para ver un ejemplo de lo que podrías encontrarte en el examen de prácticas de la asignatura.




## EXAMEN DE PRÁCTICAS - 5 de junio de 2025 - Convocatoria C3

- En esta sección encontrarás el enunciado del examen de prácticas que tienes que implementar y entregar en el [servidor de prácticas del DLSI](https://pracdlsi.dlsi.ua.es), tal y como has hecho con las prácticas durante el curso.
- Entregarás un único archivo comprimido `irp2-c3.tgz` que contendrá ambos ejercicios resueltos y organizados en carpetas. Cuando te descargues los archivos de partida, encontrarás ya la organización en carpetas que necesitas.
- El examen consta de **dos ejercicios** prácticos que tienes que resolver durante dos horas. Gestiona tu tiempo como consideres, aunque ten en cuenta que el ejercicio 1 es más largo que el ejercicio 2.

- Recuerda reservar al menos 5 minutos al final del examen para realizar la entrega. Igualmente, se recomienda que cuando termines un ejercicio, hagas una entrega. **Puedes entregar tantas veces como quieras** dentro del plazo establecido. **Solo se valorará la última entrega realizada**.

- Si se detecta que el código entregado ha sido plagiado o generado con inteligencia artificial se procederá a actuar según el artículo 14 del Reglamento para la Evaluación de los Aprendizajes de la Universidad de Alicante (BOUA 9/12/2015).

- Deberás iniciar sesión en el Sistema Operativo **Ubuntu** en el ordenador del laboratorio. Este sistema tiene la configuración necesaria para resolver los ejercicios.

- Un error de compilación/enlace implicará un cero en el ejercicio donde se produzca, por tanto asegúrate de que tu código compila correctamente aunque determinadas funciones no hagan nada o no lo hagan bien.

### Archivos de partida

- Aquí puedes descargar el [archivo comprimido con los archivos de partida](../../resources/c3/irp2-c3.tgz) con los que puedes empezar a trabajar.
- Incluye:
    - Un único **Makefile** que te permitirá compilar y ejecutar tu código de las dos prácticas por separado. Tienes las siguientes opciones:
    - Programas principales de ejemplo para cada uno de los ejercicios. La salida que se espera obtener la puedes encontrar en el enunciado de cada ejercicio.

| Comando        | Descripción                                                                                  |
|----------------|----------------------------------------------------------------------------------------------|
| `make e1`      | Compila y enlaza el código del **ejercicio 1**, generando el ejecutable para tal ejercicio.  |
| `make e2`      | Compila y enlaza el código del **ejercicio 2**, generando el ejecutable para tal ejercicio.  |
| `make run_e1`  | Ejecuta el primer ejercicio (`e1`).                                                          |
| `make run_e2`  | Ejecuta el segundo ejercicio (`e2`).                                                         |
| `make runv_e1` | Ejecuta el primer ejercicio (`e1`) activando **Valgrind** para detectar fugas de memoria.    |
| `make runv_e2` | Ejecuta el segundo ejercicio (`e2`) activando **Valgrind** para detectar fugas de memoria.   |
| `make tgz`     | Genera un archivo comprimido `irp2-c3.tgz` con los archivos necesarios para la entrega.      |
| `make clean`   | Elimina los archivos compilados de los dos ejercicios (ejecutables, objetos, etc.).          |

- La instrucción `make tgz` creará el archivo comprimido `irp2-c3.tgz` en la carpeta donde se sitúa la carpeta `irp2-c3`, no dentro de ella. 


### Entrega

- La entrega se realiza a través del servidor del DLSI: [https://pracdlsi.dlsi.ua.es](https://pracdlsi.dlsi.ua.es/index.cgi).

- Debes entregar un archivo `irp2-c3.tgz` conteniendo la siguiente estructura de archivos:
```text
irp2-c3.tgz
└── irp2-c3
    ├── e1
    |   ├── diagonalrobot.cc
    |   ├── diagonalrobot.h
    |   ├── linearrobot.cc
    |   ├── linearrobot.h
    |   ├── robot.cc
    |   ├── robot.h
    |   ├── robotmanager.cc
    |   └── robotmanager.h 
    |    
    └── e2
        ├── box.h
        └── box.tcc
```
-   El archivo comprimido que tienes que entregar será `irp2-c3.tgz` y lo puedes crear de dos formas. 
    -   Utilizando la herramienta `make` con el archivo `Makefile` que tienes en los archivos de partida con la instrucción: `make tgz`.
    -   Situandote manualmente en la carpeta padre de tu carpeta `irp2-c3` y tecleando: 
        - `tar cfz irp2-c3.tgz irp2-c3`

-   Una vez comprimido, ábrelo y asegúrate de que tiene la estructura que se pide. Si el servidor de entrega no detecta alguno de los archivos, seguramente sea porque no estás entregando el archivo comprimido con la estructura que se pide. En este caso, revisa el nombre de la carpeta que contiene y el nombre de los ficheros que entregas.



## Ejercicios

- **Ejercicio 1**: Aquí tienes el [enunciado del ejercicio 1](../examen/c3e1).
- **Ejercicio 2**: Aquí tienes el [enunciado del ejercicio 2](../examen/c3e2).


### Requisitos
Requisitos que tiene que cumplir este trabajo práctico para
considerarse válido y ser evaluado (si no se cumple alguno de los
requisitos la calificación será **cero**):

-   El archivo entregado se llama `irp2-c3.tgz` (todo en minúsculas). Dicho archivo debe contener
    una carpeta llamada `irp2-c3` que contendrá dos carpetas: `e1` y `e2`. Dentro de cada una de ellas estarán los ficheros que debes entregar para los ejercicios 1 y 2 respectivamente, tal y como se muestra en la estructura vista antes. Si entregas archivos adicionales, no pasa nada. El corrector solo utilizará los archivos solicitados.

-   Las clases, métodos y funciones implementados deben tener los nombres exactos que se
    indican en el enunciado (respetando en todo caso el uso de mayúsculas
    y minúsculas). También es imprescindible **respetar estrictamente los textos y los formatos de salida** que se indican en este enunciado.

-   Al principio de todos los ficheros fuente (\`.h' y \`.cc') entregados
    y escritos por ti se **debe incluir un comentario con el nombre y el NIF** (o equivalente) de la persona que entrega la práctica, como en
    el siguiente ejemplo. Ponlo exactamente igual, cambiando los datos por los tuyos.
    ```text
    // NIF: 12345678-Z
    // NOMBRE: GARCIA PEREZ, LAURA
    ```

-   Un error de compilación/enlace implicará un cero en esa parte de la
    práctica.

-   Se utilizará **Valgrind** para comprobar que no haya fugas de memoria en tu programa.
    Puedes instalarlo y probarlo antes de realizar la entrega para asegurarte de corregir
    posibles errores relacionados con la gestión de la memoria.

-   **Lugar y fecha de entrega :** `La entregas se realiza
      siempre en (y sólo en)` [https://pracdlsi.dlsi.ua.es](https://pracdlsi.dlsi.ua.es/index.cgi) en las fechas y
    condiciones allí publicadas. Puedes entregar los ejercicios tantas
    veces como quieras, sólo se corregirá la última entrega (las
    anteriores no se borran). El usuario y contraseña para entregar
    prácticas es el mismo que se utiliza en UACloud.
