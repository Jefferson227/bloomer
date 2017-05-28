import * as React from 'react';
import { shallow } from 'enzyme';

import { Progress } from './../../src/elements/Progress';

describe('Progress', () => {
    it('should render a progress with .progress', () => {
        const component = shallow(<Progress>My Progress</Progress>);
        expect(component.contains(<progress className='progress'>My Progress</progress>)).toBe(true);
    });

    it('should render a progress with .progress and modifiers', () => {
        const component = shallow(<Progress isBlack isLarge>My Progress</Progress>);
        expect(component.hasClass('progress')).toBe(true);
        expect(component.hasClass('is-black')).toBe(true);
        expect(component.hasClass('is-large')).toBe(true);
    });

    it('should render a progress with .progress, modifiers and custom classNames', () => {
        const component = shallow(<Progress isPrimary className='custom'><span>Any Content</span></Progress>);
        expect(component.hasClass('progress')).toBe(true);
        expect(component.hasClass('is-primary')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a progress with .progress and custom classNames', () => {
        const component = shallow(<Progress className='custom'><span>Any Content</span></Progress>);
        expect(component.hasClass('progress')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});