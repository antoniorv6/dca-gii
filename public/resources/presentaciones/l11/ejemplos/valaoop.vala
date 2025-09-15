// Clase base
 public class Droid {
        public Droid (string n) {
          name = n;
        }

        public string name {get; set;}
        public virtual void move (int x, int y) {
                this.x = x;
                this.y = y;
        }

        protected int x;
        protected int y;
}
// Clase derivada
public class AquaDroid : Droid {
        public AquaDroid(string n, int md = 100) {
                base (n);
                depth = md;
        }

        public override void move (int x, int y) {
                this.x = x/2;
                this.y = y/2;
        }

        private int depth;
}

