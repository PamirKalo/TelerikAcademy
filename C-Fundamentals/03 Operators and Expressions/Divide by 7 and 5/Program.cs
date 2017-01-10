using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Divide_by_7_and_5
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход - приема цяло число от конзолата.
            int num = int.Parse(Console.ReadLine());

            // Обработка, изход - проверява, дали се дели на 5 или 7 и показва резултата true/false .. num .
            if (num % 7 ==0 && num % 5 == 0)
            {
                Console.WriteLine("true {0}" , num);
            }
            else Console.WriteLine("false {0}", num);
        }
    }
}
