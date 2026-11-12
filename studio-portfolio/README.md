# Personal Project Showcase App

A small React (Vite) app based on the provided mock-up: an "Add Project" form, a search box and a list of projects. New projects are kept in React state, so they reset when the page is refreshed.

## Run
```bash
npm install
npm run dev      # start the dev server
npm test         # Jest + React Testing Library
npm run build    # production build
```

## Task 1: Problem analysis
The mock-up has four parts: a header, an Add Project form (title, description, Add button), a search box, and a list of projects (thumbnail, title, description). The data that changes is the list of projects and the search text.

## Task 2: Component tree and data flow
```
App                      state: projects, searchText
├── Header
├── ProjectForm          props: onAddProject   (own state: title, description, error)
└── section.panel
    ├── SearchBar        props: searchText, onSearchChange
    └── ProjectList      props: projects (already filtered)
        └── ProjectCard  props: project
```
- `App` owns `projects` and `searchText` because it is the closest parent of the form, the search bar and the list.
- The form keeps its own input state and sends the finished project up with `onAddProject`.
- `filterProjects` (in `utils`) is a plain function: give it the projects and the search text, get back the matches.

## Folders
`src/components`, `src/hooks` (empty for now), `src/utils`, `src/data`, `src/styles`, `src/__tests__`

## Maintaining
- Starting projects live in `src/data/initialProjects.js`.
- To add a field (for example an image URL), add it to `ProjectForm` and show it in `ProjectCard`.
