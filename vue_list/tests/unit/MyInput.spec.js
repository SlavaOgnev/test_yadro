import { shallowMount } from '@vue/test-utils';
import MyInput from '@/components/UI/MyInput.vue';

describe('MyInput', () => {
    it('should emit update:modelValue when input is typed', async () => {
        const wrapper = shallowMount(MyInput, {
            props: {
                modelValue: ''
            }
        });

        // Симулируем ввод текста в input
        const input = wrapper.find('input');
        await input.setValue('new value');

        // Проверяем, что событие update:modelValue было вызвано с нужным значением
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['new value']);
    });
});