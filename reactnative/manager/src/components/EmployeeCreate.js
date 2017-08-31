import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';

import { Card, CardSection, TextField, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
    onButtonPress(){
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextField 
                        label='Name'
                        placeholder='Jane'
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <TextField 
                        label='Phone'
                        placeholder='555-555-5555'
                        value={this.props.phone}                        
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection >
                    <Text style={styles.pickerTextStyle} >Shift</Text>
                    <View style={{ flex: 2, height: 40 }} >
                        <Picker 
                            style={{ flex: 1 }}
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        >
                            <Picker.Item label='Monday' value='Monday' />
                            <Picker.Item label='Tuesday' value='Tuesday' />
                            <Picker.Item label='Wednesday' value='Wednesday' />
                            <Picker.Item label='Thursday' value='Thursday' />
                            <Picker.Item label='Friday' value='Friday' />
                            <Picker.Item label='Saturday' value='Saturday' />
                            <Picker.Item label='Sunday' value='Sunday' />
                        </Picker>
                    </View>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18, 
        paddingLeft: 20,
        paddingTop: 9,
        flex: 1,
        height: 40
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
