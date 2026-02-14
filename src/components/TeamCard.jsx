export default function TeamCard({ member }) {
  return (
    <article className="team-card">
      <div className="team-avatar">
        <img src={member.image} alt={`${member.name} - ${member.role}`} />
      </div>
      <div className="team-content">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        {member.socials?.length ? (
          <div className="team-socials" aria-label={`${member.name} social links`}>
            {member.socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                <i className={s.iconClass} />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

