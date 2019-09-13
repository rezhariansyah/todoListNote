import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Container, Header, Title, Textarea, Content, Picker, Form } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class EditNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: '',
            title: '',
            desc: '',
            id: ''
        }
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    changeHandle = (e) => {
        const newData = {
            title: this.state.title,
            desc: this.state.desc,
            category: this.state.selected,
            id: this.state.id

        }
        this.props.navigation.state.params.editNote(newData)
        this.setState({
            selected: '',
            title: '',
            desc: '',
            id: ''
        })
        this.props.navigation.navigate('Home')
    }

    render() {
        const { goBack } = this.props.navigation
        const item = this.props.navigation.state.params
        this.state.id = item.id
        console.log(this.props.navigation.state.params);
        return (
            <Container>
                <Header style={styles.header}>
                    <View>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Icon name='chevron-left' size={23} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Title style={{ color: 'black' }}>EDIT NOTE</Title>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.changeHandle}>
                            <Icon color='green' name='check-circle-o' size={30} />
                        </TouchableOpacity>
                    </View>
                </Header>
                <Content padder>
                    <Form>
                        <Textarea rowSpan={5} style={styles.inputTitle} onChangeText={(title) => this.setState({ title })} placeholder="Add title">
                            {item ? item.title : ''}
                        </Textarea>
                        <Textarea rowSpan={5} style={styles.inputDescription} onChangeText={(desc) => this.setState({ desc })} placeholder="Add Description">
                            {item ? item.note : ''}
                        </Textarea>
                        <Text style={{ color: 'black', left: 10 }}>CATEGORY</Text>
                        <Picker
                            mode='dropdown'
                            placeholder="Add Category"
                            selectedValue={this.state.selected}
                            onValueChange={(selected) => this.setState({ selected })}
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

export default EditNote;