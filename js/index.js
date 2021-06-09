// Iteration 1: Names and Input
let hacker1 = 'Hans';
console.log(`"The driver's name is ${hacker1}."`);

let hacker2 = 'Jürgen';
console.log(`"The navigator's name is ${hacker2}."`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `"The driver has the longest name, it has ${hacker1.length} characters."`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`
  );
} else {
  console.log(
    `"Wow, you both have equally long names, ${hacker1.length} characters!"`
  );
}

// Iteration 3: Loops
let str = '';
for (let i = 0; i < hacker1.length; i++) {
  str += ' ' + hacker1[i].toUpperCase();
}
console.log(str);

let str2 = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  str2 += hacker2[i];
}
console.log(str2);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`"The driver's name goes first."`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`"Yo, the navigator goes first definitely."`);
} else {
  console.log(`"What?! You both have the same name?"`);
}

let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum orci a ultricies placerat. Curabitur pulvinar hendrerit magna, sit amet suscipit dui. Morbi mattis mauris magna, venenatis bibendum nunc posuere a. Sed id lacus tristique, laoreet eros quis, molestie dui. Mauris suscipit pulvinar luctus. Cras ornare ornare erat, at congue tortor ullamcorper et. Vivamus nec odio id orci aliquam porta a ut nisl. Aenean at convallis massa, vel posuere nulla. Morbi et blandit lorem. Aenean fermentum auctor pretium. Pellentesque vel rutrum diam. Ut eros arcu, mollis non rutrum consequat, tempor non est. Aliquam ac porta dui. Mauris auctor ornare ante, nec sagittis ante mollis et. Aliquam vulputate dapibus imperdiet. Quisque ut sollicitudin augue, vitae vehicula lorem. Vestibulum massa lacus, ultricies vitae posuere sed, commodo nec sapien. Curabitur vulputate congue rhoncus. Integer rhoncus egestas tellus at maximus. Cras et orci iaculis, aliquam diam non, condimentum purus. Sed mattis non sapien sit amet vestibulum. Aliquam felis lectus, elementum a urna et, vehicula viverra lectus. Nullam vitae convallis eros. Morbi semper lectus vel justo auctor vulputate. In quis laoreet urna. Morbi id ante et eros auctor egestas non vel metus. Sed ullamcorper feugiat feugiat. Suspendisse gravida aliquet maximus. Fusce imperdiet risus odio, non eleifend metus efficitur eget. Praesent sit amet efficitur enim. Praesent aliquet eros vestibulum, fringilla turpis a, condimentum ligula. Quisque sit amet tortor libero. Maecenas scelerisque, augue in tempus imperdiet, ligula turpis faucibus purus, sit amet tempus eros lectus quis sem. Cras ultrices eleifend urna sed eleifend. Donec at arcu vitae urna commodo vehicula. Nullam suscipit dolor non ante elementum imperdiet. Etiam vel mattis massa, in iaculis nulla. Donec luctus ornare luctus. Maecenas faucibus molestie mi at dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ';

function WordCount(lorem) {
  return lorem.split(' ').length;
}

console.log(WordCount(lorem));
