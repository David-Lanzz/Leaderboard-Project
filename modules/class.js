// all methods
export default class List {
 static collectData = async () => {
   const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aLClGDcTWQXMdvIfHD7d/scores/';
   const dataFromAPI = await fetch(apiUrl, {
     method: 'GET',
   });
   const test = await dataFromAPI.json();
   return test;
 }

    static addListToDom = async () => {
      const liststore = await this.collectData();
      let output = '';
      let i = 0;
      liststore.result.forEach((element) => {
        i += 1;
        element.index = i + 1;
        if (element.index % 2 === 0) {
          element.background = '#bdbaba';
        } else {
          element.background = '#fff';
        }
        output += `<li style='background-color:${element.background}' class='listitem'>
            ${`${element.user}: ${element.score}`}</li>`;
      });
      return output;
    }

    static addItemToAPI = () => {
      const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aLClGDcTWQXMdvIfHD7d/scores/';
      const dataFromAPI = fetch(apiUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          user: `${document.querySelector('#name').value}`,
          score: `${document.querySelector('#score').value}`,
        }),
      });
      dataFromAPI.then((result) => result);
      document.querySelector('#name').value = '';
      document.querySelector('#score').value = '';
    }
}