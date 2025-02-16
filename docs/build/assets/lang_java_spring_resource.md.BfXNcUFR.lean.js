import{_ as a,c as o,o as t,j as e,a as s}from"./chunks/framework.BmLMQRXF.js";const g=JSON.parse('{"title":"资源加载","description":"","frontmatter":{},"headers":[],"relativePath":"lang/java/spring/resource.md","filePath":"lang/java/spring/resource.md"}'),c={name:"lang/java/spring/resource.md"};function n(l,r,u,i,d,p){return t(),o("div",null,r[0]||(r[0]=[e("h1",{id:"资源加载",tabindex:"-1"},[s("资源加载 "),e("a",{class:"header-anchor",href:"#资源加载","aria-label":'Permalink to "资源加载"'},"​")],-1),e("p",null,"Spring 提供了 Resource 和 ResourceLoader 来统一抽象整个资源及其定位。使得资源与资源的定位有了一个更加清晰的界限，并且提供了合适的 Default 类，使得自定义实现更加方便和清晰。",-1),e("p",null,"AbstractResource 为 Resource 的默认抽象实现，它对 Resource 接口做了一个统一的实现，子类继承该类后只需要覆盖相应的方法即可，同时对于自定义的 Resource 我们也是继承该类。",-1),e("p",null,"DefaultResourceLoader 同样也是 ResourceLoader 的默认实现，在自定 ResourceLoader 的时候我们除了可以继承该类外还可以实现 ProtocolResolver 接口来实现自定资源加载协议。",-1),e("p",null,"DefaultResourceLoader 每次只能返回单一的资源，所以 Spring 针对这个提供了另外一个接口 ResourcePatternResolver ，该接口提供了根据指定的 locationPattern 返回多个资源的策略。其子类 PathMatchingResourcePatternResolver 是一个集大成者的 ResourceLoader ，因为它即实现了 Resource getResource(String location) 方法，也实现了 Resource[] getResources(String locationPattern) 方法",-1)]))}const f=a(c,[["render",n]]);export{g as __pageData,f as default};
