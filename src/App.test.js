import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import debounce  from 'lodash'
import renderer from 'react-test-renderer'

beforeEach(()=> {
  console.log("before each test")
})
beforeAll(()=> {
  console.log("before all tests")
})

afterEach(() => {
  console.log("after each test")
})
afterAll(() => {
  console.log("after all tests")
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('it should be true', () => {
  expect(true).toBe(true);
})

// skips this test explicitly
// it.skip('it should be true', () => {
//   expect(true).toBe(true);
// })


// // run only this test
// it.only('it should equal 5', () => {
//   expect(2 + 3).toEqual(5);
// })

// testing async function
// options
//use done
// return a promise
// use async await

// done
it('async test 1', done => {
 
  setTimeout(done, 100);

});
// return a promise
it('async test 2', () => {
 
  return new Promise(resolve => setTimeout(resolve, 100));

})
it('async test 3', async () => {
 
   await debounce(console.log("I waited"), 100);

})


// Mocking




// creating a snapshot: prevents regression
it('snapshot', () => {
  
  let tree = renderer.create(<App />).toJSON();

  console.log(tree);

  expect(tree).toMatchSnapshot();

})