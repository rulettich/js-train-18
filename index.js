// Завдання 1
/**
 * Функція `checkData` перевіряє наявність даних.
 * У випадку помилки, викликається помилка з причиною (cause).
 *
 *  data - вхідні дані.
 */
function checkData(data) {
  // Якщо об'єкт не пустий повертаємо дані
  // Інакше створюємо помилку,в якості тексту помилки ми використовуємо рядок "Об'єкт пустий".
  // Якщо виникла помилка, повертаємо її повідомлення.
  if (data && typeof data === "object" && Object.keys(data).length > 0) {
    return data;
  } else {
    throw new Error("Об'єкт пустий");
  }
}

console.log("Завдання: 1 ==============================");
try {
  console.log(checkData({}));
  // Виведе Об'єкт пустий
} catch (error) {
  console.error(error.message);
}

try {
  console.log(checkData({ name: "John", age: 30, city: "New York" }));
  // Виведе { name: 'John', age: 30, city: 'New York' }
} catch {
  console.error(error.message);
}

// Завдання 2
/**
 * Функція `parseJson` намагається аналізувати вхідний JSON-рядок.
 * Якщо рядок має невірний формат, генерується помилка з відповідним текстом.
 *
 *  jsonStr - JSON-рядок для аналізу.
 */
function parseJson(jsonStr) {
  // Спроба розпарсити JSON-рядок.
  // Якщо рядок має невірний формат, виникне помилка, яку ми обробляємо у блоку catch.
  // Повертаємо отриманий об'єкт
  // Якщо виникла помилка, повертаємо її повідомлення.
  try {
    let parsedJson = JSON.parse(jsonStr);
    return parsedJson;
  } catch (error) {
    console.error("Невірний формат:" + error.message);
  }
}
console.log("Завдання: 2 ==============================");

// Вхідний JSON-рядок з правильним форматом.
let validJson = '{"name":"John","age":30,"city":"New York"}';
// Вхідний JSON-рядок з неправильним форматом.
let invalidJson = '{"name":"John,"age":30,"city":"New York"}'; // Пропущена закриваюча лапка після "John".

// Спробуємо аналізувати JSON-рядки.
console.log(parseJson(validJson));
// Виведе { name: 'John', age: 30, city: 'New York' }
console.log(parseJson(invalidJson));
// Виведе Unexpected token a in JSON at position 15

// Завдання 3

/**
 * Функція `getAge` отримує вік користувача.
 * Якщо вік користувача менше 0, генерується помилка з відповідним текстом.
 *
 *  age - вік користувача.
 */
function getAge(age) {
  // Спроба отримати вік користувача.
  // Якщо вік менше 0, виникне помилка, яку ми обробляємо у блоку catch.
  // Генеруємо помилку, якщо вік менше 0 з повідомленням Вік не може бути менше 0!.
  // До помилки дадаємо властивість name зі значенням "AgeError"
  // Викидаємо помилку
  // Якщо помилки не має повертаємо рядок `Вік користувача: ${age}`
  // Якщо виникла помилка, повертаємо об'єкт з name та message помилки.

  try {
    if (age < 0) {
      let error = new Error("Вік не може бути менше 0!");

      error.name = "AgeError";
      throw error;
    }
    return `Вік користувача: ${age}`;
  } catch (err) {
    return { name: err.name, message: err.message };
  }
}
console.log("Завдання: 3 ==============================");

// Виклик функції з від'ємним віком.
console.log(getAge(-1));
// Виведе { error: 'Вік не може бути менше 0!', name: 'AgeError' }
// Виклик функції з віком 20.
console.log(getAge(20));
// Виведе Вік користувача: 20

// Завдання 4
/**
 * Функція `getBookById` отримує книгу за її ID.
 * Якщо книги з таким ID не існує, генерується TypeError.
 *
 *  books - масив книг.
 *  id - ID книги.
 */
function getBookById(books, id) {
  // Спроба знайти книгу по ID та записати в змінну book.
  // Якщо книга не знайдена, генерується TypeError з повідомленням Книга з ID ${id} не знайдена!.
  // Повертаємо book
  // Повертаємо текстове представлення помилки

  const book = books.find((book) => book.id === id);

  if (!book) {
    throw new TypeError(`Книга з ID ${id} не знайдена!`);
  }

  return book;
}
console.log("Завдання: 4 ==============================");

