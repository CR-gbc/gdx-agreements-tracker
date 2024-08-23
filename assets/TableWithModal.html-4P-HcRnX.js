import{_ as n,o as a,c as s,a as t}from"./app-gCSRladW.js";const p={},o=t(`<h1 id="tablewithmodal-component" tabindex="-1"><a class="header-anchor" href="#tablewithmodal-component"><span>TableWithModal Component</span></a></h1><p>The <code>TableWithModal</code> component renders a table with a modal dialog box. It uses hooks to manage state and fetch data from API endpoints.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><ul><li><code>tableConfig</code>: The configuration for the table.</li><li><code>formControls</code>: The controls for the form.</li><li><code>formConfig</code>: The configuration for the form.</li><li><code>tableName</code>: The name of the table.</li><li><code>tableDataApiEndPoint</code>: The API endpoint for the table data.</li><li><code>formDataApiEndpoint</code>: The API endpoint for the form data.</li><li><code>handleRowDoubleClick</code>: The function to call when a row is double-clicked.</li></ul><h2 id="hooks-used" tabindex="-1"><a class="header-anchor" href="#hooks-used"><span>Hooks Used</span></a></h2><ul><li><code>useFormSubmit</code>: Manages form submission, including handling deletes.</li><li><code>useFormatTableData</code>: Formats table data from the API endpoint.</li></ul><h2 id="components-used" tabindex="-1"><a class="header-anchor" href="#components-used"><span>Components Used</span></a></h2><ul><li><code>Table</code>: Renders the table component.</li><li><code>FormRenderer</code>: Renders the form component.</li><li><code>FormDialog</code>: Renders the modal dialog for the form.</li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> LinearProgress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@mui/material&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IRowDoubleClickParams<span class="token punctuation">,</span> ITableWithModal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Table <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../Table&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FormRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;components/Forms/FormRenderer&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GridRowParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@mui/x-data-grid&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFormSubmit<span class="token punctuation">,</span> useFormatTableData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;hooks&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> FormDialog <span class="token keyword">from</span> <span class="token string">&quot;components/Forms/FormDialog&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> TableWithModal <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  tableConfig<span class="token punctuation">,</span>
  formControls<span class="token punctuation">,</span>
  formConfig<span class="token punctuation">,</span>
  tableName<span class="token punctuation">,</span>
  tableDataApiEndPoint<span class="token punctuation">,</span>
  formDataApiEndpoint<span class="token punctuation">,</span>
  <span class="token function-variable function">handleRowDoubleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">params</span><span class="token operator">:</span> IRowDoubleClickParams</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    formControls<span class="token punctuation">.</span><span class="token function">handleCurrentRowData</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>
    formControls<span class="token punctuation">.</span><span class="token function">handleOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> ITableWithModal<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">JSX</span><span class="token punctuation">.</span><span class="token parameter">Element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> handleDelete <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFormSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleTableNewButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    formControls<span class="token punctuation">.</span><span class="token function">handleFormType</span><span class="token punctuation">(</span><span class="token string">&quot;new&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    formControls<span class="token punctuation">.</span><span class="token function">handleOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> tableData <span class="token operator">=</span> <span class="token function">useFormatTableData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">apiEndPoint</span><span class="token operator">:</span> tableDataApiEndPoint<span class="token punctuation">,</span>
    tableName<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleRowClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">params</span><span class="token operator">:</span> GridRowParams</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    formControls<span class="token punctuation">.</span><span class="token function">handleCurrentRowData</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> deleteUrl <span class="token operator">=</span> tableData<span class="token punctuation">.</span>isLoading
    <span class="token operator">?</span> <span class="token function">formConfig</span><span class="token punctuation">(</span>formControls<span class="token punctuation">.</span>currentRowData<span class="token operator">?.</span>id<span class="token punctuation">)</span><span class="token operator">?.</span>deleteUrl
    <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> tableData<span class="token punctuation">.</span>isLoading <span class="token operator">?</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LinearProgress</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Table</span></span>
        <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>tableData<span class="token operator">?.</span>data<span class="token operator">?.</span>rows<span class="token punctuation">}</span></span>
        <span class="token attr-name">tableConfig</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>tableConfig<span class="token punctuation">}</span></span>
        <span class="token attr-name">handleRowDoubleClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleRowDoubleClick<span class="token punctuation">}</span></span>
        <span class="token attr-name">handleRowClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleRowClick<span class="token punctuation">}</span></span>
        <span class="token attr-name">handleTableNewButton</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleTableNewButton<span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FormDialog</span></span>
        <span class="token attr-name">open</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formControls<span class="token punctuation">.</span>open<span class="token punctuation">}</span></span>
        <span class="token attr-name">handleClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formControls<span class="token punctuation">.</span>handleClose<span class="token punctuation">}</span></span>
        <span class="token attr-name">deleteUrl</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>deleteUrl <span class="token keyword">as</span> string<span class="token punctuation">}</span></span>
        <span class="token attr-name">handleDelete</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleDelete<span class="token punctuation">}</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FormRenderer</span></span>
          <span class="token attr-name">formControls</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formControls<span class="token punctuation">}</span></span>
          <span class="token attr-name">tableName</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>tableName<span class="token punctuation">}</span></span>
          <span class="token attr-name">formConfig</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formConfig<span class="token punctuation">}</span></span>
          <span class="token attr-name">formDataApiEndpoint</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formDataApiEndpoint<span class="token punctuation">}</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FormDialog</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),e=[o];function c(l,i){return a(),s("div",null,e)}const r=n(p,[["render",c],["__file","TableWithModal.html.vue"]]),k=JSON.parse('{"path":"/guide/Frontend/react_components/TableWithModal.html","title":"TableWithModal Component","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Hooks Used","slug":"hooks-used","link":"#hooks-used","children":[]},{"level":2,"title":"Components Used","slug":"components-used","link":"#components-used","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"git":{"contributors":[{"name":"André Lashley","email":"andre.lashley@gmail.com","commits":1}]},"filePathRelative":"guide/Frontend/react_components/TableWithModal.md"}');export{r as comp,k as data};