import React, { Component } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, StatusBar, ScrollView, FlatList, Modal, } from 'react-native';
import { Fab, View, Text, Container, Header, Title, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true,
      modalVisible: false,
      idData: 0,
      dummyCategory: [
        {
          name: 'personal',
          color: '#2577fa'
        },
        {
          name: 'Work',
          color: '#2FC2DF'
        },
        {
          name: 'Wishlist',
          color: '#ff05e2'
        }
      ],
      dummyData: [
        {
          id: 1,
          date: '27 June',
          title: 'Lifecycle',
          category: 'Work',
          note: 'the stages in the lifespan of a commercial',
          color: '#2FC2DF'
        },
        {
          id: 2,
          date: '28 June',
          title: 'Work',
          category: 'Wishlist',
          note: 'Component Did Mount, Component Will Unmount',
          color: '#ff05e2'
        },
        {
          id: 3,
          date: '28 June',
          title: 'Wishlist',
          category: 'Work',
          note: 'Component Did Mount, Component Will Unmount',
          color: '#ebdb34'
        },
        {
          id: 4,
          date: '28 June',
          title: 'Lifecycle',
          category: 'Work',
          note: 'the process of bringing a new product to market',
          color: '#2FC2DF'
        },
        {
          id: 5,
          date: '28 July',
          title: 'Work',
          category: 'Wishlist',
          note: 'Component Did Mount, Component Will Unmount',
          color: '#ff05e2'
        },
        {
          id: 6,
          date: '28 July',
          title: 'Personal',
          category: 'Personal',
          note: 'Component Did Mount, Component Will Unmount',
          color: '#2577fa'
        },
        {
          id: 7,
          date: '28 July',
          title: 'Lifecycle',
          category: 'Personal',
          note: 'of an object in object-oriented programming',
          color: '#2FC2DF'
        }
      ]
    }
  }
  setModal(visible) {
    this.setState({ modalVisible: visible });
  }

  editNote = (item) => {
    let index = this.state.dummyData.indexOf(this.state.dummyData.find(edit => edit.id === item.id))
    this.state.dummyData[index] = item
    this.setState({ dummyData: this.state.dummyData });
  }

  render() {
    const { navigate, toggleDrawer } = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => toggleDrawer()}>
              <Thumbnail small source={{ uri: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1' }} />
            </TouchableOpacity>
          </View>
          <View>
            <Title style={{ color: 'black' }}>To do list</Title>
          </View>
          <View>
            <TouchableOpacity onPress={() => { this.setModal(true) }}>
              <Icon name='sort-amount-asc' size={22} />
            </TouchableOpacity>
          </View>
        </Header>
        <Modal transparent animationType="none" visible={this.state.modalVisible} onRequestClose={() => { }}>
          <TouchableOpacity style={{ height: '50%' }} onPress={() => { this.setModal(!this.state.modalVisible); }} >
            <View style={{ paddingRight: 31, paddingLeft: 187, paddingTop: 43, }}>
              <View style={styles.modal}>
                <TouchableOpacity onPress={() => { this.setModal(!this.state.modalVisible); }} >
                  <Text style={{ fontSize: 15, padding: 10 }}>ASCENDING</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.setModal(!this.state.modalVisible); }} >
                  <Text style={{ fontSize: 15, padding: 10 }}>DESCENDING</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>

        <ScrollView>
          <View style={styles.noteList}>
            <FlatList
              onContentSizeChange
              data={this.state.dummyData}
              renderItem={({ item }) =>
                <View style={{ marginRight: 30 }}>
                  <TouchableOpacity style={{
                    width: 138,
                    height: 138,
                    borderRadius: 7,
                    backgroundColor: item.color,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    padding: 12,
                    marginBottom: 30,
                  }} onPress={() => { this.props.navigation.navigate('EditNote', {...item,editNote: this.editNote}) }}>
                    <Text style={styles.noteDate}>{item.date}</Text>
                    <Text numberOfLines={1} style={styles.noteTitle}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.noteCategory}>{item.category}</Text>
                    <Text numberOfLines={4} style={styles.noteContent}>{item.note}</Text>
                  </TouchableOpacity>
                </View>
              }
              numColumns={2}
            />
          </View>
        </ScrollView>
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            containerStyle={{}}
            style={{ backgroundColor: '#FFFCFC' }}
            position="bottomRight"
            onPress={() => navigate('AddNote')}>
            <Icon name="plus" style={{ color: 'black' }} />
          </Fab>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderRadius: 25,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchBar: {
    zIndex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    borderBottomColor: 'transparent',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    marginTop: 85,
    alignSelf: 'center',
    height: 45,
    width: 307,
    position: 'absolute',
    borderRadius: 20
  },
  noteList: {
    marginHorizontal: 40,
    justifyContent: 'space-between',
    paddingTop: 40
  },
  noteDate: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '800'
  },
  noteCategory: {
    color: '#fff',
    fontSize: 13
  },
  noteTitle: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 18
  },
  noteContent: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500'
  }
});

export default HomeNote;