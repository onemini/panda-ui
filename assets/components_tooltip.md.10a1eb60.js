import{_ as r,H as a,o as d,c as i,J as s,E as t,C as l,a as n,V as p}from"./chunks/framework.70ed8d5f.js";const rt=JSON.parse('{"title":"文字提示 Tooltip","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md"}'),_={name:"components/tooltip.md"},D=l("h1",{id:"文字提示-tooltip",tabindex:"-1"},[n("文字提示 Tooltip "),l("a",{class:"header-anchor",href:"#文字提示-tooltip","aria-label":'Permalink to "文字提示 Tooltip"'},"​")],-1),y=l("p",null,[n("常用于展示鼠标 "),l("code",null,"反馈"),n(" 时的提示信息")],-1),F=l("h2",{id:"基本使用",tabindex:"-1"},[n("基本使用 "),l("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),h=l("div",null,"这是提示内容",-1),u=n("按钮"),g=p(`<details class="details custom-block"><summary>Details</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ik-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#content</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">这是提示内容</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ik-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ik-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ik-tooltip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h2><p>不显示<code>箭头</code>，<code>点击</code>触发展示。可配置<code>白色背景</code>。</p>`,3),m=l("div",null,"这是提示内容",-1),C=n("按钮"),f=l("div",null,"这是提示内容",-1),A=n("按钮"),b=p(`<details class="details custom-block"><summary>点击展开</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ik-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">triggerType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:arrow</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#content</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">这是提示内容</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ik-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ik-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ik-tooltip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="方向配置" tabindex="-1">方向配置 <a class="header-anchor" href="#方向配置" aria-label="Permalink to &quot;方向配置&quot;">​</a></h2>`,2),x={class:"box"},v={class:"box1"},T=l("div",null,"文字提示",-1),k=n("LT"),E=l("div",null,"文字提示",-1),q=n("Left"),P=l("div",null,"文字提示",-1),S=n("LB"),V={class:"box2"},B={class:"box2-top"},N=l("div",null,"文字提示",-1),R=n("TL"),I=l("div",null,"文字提示",-1),w=n("Top"),L=l("div",null,"文字提示",-1),$=n("TR"),J={class:"box2-bottom"},H=l("div",null,"文字提示",-1),O=n("BL"),j=l("div",null,"文字提示",-1),z=n("Bottom"),G=l("div",null,"文字提示",-1),K=n("BR"),M={class:"box1"},Q=l("div",null,"文字提示",-1),U=n("RT"),W=l("div",null,"文字提示",-1),X=n("Right"),Y=l("div",null,"文字提示",-1),Z=n("RB"),tt=p('<h2 id="attrs" tabindex="-1">attrs <a class="header-anchor" href="#attrs" aria-label="Permalink to &quot;attrs&quot;">​</a></h2><table><thead><tr><th>参数</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选值</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>placement</td><td style="text-align:center;">提示展示方向</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:right;">top</td></tr><tr><td>triggerType</td><td style="text-align:center;">触发类型</td><td style="text-align:center;">string</td><td style="text-align:center;"><code>hover</code> / <code>click</code></td><td style="text-align:right;"><code>hover</code></td></tr><tr><td>arrow</td><td style="text-align:center;">是否展示小箭头</td><td style="text-align:center;">boolean</td><td style="text-align:center;"><code>true</code> / <code>false</code></td><td style="text-align:right;"><code>true</code></td></tr><tr><td>light</td><td style="text-align:center;">是否白色背景</td><td style="text-align:center;">boolean</td><td style="text-align:center;"><code>true</code> / <code>false</code></td><td style="text-align:right;"><code>false</code></td></tr></tbody></table>',2);function st(lt,nt,et,ot,at,pt){const e=a("ik-button"),o=a("ik-tooltip"),c=a("ik-space");return d(),i("div",null,[D,y,F,s(o,{placement:"top"},{content:t(()=>[h]),default:t(()=>[s(e,null,{default:t(()=>[u]),_:1})]),_:1}),g,s(c,null,{default:t(()=>[s(o,{placement:"top",triggerType:"click",arrow:!1},{content:t(()=>[m]),default:t(()=>[s(e,null,{default:t(()=>[C]),_:1})]),_:1}),s(o,{placement:"top",light:"",triggerType:"click",arrow:""},{content:t(()=>[f]),default:t(()=>[s(e,null,{default:t(()=>[A]),_:1})]),_:1})]),_:1}),b,l("div",x,[l("div",v,[s(o,{placement:"left-start"},{content:t(()=>[T]),default:t(()=>[s(e,null,{default:t(()=>[k]),_:1})]),_:1}),s(o,{placement:"left"},{content:t(()=>[E]),default:t(()=>[s(e,null,{default:t(()=>[q]),_:1})]),_:1}),s(o,{placement:"left-end"},{content:t(()=>[P]),default:t(()=>[s(e,null,{default:t(()=>[S]),_:1})]),_:1})]),l("div",V,[l("div",B,[s(o,{placement:"top-start"},{content:t(()=>[N]),default:t(()=>[s(e,null,{default:t(()=>[R]),_:1})]),_:1}),s(o,{placement:"top"},{content:t(()=>[I]),default:t(()=>[s(e,null,{default:t(()=>[w]),_:1})]),_:1}),s(o,{placement:"top-end"},{content:t(()=>[L]),default:t(()=>[s(e,null,{default:t(()=>[$]),_:1})]),_:1})]),l("div",J,[s(o,{placement:"bottom-start"},{content:t(()=>[H]),default:t(()=>[s(e,null,{default:t(()=>[O]),_:1})]),_:1}),s(o,{placement:"bottom"},{content:t(()=>[j]),default:t(()=>[s(e,null,{default:t(()=>[z]),_:1})]),_:1}),s(o,{placement:"bottom-end"},{content:t(()=>[G]),default:t(()=>[s(e,null,{default:t(()=>[K]),_:1})]),_:1})])]),l("div",M,[s(o,{placement:"right-start"},{content:t(()=>[Q]),default:t(()=>[s(e,null,{default:t(()=>[U]),_:1})]),_:1}),s(o,{placement:"right"},{content:t(()=>[W]),default:t(()=>[s(e,null,{default:t(()=>[X]),_:1})]),_:1}),s(o,{placement:"right-end"},{content:t(()=>[Y]),default:t(()=>[s(e,null,{default:t(()=>[Z]),_:1})]),_:1})])]),tt])}const dt=r(_,[["render",st]]);export{rt as __pageData,dt as default};
