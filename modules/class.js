export default class List {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

    static liststore = [
      { name: 'Lanzz', score: 100 }, { name: 'Olaitan', score: 70 },
      { name: 'Lanzz', score: 100 }, { name: 'Olaitan', score: 70 },
      { name: 'Lanzz', score: 100 }, { name: 'Olaitan', score: 70 },
      { name: 'Lanzz', score: 100 }, { name: 'Olaitan', score: 70 },
      { name: 'Lanzz', score: 100 }, { name: 'Olaitan', score: 70 },
    ]

    static addListToDom = () => {
      let output = '';
      let i = 0;
      this.liststore.forEach((element) => {
        i += 1;
        element.index = i + 1;
        if (element.index % 2 === 0) {
          element.background = '#bdbaba';
        } else {
          element.background = '#fff';
        }
        output += `<li style='background-color:${element.background}' class='listitem'>
            ${`${element.name}: ${element.score}`}</li>`;
      });
      return output;
    }
}