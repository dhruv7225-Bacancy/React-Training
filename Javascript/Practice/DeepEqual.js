function deepEqual(obj1, obj2) {
  if(obj1===obj2)return true;
  if(obj1===null || obj2===null || typeof obj1!=="object" || typeof obj2!=="object"){
    return false
  }
  const key1=Object.keys(obj1)
  const key2=Object.keys(obj2)
  
  if (key1.length !== key2.length) return false;
  let flag=true
  for(let key of key1){
    if(key2.includes(key) && !deepEqual(obj1[key],obj2[key]) ){
        flag=false
    }
    else if(!key2.includes(key)){
        flag= false
    }
  }
  return flag;
}

// Example usage
const object1 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York'
    // add:"hii"
    // zip: '10001',
  },
};

const object2 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};

console.log(deepEqual(object1, object2)); // true
