using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Third_digit
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход - цяло число от конзолата.
            int num = int.Parse(Console.ReadLine());

            // Обработка, изход - проверява, дали третата цифра от дясно на ляво е 7 и показва резултата на конзолата.
            int rem = 0;

            for (int i = 0; i < 3; i++)
            {
                rem = num % 10;
                num = num / 10;
            }

            if (rem == 7)
            {
                Console.WriteLine("true");
            }
            else Console.WriteLine("false {0}", rem);
        }
    }
}
