$(document).ready(() => {
    $.get("https://smileschool-api.hbtn.info/quotes", (data) => {
        $("#comment-loader").hide();
        data.forEach((d, i) => $("#comment-carousel").append(createComment(d, i)));
    })

    $.get("https://smileschool-api.hbtn.info/popular-tutorials", (data) => {
        createVideoCard(data, "#popular-loader", "#popular-carousel", 'popular');
    });
    $.get("https://smileschool-api.hbtn.info/latest-videos", (data) => {
        createVideoCard(data, "#latest-loader", "#latest-carousel", 'latest');
    });

    $.get("https://smileschool-api.hbtn.info/courses", (data) => {
        const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
        const { topics, sorts } = data;
        topics.forEach((e) => {
            e = capitalize(e);
            $("#topic-options").append(`<option value="${e}">${e}</option>`);
        });
        sorts.forEach((e) => {
            e = e.split("_").map((e) => capitalize(e)).join(" ");
            $("#sort-options").append(`<option value="${e}">${e}</option>`);
        })
        showRelevantCourses();
    });

})