import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';

import ListItem from './ListItem';
import { Spinner } from './common';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set os props that this component will be rendered with
        //this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    renderList() {
        if (this.props.loading) {
            return (
                <View style={{ marginTop: 230, flex: 1 }}>
                    <Spinner />
                </View>
            );
        }
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

    render() {
        console.log(this);
        return (
            <View>
                {this.renderList()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees.employeesList, (val, uid) => {
        return { ...val, uid };
    });

    const { loading } = state.employees;

    return { employees, loading };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
