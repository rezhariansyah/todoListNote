import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Container, Header, Title, Textarea, Content, Picker, Form } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: '',
        }
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        const { goBack } = this.props.navigation
        return (
            <Container>
                <Header style={styles.header}>
                    <View>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Icon name='chevron-left' size={23} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Title style={{ color: 'black' }}>ADD NOTE</Title>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Icon color='green' name='check-circle-o' size={30} />
                        </TouchableOpacity>
                    </View>
                </Header>
                <Content padder>
                    <Form>
                        <Textarea rowSpan={5} style={styles.inputTitle} placeholder="Add title" ></Textarea>
                        <Textarea rowSpan={5} style={styles.inputDescription} placeholder="Add Description"></Textarea>
                        <Text style={{ color: 'black', left: 10 }}>CATEGORY</Text>
                        <Picker
                            mode='dropdown'
                            placeholder="Add Category"
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                            style={{ width: 130, left: 5 }} >
                            <Picker.Item label="Work" value="key0" />
                            <Picker.Item label="Wishlist" value="key1" />
                            <Picker.Item label="Personal" value="key2" />
                            <Picker.Item label="Exercise" value="key3" />
                        </Picker>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    inputTitle: {
        top: 50,
        fontSize: 24,
        marginLeft: 5,
    },
    inputDescription: {
        fontSize: 24
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
    title: {
        fontFamily: 'Open Sans',
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        alignSelf: 'center'
    }
});

export default AddNote;