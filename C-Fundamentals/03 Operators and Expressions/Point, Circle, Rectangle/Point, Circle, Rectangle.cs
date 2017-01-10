using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Point__Circle__Rectangle
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход - приема две дробни числа, които са координати на точка.
            double x = double.Parse(Console.ReadLine());
            double y = double.Parse(Console.ReadLine());

            // Обработка, изход - проверява и показва на конзолата, дали точката с координати от входа е вътре/вън от
            // правоъгълника и съответно окръжността. 
            // the circle K({1, 1}, 1.5) and out of the rectangle R(top=1, left=-1, width=6, height=2)
            double len = Math.Sqrt((x-1)*(x-1) + (y-1)*(y-1));
            if (len > 1.5)
            {
                Console.Write ("outside circle ");
            }
            else Console.Write("inside circle ");

            if (x < -1 ||  x > 5 || y < -1 || y> 1)
            {
                Console.Write("outside rectangle");
            }
            else Console.Write("inside rectangle");

            Console.WriteLine();

        }
    }
}
