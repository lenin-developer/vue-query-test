import ShopLayout from '@/modules/shop/layouts/ShopLayout.vue';
import { shallowMount } from '@vue/test-utils';


describe('ShopLayout.vue', () => {
    test('test monte componente structure', () => {
        const wrapper = shallowMount(ShopLayout, {
            global: {stubs: ['router-view']}
        })

        const topMenuComp = wrapper.findComponent({name: 'top-menu'});
        const customFooterComp = wrapper.findComponent({name: 'custom-footer'});
        const routerView = wrapper.findComponent({name: 'router-view'});

       expect(topMenuComp.exists()).toBe(true);
       expect(customFooterComp.exists()).toBeTruthy();
       expect(routerView.exists()).toBeTruthy();
    });
    
});
