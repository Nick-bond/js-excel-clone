import './styles/index.scss'
console.log('test');

async function start() {
  await Promise.resolve('async works');
}

start().then(console.log);