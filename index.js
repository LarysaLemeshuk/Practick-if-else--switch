class Book {
  constructor(author, title, year, pages, shelfNumber = null, userId = null) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
    this.shelfNumber = shelfNumber;
    this.userId = userId;
  }

  isVacant() {
    return this.shelfNumber !== null && this.userId === null;
  }

  getRent(userId) {
    if (this.isVacant()) {
      this.userId = userId;
      this.shelfNumber = null;
    } else {
      console.log('Книгу вже взяли.');
    }
  }
}

class User {
  constructor(id, name, lastName, address) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.address = address;
  }
}


const user1 = new User(1, 'Лариса', 'Лемешук', 'м.Ковель Бульвар Лесі Уккраїнка 2/23');
const book1 = new Book('Леся Українка', 'Лісова пісня', 1911, 150, 5);

console.log(book1.isVacant());
book1.getRent(user1.id);
console.log(book1); 
console.log(book1.isVacant());




class Animal {
  hunting() {
    console.log('Зараз дожену здобич');
  }

  growl() {
    console.log('Грррррр');
  }
}

class Tiger extends Animal {
  hunting() {
    console.log('Тигр женеться за здобиччю');
  }

  growl() {
    console.log('Тигр: Рррр!');
  }
}

class Wolf extends Animal {
  hunting() {
    console.log('Вовк вистежує здобич у зграї');
  }

  growl() {
    console.log('Вовк: Уууууу!');
  }
}


const tiger1 = new Tiger();
const wolf1 = new Wolf();

tiger1.hunting(); 
tiger1.growl();  

wolf1.hunting(); 
wolf1.growl();    
