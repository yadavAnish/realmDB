import React,{useEffect,useState} from 'react'
//import { useForm } from 'react-hook-form';
import Realm from 'realm';



import { SafeAreaView, View, FlatList, onsubmit, Text,Input,Image,Card, Dimensions,handleSubmit, Button} from 'react-native';
import axios from 'axios';
import { userSchema } from './android/database/schema';

import { CarSchema } from './android/database/schema';

 const App=()=>{
  //const { register, handleSubmit, errors } = useForm(); // initialize the hook
  
    const[user,setUser]=useState([])
    const[retrive,setRet]=useState([])

    // console.log(user);

    useEffect(() => {
       // getDataUsingSimpleGetCall()
     savedata()
      //retrive()
       },[]);



       // get value from Api and saved it to local db

    // function getDataUsingSimpleGetCall () {
    //   axios.get('https://jsonplaceholder.typicode.com/posts')
            
    //               .then(function(response){
    //                 setUser(response.data)
    //                //console.log(JSON.stringify(response.data))
    //               //  Realm.open({
    //               //   path: "realm.realm",
    //               //   schema: [userSchema],
    //               // }).then(realm => {
    //               //   // Create Realm objects and write to local storage
    //               //   realm.write(() => {
    //               //     response.data.forEach(obj => {
    //               //       realm.create('user', obj);
    //               //     })
    //               //     console.log("data inserted")
                     
    //               //     }) 
    //               //   })

                 
    //         })
    //         .catch(function(error){
    //             console.log(error)
    //         })
    //       }


         
          

// AnOther method to save local db
        function savedata(){
          Realm.open({
            path: "newrealm.realm",
            schema: [userSchema],
          }).then(realm => {
            // Create Realm objects and write to local storage
            realm.write(() => {
              user.forEach(obj => {
                realm.create('user', obj);
              })
              console.log("data inserted")
             
              }) 

            //realm.objects is used to retrive data from local db
              let userss = realm.objects('user');
               // Local Db datas are assiged in userss and it is set to retrive
              setRet(userss)
              //console.log(userss);
              console.log("=====================================================================")

             // realm.close();
            })
    
          }



          //insert into object

  //       Realm.open({
  //         schema: [CarSchema],
  //       }).then(realm => {
  //   // Create Realm objects and write to local storage
  //   realm.write(() => {
  //     const myCar = realm.create('Car', {
  //       make: 'bmw',
  //       model: 'Civic',
  //       miles: 1000,
  //     });
  //     myCar.miles += 20; // Update a property value
  //   });
    
  // })





  //retrive function
  // Realm.open({
  //           schema: [CarSchema],
  //         }).then(realm => {
  //           let cars=realm.objects('Car')
  //           console.log(cars)
  //         })







// function retrive(){
//   // Realm.open({
//   //   schema: [userSchema],
 
//   // })
//   (realm=>{
  
//     console.log("===================================================================================================================")
//     let usersss = realm.objects('user');
//               console.log(usersss);
//     console.log("=====================================users=================================")
    
    
//  })
  
// }     

        
         
    return(
      <View style={{ backgroundColor: '#FFFFFF'}}>
     
          <Text >User</Text>
      
           <FlatList data={retrive}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
            <Text>{item.id + '. ' + item.title + '. ' + item.body}</Text>
                            )}
/>    
        </View>
    )
            }
        
    

export default App
