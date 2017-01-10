using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Point_in_a_circle
{
   public class Program
    {
       public static void Main(string[] args)
        {
            // Вход - приема две дробни числа, като координати на точка.
            double x = double.Parse(Console.ReadLine());
            double y = double.Parse(Console.ReadLine());

            // Обработка, изход - изчислява и показва, дали точката с входните координати се намира в окръжността с
            // център 0,0 и радиус 2 .
            double z = Math.Sqrt(x*x + y*y);
            if (z > 2)
            {
                Console.WriteLine("no {0:f2}" , z);
            }
            else Console.WriteLine("yes {0:f2}", z);

        }
    }
}
