import React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomAlertComponent from './CustomAlertComponent'

const App = () => {

  const onPressAlertPositiveButton = () => {
    alert('Positive Button Clicked')
  }

  const onPressAlertNegativeButton = () => {
    alert('Negative Button Clicked')
  }

  return (
    <View style={styles.container}>
      <CustomAlertComponent
        displayAlert={true}
        displayAlertIcon={true}
        alertTitleText={'Save'}
        alertMessageText={'This is a goBack button.' + '\n' + 'Do you want to save this note?'}
        displayPositiveButton={true}
        positiveButtonText={'OK'}
        displayNegativeButton={true}
        negativeButtonText={'CANCEL'}
        onPressPositiveButton={onPressAlertPositiveButton}
        onPressNegativeButton={onPressAlertNegativeButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
})

export default App 