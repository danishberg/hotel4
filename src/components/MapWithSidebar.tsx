'use client';

import { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
import type { Service } from '@/mockData';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

// ── fix default icon urls ─────────────────────────────────────────────────────
// define the small interface we need
interface IconDefaultPrototype {
  _getIconUrl?: string;
}

// cast to that instead of `any`
delete (L.Icon.Default.prototype as IconDefaultPrototype)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl:       '/marker-icon.png',
  shadowUrl:     '/marker-shadow.png',
});

// ── force the map to recalc its size whenever the container mounts ────────────
function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

// ── fly the map to a new position on demand ───────────────────────────────────
function FlyToMarker({ position }: { position: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 12, { duration: 1 });
  }, [map, position]);
  return null;
}

// ── listen for global "flyTo" events ─────────────────────────────────────────
function FlyToListener() {
  const map = useMap();
  useEffect(() => {
    const handler = (e: CustomEvent<[number, number]>) => {
      map.flyTo(e.detail, 12, { duration: 1 });
    };
    window.addEventListener('flyTo', handler as EventListener);
    return () => window.removeEventListener('flyTo', handler as EventListener);
  }, [map]);
  return null;
}

// ── main component ────────────────────────────────────────────────────────────
interface Props {
  services: Service[];
  selected: Service | null;
  onSelect: (svc: Service) => void;
  onBook: (svc: Service) => void;
}

export default function MapWithSidebar({
  services,
  selected,
  onSelect,
  onBook,
}: Props) {
  // default center over Kazakhstan
  const center: [number, number] = [48.0196, 66.9237];

  return (
    <MapContainer
      center={center}
      zoom={5}
      scrollWheelZoom
      className="h-full w-full"
    >
      <ResizeMap />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MarkerClusterGroup chunkedLoading>
        {services.map((svc) => (
          <Marker
            key={svc.id}
            position={[svc.lat, svc.lng]}
            eventHandlers={{ click: () => onSelect(svc) }}
          >
            <Popup>
              <div className="space-y-2">
                <h4 className="font-semibold">{svc.title}</h4>
                <p className="text-sm text-gray-600">{svc.location}</p>
                <p className="text-indigo-600 font-semibold">${svc.price}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => onSelect(svc)}
                    className="flex-1 border border-gray-300 py-1 text-sm rounded hover:bg-gray-100"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onBook(svc)}
                    className="flex-1 bg-indigo-600 text-white py-1 text-sm rounded hover:bg-indigo-500"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      {selected && <FlyToMarker position={[selected.lat, selected.lng]} />}
      <FlyToListener />
    </MapContainer>
  );
}
