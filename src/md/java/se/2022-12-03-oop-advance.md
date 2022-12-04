---
title: 面向对象进阶（一）
isOriginal: true
category:
  - Java 菜鸟入门
date: 2022-12-03
order: 51
---

## static

静态的意思，是 `Java` 中常用的修饰符，既可以用它来修饰成员变量，也可以用它来修饰成员方法。

### 静态变量

静态变量就是用 `static` 来修饰的成员变量，最重要的特点就是一个类中的静态变量被类中的所有对象所共享。它不属于任何一个对象，而是属于类。其生命周期同类一样，共生共存，是优先于对象的。

和成员变量不同的是，成员变量只能通过新建对象，然后用对象名来进行调用。而静态变量不仅仅可以用这种方式，还可以直接通过类名来进行调用，而这也是更为推荐的方式。

```java
public class Hero{
    /** 成员变量 */
    private String name;
    
    /** 静态变量 */
    pubic static String game;
    
    // 各种 setter 和 getter
}
```

1.   **成员变量调用**

```java
public class Main{
    public static void main(String[] args){
        Hero hero = new Hero();
        hero.setName("赵怀真");
    }
}
```

2.   **静态变量调用**

```java
public class Main{
    public static void main(String[] args){
       	// 第一种方式
        Hero hero = new Hero();
        hero.setGame("王者荣耀");
        
        // 第二种方式，更为推荐
        Hero.setGame("王者荣耀");
    }
}
```

### 静态方法

静态方法就是类中用 `static` 来修饰的成员方法，一般用来修饰公共的工具类或者测试类。

同样的，静态方法既可以用通过新建对象，然后用对象名来调用的方式，也可以直接通过类名来调用的方式，这也是更为推荐的方式。

```java
public class Util{
    private Util(){};
    
    pubilc static void attack(){
        System.out.println("攻击");
    }
}
```

```java
public class Main{
    public static void main(String[] args){
        Util.attack();
    }
}
```

### 注意

使用 `static` 修饰方法或变量后，需要注意以下的小细节。

-   一个静态方法中**只能**访问静态变量和其他的静态方法。而不能访问非静态的变量和方法。
-   但一个非静态方法一方面既可以访问静态变量，也可以访问非静态变量；另一方面，也既可以访问静态方法，也可以访问非静态方法。
-   不同于成员方法，静态方式中是不存在 `this` 关键字的。