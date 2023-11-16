import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TextInput } from 'react-native';
import { AllRoutesCard, Header } from '../../Components';
import styles from './styles';
import { formatDate } from '../../Utils/Helpers/Helpers';
import { useDispatch, useSelector } from 'react-redux';
import { getRoutes, getAllRoutes } from '../../redux';
import { Constants } from '../../Utils';

const AllRoutes = ({ navigation }) => {
  const { allRoutes } = useSelector((state) => state.routes);

  const dispatch = useDispatch()
  const today = new Date();
  useEffect(() => {
    dispatch(getAllRoutes({}))
  }, [])

  const [data, setData] = useState(allRoutes);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header title={'All Routes'} onChangeText={handleSearch} />,
    });
  }, [navigation]);

  const onPressItem = (item) => {
    dispatch(getRoutes({}, item.id))
    navigation.navigate(Constants.SCREEN_NAME.RouteDetails)
  }

  const renderAllRoutesCard = ({ item }) => (

    <AllRoutesCard
      item={item}
      onPressItem={onPressItem}

    />
  );

  const searchArray = (text) => {
    return allRoutes.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.id.toString().includes(text) ||
        item.address.toLowerCase().includes(text.toLowerCase())
    );
  };

  const handleSearch = (text) => {
    console.log("text", text)
    setSearchTerm(text);
    setData(text ? searchArray(text) : allRoutes);
  };

  return (
    <View
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={{ flex: 1, backgroundColor: 'white' }}
    >
      {/* <TextInput
        style={styles.searchInput}
        placeholder="Search by name, ID, or address"
        onChangeText={handleSearch}
        value={searchTerm}
      /> */}
      <Text style={styles.dateTxt}>{formatDate(today)}</Text>
      <FlatList
        data={searchTerm ? data : allRoutes}
        bounces={false}
        renderItem={renderAllRoutesCard}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default AllRoutes;
