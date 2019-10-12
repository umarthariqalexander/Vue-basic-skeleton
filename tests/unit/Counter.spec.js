import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('Counter doesnot render when no props passed', () => {
    const wrapper = shallowMount(Counter)
    expect(wrapper.isEmpty()).toBe(true)
  })
  it('Counter render when props passed', () => {
    const wrapper = shallowMount(Counter, {
      propsData: {
        showCounter: true
      }
    })
    expect(wrapper.isEmpty()).toBe(false)
  })
  it('Increment the Counter onClicking the Button', () => {
    const wrapper = shallowMount(Counter, {
      propsData: {
        showCounter: true
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.counter).toBe(1)
  })
})
