using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rectangles
{
    class Rectangles
    {
        static void Main(string[] args)
        {
            //
            double width = double.Parse(Console.ReadLine());
            double height = double.Parse(Console.ReadLine());
            // iven width and height.

            // Обработка, изход - изчислява периметъра и площа и ги показва на конзолата.
            // Output a single line - the rectangle's area and perimeter, separated by a whitespace.
            // Print the area and perimeter values with exactly 2 - digits precision after the floating point

            double area = width * height;
            double perimeter = (width + height) * 2;

            Console.WriteLine("{0:f2} {1:f2}" , area , perimeter);
        }
    }
}
