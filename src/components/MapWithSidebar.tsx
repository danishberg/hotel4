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
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/img/marker-icon-2x.png',
  iconUrl: '/img/marker-icon.png',
  shadowUrl: '/img/marker-shadow.png',
});

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  imageUrl: string;
  hostName: string;
  rating: number;
  location: string;
  lat: number;
  lng: number;
}

interface Props {
  services: Service[];
  selected: Service | null;
  onSelect: (s: Service) => void;
  onBook: (s: Service) => void;
}

function InvalidateMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
    const onResize = () => map.invalidateSize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [map]);
  return null;
}

function FlyToMarker({ position }: { position: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 12, { duration: 1 });
  }, [map, position]);
  return null;
}

function FlyToListener() {
  const map = useMap();
  useEffect(() => {
    const h = (e: any) => {
      const [lat, lng] = e.detail as [number, number];
      map.flyTo([lat, lng], 12, { duration: 1 });
    };
    window.addEventListener('flyTo', h);
    return () => window.removeEventListener('flyTo', h);
  }, [map]);
  return null;
}

export default function MapWithSidebar({
  services,
  selected,
  onSelect,
  onBook,
}: Props) {
  const center: [number, number] = [48.0196, 66.9237];

  return (
    <MapContainer
      center={center}
      zoom={5}
      scrollWheelZoom
      style={{ width: '100%', height: '100%' }}
    >
      <InvalidateMap />
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