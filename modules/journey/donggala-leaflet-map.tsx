"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";

export interface MapFeature {
  id: string;
  name: string;
  village: "towale" | "limboro" | "donggala";
  villageLabel: string;
  category: "Geowisata" | "Wisata Bahari" | "Kriya & Budaya" | "Kuliner & Sagu" | "Pusat Kota";
  lat: number;
  lng: number;
  description: string;
  image?: string;
  href?: string;
  badge: string;
}

export const DONGGALA_FEATURES: readonly MapFeature[] = [
  // Desa Towale
  {
    id: "pusentasi",
    name: "Pusentasi (Pusat Laut)",
    village: "towale",
    villageLabel: "Desa Towale",
    category: "Geowisata",
    lat: -0.7412,
    lng: 119.6895,
    description: "Sumur karst alami raksasa sedalam 7 meter dengan air laut toska jernih yang terhubung ke laut lepas.",
    image: "/images/destinasi/pusat-laut-pusentasi.jpg",
    href: "/desa/towale",
    badge: "Ikon Geowisata",
  },
  {
    id: "tenun-towale",
    name: "Sentra Tenun Buya Sabe",
    village: "towale",
    villageLabel: "Desa Towale",
    category: "Kriya & Budaya",
    lat: -0.7445,
    lng: 119.6948,
    description: "Pusat tenun ikat sutra pusaka Kaili buatan tangan ibu-ibu penenun dengan alat tenun gedongan.",
    image: "/images/destinasi/tenun-buya-sabe-proses.jpg",
    href: "/desa/towale",
    badge: "Kriya Pusaka",
  },
  {
    id: "pantai-bonebula",
    name: "Pantai Bonebula & Atol Karampuana",
    village: "towale",
    villageLabel: "Desa Towale",
    category: "Wisata Bahari",
    lat: -0.7380,
    lng: 119.6860,
    description: "Bentang pasir putih melengkung alami dan gugusan pulau karang karst untuk rekreasi bahari.",
    image: "/images/destinasi/pantai-bonebula-aerial.jpg",
    href: "/desa/towale",
    badge: "Wisata Pantai",
  },
  {
    id: "hiu-paus-spot",
    name: "Spot Megafauna Hiu Paus",
    village: "towale",
    villageLabel: "Desa Towale",
    category: "Wisata Bahari",
    lat: -0.7490,
    lng: 119.6820,
    description: "Titik perjumpaan dengan hiu paus ramah di perairan teluk Donggala bersama pemandu nelayan lokal.",
    image: "/images/destinasi/hiu-paus-donggala.jpg",
    href: "/desa/towale",
    badge: "Fauna Bahari",
  },
  {
    id: "bulava-mpongeo",
    name: "Pusaka Bulava Mpongeo & Masjid Tua",
    village: "towale",
    villageLabel: "Desa Towale",
    category: "Kriya & Budaya",
    lat: -0.7428,
    lng: 119.6955,
    description: "Situs bersejarah peninggalan Raja Kaili serta tonggak penyebaran syiar Islam pesisir barat Donggala.",
    image: "/images/destinasi/bulava-mpongeo-kaili.jpg",
    href: "/desa/towale",
    badge: "Situs Bersejarah",
  },
  {
    id: "homestay-towale",
    name: "Homestay Cottage Kayu Pesisir",
    village: "towale",
    villageLabel: "Desa Towale",
    category: "Wisata Bahari",
    lat: -0.7405,
    lng: 119.6888,
    description: "Cottage A-frame tepi pantai berstandar CHSE dengan pemandangan langsung matahari terbenam Selat Makassar.",
    image: "/images/destinasi/homestay-cottage-depan.jpg",
    href: "/desa/towale",
    badge: "Akomodasi CHSE",
  },

  // Desa Limboro
  {
    id: "pantai-kaluku",
    name: "Pantai Kaluku Limboro",
    village: "limboro",
    villageLabel: "Desa Limboro",
    category: "Wisata Bahari",
    lat: -0.7090,
    lng: 119.6915,
    description: "Lengkung teluk pasir putih lembut dengan deretan pohon kelapa dan perairan dangkal yang tenang.",
    image: "/images/destinasi/pantai-kaluku-limboro.jpg",
    href: "/desa/limboro",
    badge: "Ikon Wisata Pantai",
  },
  {
    id: "snorkeling-limboro",
    name: "Spot Snorkeling Karang Kaluku",
    village: "limboro",
    villageLabel: "Desa Limboro",
    category: "Wisata Bahari",
    lat: -0.7075,
    lng: 119.6890,
    description: "Taman karang dangkal alami yang terjaga, habitat ikan karang warna-warni dan bintang laut biru.",
    image: "/images/destinasi/snorkeling-kaluku.jpg",
    href: "/desa/limboro",
    badge: "Bawah Laut",
  },
  {
    id: "sentra-sagu",
    name: "Sentra Olahan Sagu KWT Sejahtera",
    village: "limboro",
    villageLabel: "Desa Limboro",
    category: "Kuliner & Sagu",
    lat: -0.7160,
    lng: 119.6990,
    description: "Dapur produksi pangan lokal: Dange Tabaro bakar belanga tanah, kue bagea sagu, dan cookies sagu.",
    image: "/images/destinasi/cookies-sagu-limboro.jpg",
    href: "/desa/limboro",
    badge: "Ketahanan Pangan",
  },
  {
    id: "mangrove-limboro",
    name: "Sabuk Hijau Mangrove Limboro",
    village: "limboro",
    villageLabel: "Desa Limboro",
    category: "Geowisata",
    lat: -0.7130,
    lng: 119.6935,
    description: "Hutan bakau alami peredam abrasi Selat Makassar dan area pembibitan kepiting bakau serta pemijahan ikan.",
    image: "/images/destinasi/pantai-kaluku-limboro.jpg",
    href: "/desa/limboro",
    badge: "Konservasi Pesisir",
  },

  // Regional Hub Reference
  {
    id: "donggala-kota",
    name: "Kota Donggala (Kec. Banawa)",
    village: "donggala",
    villageLabel: "Pusat Kabupaten",
    category: "Pusat Kota",
    lat: -0.6738,
    lng: 119.7417,
    description: "Pusat kota administratif dan pelabuhan bersejarah Kabupaten Donggala (±10 km di utara koridor).",
    href: "/desa",
    badge: "Pusat Kabupaten",
  },
];

