export const fetchAllCategories = () => {
    // debugger
    return (
    $.ajax({
        method: "GET",
        url: '/api/categories'
    })
    )
};

export const fetchCategory = categoryId => (
    $.ajax({
        method: "GET",
        url: `/api/categories/${categoryId}`
    })
);