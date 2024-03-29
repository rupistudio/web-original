import addons from '__data/services/addons.json';
import bodyWaxing from '__data/services/body-waxing.json';
import chemicalPeels from '__data/services/chemical-peels.json';
import facials from '__data/services/facials.json';
import iplHairRemoval from '__data/services/ipl-hair-removal.json';
import laserHairRemoval from '__data/services/laser-hair-removal.json';
import lipo from '__data/services/lipo.json';
import MensWaxing from '__data/services/mens-waxing.json';
import options from '__data/services/options.json';
import threading from '__data/services/threading.json';
import tinting from '__data/services/tinting.json';
import waxing from '__data/services/waxing.json';

const serviceKeys = {
  threading: 'threading',
  'face-waxing': 'face-waxing',
  waxing: 'waxing',
  tinting: 'tinting',
  facials: 'facials',
  other: 'other',
};

export type ExtendedPricing = {
  title: string;
  price: number;
};

export type SimpleServiceWithExtendedPricing = {
  title: string;
  slug: string;
  pricing: ExtendedPricing[];
};

export type ServiceDetails = {
  title: string;
  slug: string;
  description: string;
  price: number | string;
};

export type DefaultDataWithDescriptions = {
  title: string;
  slug: string;
  description: string[];
  disclaimer: string[];
  services: ServiceDetails[];
};

export type MinimalData = Omit<ServiceDetails, 'slug'> & { service: string };

export type AddonsDetails = DefaultDataWithDescriptions & {
  offers: MinimalData[];
};

export type DataWithExtendedPricing = Omit<
  DefaultDataWithDescriptions,
  'services'
> & {
  services: SimpleServiceWithExtendedPricing[];
};

export type ServiceOptions = Record<
  keyof typeof serviceKeys,
  { options: string[] }
>;

const exports = {
  categories: {
    'hair-removal': {
      threading: threading as DefaultDataWithDescriptions,
      'ipl-hair-removal': iplHairRemoval as DefaultDataWithDescriptions,
      'laser-hair-removal': laserHairRemoval as DefaultDataWithDescriptions,
    },
    facials: facials as DefaultDataWithDescriptions,
    tinting: tinting as DefaultDataWithDescriptions,
    waxing: {
      'face-waxing': waxing as DefaultDataWithDescriptions,
      'body-waxing': bodyWaxing as DefaultDataWithDescriptions,
      'mens-waxing': MensWaxing as DefaultDataWithDescriptions,
    },
    other: {
      'chemical-peels': chemicalPeels as DefaultDataWithDescriptions,
      lipo: lipo as DataWithExtendedPricing,
    },
  },
  addons: addons as AddonsDetails,
  options: options as ServiceOptions,
};

export type ServicesExport = typeof exports;
export type ServicesExportKeys = keyof ServicesExport;

export default exports;
