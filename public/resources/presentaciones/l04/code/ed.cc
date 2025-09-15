// Copyright (C) 2020-2023  Programacion-II

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

#include <iostream>
#include <cstdint>

class FiguraGeometrica {
public:
  FiguraGeometrica() {
    // std::cout << "Hola, soy una FG tambien\n";

    inc_count();
  }

  virtual ~FiguraGeometrica() { std::cout << "FiguraGeometrica::DESTRUCTOR\n"; }

  // Prueba a usar esta definición de dibujar en lugar de la que hay
  // mas adelante. Si se produce algún error de compilación trata de
  // resolverlo.
  // virtual void dibujar() = 0;

  // FiguraGeometrica::dibujar tiene enlace dinámico
  virtual void dibujar() { std::cout << "FiguraGeometrica::dibujar\n"; };

  static uint32_t get_count() { return count; }
  static void inc_count() { count++; }

private:
  //static uint32_t count;  // Probar a inicializar aqui.

  // O de este otro mode en C++17 o superior
  // inline static uint32_t count = 0;
};

uint32_t FiguraGeometrica::count = 0;

using FiguraGeometricaPtr = FiguraGeometrica*;

class Circulo : public FiguraGeometrica {
public:
  Circulo() { std::cout << "Hola, soy un circulo\n"; }

  virtual ~Circulo() { std::cout << "Circulo::DESTRUCTOR\n"; }

  void dibujar() { std::cout << "Circulo::dibujar\n"; }
};

class Rectangulo : public FiguraGeometrica {
public:
  Rectangulo() { std::cout << "Hola, soy un rectangulo\n"; };

  virtual ~Rectangulo() { std::cout << "Rectangulo::DESTRUCTOR\n"; }

  void dibujar() { std::cout << "Rectangulo::dibujar\n"; }
};

// Comprueba lo sencillo que es añadir una nueva clase al
// diseño. Comparalo con lo que tendrias que hacer para añadir una
// nueva clase en la versión de C no orientada a objetos.

// class Triangulo : public FiguraGeometrica {
//     public:
//         Triangulo() {
//             std::cout << "Hola, soy un triangulo\n";
//         };

//         virtual ~Triangulo() {
//             std::cout << "Triangulo::DESTRUCTOR\n";
//         }

//         void dibujar() {
//             std::cout << "Triangulo::dibujar\n";
//         }
// };

int main () {

  FiguraGeometricaPtr vfg[5] = {nullptr,nullptr,nullptr,nullptr,nullptr};

  vfg[0] = new Circulo;
  vfg[1] = new Circulo;
  vfg[2] = new Rectangulo;
  vfg[3] = new Rectangulo;

  // En vfg[4] guardamos una FiguraGeometrica o un Triangulo.
  vfg[4] = new FiguraGeometrica;
  // vfg[4] = new Triangulo;

  for (int f = 0; f < 5; f++) {
    std::cout << "vfg[" << f << "]: ";
    vfg[f]->dibujar();
  }

  for (int f = 0; f < 5; f++) {
    delete vfg[f];
  }

  std::cout << "total de FG creadas: " << FiguraGeometrica::get_count() << '\n';

  return 0;
}
