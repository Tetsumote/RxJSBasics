import { Observable } from "rxjs/Observable";

// var observable = Observable.create(function subscribe(observer){
//     observer.next('Hey guys!')
// });

var observable = Observable.create((observer:any)=>{
    try{
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() =>{
            observer.next('I am good')
        },2000)
        setTimeout(() => {
            observer.unsubscribe();
        }, 5001);
        observer.next('this will not send')
    }catch(err){
        observer.error(err)
    }
})



observable.subscribe(
    (x:any)=> addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);


function addItem(val:any){
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}