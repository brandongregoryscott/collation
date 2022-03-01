import { RuleViolation } from "../models/rule-violation";

interface GetHintOptions<TElement, TElementStructure = TElement> {
    /* Name of element type that's out of order (i.e. prop, property, etc) */
    elementTypeName: string;
    /* Expected index of the element*/
    expectedIndex: number;
    /* Function to return the element's actual name */
    getElementName?: (element: TElement) => string;
    /* Function to return the transformed element's actual name */
    getElementStructureName?: (elementStructure: TElementStructure) => string;
    /* Original index of the element that's out of order */
    index: number;
    /* Original collection of elements that are out of order */
    original: TElement[];
    /* Name of the parent node (i.e. ButtonProps, <Button />, useEffect, etc) */
    parentName: string;
    /* Sorted collection of elements or their transformed structures */
    sorted: TElementStructure[];
}

const getAlphabeticalMessages = <TElement, TElementStructure = TElement>(
    options: GetHintOptions<TElement, TElementStructure>
): Pick<RuleViolation, "hint" | "message"> => {
    const {
        index,
        expectedIndex,
        parentName,
        elementTypeName,
        original,
        sorted,
        getElementName = (element) => element,
        getElementStructureName = (element) => element,
    } = options;

    const propertyName = getElementName(original[index]);
    const propertyMovedToLastPosition = expectedIndex + 1 === sorted.length;
    const relativePropertyName = getElementStructureName(
        sorted[
            propertyMovedToLastPosition ? expectedIndex - 1 : expectedIndex + 1
        ]
    );
    const relativePosition = propertyMovedToLastPosition ? "after" : "before";
    const hint = `'${propertyName}' should appear alphabetically ${relativePosition} '${relativePropertyName}'.`;
    const message = `Expected ${elementTypeName} '${propertyName}' in '${parentName}' (index ${index}) to be at index ${expectedIndex}.`;

    return { hint, message };
};

export { getAlphabeticalMessages };