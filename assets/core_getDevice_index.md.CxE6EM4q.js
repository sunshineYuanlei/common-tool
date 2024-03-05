import{_ as n,c as t,o,m as e}from"./chunks/framework.CnawAwWB.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"core/getDevice/index.md","filePath":"core/getDevice/index.md","lastUpdated":1709643112000}'),r={name:"core/getDevice/index.md"},s=e("pre",null,[e("code",null,`---
category: UA
---

# getDevice
用于从 User-Agent(用户代理数据) 中解析出 \`设备类型与供应商\`，在浏览器（客户端）或 node.js（服务器端）中使用。

## Usage

\`\`\` ts
  import { getDevice } from "@vmejs/core"

  const browser = getDevice()

  // do something
\`\`\`

## 文档

### 参数 [ua]：可选]

-   浏览器（客户端）中使用 [ua可选]

    \`\`\`
      import { getDevice } from "@vmejs/core"
      // 未带参数
      const browser = getDevice()

      // 使用参数
      const browser = getDevice(window.navigator.userAgent)
    \`\`\`

-   node.js（服务器端）中使用 [ua必传]

    \`\`\`
      import http from 'http'
      import { getDevice } from "@vmejs/core"

      http.createServer(function (req, res) {
          // get user-agent header
          const browser = getDevice(req.headers['user-agent']);

          // write the result as response
          res.end(JSON.stringify(ua, null, '  '));
      })
      .listen(3000, '127.0.0.1');
    \`\`\`

### 返回值：\`{model: '', vendor: ''}\`

-   device.model：常见设备类型

    \`\`\`
    # Chrome/其它
    pc

    # ios/android/平板
    mobile
    \`\`\`

-   device.vendor：常见供应商

    \`\`\`
    # mobile 常见供应商：
    Samsung, Apple, Coogle, Huawei, Xiaomi, OPPO, Vivo

    # 其它
    other
    \`\`\`
`)],-1),i=[s];function c(a,d,m,g,l,p){return o(),t("div",null,i)}const h=n(r,[["render",c]]);export{u as __pageData,h as default};
