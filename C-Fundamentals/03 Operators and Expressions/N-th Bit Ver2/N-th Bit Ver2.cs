using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace N_th_Bit_Ver2
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход - приема от конзолата две цели числа.
            long num = long.Parse(Console.ReadLine());
            int pos = int.Parse(Console.ReadLine());

            // Обработка, изход - намира и показва стойността
            // на бит с позиция pos в ччислото num .
            long mask = 1;
            mask = mask << pos;
            long res = num & mask;

            Console.WriteLine(res != 0 ? 1 : 0);

        }
    }
}
