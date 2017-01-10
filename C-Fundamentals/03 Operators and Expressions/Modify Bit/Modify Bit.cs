using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modify_Bit
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Вход - приема три цели числа от конзолата: число за модификация, индекс и състояние на бита.
            long num = long.Parse(Console.ReadLine());
            int p = int.Parse(Console.ReadLine());
            int v = int.Parse(Console.ReadLine());

            // Обработка, изход - променя р-тия бит на двоичното представяне на числото num  в състояние v.
            // Показва промененто число в десетична бройна система.
            long numModif = num;
            long valueChange = 1;
            long bitValue = 0;
            long tempNum = num;

            for (int i = 0; i <= p; i++)
            {
                bitValue = tempNum % 2;
                tempNum = tempNum / 2;
            }

            if (bitValue != v)
            {
                if (p > 0)
                {
                    for (int i = 1; i <= p; i++)
                    {
                        valueChange = valueChange * 2;
                    }
                }

                if (v == 0)
                {
                    numModif = numModif - valueChange;
                }
                else
                {
                    numModif = numModif + valueChange;
                }

                Console.WriteLine(numModif);
            }
            else Console.WriteLine(num);
        }
    }
}
