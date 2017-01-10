using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BitSwap_Ver2
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход -
            //  n, p, q and k 
            uint num = uint.Parse(Console.ReadLine());
            int p = int.Parse(Console.ReadLine());
            int q = int.Parse(Console.ReadLine());
            int k = int.Parse(Console.ReadLine());

            // Обработка - 
            // 0001 0101 0110 1101  -> 5485
            // 0000 0000 1110 0000
            // 0001 1100 0000 0000
            // 0000 1101 1010 1101
            uint mask = 1;

            for (int i = 0; i < k-1; i++)
            {
                mask = (mask << 1) +1; ;
            }
            //Console.WriteLine(Convert.ToString(mask, 2).PadLeft(16, '0'));

            mask = mask << p;
            uint firstSet = num & mask;
            mask = mask >> p;
            uint secondSet = num & (mask << q);

            uint res = num - firstSet - secondSet;
            firstSet = firstSet >> p;
            firstSet = firstSet << q;
            secondSet = secondSet >> q;
            secondSet = secondSet << p;

            res = res + firstSet + secondSet;

            // Изход - показва на резултата от разместването на наборите от битове.
            Console.WriteLine(res);

            //Console.WriteLine(firstSet);
            //Console.WriteLine(secondSet);
            //Console.WriteLine(Convert.ToString(firstSet,2).PadLeft( 16 ,'0' ));
            //Console.WriteLine(Convert.ToString(res, 2).PadLeft(16, '0'));

        }
    }
}
