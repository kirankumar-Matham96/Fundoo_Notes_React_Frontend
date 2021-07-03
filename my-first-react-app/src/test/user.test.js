import { shallow, mount } from 'enzyme';
import Home from '../pages/home';
import Register from '../pages/register';


describe('First test', () =>
{
  let wrapper;
  beforeEach(() =>
  {
    wrapper = shallow(<Home />)
  })

  test('renders some text', () =>
  {
    expect(wrapper.find('h1').text()).toContain("Using")
  });

  test('render a button with text of "increment"', () =>
  {
    expect(wrapper.find('#increment-btn').text()).toBe('increment');
  })

  test('div render', () =>
  {
    expect(wrapper.find('#div-one').text()).toBe('0')
  })

  test('test will increment counter', () =>
  {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#div-one').text()).toBe('1');
  })

  test('Testing deeper component', () =>
  {
    expect(wrapper.find('.hello').text()).toBe('Hello Home');
  })
})

describe('Register tests', () =>
{

  let wrapper;
  beforeEach(() =>
  {
    wrapper = shallow(<Home />)
  })

  test('Renders text "Register now and keep your notes safe"', () =>
  {
    expect(wrapper.find('.sub-title').text()).toContain('Register now and keep your notes safe');
  })




  // let wrapper;
  // test('test for mount',() =>
  // {
  //   wrapper = mount(<Register />);
  //   console.log('mount wrapper: ',wrapper.debug())
  // })

  // test('Register contains text "Register"', () =>
  // {
  //   expect(wrapper.find('.sub-title').text()).toContain('Register');
  // })

  // test('Register contains text "First NAme"', () =>
  // {
  //   expect(wrapper.find('.placeHolder').text()).toContain('First Name');
  // })

  // test('Register contains text "Last Name"', () =>
  // {
  //   expect(wrapper.find('.placeHolder').text()).toContain('Last Name');
  // })

  // test('Register contains text "Email"', () =>
  // {
  //   expect(wrapper.find('.placeHolder').text()).toContain('Email');
  // })
})

