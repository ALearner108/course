import React, { useState, useEffect } from "react";

const FirebaseDataFetcher = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://coursean-553f1-default-rtdb.firebaseio.com/"
      );
      const data = await res.json();
      console.log(typeof data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Firebase Data:</h2>
      <ul>
        {/* {data.map((item) => (
          <li key={item.id}>{item.author}</li>
          // Customize the rendering based on your data structure
        ))} */}
      </ul>
    </div>
  );
};

export default FirebaseDataFetcher;

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       // Replace 'YOUR_FIREBASE_PROJECT_ID' and 'YOUR_COLLECTION_NAME' with your actual Firebase project ID and collection name
// const FirebaseDataFetcher = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Replace 'YOUR_FIREBASE_PROJECT_ID' and 'YOUR_COLLECTION_NAME' with your actual Firebase project ID and collection name
//         const url = `https://coursean-485fc-default-rtdb.firebaseio.com/coursedata.json`;

//         const response = await fetch(url);
//         const data = await response.json();

//         setData(data);
//       } catch (error) {
//         console.error("Error fetching data from Firestore:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   const datas = JSON.stringify(data);
//   console.log(datas);
//   const coursedata =
//   console.log(coursedata);

//   return (
//     <div>
//       <h2>Firebase Data:</h2>
//       <ul>
//         <li>{coursedata.map((item) => item.author)}</li>
//       </ul>
//     </div>
//   );
// };

// import React, { useState, useEffect } from 'react';
//       const url = `https://coursean-485fc-default-rtdb.firebaseio.com/coursedata.json`;

//       const response = await fetch(url);
//       const data = await response.json();
//       const { course } = data;
//       console.log(course);
//     } catch (error) {
//       console.error("Error fetching data from Firestore:", error);
//     }
//   };

//   fetchData();
// }, []);
