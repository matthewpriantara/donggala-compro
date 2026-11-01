import {
  Card,
  CardHeader,
  CardTitle,
  CardPanel,
  CardDescription,
} from "@/components/ui/card";
import styles from "./contact-section.module.css";
import { ShieldCheck, Phone, ArrowUpRight } from "lucide-react";
import { PORTAL, EMERGENCY_CONTACTS } from "@/constants/helper";
export function ContactSection() {
  return (
    <section id="kedaruratan" className="sand-section">
      <div className="wrap section">
        <div className="emergency-heading">
          <div>
            <p className="eyebrow">{PORTAL.emergencyEyebrow}</p>
            <h2>{PORTAL.emergencyTitle}</h2>
          </div>
        </div>
        <p className="emergency-intro">{PORTAL.emergencyText}</p>
        <div className="emergency-grid">
          {EMERGENCY_CONTACTS.map((contact) => (
            <Card
              render={<a href={`tel:${contact.number}`} />}
              className={styles.card}
              key={contact.number}
            >
              <CardHeader className={styles.header}>
                <Phone size={20} aria-hidden="true" />
                <CardTitle render={<strong />} className={styles.number}>
                  {contact.number}
                </CardTitle>
                <ArrowUpRight
                  size={20}
                  className={styles.arrow}
                  aria-hidden="true"
                />
              </CardHeader>
              <CardPanel className={styles.panel}>
                <p className={styles.label}>{contact.label}</p>
                <CardDescription className={styles.note}>
                  {contact.note}
                </CardDescription>
              </CardPanel>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
