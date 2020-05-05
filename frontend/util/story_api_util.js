export const fetchUserStories = userId => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}/stories`
    })
);

export const fetchCategoryStories = categoryId => (
    $.ajax({
        method: "GET",
        url: `/api/categories/${categoryId}/stories`
    })
);

export const fetchAllStories = () => (
    $.ajax({
        method: "GET",
        url: `/api/stories`
    })
);

export const fetchStory = storyId => (
    $.ajax({
        method: "GET",
        url: `/api/stories/${storyId}`
    })
);

export const createStory = story => (
    $.ajax({
        method: "POST",
        url: `/api/stories`,
        data: { story }
    })
);

export const updateStory = story => (
    $.ajax({
        method: "PATCH",
        url: `/api/stories/${story.id}`,
        data: { story }
    })
);

export const deleteStory = storyId => (
    $.ajax({
        method: "DELETE",
        url: `/api/stories/${storyId}`
    })
);