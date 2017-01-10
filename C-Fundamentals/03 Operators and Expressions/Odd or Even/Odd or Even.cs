using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Odd_or_Even
{
   public class Program
    {
       public static void Main(string[] args)
        {
            // Вход - цяло число от конзолата в интервал [-30 .. 30]
            sbyte num = sbyte.Parse(Console.ReadLine());

            // Обработка, изход - проверява, дали въведеното число е четно/нечетно и показва резултата на конзолата.

            if (num % 2 == 0)
            {
                Console.WriteLine("even {0}",num);
            }
            else
            {
                Console.WriteLine("odd {0}" , num);
            }
        }
    }
}
