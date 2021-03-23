import {useEffect,useState} from 'react';

import getCountryCodeTotal from './CovidApi';
import firebaseSDK from '../../../FireBaseInit';
import CovidList from './CovidForm';
import Cards from '../../Cards/Cards';

function Covid(){
  const [todoData, setTodoData] = useState({
    CovidD:[],
    newCovid:"",
    waiting:false
  });

  const [valiData, setValidData] = useState({
    ValidD:[],
    newValid:"",
    waiting:false
  });

  var cref;
  useEffect(
    
    ()=>{
      const covidRef = firebaseSDK.database().ref('covid').orderByKey().limitToLast(100);
      covidRef.on('child_added', snapshot =>{
        let newValid = {...snapshot.val(), fb_id: snapshot.key}
        let newValids = valiData.ValidD;
        newValids.push(newValid);
        setValidData({...valiData, ValidD: newValids});
      });
  covidRef.on('child_removed', (snapshot)=>{
    const deletedKey = snapshot.key;
    let newValids = valiData.ValidD.filter(o=>{
      return o.fb_id !==deletedKey;
    });
    setValidData({...valiData, ValidD: newValids});
    });
  covidRef.on('child_changed', (snapshot) => {
    const changedKey = snapshot.key;
    const dats = snapshot.val();
    console.log(dats);
    let newTodos = valiData.ValidD.map(o => {
      if (o.fb_id == changedKey) {
        o = {...dats, fb_id:changedKey};
      }
      return o;
    });
    setValidData({...valiData, ValidD: newTodos});
  });
  return ()=>{
    covidRef.off();
  }
  
    }
    ,[]
    );

  useEffect(
    
    function(){
      getCountryCodeTotal(
        (err, data)=>{
          if(err){
            console.log(err);
          } else {
            console.log(data);
            setTodoData({...todoData, CovidD: data});
  
              if(valiData.ValidD == todoData.CovidD){
                alert("sad");
                
              }
              else{
                alert("xd");
                firebaseSDK.database().ref("covid").push(data);
               console.log(valiData.ValidD);
               console.log(data);
              }
            
          }
        }
      )
    }
    ,[]
  );

  return (
    <section>
      <div>
      </div>
    </section>
  );
}


export default Covid;