// Виклик функції з неіснуючим ID.
try {
  console.log(
    getBookById(
      [
        { id: 1, title: "Книга 1" },
        { id: 2, title: "Книга 2" },
      ],
      3
    )
  );
} catch (error) {
  console.error(error.message);
}
// Виведе TypeError: Книга з ID 3 не знайдена!
try {
  console.log(
    getBookById(
      [
        { id: 1, title: "Книга 1" },
        { id: 2, title: "Книга 2" },
      ],
      2
    )
  );
} catch (error) {
  console.error(error.message);
}
// Виведе Книга: Книга 2

// Завдання 5

/**
 * Функція `decodeURIComponentWrapper` виконує декодування рядка `encodedString`
 * з використанням функції `decodeURIComponent`. Якщо сталася помилка URIError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  encodedString - Рядок для декодування.
 */
function decodeURIComponentWrapper(encodedString) {
  // Спроба декодувати рядок
  // Повертаємо декодований рядок
  // Якщо виникла помилка, і ії назва дорівнює URIError повертаємо помилку про неправильний URI формат з повідомленням Помилка декодування URI,
  //  інкше повертаємо текстове представлення помилки
  try {
    let decodedStr = decodeURIComponent(encodedString);
    return decodedStr;
  } catch (error) {
    if (error instanceof URIError) {
      return "Помилка декодування URI";
    } else {
      return error.toString();
    }
  }
}
console.log("Завдання: 5 ==============================");

console.log(decodeURIComponentWrapper("Hello%20World")); // виведе 'Hello World'
console.log(decodeURIComponentWrapper("%E0%A4%A")); // виведе інформацію про помилку URIError

// Завдання 6
/**
 * Функція `findEvenNumber` знаходить перше число, що ділиться на 2 без остачі в масиві.
 * Якщо такого числа немає, вона кидає помилку.
 *
 *  numbers - Масив чисел для пошуку.
 */
function findEvenNumber(numbers) {
  // Створюємо змінну evenNumber без значення
  // Шукаємо перше число, що ділиться на 2 без остачі, та записуємо в нашу змінну.
  // Якщо такого числа немає, кидаємо помилку з повідомлення У масиві немає чисел, що діляться на 2 без остачі!.
  // Якщо число знайдено повертаємо його
  // Виводимо текстове представлення помилки.
  // Незалежно від результату, виводимо вихідний масив.

  const evenNumber = numbers.find((number) => number % 2 === 0);

  if (evenNumber === undefined) {
    throw new Error("У масиві немає чисел, що діляться на 2 без остачі!");
  }

  return evenNumber;
}

console.log("Завдання: 6 ==============================");
// Виклик функції з масивом чисел.
try {
  console.log(findEvenNumber([1, 3, 5]));
  // Виведе
  // [ 1, 3, 5 ]
  // Error: У масиві немає чисел, що діляться на 2 без остачі!;
} catch (error) {
  console.error(error.toString());
}

try {
  console.log(findEvenNumber([1, 4, 5]));
  // Виведе
  // [ 1, 4, 5 ]
  // 4
} catch (error) {
  console.error(error.toString());
}
// Завдання 7
/**
 * Функція `validateUser` перевіряє об'єкт користувача на відповідність заданим вимогам.
 * Якщо об'єкт користувача не відповідає вимогам, вона кидає помилку з причиною (cause).
 *
 *  user - Об'єкт користувача для перевірки.
 */
function validateUser(user) {
  // Перевіряємо, чи існує об'єкт користувача,якщо ні викидуємо помилку з повідомленням "Об'єкт користувача не вказано!".
  // Перевіряємо, чи існує ім'я користувача,якщо ні викидуємо помилку з повідомленням "Ім'я користувача не вказано!", а як причину вказуємо об'єкт user.
  // Перевіряємо, чи існує email користувача,якщо ні викидуємо помилку з повідомленням "Email користувача не вказано!", а як причину вказуємо об'єкт user.
  // Якщо всі перевірки пройдено успішно виводимо повідомлення "Об'єкт користувача відповідає всім вимогам."
  // Виводимо повідомлення про помилку та причину помилки.
  if (!user) {
    throw new Error("Об'єкт користувача не вказано!");
  }

  if (!user.name) {
    throw new Error("Ім'я користувача не вказано!");
  }

  if (!user.email) {
    throw new Error("Email користувача не вказано!");
  }

  // Якщо всі перевірки пройдено успішно
  console.log("Об'єкт користувача відповідає всім вимогам.");
}

