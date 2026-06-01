import { CASES, COLUMNS } from '../data/cases';
import {
  IconChart,
  IconChevronDown,
  IconGear,
  IconGrid,
  IconInbox,
  IconList,
  IconPlus,
  IconSearch,
  IconSliders,
  IconSupportSymbol,
} from './icons';
import CaseCard from './CaseCard';

const FILTERS = ['Assignee', 'Channel', 'Category', 'More filters'];

function GlobalNav() {
  return (
    <nav className="global-nav" aria-label="Global navigation">
      <div className="global-nav__logo">
        <img src="/assets/logo.png" alt="Jack Henry" width={36} height={32} />
      </div>

      <div className="global-nav__items">
        <button type="button" className="global-nav__item global-nav__item--active" aria-label="Inbox">
          <IconInbox />
        </button>
        <button type="button" className="global-nav__item" aria-label="Insights">
          <IconChart />
        </button>
      </div>

      <div className="global-nav__avatar">
        <img src="/assets/avatar-sophia.png" alt="" width={24} height={24} />
      </div>
    </nav>
  );
}

function LocalNav() {
  return (
    <header className="local-nav">
      <div className="local-nav__left">
        <IconSupportSymbol />
        <span className="local-nav__title">Support</span>
      </div>

      <div className="local-nav__actions">
        <button type="button" className="icon-button" aria-label="Settings">
          <IconGear />
        </button>
        <button type="button" className="button button--secondary">
          <IconPlus />
          <span>New case</span>
        </button>
      </div>
    </header>
  );
}

function FilterBar() {
  return (
    <div className="filter-bar">
      <label className="search-input">
        <IconSearch />
        <input type="search" placeholder="Search" aria-label="Search cases" />
      </label>

      <div className="filter-bar__controls">
        <div className="view-toggle" role="group" aria-label="View type">
          <button type="button" className="view-toggle__btn view-toggle__btn--active" aria-label="Board view" aria-pressed="true">
            <IconGrid />
          </button>
          <button type="button" className="view-toggle__btn" aria-label="List view" aria-pressed="false">
            <IconList />
          </button>
        </div>

        {FILTERS.map((filter) => (
          <button key={filter} type="button" className="filter-link">
            <span>{filter}</span>
            <IconChevronDown />
          </button>
        ))}
      </div>

      <button type="button" className="icon-button filter-bar__settings" aria-label="Filter settings">
        <IconSliders />
      </button>
    </div>
  );
}

function KanbanColumn({ column }) {
  const cards = CASES.filter((item) => item.columnId === column.id);

  return (
    <section className="kanban-column" aria-label={column.label}>
      <header className="kanban-column__header">
        <h2>{column.label}</h2>
        <span className="count-badge">{column.count}</span>
      </header>

      <div className="kanban-column__cards">
        {cards.map((caseData) => (
          <CaseCard key={caseData.id} caseData={caseData} />
        ))}
      </div>
    </section>
  );
}

export default function SupportQueue() {
  return (
    <div className="support-app">
      <GlobalNav />

      <div className="support-main">
        <LocalNav />

        <main className="support-content">
          <div className="page-header">
            <h1 className="page-title">My cases</h1>
            <IconChevronDown />
          </div>

          <FilterBar />

          <div className="kanban-board">
            {COLUMNS.map((column) => (
              <KanbanColumn key={column.id} column={column} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
