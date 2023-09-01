# 快速上手

<!-- <img width="80" style="margin-top: 40px" src="/panda-ui/panda.gif" /> -->

## 安装

```bash
npm install panda-ui
```

## 引入

```js{4,5}
import { createApp } from 'vue'
import App from './app.vue'

import panda from 'panda-ui'
import 'panda/lib/index.css'

createApp(App).use(panda).mount('#app')

// or

import { PdButton } from 'pdun-ui'
app.use(PdButton)
```

## 使用

```html
<pd-space>
  <pd-button>按 钮</pd-button>
  <pd-button pdun></pd-button>
</pd-space>
```

## 效果

<pd-space>
  <pd-button>按 钮</pd-button>

  <pd-button>
    <img width="30" src="https://onemini.github.io/panda-ui/panda.gif" />
  </pd-button>
</pd-space>
