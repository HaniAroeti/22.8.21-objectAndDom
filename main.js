// 1. מערך של משימות: שם, האם הושלם (isCompleted)
// לפחות חמש משימות
// a-- הצג את האוביקטים על המסך (לא למחוק את הקודם)

// var listOfTask =[ 
//     {name: "clean the house",
//     isCompleted: true,
// },
// {name: "make a cake",
// isCompleted: false,
// },
// {name: "lundry",
// isCompleted: true,
// },
// {name: "dishes",
// isCompleted: true,
// },
// {name: "take the dog for a walk",
// isCompleted: false,
// }
// ]



// for(let i=0;i<listOfTask.length;i++){
//     fisrt_Div = document.getElementById ("fisrtDiv");
//     console.log(listOfTask[i].name);
//     fisrt_Div += document.write (listOfTask[i].name + " "+ listOfTask[i].isCompleted +" " );
// }

// b- הוסף אלמנט INPUT 
// וכפתור, בלחיצה על הכפתור צור אוביקט חדש מסוג משימה

// var my_Btn = document.getElementById ("myBtn");

// my_Btn.onclick = function (){
//     var my_Input = document.getElementById ("myInput").value;
//     var second_Div = document.getElementById ("secondDiv");
//     var addNewObject = {name:my_Input , isCompleted:true};
//     second_Div.innerText = addNewObject
//     console.log(addNewObject);
//     // c- דחוף לתוך המערך
//     var pushItem = listOfTask.push(addNewObject).value;
//     console.log(listOfTask);
//     //d מוסיף אותו לחלון

//     for(let i=0;i<listOfTask.length;i++){
//     second_Div.innerText += `<p>${pushItem[i].name}</p>`+`<p>${pushItem[i].isCompleted}</p>`;
//     // addNewObject.innerText += (pushItem[listOfTask.length-1]);
// }}





// 2.	צור מערך של סרטים המכיל: שם, תמונה, מערך של שחקנים(3 לפחות)
// a.	הצג את כל הסרטים עם התמונות כולל כל השחקנים 
// var moviesArray = [
//     {name:"basic instinct",
//     picture:"<img src=https://townsquare.media/site/442/files/2017/08/Sharon-Stone-Basic-Instinct-leg-cross.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
//     actors : [" sharon stone" , "Michael Douglas" , "George Dzundza"]
// },
// {
//     name:"black widow",
//     picture: "<img src = data:image/jpeg;base64,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>",
//     actors : ["Scarlett Johansson", "David Harbour", "Ray Winstone"],
// },
//  {
//     name:"Forrest Gump",
//     picture:"<img src= data:image/jpeg;base64,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>",
//     actors:["Tom Hanks", "Robin Wright", "Gary Sinise"],
// }]

// for (let i = 0; i < moviesArray.length; i++) {
//     var array_For_Div = document.getElementById ("arrayForDiv")
//     array_For_Div.innerHTML += moviesArray[i].name +  moviesArray[i].picture  +  moviesArray[i].actors;
// }

// 3.	צור Input וכפתור בלחיצה על הכפתור הוסף את הערך לחלון

// var btn_q3 = document.getElementById ("btnq3");
// btn_q3.onclick = function (){
//     var div_q3 = document.getElementById ("divq3");
//     var input_q3 = document.getElementById ("inputq3");
//     div_q3.innerText = input_q3.value;
// }


// 4.	צור 2 אלמנטים של Input וכפתור, בלחיצה על הכפתור צור אובייקט עם השדות
// let q4Object = {};
// var btn_q4 = document.getElementById ("btnq4");
// btn_q4.onclick = function (){
//     var input_q4_a = document.getElementById ("inputq4a").value;
//     var input_q4_b = document.getElementById ("inputq4b").value;
//     var div_Q4 = document.getElementById ("divQ4");
//     div_Q4 += `{name ${input_q4_a} + last name ${input_q4_b}}`;
//     console.log(div_Q4);
    

// }

// צרו טופס של משתמש: שם פרטי, אימייל, גיל
// a.	לחיצה על שלח יוצרת אובייקט עם אותם שדות
// b.	הציגו את האובייקט על המסך.

// var btn_q5 = document.getElementById ("btnq5");
// var q5Object ={};
// btn_q5.onclick = function (){
//     var first_Name_q5 = document.getElementById ("firstNameq5").value;
//     var email_q5 = document.getElementById ("emailq5").value;
//     var age_q5 = document.getElementById ("ageq5").value;
//     var form_Q5 =document.getElementById ("formQ5");
    // form_Q5.innerText += `{first name ${first_Name_q5},email ${email_q5},age ${age_q5} }`;
//     // console.log(q5Object );
// }


// 6.	קלוט שם פרטי ומשפחה דרך Input מתאים
// a.	בלחיצה על כפתור צור אובייקט של אדם עם אם אותם השדות התכונות.


// var btn_Q6 = document.getElementById ("btnQ6");
// btn_Q6.onclick = function (){
//     var first_Name_Q6 = document.getElementById ("firstNameQ6").value;
//     var last_Name_Q6 = document.getElementById ("lastNameQ6").value;
//     var div_Q6 = document.getElementById ("divQ6");
//     // var q6ObjectPerson = `{Firts Name: ${first_Name_Q6} + " " Last Name ${last_Name_Q6}}`;
//         // console.log(q6ObjectPerson);
//     div_Q6.innerText = `{first name ${first_Name_Q6}, Last Name ${last_Name_Q6}}`;


// }

// 7.	צרו לולאה שיוצרת 10 אלמנטי P המכיל את ה- Index כטקסט.

for (let i = 0; i < 10; i++) {
    if(p){
        var p0 = document.getElementById ("p");
        var div_Q7 = document.getElementById ("divQ7")
        console.log( `(<p>[i]</p>) `)* 10;
        div_Q7.innerText += (`<p>${[i]}</p>`) * 10;
 
    }
    
}




