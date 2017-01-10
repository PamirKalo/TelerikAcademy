using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BitExchange
{
    class BitExchange
    {
         static void Main(string[] args)
        {
            // Вход - приема от конзолата цяло положително число от тип uint . 
            uint num = uint.Parse(Console.ReadLine());

            // Обработка, изход - разменя стойносттите на 3,4 и 5 бит съответно със стойностите на 24, 25, 26 бит.
            // Показва на конзолата полученото число.
            string bitRepresent = Convert.ToString(num, 2);
             //Console.WriteLine(bitRepresent);
            int[] bitArr = new int[32];

            for (int i = 0; i < 32; i++)
            {
                bitArr[i] = 0;
            }
            int j = 0;
            for (int i = bitRepresent.Length - 1; i >= 0; i--)
            {
                bitArr[j] = int.Parse(bitRepresent[i].ToString());
                j++;
            }
            int tempA = bitArr[3];
            int tempB = bitArr[4];
            int tempC = bitArr[5];

            bitArr[3] = bitArr[24];
            bitArr[4] = bitArr[25];
            bitArr[5] = bitArr[26];
            bitArr[24] = tempA;
            bitArr[25] = tempB;
            bitArr[26] = tempC;
            uint exchangedNum = 0;
            uint value = 1;
            if (bitArr[0] == 1)
            {
                exchangedNum = exchangedNum + value;
            }

            for (int i = 1; i < bitArr.Length; i++)
            {
                value = value * 2;
                if (bitArr[i] == 1)
                {
                    exchangedNum = exchangedNum + value;
                }
            }

            Console.WriteLine(exchangedNum);
        }
    }
}
// Write a program that exchanges bits 3, 4 and 5 with bits 24, 25 and 26 of given 32-bit unsigned 

//integer(read from the console).