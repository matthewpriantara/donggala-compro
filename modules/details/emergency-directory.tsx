import { ArrowUpRight } from "lucide-react";
import { EMERGENCY_CONTACTS } from "@/constants/helper";
import styles from "./emergency-directory.module.css";

/** Compact contact directory for the detail route; the landing banner is separate. */
export function EmergencyDirectory() {
  return (
    <ul className={styles.directory}>
      {EMERGENCY_CONTACTS.map((contact) => (
        <li key={contact.number}>
          <a href={`tel:${contact.number}`}>
            <strong>{contact.number}</strong>
            <span>
              {contact.label}
              <small>{contact.note}</small>
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
