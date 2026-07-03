# Reusable Configurable AG Grid Demo

A React application demonstrating how to build a reusable and configurable AG Grid component using dynamic column definitions and tabs.

## Features

* React with AG Grid
* Reusable grid component
* Configurable tabs
* Reusable column definitions
* Dynamic column rendering
* Pagination
* Sorting
* Column filtering
* Responsive column sizing
* Clean and scalable project structure

## Project Structure

```text
src/
│
├── components/
│   └── ReusableGrid.jsx
│
├── config/
│   ├── commonColumns.js
│   └── tabsConfig.js
│
├── data/
│   └── sampleData.js
│
├── App.jsx
└── main.jsx
```

## How It Works

The application contains multiple tabs.

Each tab displays the same AG Grid component but with a different set of columns.

Instead of defining columns separately for every tab, all column definitions are created once in `commonColumns.js`.

Each tab only specifies the columns it wants to display.

Example:

```javascript
export const tabs = [
  {
    id: "tab1",
    title: "Tab 1",
    columnKeys: ["c1", "c2", "c3", "c4"],
  },
  {
    id: "tab2",
    title: "Tab 2",
    columnKeys: ["c1", "c4"],
  },
];
```

The selected tab dynamically maps the column keys to reusable AG Grid column definitions.

```javascript
const columnDefs = selectedTab.columnKeys.map(
  (key) => columns[key]
);
```

## Tab Configuration

| Tab   | Columns        |
| ----- | -------------- |
| Tab 1 | c1, c2, c3, c4 |
| Tab 2 | c1, c4         |
| Tab 3 | c3, c4         |
| Tab 4 | c2, c3, c4     |

Adding a new tab only requires updating the configuration file.

## Installation

Clone the repository.

```bash
git clone <repository-url>
```

Navigate to the project.

```bash
cd <project-name>
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open the application in your browser.

```text
http://localhost:3000
```

## Technologies Used

* React
* AG Grid Community
* JavaScript
* Vite

## Why This Approach?

This project follows a configuration-driven architecture.

Benefits include:

* No duplicate column definitions
* Highly reusable components
* Easy to add new tabs
* Easy to maintain
* Scalable for enterprise applications
* Separation of data, configuration, and UI


