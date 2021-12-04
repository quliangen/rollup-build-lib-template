// demo： path cjs模块
import path from 'path';

interface ITest {
  name: string;
  age?: number;
}

// console.log(path);

export function foo() {
  const obj: ITest = {
    name: 'test',
  };

  console.log('hello rollup');
  console.log(obj);
}

const abc = 123;
console.log(abc);

export function bar<T>(params: T): T {
  return params;
}
