export function sortBy<T>(array: T[], attributeToSortBy: (item: T) => any, desc = false): T[] {
    return array.sort((a, b) => {
        const aAttribute = attributeToSortBy(a);
        const bAttribute =  attributeToSortBy(b);
        let value;
        if (aAttribute < bAttribute) {
            value = -1;
        } else if (aAttribute > bAttribute) {
            value = 1;
        } else {
            value = 0;
        }

        if (desc) {
            value = value * -1;
        }
        return value;
    })
}