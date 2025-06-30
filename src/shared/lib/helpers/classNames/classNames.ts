type Mods = Record<string, boolean | string>


export function classNames(cls: string, mods?: Mods, addditional?: string[]): string {
    return [
        cls,
        ...addditional.filter(Boolean),
        Object.entries(mods)
            .filter(([value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ')
}