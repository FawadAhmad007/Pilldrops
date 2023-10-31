const getBaseUrl = staging => {
  if (staging) {
    return 'STAGING_BASE_URL_HERE';
  }
  return 'PRODUCTION_BASE_URL_HERE';
};

export default CONSTANTS = {
  SCREEN_NAME: {
    Login: 'Login',
    AllRoutes: 'AllRoutes',
    DeliveryTeam: 'DeliveryTeam',
    OrderPickupScan: 'OrderPickupScan',
    CameraScanner: 'CameraScanner',
    AllOrders: 'AllOrders',
    RouteDetails: 'RouteDetails',
    PharmacyChats: 'PharmacyChats',
    RouteName: "RouteName"
  },
  // Endpoints below
  ENDPOINT: {},
  BASE_URL: getBaseUrl(true),
};

export const DRAWER_DATA = [
  {
    title: 'PillDrop Delivery Team',
    route: CONSTANTS.SCREEN_NAME.DeliveryTeam,
  },
  {
    title: 'Package Pickup Scan',
    data: [
      {
        title: 'Pickup from pharmacy',
        route: CONSTANTS.SCREEN_NAME.OrderPickupScan,
      },
      {
        title: 'Pickup from Facility',
        route: CONSTANTS.SCREEN_NAME.OrderPickupScan,
      },
      {
        title: 'Direct Dispatch',
        route: CONSTANTS.SCREEN_NAME.OrderPickupScan,
        changeColor: true,
      },
    ],
  },
  {
    title: 'Routes',
    data: [
      { title: 'Today’s Routes', route: 'SCREEN NAME HERE' },
      { title: 'All Routes', route: CONSTANTS.SCREEN_NAME.AllRoutes },
      { title: 'Routes Report', route: 'SCREEN NAME HERE' },
    ],
  },
  {
    title: 'Delivery Reports',
    data: [
      { title: 'All Orders   (Weekly Batch)', route: CONSTANTS.SCREEN_NAME.AllOrders },
      { title: 'My Orders  (Weekly Batch)', route: 'SCREEN NAME HERE' },
      { title: 'Weekly Invoice', route: 'SCREEN NAME HERE' },
    ],
  },
  {
    title: 'Settings',
    route: 'SCREEN NAME HERE',
  },
  {
    title: 'Contact Us',
    route: 'SCREEN NAME HERE',
  },
  {
    title: 'Logout',
  },
];
