import React, {Component} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {connect} from "react-redux";
import {fetchPictures} from "../../store/actions";
import styles from '../../styles';

class Pictures extends Component {
    componentDidMount() {
        this.props.fetchPictures();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.pictures}
                    keyExtractor={item => item.data.id}
                    renderItem={({item}) => (
                        <View style={styles.pic}>
                            <Image style={styles.picImg} source={{uri: item.data.thumbnail}}/>
                            <Text style={styles.picText}>{item.data.title}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    pictures: state.pictures,
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    fetchPictures: () => dispatch(fetchPictures())
});

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);
