const loadLegos = () => {
  return fetch("../api/lego-colors.json")
    .then(res => res.json())

    .then((response) => {
      return response;
    },
      (error) => {
        const message = `My Custom Message: ${error}`;
        return message;
      }
    );
};

// const API = {
//   getAll() {
//     return fetch("../api/lego-colors.json")
//     .then(res => res.json())

//     .then((response) => {
//       return response;
//     },
//       (error) => {
//         const message = `My Custom Message: ${error}`;
//         return message;
//       }
//     );
//   },
//   getSingle(id){
//     return fetch("../api/lego-colors.json by ID")
//     .then(res => res.json())

//     .then((response) => {
//       return response;
//     },
//       (error) => {
//         const message = `My Custom Message: ${error}`;
//         return message;
//       }
//     );
//   }
// }

export default loadLegos;