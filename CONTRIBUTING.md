# 贡献指南

感谢你关注 `deepseek_chat`。本指南用于统一 issue、分支、提交和 PR 流程，帮助我们高效协作。

## 提交 Issue 前检查

提交 issue 前请先确认：

- 已搜索现有 Issues，避免重复提交。
- 能稳定复现问题，并记录最小复现步骤。
- 已提供环境信息（操作系统、Node.js 版本、浏览器版本）。
- 已附上必要日志或截图（请勿包含密钥、Token、Cookie）。

## 分支规范

请从 `main` 创建分支并按以下命名：

- `feature/<short-description>`: 新功能
- `fix/<short-description>`: 缺陷修复
- `docs/<short-description>`: 文档改动
- `chore/<short-description>`: 依赖或构建类改动

示例：`feature/chat-markdown-copy`、`fix/api-timeout-handle`

## 提交规范

推荐使用 Conventional Commits（非强制），便于后续追踪和自动化：

- `feat: add message retry button`
- `fix: handle empty api response`
- `docs: update deployment links`

## 本地检查命令

提交前请至少完成与你改动相关的检查：

### `ai-chat-frontend`

```bash
cd ai-chat-frontend
npm run test:run
npm run build
```

### `ai-chat-nextjs`

```bash
cd ai-chat-nextjs
npm run lint
npm run build
```

## Pull Request 要求

请在 PR 描述中包含：

- 变更背景与目标。
- 关联 issue（如 `Closes #123`）。
- 测试结果（命令输出、截图或关键日志）。
- 潜在风险与回滚思路。

合并前请确认：

- 改动范围清晰且最小化。
- 不引入明文密钥或敏感信息。
- 文档与配置改动已同步更新。

## 安全相关问题

如果你发现安全漏洞，请不要在公开 issue 中披露细节。请先阅读 [SECURITY.md](./SECURITY.md) 并按其中流程上报。
