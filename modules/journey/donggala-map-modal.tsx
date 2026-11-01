"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Compass } from "lucide-react";
import { Dialog, DialogPopup, DialogTitle } from "@/components/ui/dialog";
import styles from "./donggala-map-modal.module.css";

const DonggalaLeafletMap = dynamic(
  () => import("./donggala-leaflet-map").then((mod) => mod.DonggalaLeafletMap),
  {
    ssr: false,
    loading: () => (
      <div className={styles.loading}>Memuat peta OpenStreetMap...</div>
    ),
  },
);
interface DonggalaMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function DonggalaMapModal({ isOpen, onClose }: DonggalaMapModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const lenis = window.__lenis;
    lenis?.stop();
    return () => {
      lenis?.start();
    };
  }, [isOpen]);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogPopup
        className={styles.popup}
        bottomStickOnMobile={false}
        closeProps={{ "aria-label": "Tutup peta" }}
      >
        <div className={styles.heading}>
          <Compass size={22} aria-hidden="true" />
          <DialogTitle>Peta Wilayah Donggala</DialogTitle>
        </div>
        <div className={styles.map} data-lenis-prevent>
          <DonggalaLeafletMap />
        </div>
      </DialogPopup>
    </Dialog>
  );
}
