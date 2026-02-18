let arr=[1,2,3,4,5,6,7,8,9,10]

function chunkArray(arr,value){
    let len=arr.length
    let templen=0
    let count=0
    let temp=[]
    return arr.reduce((acc,val)=>{
        if(count==value){
            acc.push(temp)
            temp=[]
            count=1
        }
        else{
            count++
        }
        temp.push(val)
        templen++
        if(templen==len){
            acc.push(temp)
        }
        return acc;
    },[])
    
}

function chunk(arr, size){
    
    return arr.reduce((acc , val , index) => {
        if(index%size != 0) {
            // acc.push(arr.slice(index , index + size))
            acc[acc.length-1].push(val)
        }
        else{
            acc.push([val])
        }
        return acc
    } , [])

}
function chunk2(arr, size){
    
    return arr.reduce((acc , val , index) => {
        if(index%size == 0) {
            acc.push(arr.slice(index , index + size))
        }
        
        return acc
    } , [])

}

console.log(chunk2(arr,3));
