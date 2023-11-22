import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/themed";
import React, { useRef, useEffect, useState } from "react";
import { Dimensions, FlatList, StatusBar, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import RouteNameCard from "../../Components/RouteNameCard";
import RouteNameHeader from "../../Components/RouteNameHeader/Header";
import Geolocation from "react-native-geolocation-service";
import images from "../../assets/images";
import MapViewDirections from "react-native-maps-directions";
import { mvs } from "../../config/metrices";
import SairaBold from "../../typography/SairaBold-text";
import SairaText from "../../typography/saira-text";
import { styles } from "./style";
import { Constants } from "../../Utils";
import { useSelector } from "react-redux";
import { googleMapKey } from "../../api/googleMapKey";

const Design = ({ }) => {
  const today = new Date();
  const [bottomSheetStatus, setBottomSheetStatus] = useState(0);
  const navigation = useNavigation();
  const { SCREEN_NAME } = Constants;
  const { routes } = useSelector((state) => state.routes);
  const mapRef = useRef();
  const data = [
    {
      id: "lad9d9d",
      PharmacyName: "Pharmacy Name",
      name: "Ceballos Natividad",
      OrderID: "01-00064",
      phone: "(718) 955 4856",
      cell: "(718) 955 4856",
      tel: "(718) 955 4856",
      Address: "2611 Webster avenue, bronx, ny 10453",

      chatType: "Chat Open",
      StartedAt: "10-12-2023  11:45 pm",
      By: "Leticia Hernandez",
      delivered: "45 C",
      distance: 3.5,
    },
    {
      id: "lad9d9d",
      PharmacyName: "Pharmacy Name",
      name: "SERRANO, MARIA",
      MEDISERV: "MEDISERV PHARMACY",
      phone: "(718) 955 4856",
      cell: "(718) 955 4856",
      tel: "(718) 955 4856",
      Address: "2611 Webster avenue, bronx, ny 10453",

      chatType: "Chat Open",
      StartedAt: "10-12-2023  11:45 pm",
      By: "Leticia Hernandez",
      delivered: "45 C",
      distance: 1.5,
    },
    {
      id: "lad9d9d",
      PharmacyName: "Pharmacy Name",
      name: "SERRANO, MARIA",
      MEDISERV: "MEDISERV PHARMACY",
      phone: "(718) 955 4856",
      cell: "(718) 955 4856",
      tel: "(718) 955 4856",
      Address: "2611 Webster avenue, bronx, ny 10453",

      chatType: "Chat Open",
      StartedAt: "10-12-2023  11:45 pm",
      By: "Leticia Hernandez",
      delivered: "45 C",
      distance: 1.5,
    },
    {
      id: "lad9d9d",
      PharmacyName: "Pharmacy Name",
      name: "SERRANO, MARIA",
      MEDISERV: "MEDISERV PHARMACY",
      phone: "(718) 955 4856",
      cell: "(718) 955 4856",
      tel: "(718) 955 4856",
      Address: "2611 Webster avenue, bronx, ny 10453",

      chatType: "Chat Open",
      StartedAt: "10-12-2023  11:45 pm",
      By: "Leticia Hernandez",
      delivered: "45 C",
      distance: 1.5,
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <RouteNameHeader title={"Route Name"} showBtn />,
    });
  }, [navigation]);

  const renderMarkers = () => {
    return routes.orders.map((order, index) => (
      console.log("items...", order.order.latitude),
      <Marker
        key={order.id}
        coordinate={{
          latitude: parseFloat(order.order.latitude),
          longitude: parseFloat(order.order.longitude),
        }}
        title={order.order.name}
        description={order.order.address}
      >
        <>
          {/* Add index + 1 to start numbering from 1 instead of 0 */}
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 15,
              padding: 5,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#A20000",
              borderWidth: 1,
            }}
          >
            <SairaBold
              label={(index + 1).toString()}
              fw={"700"}
              size={12}
              color={"#000"}
            />
          </View>
          <Image
            source={images.Oval}
            style={{ width: mvs(30), height: mvs(30) }}
            resizeMode="contain"
          />
        </>
      </Marker>
    ));
  };

  const renderItem = ({ item, index }) => {
    return (
      <RouteNameCard
        items={item}
        index={index}
        onPresUpdate={() =>
          navigation.navigate(SCREEN_NAME.UpdateDeliveryStatus)
        }
      />
    );
  };

  return (
    <>
      <StatusBar backgroundColor={"#fff"} />
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        style={{ height: "90%", width: Dimensions.get("screen").width }}
        showsMyLocationButton={false}
        initialRegion={{
          latitude: 31.582045,
          longitude: 74.329376,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {renderMarkers()}
        <MapViewDirections
          origin={routes.orders}
          waypoints={routes.orders.slice(1, -1).map((order) => order.order)}
          destination={routes.orders[routes.orders.length - 1].order}
          apikey={googleMapKey}
          strokeWidth={3}
          strokeColor="#A20000"
          onReady={(result) => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                left: 30,
                top: 40,
                bottom: 60,
              },
            });
          }}
        />
      </MapView>

      <BottomSheet
        index={0}
        snapPoints={["25%", "80%"]}
        onChange={(index) => setBottomSheetStatus(index)}
        style={{ backgroundColor: "#0B6699" }}
        backgroundStyle={{ backgroundColor: "#0B6699" }}
      >
        {bottomSheetStatus == 1 && (
          <View
            style={{
              width: "100%",
              borderRadius: mvs(7),
              backgroundColor: "#fff",
              flexDirection: "row",
              padding: mvs(4),
            }}
          >
            {/* ... (existing code) */}
          </View>
        )}
        <BottomSheetFlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          style={{
            width: "100%",
            flex: 1,
            marginTop: mvs(8),
            backgroundColor: "0B6699",
          }}
          data={routes.orders}
          renderItem={renderItem}
        />
      </BottomSheet>
    </>
  );
};
export default Design;