console.log("Завдання: 7 ==============================");

// Виклик функції з неповним об'єктом користувача.
try {
  validateUser({ name: "John Doe" });
} catch (error) {
  console.log(error.message);
}
// Виведе
// Email користувача не вказано! { name: 'John Doe' }

// Завдання 8
/**
 * Функція `calculateSquareRoot` обчислює квадратний корінь з числа.
 * Якщо аргумент не є числом, вона кидає TypeError.
 * Якщо число від'ємне, вона кидає RangeError.
 *
 *  number - Число для обчислення квадратного кореня.
 */
function calculateSquareRoot(number) {
  // Перевіряємо, чи аргумент є числом, якщо ні викидуємо помилку про невірний тип даних з повідомленням Аргумент має бути числом!".
  // Перевіряємо, чи число не від'ємне, якщо ні викидуємо помилку про тип недопустимий діапазон з повідомленням Число не повинно бути від'ємним!".
  // Повертаємо корінь квадратний з вхідного значення
  // Повертаємо повідомлення про помилку.

  if (typeof number !== "number") {
    throw new TypeError("Аргумент має бути числом!");
  }

  if (number < 0) {
    throw new RangeError("Число не повинно бути від'ємним");
  }

  return Math.sqrt(number);
}

console.log("Завдання: 8 ==============================");
try {
  console.log(calculateSquareRoot(9));
} catch (error) {
  console.error(error.message);
}
// Виведе 3
try {
  console.log(calculateSquareRoot(-9));
} catch (error) {
  console.error(error.message);
}
// Виведе Число не повинно бути від'ємним!
try {
  console.log(calculateSquareRoot("abc"));
} catch (error) {
  console.error(error.message);
}
// Виведе Аргумент має бути числом!

// Завдання 9

/**
 * Функція `processData` обробляє масив чисел.
 * Якщо в масиві є не число, вона кидає TypeError.
 *
 *  data - Масив чисел для обробки.
 */
function processData(data) {
  // Для кожного елемента в масиві
  // Перевіряємо, чи елемент є числом
  // Якщо елемент не є числом, кидаємо помилку невірного типу даних з повідомленням `Елемент з індексом ${index} має бути числом!`
  // Повертаємо рядок "Дані успішно оброблені"
  // Виводимо stack trace помилки
  // Повертаємо повідомлення помилки
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== "number") {
      throw new TypeError(`Елемент з індексом ${i} має бути числом!`);
    }
  }
  return "Дані успішно оброблені";
}

console.log("Завдання: 9 ==============================");

// Викликаємо функцію з правильними даними
try {
  console.log(processData([1, 2, 3]));
} catch (error) {
  console.error(error.message);
}
// Виведе Дані успішно оброблені

// Викликаємо функцію з неправильними даними
try {
  console.log(processData([1, "two", 3]));
} catch (error) {
  console.error(error.message);
}
// Виведе Елемент з індексом 1 має бути числом!

// Завдання 10
/**
 * Функція `evaluateExpression` обчислює результат математичного виразу, переданого у вигляді рядка.
 * Використовується функція `eval` для обчислення виразу. Якщо виникає помилка EvalError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  expression - Математичний вираз у вигляді рядка.
 */
function evaluateExpression(expression) {
  // Повертаємо результат розрахунку
  // Якщо була виявлена помилка повертаємо помилку при виконанні функції eval
  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    if (error instanceof EvalError) {
      console.error("Виникла помилка при виконанні eval: ", error.message);
    } else {
      console.error("Виникла помилка: ", error.message);
    }
    return "Помилка при обчисленні виразу";
  }
}

console.log("Завдання: 10 ==============================");

console.log(evaluateExpression("2 + 2")); // виведе 4
console.log(evaluateExpression("10 / hello")); // виведе EvalError: hello is not defined та інформацію про помилку
