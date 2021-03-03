# vanilla-prism

vanilla prism 是一个简易使用 prismjs 的库

## Use

1. 使用主题

```js
import { usePrismTheme, Prism } from "vanilla-prism";

// 可用主题：
// "gitbook"
// "solarized"
// "tomorrow"
// "coy"
// "dark"
// "thin-dark"
// "default"
// "okaidia"
// "twilight"
// "darcula"

usePrismTheme("default");
```

2. 确保 `<code />` 标签 class 有 highlight 和 language-语言 类, 如:

```html
<pre><code class="highlight language-js"></code></pre>
```

3. 在 code 标签已经加入 DOM 之后，执行:

```js
Prism.highlightAll();
```
