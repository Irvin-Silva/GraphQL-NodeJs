const users = [
    {
      id: '1',
      name: 'Ana',
      email: 'ana@correo.com'
    },
    {
      id: '2',
      name: 'Luis',
      email: 'luis@correo.com'
    },
    {
      id: '3',
      name: 'María',
      email: 'maria@correo.com'
    }
  ];
  
  const authors = [
    {
      id: '1',
      name: 'J.K. Rowling',
      country: 'UK',
      register_by: "1"
    },
    {
      id: '2',
      name: 'George Orwell',
      country: 'UK',
      register_by: "2"
    },
    {
      id: '3',
      name: 'Isabel Allende',
      country: 'Chile',
      register_by: "1"
    },
    {
      id: '4',
      name: 'Haruki Murakami',
      country: 'Japan',
      register_by: '2'
    }
  ];
  
  const books = [
    {
      id: '1',
      title: 'Harry Potter y la piedra filosofal',
      description: 'Primer libro de la saga de Harry Potter',
      quantity: 100,
      price: 150,
      writted_by: '1',
      register_by: '2'
    },
    {
      id: '2',
      title: '1984',
      description: 'Distopía sobre un régimen totalitario',
      quantity: 50,
      price: 70,
      writted_by: '2',
      register_by: '1'
    },
    {
      id: '3',
      title: 'La casa de los espíritus',
      description: 'Saga familiar de una familia chilena',
      quantity: 30,
      price: 90,
      writted_by: '3',
      register_by: '2'
    },
    {
      id: '4',
      title: 'Kafka en la orilla',
      description: 'Historia surrealista que mezcla el mito y la realidad',
      quantity: 40,
      price: 110,
      writted_by: '4',
      register_by: '1'
    }
  ];
  
  const db = {
    users,
    authors,
    books
  };
  
  export { db as default }
  