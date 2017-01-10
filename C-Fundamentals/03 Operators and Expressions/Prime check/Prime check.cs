using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prime_check
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход - приема цяло число до 100 вкл.
            int num = int.Parse(Console.ReadLine());

            // Обработка, изход - проверява, дали числото е просто(дели се само на едно и на себе си) и показва резултатата
            // на конзолата.
            if (num < 2)
            {
                    Console.WriteLine("false");
            }
            else
            {
                bool IsPrime = true;
                for (int i = 2; i < num; i++)
                {
                    if (num % i == 0)
                    {
                        IsPrime = false;
                        Console.WriteLine("false");
                        break;
                    }
                }
                if (IsPrime == true)
                {
                    Console.WriteLine("true");
                }
            }
        }
    }
}
