---
title: Java 控制流程
isOriginal: true
icon: java
tag:
  - Java
category:
  - Java 菜鸟入门
date: 2022-01-15 11:14:50
---

## 往期推荐

>   1.  [Java 菜鸟入门教程：开发环境搭建及入门 Hello World 程序](https://cunyu1943.github.io/posts/9a989e71/)
>   2.  [Java 菜鸟入门教程：选择 IDEA 进行 Java 开发](https://cunyu1943.github.io/posts/cbeb6fba)
>   3.  [Java 菜鸟入门教程：变量与数据类型](https://cunyu1943.github.io/posts/c6412b1)
>   4.  [Java 菜鸟入门教程：操作符](https://cunyu1943.github.io/posts/867c013b)

## 前言

我们在 Java 操作符一文中讲了各种操作符的使用技巧，接上一篇文章中的内容，本次文章主要来看看流程控制。文章主要内容安排如下：

-   **输入输出**
-   **条件判断**
-   **控制循环**

## 输入输出

### 输入

要实现从控制台输入并读取到我们的程序中时，我们先来看一个实例：

```java
import java.util.Scanner;

/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/15 13:53
 * @description : 输入
 */

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("输入整型");
        int num = scanner.nextInt();
        System.out.println("输入的整型：" + num);

        System.out.println("输入字符型");
        String name = scanner.next();
        System.out.println("输入的字符型：" + name);

        System.out.println("输入浮点型");
        float floatNum = scanner.nextFloat();
        System.out.println("输入的字符型：" + floatNum);
        double doubleNum = scanner.nextDouble();
        System.out.println("输入的字符型：" + doubleNum);


    }
}
```

![](https://i.loli.net/2021/04/15/GOgNuZMFAK4SiHy.png)

要实现从控制台输入，我们需要借助 `Scanner` 类，它属于标准输入流，其步骤总结如下：

1.  首先，需要导入 `Scanner` 类。即 `import java.util.Scanner`，其中 `import` 表示导入某个类，并且只能放在程序的开头；
2.  然后创建 `Scanner` 对象。这里需要注意，创建时需要传入 `System.in`，表示标准输入流，与之对应的 `System.out` 则代表标准输出流；
3.  最后就是读取用户输入即可。这里读取时，调用不同的方法 `Scanner` 会自动转换数据类型，不用我们去进行手动转换；

从控制台获取不同类型的输入，其常用方法如下：

| 返回值    | 方法名        | 描述                                          |
| --------- | ------------- | --------------------------------------------- |
| `boolean` | `hasNext()`   | 如果还有输入，则返回 `true`，否则返回 `false` |
| `String`  | `next()`      | 返回输入的字符串，以空格为分隔符              |
| `String`  | `nextLine()`  | 返回输入的字符串，以换行为分隔符              |
| `int`     | `nextInt()`   | 输入整型数                                    |
| `long `   | `nextLong()`  | 输入长整型数                                  |
| `float`   | `nextFloat()` | 输入单精度数                                  |
| `double`  | `nextDouble`  | 输入双精度数                                  |

### 输出

其实从一开始的 `hello world` 到目前的代码中，我们已经接触过输出了，也就是我们的 `System.out.println()`。

其中 `println` 表示输出并换行，如果我们不想换行，则使用 `print` 就可以了。

通过上述方式所输出的内容都是挤在一起的，十分不方便我们阅读。为了更加清晰的打印出我们所需要的结果，可以使用格式化输出。

要使用格式化输出，需要使用 `System.out.printf()` 或者 `System.out.format()` 搭配占位符，然后在后面的参数格式化成指定格式即可，两者达成的效果是等价的。常见的占位符如下：

| 占位符 | 描述                             |
| ------ | -------------------------------- |
| `%d`   | 格式化输出整数                   |
| `%f`   | 格式化输出浮点数                 |
| `%s`   | 格式化输出字符串                 |
| `%x`   | 格式化输出十六进制整数           |
| `%e`   | 格式化输出科学计数法表示的浮点数 |

此外，我们还可以使用各种转义字符来使得我们的输出更为简洁，常见的转义字符及意义如下表所示。

| 转义字符 | 描述           |
| -------- | -------------- |
| `\n`     | 换行           |
| `\t`     | 水平制表符     |
| `\\`     | 表示一个反斜杠 |
| `\'`     | 表示一个单引号 |
| `\"`     | 表示一个双引号 |

```java
/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/15 14:48
 * @description : 输出
 */

public class Main {
    public static void main(String[] args) {
        int num1 = 10;
        double num2 = 34.9;
        float num3 = 3.34f;
        String name = "村雨遥";

        //        换行及不换行输出
        System.out.println("公众号：" + name);
        System.out.print("公众号：" + name);
        System.out.println(num1);

        //        格式化输出
        System.out.println("格式化输出：");
        System.out.printf("num1 = %d\n", num1);
        System.out.format("num2 = %f\t num3 = %f\n", num2, num3);
        System.out.printf("name = %s\n", name);
        System.out.format("name = %s\n", name);
    }
}
```

![](https://i.loli.net/2021/04/15/uoxEObNPAGIs43H.png)

## 条件判断

### if

1.  **单次判断**

当我们只进行一次判断时，可以使用一个 `if` 语句包含一个条件表达式，其语法格式如下；

```java
if(条件表达式){
    执行语句;
}
```

其执行逻辑如下图所示，如果条件表达式的值为 `true`，则执行 `if` 语句块中的执行语句，否则就执行 `if` 语句块后边的代码；

![](https://i.loli.net/2021/04/15/j9TViH3CnRBQvSa.png)

2.  **多次判断**

要进行多次判断时，可以使用 `if…else` 的形式，其语法格式如下；

```java
if(条件表达式 1){
    执行语句 1;
} else if(条件表达式 2){
	执行语句 2;
} else if(…){
    …
}…
```

其执行逻辑如下图所示，如果条件表达式 1 为 `true`，则执行执行语句 1，否则接着判断条件表达式 2，若为 `true`，则执行执行语句 2，以此类推，直到完成最后一个条件表达式的判断。

![](https://i.loli.net/2021/04/15/4BwRhDSksiWzFx2.png)

```java
import java.util.Scanner;

/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/15 15:45
 * @description : 条件判断
 */

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入分数：");
        double score = scanner.nextDouble();

        if (score < 0 || score > 100) {
            System.out.println("输入的分数不在0-100之间，不符合要求");
        } else if (score >= 90) {
            System.out.println("A");

        } else if (score >= 80) {
            System.out.println("B");

        } else if (score >= 60) {
            System.out.println("C");
        } else {
            System.out.println("D");

        }
    }
}
```

![](https://i.loli.net/2021/04/15/1BV2G6FHyRTXclU.png)

### switch

当我们需要使用 `if` 进行判断时，难免显得有些繁琐。此时，我们就可以使用 `switch` 来进行替代，通过判断一个变量所属范围，从而划分出不同的分支。

`switch` 分支的语法格式如下：

```java
switch(表达式){
    case value1:
        执行语句1;
        break;
    case value2:
        执行语句2;
        break;
    ……
    default:
        执行语句;
        break;
}	
```

通过判断表达式的值，然后执行对应值下的执行语句，而 `default` 下的执行语句表示如果 `switch` 表达式未匹配到对应的值时所执行的语句；

一个 `switch` 的实例如下：

```java
import java.util.Scanner;

/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/15 15:49
 * @description : switch
 */

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("请输入该学生成绩：");
        int grade = input.nextInt();//定义grade且获取键盘输入的整数
        if (grade < 0 || grade > 100) {//输入的整数范围应为0-100
            System.out.println("输入的成绩有误");
            return;
        }
        switch (grade / 10) {
            case 10:
            case 9:
                System.out.println("该学生成绩优秀");
                break;
            case 8:
                System.out.println("该学生成绩良好");
                break;
            case 7:
                System.out.println("该学生成绩中等");
                break;
            case 6:
                System.out.println("该学生成绩基本合格");
                break;
            default:
                System.out.println("该学生成绩不合格");
                break;
        }
    }
}
```

而在使用 `switch` 分支语法时，需要遵循一定的规则：

1.  `switch` 中的变量类型可以是：`byte`、`short`、`int`、`char`、`String` （自 JDK 1.7 开始）；
2.  `switch` 语句根据表达式的结果跳转到对应的 `case` 结果，然后执行其后跟着的语句，知道遇到 `break` 才结束执行；
3.  默认情况下，一般都会跟着一个 `default` 的分支，用于未匹配到对应情况时的执行情况；

## 控制循环

### while

假设我们现在有一个题目，需要你计算 `1 + 2 + 3 + …… + 50` 的结果，你会怎么办呢？

这么写么：

```java
/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/16 9:35
 * @description : while
 */

public class Main {
    public static void main(String[] args) {
        int sum = 1 + 2;
        sum += 3;
        sum += 4;
        ……
        sum += 50;
        System.out.println("1 + 2 + 3 + …… + 50 = " + sum);
    }
}
```

这么写就太麻烦了，计算到 50 的值就已经很多了，假如有 1000,10000 甚至更大，那我们岂不是写个好久才能写完。这个时候我们就得找找有没有简单的方法，能够只写几句就实现相同的效果呢？答案是：Yes，这就是我们这一小节将要讲到的循环。

```java
/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/16 9:35
 * @description : while
 */

public class Main {
    public static void main(String[] args) {
        int sum = 0;
        int num = 1;
        while (num <= 50) {
            sum += num;
            num++;
        }
        System.out.println("1 + 2 + 3 + …… + 50 = " + sum);
    }
}
```

![](https://i.loli.net/2021/04/16/T9XGDe7LoRFvsQP.png)

从上面的实例，利用 `while` 循环，我们就能轻易达成循环的效果。其语法格式如下：

```java
while(表达式){
    执行语句;
}
```

只要表达式为 `true`，就会不断循环执行其中的执行语句，直到表达式为 `false`，此时便跳出循环，不再执行其中的执行语句。

除开上面的形式之外，还有另一种 `while` 形式：

```java
do{
    执行语句;
}while(表达式);
```

两者的最大区别在于：`do……while` 无论 `表达式` 是否为 `true`，都至少会执行一次。



```java
/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/16 9:35
 * @description : while
 */

public class Main {
    public static void main(String[] args) {
        int sum = 0;
        int num = 10;
        while (num <= 9) {
            sum += num;
            num++;
        }
        System.out.println("sum = " + sum);
    }
}
```

![](https://i.loli.net/2021/04/16/LYHw8KdTuXcPtvj.png)

```java
/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/16 9:35
 * @description : while
 */

public class Main {
    public static void main(String[] args) {
        int sum = 0;
        int num = 10;
        do {
            sum += num;
            num++;
        } while (num < 10);
        System.out.println("sum = " + sum);
    }
}
```

![](https://i.loli.net/2021/04/16/cqaxwA53K74F9ym.png)

观察以上两个实例，在 `while` 程序中，我们定义 `num = 10`，然后假设 `num <= 9` 时就进入循环体，而 $10 > 9$，所以不进入循环体，直接打印 `sum` 的值为 `0`。而在 `do…while` 程序中，我们同样定义 `num = 10`，然后假设 `num < 10` 时继续循环，很明显不满足该情况，理应跳出循环，打印出 `sum` 的值为 `10`，说明此时还是进行了一次循环。

因此，当我们需要在 `while` 和 `do……while` 之间做出选择时，如果我们最少需要进行一次循环，则选择 `do……while`，其他情况下选用两者都可以。

### for

-   **普通 for 循环**

除开 `while` 和 `do……while` 之外，我们还有 `for` 循环来达成同样的结果，只是表达方法不一样。同样以上面计算 `1 + 2 + …… + 50` 为例，可以写成如下的形式：

```java
/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/16 10:20
 * @description : for 循环
 */

public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int num = 1; num <= 50; num++) {
            sum += num;
        }

        System.out.println("1 + 2 + …… + 50 = " + sum);
    }
}
```

![](https://i.loli.net/2021/04/16/qYTzu428lGJcDWe.png)

`for` 循环的语法形式如下：

```java
for(初始条件;终止条件;更新语句){
    循环语句;
}
```

`for` 循环的执行步骤如下：

1.  首先执行初始条件，可以声明一种类型，但可以初始化一个或多个循环控制变量，甚至可以放空；
2.  接着判断终止条件，如果为 `true`，则进入循环体执行循环语句；如果为 `false`，则终止循环，执行循环体后面的语句；
3.  一次循环完成后，执行更新语句来更新循环控制变量；
4.  最后再次判断终止条件，循环以上三个步骤；

`for` 和 `while` 最大的区别就在于 `for` 循环一般都是事先知道需要循环的次数的，而 `while` 循环则不需要。

-   **增强 for 循环** 

自 Java 5 后，引入了一种增强型 `for` 循环，主要用于数字遍历，其语法格式如下：

```java
for(声明语句:表达式){
	// 循环语句
}
```

```java
/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/16 10:39
 * @description : 增强 for 循环
 */

public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 4, 5, 6, 9, 10};
        for (int number : numbers) {
            System.out.print(number + "\t");
        }
    }
}
```

![](https://i.loli.net/2021/04/16/7mC9GdBuqKXhJIl.png)

其中，声明语句一般是声明一个同数组数据类型相同的局部变量，而表达式则是要访问的数组名或者返回值是数组的方法。

### continue & break

### break

主要用在循环语句或者 `switch` 语句中，表示跳出最里层的循环，然后继续执行该循环下的语句。

`break` 在 `switch` 语句中的用法已经见识过了，我们就来看看它在循环中的应用。

```java
/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/16 10:51
 * @description : break & continue
 */

public class Main {
    public static void main(String[] args) {
        for (int i = 1; i < 10; i++) {
            System.out.println("i = " + i);
            if (i == 5) {
                break;
            }
        }
    }
}

```

![](https://i.loli.net/2021/04/16/TPxHndCJQIvaYOh.png)

观察结果可知，当 `i == 5` 时，我们执行了 `break` 语句，此时就直接跳出了 `for` 循环，而不再进行下一次的循环。

### continue

`continue` 也同样是应用在循环控制结构中，主要是让程序跳出当次循环，进而进入下一次循环的迭代。

在 `for` 循环中，执行 `continue` 语句后，直接跳转到更新语句，而不再执行 `continue` 后的语句。而在 `while` 或 `do……while` 循环中，执行 `continue` 语句后，直接跳转到表达式的判断。

```java
/**
 * @author : cunyu
 * @version : 1.0
 * @className : Main
 * @date : 2021/4/16 10:51
 * @description : break & continue
 */

public class Main {
    public static void main(String[] args) {
        for (int i = 1; i < 10; i++) {
            if (i == 5) {
                continue;
            }
            System.out.println("i = " + i);
        }
    }
}
```

![](https://i.loli.net/2021/04/16/psqLXe3z7SNR85I.png)

观察上述结果可知，当 `i == 5` 时，我们执行了 `continue` 语句，此时便跳出了当次循环，不再进行后边的打印语句，然后继续下一次的循环，所以最终打印的结果没有 5.

## 总结

今天的内容到此就结束了，老规矩，如果大家觉得有用的话，就给个点赞关注吧。当然，如果可以的话，帮忙分享一波是更好的！

其次就是对于文中遗漏或者存在欠缺的知识点，还请大家不吝赐教，在评论区给我指出来！

**关注公众号，获取最新文章更新**

<img src="https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif" width="200" alt="公众号" />
