using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trapezoids
{
    class Trapezoids
    {
        static void Main(string[] args)
        {
            // Вход - приема три дробни числа представляващи съответно двете страни и височината на трапец.
            double a = double.Parse(Console.ReadLine());
            double b = double.Parse(Console.ReadLine());
            double h = double.Parse(Console.ReadLine());

            // Обработка, изход - изчислява и показва лицето на трапец с размерите приети от входа.
            double area = (a+b) * h/2;
            Console.WriteLine("{0:f7}" , area);
        }
    }
}
