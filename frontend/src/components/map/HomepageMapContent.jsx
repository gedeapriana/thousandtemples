import 'leaflet/dist/leaflet.css';
import destinationImage from '../../assets/images/temp-destinations.webp';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../css/homepagemap.css';
import Link from '../Link';

const HomepageMapContent = ({ destinations }) => {
  const data = {
    dark: {
      url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}',
      attribution:
        '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
    light: {
      url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}',
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a>`,
    },
    centerPosition: [-8.409518, 115.188919],
  };

  return (
    <div className="w-full h-[30rem] my-3 rounded-2xl overflow-hidden">
      <MapContainer center={data.centerPosition} zoom={9}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          minZoom={9}
        />

        {destinations.map((destination, index) => {
          return (
            <>
              <Marker position={destination.map}>
                <Popup>
                  <div
                    className="w-full aspect-video rounded-lg bg-cover"
                    style={{
                      backgroundImage: `url(${destinationImage})`,
                    }}
                  ></div>
                  <h1 className="text-base mt-2 mb-1 font-bold m-0 p-0">
                    {destination.title}
                  </h1>
                  {destination.description}
                  <a
                    href={destination.slug}
                    className="block text-center font-semibold bg-violet-500 py-2 my-2 px-3 rounded-lg"
                    style={{ color: '#fff' }}
                  >
                    Details
                  </a>
                </Popup>
              </Marker>
            </>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default HomepageMapContent;
