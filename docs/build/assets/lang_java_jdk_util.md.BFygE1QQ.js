import{_ as t,c as r,o as e,ag as i}from"./chunks/framework.BmLMQRXF.js";const u=JSON.parse('{"title":"util","description":"","frontmatter":{},"headers":[],"relativePath":"lang/java/jdk/util.md","filePath":"lang/java/jdk/util.md"}'),o={name:"lang/java/jdk/util.md"};function p(l,a,n,s,h,c){return e(),r("div",null,a[0]||(a[0]=[i('<h1 id="util" tabindex="-1">util <a class="header-anchor" href="#util" aria-label="Permalink to &quot;util&quot;">​</a></h1><p>java.util 包下的集合类不能在多线程下发⽣并发修改（迭代过程中被修改），⽐如 ArrayList 类。每次遍历时会判断是否被修改</p><p>ava.util.concurrent 包下的容器可以在多线程下并发使⽤，并发修改，⽐如 CopyOnWriteArrayList 类。遍历的不是原本容器，而是它的拷贝。</p><h2 id="copyonwritearraylist" tabindex="-1">CopyOnWriteArrayList <a class="header-anchor" href="#copyonwritearraylist" aria-label="Permalink to &quot;CopyOnWriteArrayList&quot;">​</a></h2><p>CopyOnWriteArrayList 采⽤了⼀种读写分离的并发策略。CopyOnWriteArrayList 容器允许并发读，读操作是⽆ 锁的。⾄于写操作，⽐如说向容器中添加⼀个元素，⾸先将当前容器复制⼀份，然后在新副本上执⾏写操作，结束 之后再将原容器的引⽤指向新容器。</p><h2 id="hashmap" tabindex="-1">HashMap <a class="header-anchor" href="#hashmap" aria-label="Permalink to &quot;HashMap&quot;">​</a></h2><p>先做一次哈希，当遇到冲突时使用链表，如果链表过长改为红黑树。</p><p>链表过⻓时，查询效率会⽐较低，于是当链表的⻓度超过 8 时（且数组的⻓度⼤于 64），链表就会转换为 红⿊树。</p><p>HashMap 的初始容量是 16，随着元素的不断添加，HashMap 就需要进⾏扩容， 扩容后的数组⼤⼩是原来的 2 倍，然后把原来的元素重新计算哈希值，放到新的数组中。</p><p>阈值为什么要选 8 呢？和统计学有关。理想情况下，使⽤随机哈希码，链表⾥的节点符合泊松分布，出现节点个数 的概率是递减的，节点个数为 8 的情况，发⽣概率仅为 0.00000006 。</p><p>⾄于红⿊树转回链表的阈值为什么是 6，⽽不是 8？是因为如果这个阈值也设置成 8，假如发⽣碰撞，节点增减刚 好在 8 附近，会发⽣链表和红⿊树的不断转换，导致资源浪费。</p>',11)]))}const _=t(o,[["render",p]]);export{u as __pageData,_ as default};
