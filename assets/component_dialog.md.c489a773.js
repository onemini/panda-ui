import{d as y,k as u,a as D,o as i,c as C,f as a,w as l,j as t,F as h,b as c,i as d}from"./app.8cac0035.js";const m=y({__name:"dialogdemo1",setup(A){const n=u(!1);function r(){n.value=!0}function p(){n.value=!1}return(g,s)=>{const o=D("dtsz-button"),F=D("DtszDialog");return i(),C(h,null,[a(o,{type:"primary",onClick:s[0]||(s[0]=e=>r())},{default:l(()=>[t("宽度")]),_:1}),a(F,{width:"80%","dialog-visible":n.value},{footer:l(()=>[a(o,{type:"primary",onClick:s[1]||(s[1]=e=>p())},{default:l(()=>[t("确定")]),_:1}),a(o,{type:"primary",onClick:s[2]||(s[2]=e=>p())},{default:l(()=>[t("取消")]),_:1})]),_:1},8,["dialog-visible"])],64)}}}),v=c("h3",null,"我是标题",-1),b=y({__name:"dialogdemo2",setup(A){const n=u(!1);function r(){n.value=!0}function p(){n.value=!1}return(g,s)=>{const o=D("dtsz-button"),F=D("DtszDialog");return i(),C(h,null,[a(o,{type:"success",onClick:s[0]||(s[0]=e=>r())},{default:l(()=>[t("添加内容")]),_:1}),a(F,{"dialog-visible":n.value},{title:l(()=>[v]),footer:l(()=>[a(o,{type:"primary",onClick:s[1]||(s[1]=e=>p())},{default:l(()=>[t("确定")]),_:1}),a(o,{type:"primary",onClick:s[2]||(s[2]=e=>p())},{default:l(()=>[t("取消")]),_:1})]),_:1},8,["dialog-visible"])],64)}}}),f=d('<h1 id="对话框" tabindex="-1">对话框 <a class="header-anchor" href="#对话框" aria-hidden="true">#</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-hidden="true">#</a></h2><h3 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-hidden="true">#</a></h3><p>使用 width 属性来设置 Dialog 的大小,dialog-visible 属性设置显示隐藏。 <br></p>',4),_={class:"example"},E=d(`<details class="details custom-block"><summary>显示代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">DtszDialog</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">80%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:dialog-visible</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">DtszDialog</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DtszDialog</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dtsz-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> visible </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">openDialog</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">visible</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h3 id="支持使用插槽作为内容" tabindex="-1">支持使用插槽作为内容 <a class="header-anchor" href="#支持使用插槽作为内容" aria-hidden="true">#</a></h3><p>支持使用插槽加入标题和底部。</p><br>`,4),k={class:"expamle"},z=d(`<details class="details custom-block"><summary>显示代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">DtszDialog</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:dialog-visible</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我是标题</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dtsz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">close()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">确定</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dtsz-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dtsz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">close()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">取消</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dtsz-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">DtszDialog</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DtszDialog</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dtsz-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> visible </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">openDialog</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">visible</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认</th></tr></thead><tbody><tr><td>width</td><td>对话框宽度</td><td>string</td><td>[0%, 100%]</td><td>50%</td></tr><tr><td>dialog-visible</td><td>显示隐藏</td><td>Boolean</td><td></td><td>false</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-hidden="true">#</a></h2><table><thead><tr><th>插槽名</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>自定义内容</td><td>Tips</td></tr><tr><td>footer</td><td>自定义内容</td><td>取消/确认</td></tr></tbody></table>`,5),$=JSON.parse('{"title":"对话框","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[{"level":3,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":3,"title":"支持使用插槽作为内容","slug":"支持使用插槽作为内容","link":"#支持使用插槽作为内容","children":[]}]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"插槽","slug":"插槽","link":"#插槽","children":[]}],"relativePath":"component/dialog.md"}'),q={name:"component/dialog.md"},w=y({...q,setup(A){return(n,r)=>(i(),C("div",null,[f,c("div",_,[c("div",null,[a(m)])]),E,c("div",k,[a(b)]),z]))}});export{$ as __pageData,w as default};