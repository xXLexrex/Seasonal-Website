
// Wait until the document is fully loaded
$(document).ready(function () {

    // Create an array containing the names of all 12 months
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    // Monthly specials array
    const specials = [
        "<h3>January Special</h3><p>New Year savings! Enjoy 20% off selected items.</p>",
        "<h3>February Special</h3><p>Celebrate the season of love with special discounts!</p>",
        "<h3>March Special</h3><p>Welcome spring with our March specials!</p>",
        "<h3>April Special</h3><p>Enjoy fresh spring savings this month!</p>",
        "<h3>May Special</h3><p>Celebrate May with special offers!</p>",
        "<h3>June Special</h3><p>Summer savings are here! Shop our June deals.</p>",
        "<h3>July Special</h3><p>Enjoy our summer holiday specials!</p>",
        "<h3>August Special</h3><p>End-of-summer savings are waiting for you!</p>",
        "<h3>September Special</h3><p>Welcome fall with our September offers!</p>",
        "<h3>October Special</h3><p>Enjoy spooky season savings!</p>",
        "<h3>November Special</h3><p>Give thanks with our November specials!</p>",
        "<h3>December Special</h3><p>Celebrate the holidays with special savings!</p>"
    ];

    // Seasonal tips array
    const tips = [
        "<h3>Winter Tips</h3><p>Stay warm, dress in layers, and enjoy hot drinks during the cold weather!</p>",
        "<h3>Spring Tips</h3><p>Enjoy the outdoors, plant flowers, and take advantage of the warmer weather!</p>",
        "<h3>Summer Tips</h3><p>Stay hydrated, wear sunscreen, and enjoy outdoor activities!</p>",
        "<h3>Fall Tips</h3><p>Enjoy cooler weather, decorate with fall colors, and prepare for winter!</p>"
    ];

    // Get the current date
    const currentDate = new Date();

    // Get the current month number (January = 0, December = 11)
    const monthNumber = currentDate.getMonth();

    // Get the current month name using the months array
    const monthName = months[monthNumber];

    // Get the current year
    const currentYear = currentDate.getFullYear();

    // Change the month heading
    $("#month").text("Tips for " + monthName);

    // If the month is December, add a holiday greeting
    if (monthNumber === 11) {
        $("#slogan").after("<h3>Happy Holidays!</h3>");
    }

    // Add the current year to the copyright paragraph
    $("#copyright").append(" " + currentYear);

    // Display the monthly special using the month number
    $("#specials").html(specials[monthNumber]);

    // Variables for seasonal information
    let season;
    let backgroundImage;
    let seasonColor;
    let seasonIndex;

    // Identify the current season
    switch (monthNumber) {

        // Winter: December, January, February
        case 11:
        case 0:
        case 1:
            season = "Winter";
            backgroundImage = "winterbg.jpg";
            seasonColor = "#00f";
            seasonIndex = 0;
            break;

        // Spring: March, April, May
        case 2:
        case 3:
        case 4:
            season = "Spring";
            backgroundImage = "springbg.jpg";
            seasonColor = "#d7d";
            seasonIndex = 1;
            break;

        // Summer: June, July, August
        case 5:
        case 6:
        case 7:
            season = "Summer";
            backgroundImage = "summerbg.jpg";
            seasonColor = "#006400";
            seasonIndex = 2;
            break;

        // Fall: September, October, November
        case 8:
        case 9:
        case 10:
            season = "Fall";
            backgroundImage = "fallbg.jpg";
            seasonColor = "#930";
            seasonIndex = 3;
            break;
    }

    // Change the page background image
    $("body").css("background-image", "url('" + backgroundImage + "')");

    // Change the color of strong, h1, h2, and h3 elements
    $("strong, h1, h2, h3").css("color", seasonColor);

    // Display seasonal tips using the season index
    $("#seasontips").html(tips[seasonIndex]);

    // Add the season name as a class to the specials div
    $("#specials").addClass(season.toLowerCase());

});
Does 