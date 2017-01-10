using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PROBA
{
    class Program
    {
        static void Main(string[] args)
        {
            // 
            int x = 1 << 3;  // 0101
                            // 0010
                            // 0000


            Console.WriteLine(x);
            Console.WriteLine(Convert.ToString(x,2));
            x = x >> 2;
            Console.WriteLine(x);
            Console.WriteLine(Convert.ToString(x, 2).PadLeft(8,'0'));
        }
    }
}
