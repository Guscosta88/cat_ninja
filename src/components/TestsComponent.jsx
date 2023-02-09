// import { useState, useEffect } from 'react'

// const TestsComponent = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch('https://catfact.ninja/breeds')
//           .then(response => response.json())
//           .then(json => {
//             setData(json.data[0]);
//           });
//       }, []);

//     return(
//         <div>
//             {/* {data.map((item, index) => (
//                 <div key={index} >
//             <p>{item.breed} : {item.country}</p> */}
//             <p>{data.breed} : {data.country}</p>


//             </div>
//             // ))}
//         // </div>
        
//     )
// }

// export default TestsComponent

// ______________________________________


// import { useState, useEffect } from 'react'

// const TestsComponent = () => {
//     const [ catFact, setCatFact ] = useState()

//     useEffect(() =>{
//         fetch('https://catfact.ninja/breeds')
//             .then(response => response.json())
//             .then(json => (
//                 setCatFact(json.data[2].breed)
//             ))
//     }, [])

//     return(
//         <div>{catFact}</div>
//     )
// }

// export default TestsComponent


// ______________________________________


// import { useState, useEffect } from 'react';

// const TestsComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://catfact.ninja/breeds')
//       .then(response => response.json())
//       .then(json => {
//         setData(json.data);
//       });
//   }, []);

//   return (
//     <div>
// {data.map((item, index) => (
//   <div key={index}>
//   <p>{item.breed} : {item.country}</p>
// </div>

// ))}

//     </div>
//   );
// };

// export default TestsComponent;
