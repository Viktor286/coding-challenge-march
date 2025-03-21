# CLAUDE.md - Space Travel Booking Platform 🚀

## CRITICAL DIRECTIVE
**Development Workflow Sequence**:

1. Write code with proper types and documentation
2. Format code with `pnpm format` or/and `pnpm lint:fix`
3. Run `pnpm lint` and `pnpm typecheck` to verify correctness
4. Run type checking: `pnpm typecheck`

**MANDATORY QA CHECK AFTER EVERY FEATURE**:

⚠️ **ABSOLUTELY CRITICAL** ⚠️
After implementing any new feature or making any significant changes:
1. Run `pnpm project:autofix` to automatically fix formatting and linting issues
2. Run `pnpm project:qa` to verify project quality
3. If any errors occur, they MUST be fixed before proceeding to the next feature
4. Continue fixing errors until `pnpm project:qa` passes successfully
5. As a final step, always add new files you've created into git stage

**Complete Build and Validation Process**:
1. Code Implementation
    - Write code following TypeScript best practices
    - Use path aliases for imports (`@/...`)
    - Follow established code style guidelines

2. Final Validation
    - `pnpm build` - verify successful production build

## TypeScript and Module System

- **TypeScript Only**: All code MUST be written in TypeScript (.ts/.tsx files)
- **ESM Modules**: We use ESM modules exclusively (import/export syntax)
- **No CommonJS**: Do not use require/module.exports anywhere in the codebase

### Path Aliases

- **All Code**: Use `@/*` path alias for imports from src directory
    - Example: `import { Button } from '@/components/ui/Button';`

- **Configuration**:
    - The project uses `"type": "module"` in package.json
    - Path aliases are configured in tsconfig.json

## Project Overview

Modern accessible cross-platform online course website with secure users and payment system.
The learning experience is gamified and has an achievements' system.

## Core Principles
- **Mobile First**: Responsive design optimized for all device sizes
- **Accessibility First**: WCAG 2.1 AA compliance throughout
- **Component Isolation**: Well-encapsulated components with clean interfaces
- **Code Quality**: Adherence to SOLID and GRASP principles

## Stack
- Next.js 15 (App Router)
- Tailwind CSS version 3
- TypeScript
- pnpm

## Directory Exclusions

When searching or listing files, always exclude:

- node_modules/
- .next/
- .git/
- .cache/
- build/
- dist/
- .DS_Store
- \*.log
- .env
- .env.\*
- .idea/
- .vscode/

## Search Patterns
- When using GlobTool, prefer targeted patterns like "src/**/\*.ts" instead of "**/\*.ts"
- When using GrepTool, exclude patterns by targeting specific directories
- Use precise directory targeting:
    - For components: search in src/components
    - For pages: search in src/app
    - For features: search in src/features
    - For utilities: search in src/utils
- Avoid searching in:
    - Generated files (_.generated._)
    - Build artifacts
    - Third-party code
    - Log files
- When conducting broad searches, always scope to src/ directory when possible

## Common Commands

⚠️ **IMPORTANT: NEVER RUN THESE COMMANDS IN CLAUDE CODE TERMINAL** ⚠️
- ❌ NEVER run: `pnpm dev` - This will hang the Claude Code terminal
- ❌ NEVER run: `pnpm start` - This will hang the Claude Code terminal
- ❌ NEVER run: `pnpm project:hard-start` - This will hang the Claude Code terminal

✅ **SAFE COMMANDS TO RUN**
- Build: `pnpm build`
- Lint: `pnpm lint`
- Lint & fix: `pnpm lint:fix`
- Format: `pnpm format`
- Format check: `pnpm format:check`
- Typecheck: `pnpm typecheck`

## Code Style Preferences
- Use functional components with hooks
- Use absolute imports with '@/' prefix
- Follow feature-based folder structure rather than type-based
- Keep components small and focused
- Use atomic design principles (atoms, molecules)
- Employ strict TypeScript with proper typing

## TypeScript Best Practices
- **Avoid `any` type**: Always use proper types instead of `any`
    - Use `unknown` when the type is truly not known
    - Use type guards to narrow unknown types
    - Create proper interfaces and types for complex objects
- **Use readonly** for immutable properties
- **Define explicit return types** for non-trivial functions
- **Use discriminated unions** instead of type casting
- **Prefer interfaces** over type aliases for object shapes
- **Use type predicates** for custom type guards

## Linting and Formatting

### ESLint Configuration

- Next.js and TypeScript ESLint rules are enforced
- Accessibility (jsx-a11y) rules are enabled
- Import order is enforced (builtin → external → internal)
- Console statements are restricted (only warn/error/info allowed)
- No unused variables (except those prefixed with `_`)
- Explicit return types required for functions
- Custom rules for test files to allow certain patterns

### Prettier Configuration

- Single quotes for strings
- 2-space indentation
- 100 character line length limit
- Semicolons required
- Trailing commas in objects and arrays
- Uses Tailwind CSS plugin for class sorting
- All files formatted consistently on save
- EditorConfig ensures consistent formatting across editors

## Architecture

- Presentation layer (UI components)
- Application layer (business logic)
- Domain layer (core business entities)
- Infrastructure layer (API clients, storage)

## State Management with Zustand

- Zustand Best Practices:
- Keep stores small and focused on specific domains
- Use TypeScript for strong typing of store state and actions
- Implement selectors for derived state
- Use middleware for persistence or logging as needed
- Test store operations thoroughly

## Accessibility Guidelines

- Semantic HTML structure
- Keyboard navigation and focus management
- Screen reader compatibility with ARIA attributes
- Proper color contrast ratios
- Text resizing without breaking layouts
- Skip to content links
- Focus indicators
- Image alt text
- Form error handling
- Reduced motion options
- Proper heading hierarchy

## Performance Considerations

- Server Components for static content
- Client Components for interactive elements
- Implement Streaming and Suspense for loading states
- Use Next.js Image component for optimized images
- Implement proper code splitting
