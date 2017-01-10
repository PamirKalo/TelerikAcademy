using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3rd_Bit
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход - цяло число.
            int num = int.Parse(Console.ReadLine());

            // Обработка, изход - намира и показва бита на третия индекс от дясно на ляво от двоичното представяне на числото.

            int digit = 0;

            for (int i = 0; i < 4; i++)
            {
                digit = num % 2;
                num = num / 2;
            }
            Console.WriteLine(digit);

            //while (num > 0)
            //{
            //    digit = num % 2;
            //    num = num / 2;
            //    Console.Write(digit);
            //}
            //Console.WriteLine();
        }
    }
}
