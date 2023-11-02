import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerPD from '../Components/DrawerPD';
import { Constants } from '../Utils';
import {
  AllOrders,
  AllRoutes,
  CameraScanner,
  DeliveryTeam,
  OrderPickupScan,
  RouteDetails,
} from '../Screens';
import PharmacyChats from '../Screens/PharmacyChats';
import RouteName from '../Screens/RouteName';
import UpdateDeliveryStatus from '../Screens/UpdateDeliveryStatus';

const PostAuthDrawer = createDrawerNavigator();

const PreAuth = () => {
  const { SCREEN_NAME } = Constants;
  return (
    <PostAuthDrawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: 'white' },
        drawerType: 'front',
      }}
      drawerContent={props => <DrawerPD {...props} />}>
      {/* <PostAuthDrawer.Screen
        name={SCREEN_NAME.UpdateDeliveryStatus}
        component={UpdateDeliveryStatus}
      /> */}

      <PostAuthDrawer.Screen
        name={SCREEN_NAME.RouteName}
        component={RouteName}
      />

      <PostAuthDrawer.Screen
        name={SCREEN_NAME.AllRoutes}
        component={AllRoutes}
      />
      <PostAuthDrawer.Screen
        name={SCREEN_NAME.DeliveryTeam}
        component={DeliveryTeam}
      />
      <PostAuthDrawer.Screen
        name={SCREEN_NAME.OrderPickupScan}
        component={OrderPickupScan}
      />
      <PostAuthDrawer.Screen
        name={SCREEN_NAME.AllOrders}
        component={AllOrders}
      />
      <PostAuthDrawer.Screen
        name={SCREEN_NAME.CameraScanner}
        component={CameraScanner}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <PostAuthDrawer.Screen
        name={SCREEN_NAME.RouteDetails}
        component={RouteDetails}
      />
      <PostAuthDrawer.Screen
        name={SCREEN_NAME.PharmacyChats}
        component={PharmacyChats}
      />
    </PostAuthDrawer.Navigator>
  );
};

export default PreAuth;
