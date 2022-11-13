---
title: 利用 Markdown 画图
isOriginal: true
icon: rocket
date: 2022-04-22
order: 5
category:
    - 效率提升
---
作者：村雨遥

博客：[JavaPark](https://cunyu1943.github.io/JavaPark)

>   吾生也有涯，而知也无涯。
## 前言



日常工作中，常常需要画各种图表，利用专业的画图的工具如 Visio 等当然能画出我们想要的图表。但是我们只是想要简单的图表时，也可以通过借助 Markdown 相关语法实现，大大提高效率。



## 时序图（Sequence Diagrams）



```sequence
村雨 -> 村雨遥: 你好, 村雨遥！
Note right of 村雨遥: 思考！
村雨遥 --> 村雨: 你好，村雨，很高兴与你合作！
```






## 流程图（Flowcharts）







![](https://img-blog.csdnimg.cn/e1260088087c45ff8dd7cb5781f41bda.png)



## Mermaid 图



### 准备知识



#### 节点图形

| 格式         | 形状       |
| ------------ | ---------- |
| `id[text]`   | 矩形       |
| `id(text)`   | 圆角矩形   |
| `id((text))` | 圆形       |
| `id>text]`   | 向右旗帜状 |
| `id{text}`   | 菱形       |



#### 连接线

| 格式          | 效果                 |
| ------------- | -------------------- |
| `A-->B`       | 实线，箭头，无文字   |
| `A---B`       | 实线，无箭头，无文字 |
| `A--文字---B` | 实线，无箭头，文字   |
| `A--文字-->B` | 实线，箭头，文字     |
| `A-.->B`      | 虚线，箭头，无文字   |
| `A-.文字.->B` | 虚线，箭头，文字     |
| `A==>B`       | 大箭头，无文字       |
| `A==文字==>B` | 大箭头，文字         |



### 时序图（Sequence Diagrams）



```
sequenceDiagram
    Manu->>Tim: Hello Tim, how are you?
    alt is sick
    Tim->>Manu: Not so good :(
    else is well
    Tim->>Manu: Feeling fresh like a daisy
    end
    opt Extra response
    Tim->>Manu: Thanks for asking
    end
```



![](https://gitee.com/cunyu1943/images/raw/master/ImgsUbuntu/20200507211259.png)



### 流程图（Flowcharts)



-   流程图图表方向

| 图表方向 | 含义     |
| -------- | -------- |
| `TB/TD`  | 从上到下 |
| `BT`     | 从下到上 |
| `RL`     | 从右到左 |
| `LR`     | 从左到右 |



```
graph TD
A[开始] -->B[出示证件]
    B --> C{是否是学生}
    C -->|是| D[5 折]
    C -->|否| E[全票]
    D --> F[结束]
    E --> F[结束]
```



![](https://gitee.com/cunyu1943/images/raw/master/ImgsUbuntu/20200507211237.png)



### 甘特图（Gantt Charts）



```
gantt
    title 甘特图
    dateFormat  YYYY-MM-DD
    section Section
    项目确定           :a1, 2020-01-01, 30d
    可行性分析     :after a1  , 20d
    section Another
    需求分析     :2020-01-12  , 12d
    项目实施      : 24d
```



![](https://gitee.com/cunyu1943/images/raw/master/ImgsUbuntu/20200507214018.png)



### 类图（Class Diagrams）



```
classDiagram
	Animal <|-- Dog
	Animal <|-- Cat
	Animal <|-- Wolf
	
    Animal : +int age
	Animal : +String name
	Animal : +String color
	Animal : +isMammal()
	Animal : +getColor()
	
	class Dog{
		+Stirng type
		+bark()
	}
	
	class Cat{
		+String eyesColor
		+catchMouse()
	}
	
	class Wolf{
		+String area
		+kill()
	}
```



![](https://gitee.com/cunyu1943/images/raw/master/ImgsUbuntu/20200507211208.png)



### 状态图（State Diagrams）



```
stateDiagram
	[*] --> 保持
	保持 --> [*]
	
	保持 --> 移动
	移动 --> 保持
	移动 --> 加速
	加速 --> [*]
```



![](https://gitee.com/cunyu1943/images/raw/master/ImgsUbuntu/20200507211112.png)



### 饼图（Pie Charts）



![img](https://cdn.nlark.com/yuque/__mermaid_v3/805eac7734d0ca3e4b48f70c7a39fe3f.svg)



![](https://gitee.com/cunyu1943/images/raw/master/ImgsUbuntu/20200507170556.png)
