import '@jack-henry/jh-icons/icons-wc/icon-inbox.js';
import '@jack-henry/jh-icons/icons-wc/icon-chart-bar.js';
import '@jack-henry/jh-icons/icons-wc/icon-gear.js';
import '@jack-henry/jh-icons/icons-wc/icon-plus.js';
import '@jack-henry/jh-icons/icons-wc/icon-magnifying-glass.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-down-small.js';
import '@jack-henry/jh-icons/icons-wc/icon-sliders.js';
import '@jack-henry/jh-icons/icons-wc/icon-messages.js';
import '@jack-henry/jh-icons/icons-wc/icon-document.js';
import '@jack-henry/jh-icons/icons-wc/icon-grid.js';
import '@jack-henry/jh-icons/icons-wc/icon-list-ul.js';

function iconClass(size, className) {
  return ['jh-icon', `jh-icon--${size}`, className].filter(Boolean).join(' ');
}

export function IconInbox({ className, ...props }) {
  return <jh-icon-inbox className={iconClass(20, className)} {...props} />;
}

export function IconChart({ className, ...props }) {
  return <jh-icon-chart-bar className={iconClass(20, className)} {...props} />;
}

export function IconGear({ className, ...props }) {
  return <jh-icon-gear className={iconClass(20, className)} {...props} />;
}

export function IconPlus({ className, ...props }) {
  return <jh-icon-plus className={iconClass(20, className)} {...props} />;
}

export function IconSearch({ className, ...props }) {
  return <jh-icon-magnifying-glass className={iconClass(18, className)} {...props} />;
}

export function IconChevronDown({ className, ...props }) {
  return <jh-icon-chevron-down-small className={iconClass(18, className)} {...props} />;
}

export function IconGrid({ className, ...props }) {
  return <jh-icon-grid className={iconClass(18, className)} {...props} />;
}

export function IconList({ className, ...props }) {
  return <jh-icon-list-ul className={iconClass(18, className)} {...props} />;
}

export function IconSliders({ className, ...props }) {
  return <jh-icon-sliders className={iconClass(18, className)} {...props} />;
}

export function IconMessages({ className, ...props }) {
  return <jh-icon-messages className={iconClass(16, className)} {...props} />;
}

export function IconDocument({ className, ...props }) {
  return <jh-icon-document className={iconClass(16, className)} {...props} />;
}

export function IconSupportSymbol(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M6 4.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v11.5c0 .8-.9 1.3-1.6.9L12 14.5 7.6 17.4c-.7.4-1.6-.1-1.6-.9V4.5z"
        fill="#7B6CF6"
      />
      <path
        d="M9 8.5h6M9 11h4"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
