import { shallowMount } from '@vue/test-utils'
import ComponentExample from './ComponentExample.vue'

describe('Component', () => {

    test('Matches snapshot', () => {
        const wrapper = shallowMount(ComponentExample)
        expect(wrapper.element).toMatchSnapshot()
    })

})
