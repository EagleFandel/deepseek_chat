# AI聊天助手 - Next.js版本

基于Next.js 16构建的现代AI聊天应用，集成了Infini AI的DeepSeek-v3.2-exp模型。

## 🚀 快速开始

### 本地开发

1. **克隆项目**：
```bash
git clone https://github.com/EagleFandel/deepseek_chat.git
cd deepseek_chat/ai-chat-nextjs
```

2. **安装依赖**：
```bash
npm install
```

3. **配置环境变量**：
```bash
cp .env.example .env.local
# 编辑 .env.local 添加你的API密钥
```

4. **启动开发服务器**：
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 部署到Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/EagleFandel/deepseek_chat&project-name=ai-chat-nextjs&repository-name=deepseek_chat&root-directory=ai-chat-nextjs)

或者按照 [部署指南](./DEPLOYMENT_GUIDE.md) 手动部署。

## ✨ 功能特性

- 🤖 **AI智能对话**：集成DeepSeek-v3.2-exp模型
- 🎨 **现代UI设计**：响应式设计，支持深色/浅色主题
- 🔄 **智能降级**：API不可用时自动切换到备用响应
- ⚡ **高性能**：基于Next.js 16和React 19
- 📱 **移动友好**：完美适配各种设备
- 🛡️ **类型安全**：完整的TypeScript支持
- 🎯 **错误处理**：完善的错误捕获和用户提示

## 🛠️ 技术栈

- **框架**：Next.js 16
- **UI库**：React 19
- **样式**：Tailwind CSS 4
- **动画**：Framer Motion
- **图标**：Lucide React
- **语言**：TypeScript
- **部署**：Vercel

## 📁 项目结构

```
ai-chat-nextjs/
├── src/
│   ├── app/                 # App Router
│   │   ├── api/chat/       # API路由
│   │   ├── globals.css     # 全局样式
│   │   └── page.tsx        # 主页面
│   ├── components/         # React组件
│   ├── hooks/             # 自定义Hooks
│   ├── types/             # TypeScript类型
│   └── utils/             # 工具函数
├── public/                # 静态资源
├── .env.example          # 环境变量示例
└── vercel.json           # Vercel配置
```

## 🔧 环境变量

创建 `.env.local` 文件并配置以下变量：

```env
# Infini AI配置
INFINI_AI_API_KEY=your_api_key_here
INFINI_AI_BASE_URL=https://cloud.infini-ai.com/maas/v1
INFINI_AI_MODEL=deepseek-v3.2-exp

# 应用配置
NEXT_PUBLIC_APP_NAME=AI聊天助手
NEXT_PUBLIC_APP_VERSION=1.0.0
```

## 🚀 部署

### Vercel（推荐）

1. Fork这个仓库
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 设置根目录为 `ai-chat-nextjs`
4. 配置环境变量
5. 部署！

### 其他平台

项目支持部署到任何支持Next.js的平台：
- Netlify
- Railway
- Render
- AWS Amplify

## 📖 API文档

### POST /api/chat

发送消息到AI助手。

**请求体**：
```json
{
  "message": "你好，请介绍一下自己"
}
```

**响应**：
```json
{
  "message": "AI助手的回复内容",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request。详细流程请参阅 [贡献指南](../CONTRIBUTING.md)。

## 📄 许可证

本项目采用 MIT 许可证，详见 [../LICENSE](../LICENSE)。

## 🔗 相关链接

- [Next.js文档](https://nextjs.org/docs)
- [Vercel部署指南](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Infini AI](https://cloud.infini-ai.com)