type FilterType = "semua" | "towale" | "limboro" | "bahari" | "kriya-kuliner";

function getMarkerColor(village: string): { bg: string; border: string; text: string } {
  if (village === "towale") {
    // Elegant deep navy (clean, non-neon)
    return { bg: "#1e3a5f", border: "#0f172a", text: "#ffffff" };
  }
  if (village === "limboro") {
    // Deep slate ocean (clean, non-neon)
    return { bg: "#164e63", border: "#082f49", text: "#ffffff" };
  }
  // Charcoal slate
  return { bg: "#475569", border: "#1e293b", text: "#ffffff" };
}

function createCustomIcon(f: MapFeature): L.DivIcon {
  const color = getMarkerColor(f.village);
  const iconLetter = f.village === "towale" ? "T" : f.village === "limboro" ? "L" : "D";

  const html = `
    <div class="custom-leaflet-pin" style="
      width: 28px;
      height: 28px;
      background: ${color.bg};
      border: 2px solid ${color.border};
      color: ${color.text};
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 700;
      font-size: 11px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    ">
      <span style="transform: rotate(45deg); line-height: 1;">${iconLetter}</span>
    </div>
  `;

  return L.divIcon({
    html,
    className: "leaflet-marker-custom",
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });
}

export function DonggalaLeafletMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  const [activeFilter, setActiveFilter] = useState<FilterType>("semua");

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    const initialCenter: [number, number] = [-0.728, 119.691];
    const initialZoom = 13;

    const map = L.map(mapContainerRef.current, {
      center: initialCenter,
      zoom: initialZoom,
      zoomControl: true,
      minZoom: 10,
      maxZoom: 18,
      scrollWheelZoom: true,
    });

    mapInstanceRef.current = map;

    // OpenStreetMap Tile Layer
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Subtle coastal route corridor line connecting Limboro and Towale (neutral slate)
    const corridorCoords: [number, number][] = [
      [-0.705, 119.692],
      [-0.709, 119.6915],
      [-0.713, 119.6935],
      [-0.720, 119.7018],
      [-0.728, 119.698],
      [-0.738, 119.686],
      [-0.7412, 119.6895],
      [-0.749, 119.682],
    ];

    L.polyline(corridorCoords, {
      color: "#64748b",
      weight: 2,
      opacity: 0.6,
      dashArray: "4, 6",
    }).addTo(map);

    // Markers layer group
    const markersGroup = L.layerGroup().addTo(map);
    markersLayerRef.current = markersGroup;

    // Fit to the Banawa Tengah corridor bounds (Limboro in north, Towale in south)
    map.fitBounds(
      [
        [-0.752, 119.679],
        [-0.704, 119.704],
      ],
      { padding: [35, 35] }
    );

    // Responsive observer to continuously sync tile viewport with container layout
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(mapContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Markers based on filter
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersLayerRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    const filtered = DONGGALA_FEATURES.filter((f) => {
      if (activeFilter === "semua") return true;
      if (activeFilter === "towale") return f.village === "towale";
      if (activeFilter === "limboro") return f.village === "limboro";
      if (activeFilter === "bahari")
        return f.category === "Wisata Bahari" || f.category === "Geowisata";
      if (activeFilter === "kriya-kuliner")
        return f.category === "Kriya & Budaya" || f.category === "Kuliner & Sagu";
      return true;
    });

    filtered.forEach((f) => {
      const marker = L.marker([f.lat, f.lng], { icon: createCustomIcon(f) });

      const popupContent = `
        <div style="font-family: inherit; min-width: 210px; max-width: 250px; padding: 2px;">
          ${
            f.image
              ? `<div style="width: 100%; height: 110px; border-radius: 8px; overflow: hidden; margin-bottom: 8px; background: #f1f5f9;">
                   <img src="${f.image}" alt="${f.name}" style="width: 100%; height: 100%; object-fit: cover;" />
                 </div>`
              : ""
          }
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: #475569; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; letter-spacing: 0.05em;">${f.badge}</span>
            <span style="font-size: 11px; color: #64748b;">${f.villageLabel}</span>
          </div>
          <h4 style="margin: 4px 0 4px 0; font-size: 14px; font-weight: 700; color: #0f172a; line-height: 1.3;">${f.name}</h4>
          <p style="margin: 0 0 8px 0; font-size: 11.5px; color: #475569; line-height: 1.45;">${f.description}</p>
          ${
            f.href
              ? `<a href="${f.href}" style="display: inline-block; font-size: 11.5px; font-weight: 600; color: #0f172a; text-decoration: underline;">Buka Info Desa &rarr;</a>`
              : ""
          }
        </div>
      `;

      marker.bindPopup(popupContent, {
        className: "leaflet-popup-clean",
        maxWidth: 280,
      });

      markersGroup.addLayer(marker);
    });
  }, [activeFilter]);

  function handleFocus(coords: [number, number], zoom: number) {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo(coords, zoom, { duration: 1 });
  }

  return (
    <div className="flex flex-col h-full w-full bg-white text-slate-800">
      {/* Top Filter and Quick Jump Bar - Clean Neutral UI */}
      <div className="p-3 md:px-5 md:py-3 border-b border-slate-200 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-slate-500 font-medium mr-1 hidden sm:inline">Filter:</span>
          {[
            { id: "semua", label: "Semua Titik (11)" },
            { id: "towale", label: "Desa Towale (6)" },
            { id: "limboro", label: "Desa Limboro (4)" },
            { id: "bahari", label: "Bahari & Geowisata" },
            { id: "kriya-kuliner", label: "Kriya & Kuliner" },
          ].map((chip) => (
            <button
              key={chip.id}
              type="button"
              onClick={() => setActiveFilter(chip.id as FilterType)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                activeFilter === chip.id
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Quick Focus Controls */}
        <div className="flex items-center gap-1.5">
          <span className="text-slate-500 font-medium mr-1 hidden md:inline">Fokus:</span>
          <button
            type="button"
            onClick={() => handleFocus([-0.742, 119.691], 14)}
            className="px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-medium transition-colors"
          >
            Towale
          </button>
          <button
            type="button"
            onClick={() => handleFocus([-0.711, 119.694], 14)}
            className="px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-medium transition-colors"
          >
            Limboro
          </button>
          <button
            type="button"
            onClick={() => handleFocus([-0.728, 119.698], 13)}
            className="px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-medium transition-colors"
          >
            Koridor
          </button>
        </div>
      </div>

      {/* Leaflet Map Canvas */}
      <div className="relative flex-1 min-h-[380px] md:min-h-[460px] w-full bg-slate-100">
        <div ref={mapContainerRef} className="absolute inset-0 w-full h-full" />

        {/* Floating Quick Legend - Clean White Card */}
        <div className="absolute bottom-3 left-3 z-[400] bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 shadow-md text-xs text-slate-700 max-w-[220px]">
          <p className="font-bold text-slate-900 mb-1.5">Legenda Peta</p>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1e3a5f]" />
            <span className="text-slate-600 font-medium">Pin T : Desa Towale</span>
          </div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#164e63]" />
            <span className="text-slate-600 font-medium">Pin L : Desa Limboro</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#475569]" />
            <span className="text-slate-600 font-medium">Pin D : Kota Donggala</span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar - Clean Neutral Footer (No Neon) */}
      <div className="px-5 py-3 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <MapPin size={13} className="text-slate-400" />
          <span>Kecamatan Banawa Tengah, Kabupaten Donggala, Sulawesi Tengah</span>
        </div>
        <div>
          <span>Data Spasial: OpenStreetMap (OSM) · Leaflet</span>
        </div>
      </div>
    </div>
  );
}
