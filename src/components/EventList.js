import React, {useState, useEffect} from 'react';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';
import { Button, FlatList, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  list:{
    flex:1,
    padding:20,
    backgroundColor: '#F3F3F3'
  }
})

const EventList = ({ navigation }) => {
  const [events,setEvents] = useState([]);
 const handleAddEvent = () =>{
   navigation.navigate('Event Form');
 }
   useEffect(() => {
       const event =  require('../../db.json').events.map(e => ({
        ...e,
        date: new Date(e.date),
      }));
      const interval = setInterval(() => {
        setEvents([
          ...events,
          {
            timer: Date.now(),
          }
        ]);
        console.log('This will run every second!');
        setEvents(event);
      }, 1000);
      return () => clearInterval(interval); 
   }, [])
    return[
      <>
      <Button
        title="Add Event Form"
        onPress={() => navigation.navigate('Event Form')}
      />
         <FlatList
         style={styles.list}
        data={events}
        keyExtractor={item => item.id}
        renderItem={({item}) => <EventCard event={item} />}
      />
      <ActionButton key="fab" onPress={handleAddEvent} buttonColor="rgba(231,76,60,3)"/>
        </>
    ];
}

export default EventList;