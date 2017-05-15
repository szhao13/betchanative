/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



var {AppRegistry, TabBarIOS, Component} = React;
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  AppRegistry
} from 'react-native';

// import FacebookTabBar from './FacebookTabBar';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

var ScrollableTabView = require('react-native-scrollable-tab-view');
// var ScrollableTabView = require('react-native-scrollable-tab-view');
var App = React.createClass({
  render() {
    return (
      <ScrollableTabView>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
        <JestPage tabLabel="Jest" />
      </ScrollableTabView>
    );
  }
});

export default React.createClass({
  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={1}
      renderTabBar={() => <FacebookTabBar />}
      >
      <ScrollView tabLabel="ios-paper" style={styles.tabView}>
        <View style={styles.card}>
          <Text>News</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-people" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Friends</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Messenger</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Notifications</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-list" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Other nav</Text>
        </View>
      </ScrollView>
    </ScrollableTabView>;
  },
});

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

export default class BetchaNative extends Component {
  render() {
    return <ScrollableTabView
      renderTabBar={() => <DefaultTabBar />}
      ref={(tabView) => { this.tabView = tabView; }}
    >
      <Text tabLabel='Tab #1'>My</Text>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
      <TouchableOpacity tabLabel='Back' onPress={() => this.tabView.goToPage(0)}>
        <Text>Lets go back!</Text>
      </TouchableOpacity>
    </ScrollableTabView>;
  }
})




 
 
// Inside of a component's render() method: 
render() {
  return (
    <ListView
      renderScrollComponent={props => <InfiniteScrollView {...props} />}
      dataSource={...}
      renderRow={...}
      canLoadMore={this.state.canLoadMoreContent}
      onLoadMoreAsync={this._loadMoreContentAsync()}
    />
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('BetchaNative', () => BetchaNative);
