/*
 * Copyright (C) 2020-2022  Programacion-II
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include <stdio.h>
#include <stdlib.h>

/*
 * Trata de añadir una 'clase' Triangulo a este ejemplo. Compara todos
 * los pasos a realizar con los que tendrias que hacer en la versión
 * orientada a objetos en C++
 */

enum TipoFigura { FG, CIRCULO, RECTANGULO };

typedef struct FiguraGeometrica {
    enum TipoFigura t;
} FiguraGeometrica;

typedef struct Circulo {
    enum TipoFigura t;
} Circulo;

typedef struct Rectangulo {
    enum TipoFigura t;
} Rectangulo;

typedef FiguraGeometrica* FiguraGeometricaPtr;
typedef Circulo* CirculoPtr;
typedef Rectangulo* RectanguloPtr;

void FiguraGeometrica_dibujar(FiguraGeometricaPtr this) {
    printf("FiguraGeometrica::dibujar\n");
}

void Circulo_dibujar(CirculoPtr this) {
    printf("Circulo::dibujar\n");
}

void Rectangulo_dibujar(RectanguloPtr this) {
    printf("Rectangulo::dibujar\n");
}

int main(int argc, char *argv[]) {
    FiguraGeometricaPtr vfg[5] = {NULL, NULL, NULL, NULL, NULL};

    vfg[0] = malloc (sizeof (Circulo));
    vfg[0]->t = CIRCULO;

    vfg[1] = malloc (sizeof (Circulo));
    vfg[1]->t = CIRCULO;

    vfg[2] = malloc (sizeof (Rectangulo));
    vfg[2]->t = RECTANGULO;

    vfg[3] = malloc (sizeof (Rectangulo));
    vfg[3]->t = RECTANGULO;

    vfg[4] = malloc (sizeof (Circulo));
    vfg[4]->t = CIRCULO;

    for (int f = 0; f < 5; f++) {
        switch (vfg[f]->t) {
            case FG:
                FiguraGeometrica_dibujar(vfg[f]);
              break;
            case CIRCULO:
                Circulo_dibujar((CirculoPtr) vfg[f]);
                break;
            case RECTANGULO:
                Rectangulo_dibujar((RectanguloPtr) vfg[f]);
                break;
        }
    }

    for (int f = 0; f < 5; f++) {
        free(vfg[f]);
    }

    return 0;
}
