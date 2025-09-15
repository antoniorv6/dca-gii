---
title: "Bibliografía general"
description: "Optional description"
---

## Enlaces de utilidad general

### Editores/IDEs, tipos de letra, esquemas de colores

1. [Lite-xl](https://lite-xl.com/)
2. [VSCode](https://code.visualstudio.com/). Si te gusta la privacidad deberías echar un vistazo a [vscodium](https://github.com/VSCodium/vscodium).
3. [SublimeText](https://www.sublimetext.com/)
4. [Code::Blocks](http://www.codeblocks.org/)
5. [Geany](https://www.geany.org/)
6. [Gnome Builder](https://wiki.gnome.org/Apps/Builder)
7. [GNU Emacs](https://www.gnu.org/software/emacs/)
   - Existen distribuciones de Emacs que facilitan su configuración, las dos más conocidas son [Spacemacs](http://spacemacs.org/) y [Doom-Emacs](https://github.com/hlissner/doom-emacs).
   - Aquí tienes unos tutoriales para principiantes: [1](https://david.rothlis.net/emacs/howtolearn.html), [2](https://github.com/myTerminal/world-of-emacs) y [3](https://www.juniordeveloperdiaries.com/emacs-intro/).
   - Y [aquí](http://wenshanren.org/?p=418) un listado de usuarios famosos en el ámbito de la informática que usan Emacs.

8. [Vi](https://es.wikipedia.org/wiki/Vi) es, junto a Emacs, otro clásico editor de textos de los S.O. de la familia UNIX. Con el tiempo han ido apareciendo versiones mejoradas del mismo como [Vim](https://www.vim.org/) y [Neovim](https://neovim.io/).

9. [Cuida tus ojos](https://protesilaos.com/codelog/2022-08-17-re-protect-eyes-coding/), para programar es mejor emplear tipos de letra [mono-espaciados](https://en.wikipedia.org/wiki/Monospaced_font) en lugar de proporcionales.
   - Usa un tamaño de letra apropiado, evita tamaños muy pequeños.
   - Aquí tienes ejemplos de tipos de [letra](https://www.slant.co/topics/67/~best-programming-fonts) [apropiados](http://www.lowing.org/fonts/) para [programar](https://www.fossmint.com/best-programming-fonts/).
   - Y [aquí](https://www.wisdomandwonder.com/text/12298/choosing-a-monospace-font-2019-march) algunos criterios para elegir un tipo de letra mono-espaciado.
   - Elige un [esquema de color](https://www.slant.co/topics/358/~best-color-themes-for-text-editors) que no te produzca fatiga visual. Dos de los esquemas de colores que más tratan de conseguir esto son:
     1. [Solarized](https://ethanschoonover.com/solarized/)
     2. [Modus Themes](https://protesilaos.com/modus-themes/)

10. [Unicode y UTF-8/16/32](http://xahlee.info/emacs/emacs/unicode_basics.html). [Aquí](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/), [aquí](https://nedbatchelder.com/text/unipain.html) y [aquí](http://lucumr.pocoo.org/2014/5/12/everything-about-unicode/) tienes más información. La página [web del proyecto](https://home.unicode.org/). Si vas a usar Unicode desde programas consulta [estas](http://site.icu-project.org/) [bibliotecas](https://developer.gnome.org/glib/stable/glib-Unicode-Manipulation.html).

## Enlaces relacionados con la asignatura

### Despliegue y organización de equipos

1. [Deployment Tips](http://www.ambysoft.com/essays/deploymentTips.html)
2. [Despliegue de Software](http://en.wikipedia.org/wiki/Software_deployment)
3. [Software Development and Deployment](http://archive.cs.st-andrews.ac.uk/STSE-Handbook/SoftwareDevAndDeploy/)
4. [Organizing for Successful Software Development](http://www.informit.com/articles/article.aspx?p=23953)
5. [Rolling stable kernels](https://lwn.net/Articles/871989/) charla impartida por Sasha Levin, uno de los mantenedores de las versiones estables del núcleo Linux.

### Construcción de proyectos de forma eficiente

1. [Distcc](https://github.com/distcc/distcc). [Distcc en la wikipedia](http://en.wikipedia.org/wiki/Distcc).
2. [Ccache](http://ccache.samba.org/)
3. Una pequeña ayuda para escribir Makefiles no-recursivos: [subdirmk](https://diziet.dreamwidth.org/3604.html).
4. [Ninja](http://neugierig.org/software/chromium/notes/2011/02/ninja.html)
5. [Make](http://www.gnu.org/software/make/manual/make.html)

### Seguimiento de fallos

1. [Trac](https://trac.edgewall.org/). [Trac en la wikipedia](https://es.wikipedia.org/wiki/Trac).
2. [Bugzilla](http://www.bugzilla.org/)

### Empaquetado

1. [How To Package For Debian](http://wiki.debian.org/HowToPackageForDebian)
2. [Debian maintainer guide: build](http://www.debian.org/doc/manuals/maint-guide/build.en.html)
3. [Cómo crear paquetes RPM](http://fedoraproject.org/wiki/How_to_create_an_RPM_package/es)

### Internacionalización

1. [Gettext en la wikipedia](http://es.wikipedia.org/wiki/Gettext). [Página del proyecto gettext](http://www.gnu.org/software/gettext/).
2. [How Translation Works in GNOME](https://lkmandy.github.io/lkmandy.github.io/blog/2020/how-translation-works-in-gnome/)

### Control de versiones

#### Git

1. [How to Learn Git in Simple Words](https://towardsdatascience.com/how-to-learn-git-in-simple-words-263618071dd8)
2. [Git](http://git-scm.com/)
3. [Libro Pro Git](http://git-scm.com/book)
4. [Gitmagic](http://www-cs-students.stanford.edu/~blynn/gitmagic/)
5. [Gitready](http://gitready.com/)
6. [Gitflow: A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
7. [Tutorial sobre Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).
8. Git no está pensado para gestionar ficheros *grandes*. Existen soluciones que te pueden ayudar en este sentido, p.e.: [Git LFS](https://git-lfs.github.com/) y [Git annex](https://git-annex.branchable.com/).
9. Ordenes [de bajo nivel (*plumbing*)](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) en git.
10. Git soporta el uso de [submódulos](https://git-scm.com/book/en/v2/Git-Tools-Submodules).
11. Si quieres conocer más sobre cómo git guarda su información entonces consulta estos artículos:
    - [Git's database internals I: packed object store](https://github.blog/2022-08-29-gits-database-internals-i-packed-object-store/)
    - [Git's database internals II: commit history queries](https://github.blog/2022-08-30-gits-database-internals-ii-commit-history-queries/)
    - [Git's database internals III: file history queries](https://github.blog/2022-08-31-gits-database-internals-iii-file-history-queries/)

#### Otros

1. [Monotone](http://www.monotone.ca/)
2. [Mercurial](http://mercurial.selenic.com/). [Mercurial en la wikipedia](http://en.wikipedia.org/wiki/Mercurial).
3. [Darcs](http://darcs.net/). [Darcs en la wikipedia](http://en.wikipedia.org/wiki/Darcs).

### Tests

1. [Boost Tests](https://www.boost.org/doc/libs/release/libs/test/)
2. [CppUnit](https://freedesktop.org/wiki/Software/cppunit/)
3. [JUnit en la wikipedia](http://es.wikipedia.org/wiki/JUnit). [JUnit](http://junit.org/).
4. [GLib Testing](https://developer.gnome.org/glib/stable/glib-Testing.html)

### Configuración de proyectos

1. [Autoconf](http://www.gnu.org/software/autoconf/manual/autoconf.html)
2. [Automake](https://www.gnu.org/software/automake/)
3. [CMake](https://www.cmake.org):
   - [CMake tutorial](https://www.cmake.org/cmake/help/cmake_tutorial.html)
   - [More Modern CMake](https://meetingcpp.com/mcpp/slides/2018/MoreModernCMake.pdf)
   - [How to create slides about CMake with CMake](https://meetingcpp.com/mcpp/slides/2018/How%20to%20create%20slides%20about%20CMake%20with%20CMake.pdf)
   - [Learn CMake's Scripting Language in 15 Minutes](https://preshing.com/20170522/learn-cmakes-scripting-language-in-15-minutes/)
4. [Meson: configuración y construcción de proyectos](http://mesonbuild.com/)

### Diseño por contrato

1. [Design by contract](http://en.wikipedia.org/wiki/Design_by_contract)
2. [Diseño por contrato en el lenguaje D](https://dlang.org/spec/contracts.html)
3. [Diseño por contrato en el lenguaje Vala](https://live.gnome.org/Vala/Tutorial#Assertions_and_Contract_Programming)
4. [Diseño por contrato en C#](https://docs.microsoft.com/en-us/dotnet/framework/debug-trace-profile/code-contracts)

### Varios

1. [Doxygen: generador de documentación a partir de comentarios](http://doxygen.nl/)
2. [Learn X in Y minutes](https://learnxinyminutes.com/)
3. [Computer Languages History](https://www.levenez.com/lang/)
4. [Uncrustify: Source Code Beautifier](http://uncrustify.sourceforge.net/)
5. [C++ on Mars: Incorporating C++ into Mars Rover Flight Software](https://www.youtube.com/watch?v=3SdSKZFoUa8&t=1s). Destacar los minutos 4:27 (tests), 1:09:00 (valgrind/purify) y 1:10:07 (equipos de desarrollo y test separados).