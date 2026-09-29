export const PRODUCT_LINKS = [
  { label: 'Rail Weigh Bridges', to: '/products/rail-weigh-bridges' },
  { label: 'Road Weigh Bridges', to: '/products/road-weigh-bridges' },
  { label: 'Unmanned Weigh Bridge', to: '/products/unmanned-weigh-bridge' },
  { label: 'Spare Parts & Accessories', to: '/products/spare-parts' },
  { label: 'On Board Weighing System', to: '/products/on-board-weighing' },
  { label: 'Belt Weighing System', to: '/products/belt-weighing' },
  { label: 'Bin / Tank Weighing System', to: '/products/bin-tank-weighing' },
];

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Product Division', children: PRODUCT_LINKS },
  { label: 'Software Division', to: '/software-division' },
  { label: 'Download', to: '/download' },
  { label: 'Contact', to: '/contact' },
];