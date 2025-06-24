type Mods = Record<string, boolean | string>


export function classNames(cls: string, mods: Mods, addditional: string[]): string {
    return [
        cls,
        ...addditional,
        Object.entries(mods)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls, value]) => cls)
    ]
        .join(' ')
}