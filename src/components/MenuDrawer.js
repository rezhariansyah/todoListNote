import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { View, Text, Container, Thumbnail, Item, Icon, Form, Input, Left, ListItem, Body} from 'native-base';

class MenuDrawer extends Component {
    state = { modalVisible: false, };
    setModal(visible) {
        this.setState({ modalVisible: visible });
    }

    render(){
        const { navigate } = this.props.navigation
        return (
            <Container>
                <ScrollView>
                    <View style={styles.thumbnailBar}>
                        <Thumbnail style={styles.thumbnail} source={{ uri: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1' }} />
                    </View>
                    <Text style={styles.name}>John Doe</Text>
                    <View style={styles.menu}>
                    <ListItem icon>
                            <Left><Icon name='md-person' /></Left>
                            <Body style={styles.body}>
                                <Text style={styles.textMenu} onPress={()=>navigate('AddNote')}>
                                    Personal
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left><Icon name='ios-paper' /></Left>
                            <Body style={styles.body}>
                                <Text style={styles.textMenu} onPress={()=>navigate('AddNote') }>
                                    Work
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left><Icon name='md-heart' /></Left>
                            <Body style={styles.body}>
                                <Text style={styles.textMenu} onPress={()=>navigate('AddNote')}>
                                    Wishlist
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left><Icon name='md-add-circle'/></Left>
                            <Body style={styles.body}>
                                <Text style={styles.textMenu} onPress={() => { this.setModal(true) }}>
                                    Add Category
                                </Text>
                            </Body>
                        </ListItem>
                    </View>
                </ScrollView>
                
                <Modal transparent 
                visible={this.state.modalVisible} 
                onRequestClose={() => { }}>
                    <TouchableOpacity onPress={() => { this.setModal(!this.state.modalVisible); }} 
                    style={styles.back}>
                        <View style={styles.modalBar}>
                            <View style={styles.modal}>
                                <Form>
                                    <Item last style={{right: 15}}>
                                        <Input placeholderTextColor='#aaa' 
                                        placeholder='Category Name' />
                                    </Item>
                                    <Item last style={{right: 15}}>
                                        <Input placeholderTextColor='#aaa' 
                                        placeholder='Image Url' />
                                    </Item>
                                    <View style={styles.buttonBar}>
                                        <TouchableOpacity style={{marginRight: 7}} onPress={() => { this.setModal(!this.state.modalVisible); }}>
                                            <Text style={styles.addBtn}>Add</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { this.setModal(!this.state.modalVisible); }}>
                                            <Text style={styles.cancelBtn}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Form>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </Container>
        )
    }
}

const styles = StyleSheet.create({    
    back: {
        height: '100%',
        backgroundColor: '#aaaaaa70'
    },
    modalBar: {             
        padding: 60, 
        paddingTop: 220 
    },
    modal: {
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        top: 150,
        right: 50,
        left: 50,
        position: 'absolute',
        elevation: 30,
        borderRadius:10
    },
    buttonBar: { 
        flexDirection: 'row', 
        justifyContent: 'flex-end' 
    },
    addBtn: { 
        marginTop: 10, 
        fontWeight: '500', 
        fontSize: 20, 
        textAlign: 'right',
        color: 'green',
        right: 30,
        bottom:5
    },
    cancelBtn: { 
        marginTop: 10, 
        fontSize: 20, 
        textAlign: 'right', 
        color: 'red',
        right: 10,
        bottom: 5
    },
    thumbnailBar: { 
        alignItems: 'center', 
        marginTop: 45 
    },
    thumbnail: { 
        borderRadius: 100, 
        width: 100, 
        height: 100 
    },
    name: { 
        fontSize: 22, 
        fontWeight: '600', 
        color: '#000', 
        textAlign: 'center', 
        marginTop: 18 
    },
    menu: { marginTop: 70 },
    body: { borderBottomColor: 'transparent' },
    textMenu: { 
        fontSize: 20, 
        fontWeight: '600', 
        color: '#000' 
    },
});

export default MenuDrawer;