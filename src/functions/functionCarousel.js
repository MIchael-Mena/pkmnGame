export const sortCollection = (aCollection) => {
    return aCollection.sort((a, b) => {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    })
}

export const navigateCarousel = (directionToNavigate, aPosition, aStateToUpdate) => {
    aStateToUpdate(aPosition + directionToNavigate);
};
