using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace N_th_Bit
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход - приема от конзолата две цели числа Р и N .
            int p = int.Parse(Console.ReadLine());
            int n = int.Parse(Console.ReadLine());

            // Обработка и изход - намира и показва на конзолата бит с N - ти индекс на двоичноото представяне на числото Р.
            int bitValue = 0;
            for (int i = 0; i <= n; i++)
            {
                bitValue = p % 2;
                p = p / 2;
            }
            Console.WriteLine(bitValue);
        }
    }
}
