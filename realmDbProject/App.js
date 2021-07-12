import React,{useEffect,useState} from 'react'
//import { useForm } from 'react-hook-form';
import Realm from 'realm';

import { SafeAreaView, View, FlatList, onsubmit, Text,Input,Image,Card, Dimensions,handleSubmit, Button} from 'react-native';
import axios from 'axios';
import { userSchema } from './android/database/schema';

 const App=()=>{
  //const { register, handleSubmit, errors } = useForm(); // initialize the hook
  
    const[user,setUser]=useState([])

    // console.log(user);

    useEffect(() => {
        getDataUsingSimpleGetCall()
     
  savedata()
       
       },[]);


    function getDataUsingSimpleGetCall () {
      axios.get('https://jsonplaceholder.typicode.com/posts')
            
                  .then(function(response){
                    setUser(response.data)
                   console.log(JSON.stringify(response.data))

                 
            })
            .catch(function(error){
                console.log(error)
            })
          }



        function savedata(){
            Realm.open({
              path: "realm.realm",
              schema: [userSchema],
            }).then(realm => {
              // Create Realm objects and write to local storage
              realm.write(() => {
                user.forEach(obj => {
                  realm.create(user, obj);
                })
                console.log("data inserted")
               
                }) 
              })
          }
        
         // realm.close();


        // if(!user){
        //     return null
        // }
         
    return(
      <View style={{ backgroundColor: '#FFFFFF'}}>
     
          <Text >User</Text>
       


          {/* <TextInput
           onChangeText={setMovie}
           value={movie}
        />

        <Button title="Submit" onPress={handleSubmit(onsubmit )} />

           */}
           {/* <FlatList data={movie}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
            <Text>{item.id + '. ' + item.name}</Text>
                            )}
                
          /> */}
          {/* <div>
          data={movie}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
           <h1> {item.id + '. ' + item.name}</h1>
                            )}

          </div> */}
{/* 
<div>

<form onSubmit={handleSubmit(onSubmit)}>    
<Input type="submit" /> 

      <div>
       { data={movie}}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
           <Text> {item.id + '. ' + item.name}</Text>
                            )}

          </div>

    </form>
    </div> */}
        </View>
        
    )
            }

export default App
