using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Four_digits
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход - приема цяло четирицифрено число.
            int num = int.Parse(Console.ReadLine());

            // Oбработка, изход - изчислява сумата от цифрите му, вида му при разместени цифри/според условието/ 
            // показва на конзолата. 
            int sum = 0;
            int firstDigit = 0;
            int secDigit = 0;
            int thirdDigit = 0;
            int fourthDigit = 0;

            int digit = 0;
            int temp = num;
            for (int i = 0; i < 4; i++)
            {
                digit = temp % 10;
                sum = sum + digit;
                temp = temp / 10;
                switch (i)
                {
                    case 0: firstDigit = digit; break;
                    case 1: secDigit = digit; break;
                    case 2: thirdDigit = digit; break;
                    case 3: fourthDigit = digit; break;

                    default: break;
                }
            }

            Console.WriteLine(sum);

            temp = num;
            for (int i = 0; i < 4; i++)
            {
                digit = temp % 10;
                Console.Write(digit);
                temp = temp / 10;
            }
            Console.WriteLine();

            Console.WriteLine("{0}{1}{2}{3}", firstDigit, fourthDigit, thirdDigit, secDigit);
            Console.WriteLine("{0}{1}{2}{3}", fourthDigit, secDigit, thirdDigit, firstDigit);
        }
    }
}
