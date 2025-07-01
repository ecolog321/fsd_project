import { classNames } from "./classNames"

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames("someClass")).toBe("someClass")
    })
    test('with additional class', () => {
        const expected = "someClass class1 class2"
        expect(classNames("someClass", {}, ["class1","class2"])).toBe(expected)
    })
    test('with additional mods', () => {
        const expected = "someClass class1 class2 hovered scrolled"
        expect(classNames("someClass", {hovered:true, scrolled:true}, ["class1","class2"])).toBe(expected)
    })
    test('with mods false', () => {
        const expected = "someClass class1 class2 hovered"
        expect(classNames("someClass", {hovered:true, scrolled:false}, ["class1","class2"])).toBe(expected)
    })
    test('with mods undefined', () => {
        const expected = "someClass class1 class2 hovered"
        expect(classNames("someClass", {hovered:true, scrolled:undefined}, ["class1","class2"])).toBe(expected)
    })
})