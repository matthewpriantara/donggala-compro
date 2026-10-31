import { ShieldCheck, Phone, ArrowUpRight } from "lucide-react";
import { PORTAL, EMERGENCY_CONTACTS } from "@/constants/helper";
export function ContactSection() {
  return (
    <section id="kedaruratan" className="sand-section">
      <div className="wrap section">
        <div className="emergency-heading">
          <ShieldCheck size={40} strokeWidth={1.3} />
          <div>
            <p className="eyebrow">{PORTAL.emergencyEyebrow}</p>
            <h2>{PORTAL.emergencyTitle}</h2>
          </div>
        </div>
        <p className="emergency-intro">{PORTAL.emergencyText}</p>
        <div className="emergency-grid">
          {EMERGENCY_CONTACTS.map((contact) => (
            <a
              href={`tel:${contact.number}`}
              className="emergency-card"
              key={contact.number}
            >
              <Phone size={18} />
              <strong>{contact.number}</strong>
              <span>{contact.label}</span>
              <small>{contact.note}</small>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
        <div className="safety-advice">
          <p>{PORTAL.emergencyAdvice}</p>
          <p>{PORTAL.emergencyLocal}</p>
        </div>
      </div>
    </section>
  );
}
