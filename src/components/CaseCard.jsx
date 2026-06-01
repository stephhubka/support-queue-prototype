import { IconDocument, IconMessages } from './icons';

function UrgencyDot({ urgency }) {
  return <span className={`urgency-dot urgency-dot--${urgency}`} aria-hidden />;
}

function ChannelTag({ channel, variant }) {
  return (
    <span className={`channel-tag channel-tag--${variant}`}>
      {variant === 'chat' ? <IconMessages /> : <IconDocument />}
      <span>{channel}</span>
    </span>
  );
}

function Avatar({ initials, avatar, outline }) {
  if (avatar) {
    return (
      <img
        className="case-card__avatar case-card__avatar--photo"
        src={avatar}
        alt=""
      />
    );
  }

  if (outline) {
    return <span className="case-card__avatar case-card__avatar--outline" aria-hidden />;
  }

  return (
    <span className="case-card__avatar case-card__avatar--initials" aria-hidden>
      {initials}
    </span>
  );
}

export default function CaseCard({ caseData }) {
  return (
    <article className="case-card">
      <header className="case-card__header">
        <Avatar
          initials={caseData.initials}
          avatar={caseData.avatar}
          outline={caseData.outline}
        />
        <h3 className="case-card__customer">{caseData.customer}</h3>
      </header>

      {caseData.company ? (
        <p className="case-card__company">{caseData.company}</p>
      ) : null}

      <p className="case-card__preview">{caseData.preview}</p>

      <footer className="case-card__footer">
        <ChannelTag channel={caseData.channel} variant={caseData.channelVariant} />
        <div className="case-card__time">
          <UrgencyDot urgency={caseData.urgency} />
          <span>{caseData.updated}</span>
        </div>
      </footer>
    </article>
  );
}
