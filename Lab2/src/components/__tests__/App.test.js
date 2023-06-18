import {describe, it, expect} from 'vitest';
import {mount} from '@vue/test-utils';
import app from '../../views/ApplicationView.vue'


const factory = (values = {}) => {
  return mount(app, {
      data() {
          return {
              ...values,
          }

      }
  })
}

describe('App  ', () => {
  it('renders a vue instance', () => {
    const wrapper = mount(app)
    expect(wrapper.vm).toBeTruthy()
  })
  it('renders a a-button', () => {
    const wrapper = factory()
    expect(wrapper.find('a-button').exists()).toBe(true)
  })
  it('renders a a-form', () => {
    const wrapper = factory()
    expect(wrapper.find('a-form').exists()).toBe(true)
  })
  it('append work test', () => {
    const wrapper = factory()
    wrapper.vm.append('5');
    wrapper.vm.append('3');
    expect(wrapper.vm.current).toBe('53');
  })
  it('dot work test', () => {
    const wrapper = factory()
    wrapper.vm.append('5');
    wrapper.vm.dot();
    wrapper.vm.append('3');
    expect(wrapper.vm.current).toBe('5.3');
  })
  it('clear work test', () => {
    const wrapper = factory()
    wrapper.vm.append('5');
    wrapper.vm.append('3');
    wrapper.vm.clear();
    expect(wrapper.vm.current).toBe('');
  })
  it('percent work test', () => {
    const wrapper = factory()
    wrapper.vm.append('5');
    wrapper.vm.append('3');
    wrapper.vm.percent();
    expect(wrapper.vm.current).toBe('0.53');
  })
  it('sign work test', () => {
    const wrapper = factory()
    wrapper.vm.append('5');
    wrapper.vm.append('3');
    wrapper.vm.sign();
    expect(wrapper.vm.current).toBe('-53');
    wrapper.vm.sign();
    expect(wrapper.vm.current).toBe('53');
  })
  it('plus work test', () => {
    const wrapper = factory()
    wrapper.vm.append('5');
    wrapper.vm.add();
    wrapper.vm.append('3');
    wrapper.vm.equal();
    expect(wrapper.vm.current).toBe('8');
  })
  it('minus work test', () => {
    const wrapper = factory()
    wrapper.vm.append('5');
    wrapper.vm.minus();
    wrapper.vm.append('3');
    wrapper.vm.equal();
    expect(wrapper.vm.current).toBe('2');
  })
  it('multiplic work test', () => {
    const wrapper = factory()
    wrapper.vm.append('5');
    wrapper.vm.multiplic();
    wrapper.vm.append('3');
    wrapper.vm.equal();
    expect(wrapper.vm.current).toBe('15');
  })
  it('division denominator != 0 work test', () => {
    const wrapper = factory()
    wrapper.vm.append('10');
    wrapper.vm.division();
    wrapper.vm.append('5');
    wrapper.vm.equal();
    expect(wrapper.vm.current).toBe('2');
  })
  it('division denominator == 0 work test', () => {
    const wrapper = factory()
    wrapper.vm.append('10');
    wrapper.vm.division();
    wrapper.vm.append('0');
    wrapper.vm.equal();
    expect(wrapper.vm.current).toBe('Infinity');
  })
})
