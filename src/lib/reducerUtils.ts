export type AsyncState<T, E = any> = {
    loading: boolean;
    data: T | null;
    error: E | null;
}

export const asyncState = {
    // inital: (initialData: any) => ({
    //     loading: false,
    //     data: initialData || null,
    //     error: null,
    // })
    inital: <T, E>(initialData?: T): AsyncState<T, E> => ({
        loading: false,
        data: initialData || null,
        error: null,
    }),
    load: <T, E>(data?: T): AsyncState<T, E> => ({
        loading: true,
        data: data || null,
        error: null
    }),
    success: <T, E>(data: T): AsyncState<T, E> => ({
        loading: false,
        data,
        error: null
    }),
    error: <T, E>(error: E): AsyncState<T, E> => ({
        loading: false,
        data: null,
        error
    })
}