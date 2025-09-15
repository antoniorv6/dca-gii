#include <cstdint>
#include <iostream>
#include <string>

using namespace std;

class Vehicle
{
public:
  Vehicle(const string& br);
  virtual ~Vehicle();

  static uint32_t get_number_of_vehicles();
  const string &brand_name();
  void set_brand_name(const string &brand);

  void show_vehicle_clount_address();

private:
  string brand;
  static uint32_t vehicle_count;
};

// -- Vehicle methods: ----------------------------------------------------

// Reserve space for class variable.
uint32_t Vehicle::vehicle_count = 0;

Vehicle::Vehicle(const string& br) {
  brand = br;
  vehicle_count++;

  cout << "Created vehicle: " << brand << " [" << this << "]\n";
}

Vehicle::~Vehicle() {
  cout << "Destroyed vehicle: " << brand << " [" << this << "]\n";
}

uint32_t Vehicle::get_number_of_vehicles() {
  // Prueba a descomentar esta linea:
  // cout << "Asking number of vehicles for this = " << this << '\n';
  return vehicle_count;
}

const string &Vehicle::brand_name() {
  cout << "Asking for brand-name of [" << this << "]\n";

  // return brand;
  //     ^^^^^ is a shorthand for:
  return this->brand;
}

void Vehicle::set_brand_name(const string &brand) {
  // this-> is mandatory here.
  this->brand = brand;
}

void Vehicle::show_vehicle_clount_address() {
  cout << "For vehicle " << this->brand
  << " its vehicle_count address is @: ["
  << &Vehicle::vehicle_count << "]\n";
}

// -- Main: ---------------------------------------------------------------

int main(int argc, char *argv[])
{
  Vehicle s("Seat"), a("Audi"), m("Mercedes");

  cout << "\nTotal vehicles created-a: "
  << Vehicle::get_number_of_vehicles()
  << '\n';

  // Works too in C++!
  cout << "Total vehicles created-b: "
  << s.get_number_of_vehicles()
  << "\n\n";

  // Getting brands:
  cout << "s: " << s.brand_name () << '\n';
  cout << "a: " << a.brand_name () << '\n';
  cout << "m: " << m.brand_name () << '\n';
  cout << "\n";

  // Change seat's brand:
  s.set_brand_name("Cupra");
  cout << "Changed seat's brand to: " << s.brand_name () << '\n';
  cout << "\n";

  cout << "Show vehicle_counter static-var address-of each vehicle:\n";
  s.show_vehicle_clount_address();
  a.show_vehicle_clount_address();
  m.show_vehicle_clount_address();
  cout << '\n';

  return 0;
}
