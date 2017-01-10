using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3rd_Bit_Ver2
{
    class Program
    {
        static void Main(string[] args)
        {
            // Вход - цяло положително число.
            int num = int.Parse(Console.ReadLine());

            // Обработка, изход - намира и показва на конзолата 
            // стойността на 3-тия бит.
            int mask = 1;   // декларираме променлива с двоичен вид 0000 0001.
            mask = 1 << 3;  // отмества нулевия бит(1) 3 позиции надясно: 0000 1000.
            int res =   num     // използваме понбитовата операция &, като по този начин 
                      & mask;   // променяме единствената единица в mask на 1 или 0 в зависимост
            // от това, какъв е съотвестващия бит в num. От това следва, че ако полученото число
            // res>0 , то 3тия бит е 1, а ако е равно на нула - нула.
            
            //
            //if (res > 0)
            //{
            //    Console.WriteLine(1);
            //}
            //else Console.WriteLine(0);

            Console.WriteLine(res!=0 ? 1 :0);
        }
    }
}
