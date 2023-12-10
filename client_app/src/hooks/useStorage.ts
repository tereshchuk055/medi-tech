import { useCallback, useState, useEffect } from "react"

interface StructureBase {
    key: string;
    defaultValue: any;
}

interface Structure extends StructureBase {
    storageObject: Storage;
}

export function useLocalStorage({ key, defaultValue }: StructureBase) {
    return useStorage({ key, defaultValue, storageObject: window.localStorage });
}

export function useSessionStorage({ key, defaultValue }: StructureBase) {
    return useStorage({ key, defaultValue, storageObject: window.sessionStorage });
}

function useStorage({ key, defaultValue, storageObject }: Structure) {
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        if (value === undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [key, value, storageObject])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}