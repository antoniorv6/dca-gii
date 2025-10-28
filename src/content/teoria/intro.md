---
title: "Introducción a la teoría"
description: "Programación-II. Teoría."
---

En esta sección se lista el temario de la asignatura con un enlace individual para cada uno y un breve resumen con su contenido. Dispones también de un menú a la izquierda para navegar por los diferentes temas y otro a la derecha con un mapa de la página que estás visualizando en cada momento.

## <span class="section-num">1.</span> Consejos.

-   Lo que tienes a continuación son las transparencias empleadas en
    clase de teoría.
-   En clase se amplía de palabra el contenido que tienes en ellas.
-   Es _importante que no te limites a escuchar y que tomes apuntes y
    preguntes dudas_ sobre lo que se explica. Cualquiera que te surja,
    por simple que te parezca.
-   Tienes la [guía docente](https://cvnet.cpd.ua.es/Guia-Docente/GuiaDocente/Index?wlengua=es&wcodasi=33709&scaca=2024-25) de la asignatura para más información sobre la asignatura.


## <span class="section-num">2.</span> Temario.


### [Tema 0: Presentación de la asignatura.](/dca-gii/diapositivas/teoria/01-intro.html)
### [Tema 1: Estructura de equipos de desarrollo.](/dca-gii/teoria/l01/)
 - Introducción al desarrollo _software_ colaborativo.
 - El concepto de **ortogonalidad**.
 - Estructuras principales de un equipo de desarrollo:
    - Jerárquica.
    - Descentralizada democrática.
    - Descentralizada controlada.
    - Centralizada controlada.
- Dictador Benevolente de por Vida (BDFL)

### [Tema 2: Despliegue e instalación.](/dca-gii/teoria/l02/)

- Fundamentos de la entrega de _software_.
    - Versión _estable_ vs Última versión.
    - Irrupción del CI/CD.
- Gestión de ramas en un proyecto _software_.
    - Git flow
    - GitHub Flow
    - _Trunk-based development_
    - Ship/Show/Ask
- Versionado de _software_
    - Estructura típica del versionado de _software_.
    - Ejemplos de aplicaciones reales.
    - Versionado semántico.

### [Tema 3: Bugtracking](/dca-gii/teoria/l03/)

- Fundamentos del _bugtracking_.
- Etiquetado de _bugs_.
- Ciclo de vida de un _bug_.
- Aplicaciones de _bugtracking_.


### [Tema 4: Compilación de grandes proyectos](/dca-gii/teoria/l04/)

- ¿Por qué no compilamos nuestros proyectos a mano todo el rato?
- Jerarquía de construcción de programas
- `make`
- `ccache`
- `ninja`

### [Tema 5: Sistemas de paquetes](/dca-gii/teoria/l05/)

- Teoría de empaquetado de aplicaciones
- Construyendo empaquetados con `tar`
- Empaquetado e instalación de aplicaciones en `.deb`
- Empaquetado automático con GitHub Actions (Iniciando _CD_).