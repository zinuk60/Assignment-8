export const getData=()=>{
   const getArraySTR=localStorage.getItem('installedApp');
    if(getArraySTR){
       const getArray=JSON.parse(getArraySTR);
      
        return getArray;
    }else{
        return [];
    }
}

export const addData=(id)=>{

    const storedArray=getData();
    console.log(storedArray)
    if(storedArray.includes(id)){
          return
    }else{
        storedArray.push(id);
        const data=JSON.stringify(storedArray);
        localStorage.setItem('installedApp',data);
    }
}