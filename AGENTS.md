# AGENTS.md - vue-sortable-tree

This document provides guidelines and commands for agentic coding agents working in this repository.

## Build, Lint, and Test Commands

### Core Commands
```bash
npm run dev          # Start development server with Vite
npm run build        # Build for production (type check + bundle)
npm run preview      # Preview production build locally
```

### Type Checking
```bash
npx vue-tsc -b              # Build-mode type check (incremental)
npx vue-tsc --noEmit        # Full type check without building
npx vue-tsc src/            # Type check specific directory
```

### Library Build
The project uses Vite's library mode for bundling. The build outputs:
- `./dist/vue-sortable-tree.js` (ES module)
- `./dist/vue-sortable-tree.umd.cjs` (CommonJS)
- `./dist/vue-sortable-tree.css` (styles)

## Code Style Guidelines

### TypeScript Configuration
- **Strict Mode**: Always enabled (`strict: true`)
- **No Unused Code**: `noUnusedLocals: true` and `noUnusedParameters: true`
- **Erasable Syntax**: Prefer type inference over explicit annotations where possible
- **No Unchecked Side Effects**: `noUncheckedSideEffectImports: true`

### Vue 3 Component Structure

#### Script Setup
- Use `<script setup lang="ts">` for all components
- Prefer Composition API over Options API
- Use `defineProps` and `defineEmits` with TypeScript generics
- Keep logic minimal and composable

#### Template
- Use kebab-case for HTML attributes and props
- Avoid complex expressions in templates; move to script
- Use `v-bind` and `v-on` shorthand (`@`, `:`) consistently

#### Styles
- Always use `scoped` attribute for component-specific styles
- Follow BEM-like naming for complex selectors
- Keep styles at component level; avoid global styles

### Import Conventions

#### Vue Imports
```typescript
import { ref, computed, onMounted } from 'vue'
import type { PropType } from 'vue'
```

#### Absolute Imports
Configure via `tsconfig.app.json` paths:
```typescript
import SortableTree from '@/components/SortableTree/index.vue'
```

#### Import Order
1. Vue framework imports
2. Type imports (`import type`)
3. Third-party library imports
4. Relative imports (`.`, `..`)
5. Alias imports (`@/`)

### Naming Conventions

#### Components
- File names: PascalCase (`SortableTree.vue`)
- Component definition: PascalCase
- Web component tags: kebab-case (`<sortable-tree>`)

#### Props
- Definition: camelCase in `defineProps<{ myProp: string }>`
- Usage: kebab-case in templates (`<component my-prop="value">`)
- Boolean props: prefixed with `is`, `has`, `can` (`isExpanded`, `hasChildren`)

#### Events
- Use kebab-case in templates
- Define with string literals in `defineEmits`
- Consider verb-noun pattern: `node-moved`, `item-selected`

#### Variables and Functions
- Variables and functions: camelCase (`items`, `handleDrag`)
- Constants: SCREAMING_SNAKE_CASE for global constants
- Private/internal: prefix with underscore `_internalState`

### Type Definitions

#### Type Syntax
Prefer TypeScript erasable syntax:
```typescript
// Preferred
const count = ref(0)           // inferred as Ref<number>
const name = ref<string>()     // explicit generic

// Avoid when possible
const count: Ref<number> = ref(0)
```

#### Interface vs Type
- Use `interface` for object types that may be extended
- Use `type` for unions, intersections, and primitives
- Export complex types from dedicated files: `types/index.ts`

#### Generics
- Use descriptive generic parameter names (`T`, `K`, `V` for specific contexts)
- Constrain generics when behavior depends on structure

### Error Handling

#### Try-Catch
- Wrap async operations in try-catch blocks
- Provide meaningful error messages
- Consider error boundaries for component-level errors

```typescript
try {
  await loadTreeData()
} catch (error) {
  console.error('Failed to load tree:', error)
  emit('error', error)
}
```

#### Validation
- Validate props using TypeScript and runtime checks
- Use computed properties for derived state validation

### File Organization

```
src/
├── SortableTree/
│   └── index.vue        # Main component
├── main.ts              # Re-exports
├── types/
│   └── index.ts         # Shared type definitions
└── utils/
    └── index.ts         # Shared utilities
```

### Additional Recommendations

#### Testing
- Configure Vitest for unit testing
- Add Playwright or Cypress for E2E testing
- Target 80%+ code coverage

#### Linting
- Add ESLint with `plugin:vue/vue3-recommended`
- Add Prettier for consistent formatting
- Configure Husky for pre-commit hooks

#### Git Workflow
- Use conventional commits (`feat:`, `fix:`, `docs:`)
- Create feature branches from `main`
- Require PR reviews before merging

### IDE Configuration
- Use **Vue.volar** extension for VS Code
- Enable "Take Over Mode" in Volar
- Configure format on save with Prettier
