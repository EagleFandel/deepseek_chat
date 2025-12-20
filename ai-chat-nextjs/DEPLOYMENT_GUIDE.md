# Vercel部署指南

## 快速部署步骤

### 方法一：通过Vercel CLI（推荐）

1. **安装Vercel CLI**：
```bash
npm i -g vercel
```

2. **登录Vercel**：
```bash
vercel login
```

3. **在项目目录中部署**：
```bash
cd ai-chat-nextjs
vercel
```

4. **按照提示操作**：
   - 选择账户/团队
   - 确认项目名称
   - 确认项目设置

### 方法二：通过GitHub集成（推荐）

1. **访问 [Vercel Dashboard](https://vercel.com/dashboard)**

2. **点击 "New Project"**

3. **导入GitHub仓库**：
   - 选择 `https://github.com/EagleFandel/test.git`
   - 选择 `ai-chat-nextjs` 目录作为根目录

4. **配置项目设置**：
   - **Framework Preset**: Next.js
   - **Root Directory**: `ai-chat-nextjs`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

## 环境变量配置

在Vercel Dashboard中配置以下环境变量：

### 必需的环境变量：
```
INFINI_AI_API_KEY=your_actual_api_key_here
INFINI_AI_BASE_URL=https://cloud.infini-ai.com/maas/v1
INFINI_AI_MODEL=deepseek-v3.2-exp
```

### 可选的环境变量：
```
NEXT_PUBLIC_APP_NAME=AI聊天助手
NEXT_PUBLIC_APP_VERSION=1.0.0
NODE_ENV=production
```

## 部署配置优化

项目已包含优化的 `vercel.json` 配置：

```json
{
  "functions": {
    "src/app/api/*/route.ts": {
      "maxDuration": 30
    }
  },
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    }
  ]
}
```

## 部署后验证

1. **检查部署状态**：访问Vercel提供的部署URL
2. **测试聊天功能**：发送测试消息
3. **检查API端点**：访问 `https://your-app.vercel.app/api/chat`
4. **查看日志**：在Vercel Dashboard中查看函数日志

## 常见问题解决

### 1. API密钥错误
- 确保在Vercel Dashboard中正确设置了 `INFINI_AI_API_KEY`
- 检查API密钥是否有效

### 2. 构建失败
- 检查依赖是否正确安装
- 查看构建日志中的错误信息

### 3. API超时
- 检查 `vercel.json` 中的 `maxDuration` 设置
- 考虑优化API调用逻辑

### 4. 环境变量不生效
- 确保环境变量名称正确
- 重新部署以应用新的环境变量

## 自动部署

配置完成后，每次推送到GitHub的main分支都会自动触发Vercel部署。

## 监控和日志

- **实时日志**：Vercel Dashboard > Functions > View Function Logs
- **分析数据**：Vercel Dashboard > Analytics
- **性能监控**：Vercel Dashboard > Speed Insights

## 域名配置（可选）

1. 在Vercel Dashboard中点击项目
2. 进入 "Settings" > "Domains"
3. 添加自定义域名
4. 按照提示配置DNS记录