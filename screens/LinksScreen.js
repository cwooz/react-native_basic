import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Buttton, Icon, SocialIcon } from 'react-native-elements';


export default class LinksScreen extends React.Component {

  static navigationOptions = {
    title: 'Links',
  };

  


  render() {

    const users = [
      {
        name: 'brynn',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      }
    ];
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
          * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />

        <Card title="Card for User">
          {
            users.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image
                    // style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text style={styles.name}>{u.name}</Text>
                </View>
              );
            })
          }
        </Card>

          {/* <SocialIcon
            type='twitter'
          /> */}

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
