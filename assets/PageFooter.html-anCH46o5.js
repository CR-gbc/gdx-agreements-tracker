import{_ as a,o as n,c as e,a as s}from"./app-gCSRladW.js";const t={},o=s(`<h1 id="pagefooter" tabindex="-1"><a class="header-anchor" href="#pagefooter"><span>PageFooter</span></a></h1><p>The <code>PageFooter</code> component is a React component that represents the footer of a page. It utilizes the Material-UI (MUI) library for styling and includes information such as the version number.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>The <code>PageFooter</code> component is designed to be used as the footer at the bottom of a page. It includes the version number from the <code>package.json</code> file. It does not take any additional props.</p><h2 id="styling" tabindex="-1"><a class="header-anchor" href="#styling"><span>Styling</span></a></h2><p>The <code>PageFooter</code> component utilizes Material-UI <code>AppBar</code> and <code>Typography</code> components for its structure and styling. It has the following styling specifications:</p><ul><li>Position: Fixed at the bottom of the page.</li><li>Background Color: <code>#fff</code></li><li>Text Color: <code>#000</code></li><li>Height: <code>35px</code></li><li>Typography Styles: Text aligned to the right, with a margin set to &quot;auto&quot; and a width of &quot;99vw&quot;.</li></ul><h2 id="default-behavior" tabindex="-1"><a class="header-anchor" href="#default-behavior"><span>Default Behavior</span></a></h2><p>The <code>PageFooter</code> component renders a fixed-positioned footer at the bottom of the page, displaying the version number.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PageFooter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./PageFooter&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Import the PageFooter component</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* Your page content goes here */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PageFooter</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),p=[o];function i(l,c){return n(),e("div",null,p)}const d=a(t,[["render",i],["__file","PageFooter.html.vue"]]),u=JSON.parse('{"path":"/guide/Frontend/react_components/Layout/PageFooter.html","title":"PageFooter","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Styling","slug":"styling","link":"#styling","children":[]},{"level":2,"title":"Default Behavior","slug":"default-behavior","link":"#default-behavior","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"contributors":[{"name":"André Lashley","email":"andre.lashley@gmail.com","commits":1}]},"filePathRelative":"guide/Frontend/react_components/Layout/PageFooter.md"}');export{d as comp,u as data};