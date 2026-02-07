# Application Design & Implementation Details

## Tech Stack

### Core Technologies
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Component Library:** Material-UI (MUI)
- **HTTP Client:** Axios

### Library Choices & Rationale

#### Material-UI (MUI)
- Provides production-ready React components out-of-the-box
- Built-in WCAG accessibility compliance
- Consistent design system with minimal configuration
- Reduces development time for standard UI patterns (Table, TextField, Select, Modal)

#### Axios
- Clean API for HTTP requests
- Built-in interceptor support for centralized error handling
- Better TypeScript integration compared to native fetch
- Simplified request/response transformation

## Architecture & Design Patterns

### Component Structure
The application follows a **component-based architecture** with clear separation of concerns:

**Main Component:** `SportsLeagues.tsx`
- Orchestrates the entire feature
- Manages application state (leagues data, search term, sport filter)
- Handles initial API call on component mount
- Computes filtered leagues using `useMemo` for performance
- Passes filtered data down to presentation components

**Child Components:**
- `SearchBar.tsx` - Controlled input with debounced search
- `SportFilter.tsx` - Dropdown for sport type filtering
- `LeagueList.tsx` - Table display with clickable rows
- `SeasonBadgeModal.tsx` - Modal for displaying season badges

### State Management
- **Local component state** using React hooks (`useState`, `useEffect`)
- **Computed state** with `useMemo` for filtered leagues
- **Props drilling** for small component tree (sufficient for current scope)
- **Future consideration:** Context API or state management library for larger applications

### Performance Optimizations

#### 1. Debounced Search
- Custom `useDebounce` hook with 300ms delay
- Prevents excessive filtering operations during typing
- Improves performance and user experience

#### 2. Memoized Filtering
- `useMemo` hook for filtered leagues computation
- Recalculates only when dependencies change (leagues, search, selectedSports)
- Avoids unnecessary re-renders

#### 3. API Response Caching
- Custom `MemoryCache` class implementation
- Key-based caching for season badge API responses
- Prevents redundant network calls for previously viewed leagues

**Cache Implementation:**
```typescript
class MemoryCache<T> {
  - Simple Map-based in-memory storage
  - Generic type support for reusability
  - Basic operations: get, set, delete, clear
}
```

**Current Limitations:**
- No expiration/TTL mechanism
- No async operation handling
- No concurrent request deduplication
- No loading state management

**Production Recommendation:** Use React Query or SWR for:
- Automatic background refetching
- Cache invalidation strategies
- Loading/error state management
- Request deduplication
- Optimistic updates

## Project Structure

```
src/
├── api/                          # API layer
│   ├── cache/
│   │   └── memoryCache.ts        # Generic cache implementation
│   ├── interceptors/
│   │   └── failureResponseHandler.ts  # Axios error handling
│   ├── leagues.api.ts            # All leagues API
│   └── season.badge.api.ts       # Season badge API with caching
│
├── components/                    # UI components
│   ├── sportsLeagues/            # Feature-specific components
│   │   ├── SportsLeagues.tsx     # Main orchestrator
│   │   ├── LeagueList.tsx        # Table display
│   │   ├── SportFilter.tsx       # Dropdown filter
│   │   └── SeasonBadgeModal.tsx  # Badge modal
│   └── SearchBar.tsx             # Shared search component
│
├── hooks/                         # Custom React hooks
│   └── useDebounce.ts            # Debounce hook for search
│
└── App.tsx                        # Application entry point
```

### Design Principles
1. **Feature-based organization** - Related components grouped together
2. **Separation of concerns** - API, UI, and utilities isolated
3. **Single responsibility** - Each component serves one purpose
4. **Scalability** - Structure supports growth (future additions: pages/, services/, utils/)


## Styling Approach

### CSS-in-JS with MUI
- Used MUI's `sx` prop for component styling
- Inline styles for simplicity and speed
- Consistent with MUI design system

### Current Implementation
```typescript
const tableRowStyle = {
  cursor: "pointer",
  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }
}
```

### Time Trade-offs
Given the 90-minute constraint, prioritized:
- ✅ Functionality over visual polish
- ✅ Clean code structure
- ⚠️ Minimal CSS organization

### Future Enhancement
For production:
- Separate CSS modules or styled-components
- Theming system for consistent colors/spacing
- CSS organization following BEM or similar methodology
- Design tokens for maintainability

## Time Breakdown

**Total Time:** ~100 minutes

## Known Limitations & Future Enhancements

### Current Limitations (due to time constraints)

2. **No error handling UI** - Errors logged to console only(Added interceptor without implementation)
3. **Basic styling** - Functional but minimal visual design
4. **No pagination** - All leagues loaded at once
5. **No unit tests** - Production would require test coverage

### Recommended Enhancements
1. **State Management:** React Query or Zustand for complex state
2. **Error Boundaries:** Graceful error handling with user feedback
4. **Testing:** Jest + React Testing Library for component tests
5. **Accessibility:** Full keyboard navigation and screen reader support
6. **Performance:** Virtual scrolling for large datasets
7. **CSS Architecture:** Styled-components or CSS modules with organized structure



The solution is **fully functional and runnable**, meeting all core requirements. Time was optimized for product logic and clean architecture, with acknowledgment of areas that would receive more attention in a production environment.