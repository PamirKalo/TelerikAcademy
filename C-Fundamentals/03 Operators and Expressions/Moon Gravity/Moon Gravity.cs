using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moon_Gravity
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход - приема от конзолата дробно число представляващо теглото на човек на Земята.
            double weight = double.Parse(Console.ReadLine());

            // Обработка, изход - изчислява теглото на човек на Луната и го показва до третата цифра след дес. запетая.
            double moonWeight = 17 * weight / 100;

            Console.WriteLine("{0:f3}" , moonWeight);
        }
    }
}
