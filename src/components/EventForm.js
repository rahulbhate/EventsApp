import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {  TextInput, View, Text, Button, StyleSheet, TouchableHighlight,} from 'react-native';

   
    const styles = StyleSheet.create({
        fieldContainer: {
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: '#fff',
        },
        text: {
          height: 40,
          // borderWidth: 1,
          margin: 0,
          marginLeft: 7,
          marginRight: 7,
          paddingLeft: 10,
        },
        borderTop: {
          borderColor: '#edeeef',
          borderTopWidth: 0.5,
        },
        button: {
          height: 50,
          backgroundColor: '#48BBEC',
          borderColor: '#48BBEC',
          alignSelf: 'stretch',
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        },
        buttonText: {
          color: '#fff',
          fontSize: 18,
        },
      });
const EventForm = ({navigation}) =>{
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow();
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
    return(
          <View
        style={{
          flex: 1,
        }}
      >
        <View style={styles.fieldContainer}>
        <Button
        title="Show Events"
        onPress={() => navigation.navigate('Event List')}
      />
          <TextInput
            style={styles.text}
            placeholder="Event title"
            spellCheck={false}
          />
          <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder="Event date"
            onFocus={showDatepicker}
            spellCheck={false}
          />
          {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        
        </View>

        <TouchableHighlight
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    )
}
export default EventForm