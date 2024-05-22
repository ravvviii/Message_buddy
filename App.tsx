
import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Contacts from './Components/Contacts';
import Header from './Components/Header';






function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Header/>
      <Contacts/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
