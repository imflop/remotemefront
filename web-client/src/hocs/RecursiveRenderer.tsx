import React from "react";

export type RecursiveRendererObject = {
    children: React.ElementType,
    index: number,
    list: React.ElementType[]
};

/**
 * Компонент рекурсивного рендера обёрточных компонентов
 * @param children
 * @param index
 * @param list
 */
const RecursiveRenderer = ({ children, index = 0, list = [] }: RecursiveRendererObject) => {
    if (!list.length) {
        return <>{children}</>;
    }
    const Component = list[index];
    const next = index + 1;
    return (
        <Component>
            {list[next] ? (
                <RecursiveRenderer index={next} list={list}>
                    {children}
                </RecursiveRenderer>
            ) : (
                children
            )}
        </Component>
    );
};

export default RecursiveRenderer;
