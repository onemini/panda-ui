# 组件总览

::: warning
文档编写中...
:::

<input @keydown="onInput" class="search-ipt" readonly placeholder="搜索组件（暂不可用）" />

<br />
<br />

<div class="overview-box">
  <div class="card">
    <pd-button>hello panda</pd-button>
  </div>
  <div class="card">
    <pd-input />
  </div>
  <div class="card">
    <pd-select :option="['hello', 'panda']" />
  </div>
  <div class="card">
    <pd-switch />
  </div>
  <div class="card">
    <pd-avatar />
  </div>
  <div class="card">
    <pd-tag>hello panda</pd-tag>
  </div>
  <div class="card">
    <pd-checkbox v-model="checkboxValue" label="hello panda" />
  </div>
  <div class="card">
    <pd-tab type="segmented">
      <pd-tab-item label="hello">222</pd-tab-item>
      <pd-tab-item label="panda"></pd-tab-item>
    </pd-tab>
  </div>
</div>

<script setup>

  import { ref } from 'vue'

  const checkboxValue = ref(false)
  const searchVal = ref('')

  const onInput = (e) => {
    console.log(e.target.value, 'v')
  }
</script>

<style>
  .search-ipt {
    width: 100%;
    padding: 14px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-size: 16px;
  }

  .overview-box {
    padding-right: 10px;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(3, 33%);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }
  .card {
    padding: 10px;
    border: 1px solid #dedede;
    border-radius: var(--default-radius);
    transition: ease-in 0.24s;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
  }
</style>
