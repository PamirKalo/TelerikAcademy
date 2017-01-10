using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modify_Bit_Ver2
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход - приема от конзолата три числа.
            ulong num = ulong.Parse(Console.ReadLine());
            int pos = int.Parse(Console.ReadLine());
            int value = int.Parse(Console.ReadLine());

            // Обработка, изход - променя и показва на конзолата  стойността на бит с позиция pos в числото num на value .
            ulong mask = 1;
            mask = mask << pos;
            if (value == 1)             //  1100 0111
            {                           //  1011 1111 ~
                ulong res = num | mask;
                Console.WriteLine(res);
            }
            else
            {
                mask = ~mask;   // ~ обръщаме маската във вид 1111 0111 - всички нули стават единици и само единицата става нула.
                ulong res = num & mask;
                Console.WriteLine(res);
            }
        }
    }
}
