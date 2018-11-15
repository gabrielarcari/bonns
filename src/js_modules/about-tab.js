const getTab = function() {
    const content = `
        <div class="tab" id="about-tab">
            <h1>Bonns</h1>
            <div class="about-us">
                <div class="about-us-description">
                    <img src="img/fried-chicken.svg" alt="Chicken" class="about-us-icon">
                    <h2>Dare Yourself</h2>
                    <p>Secret bar</p>
                </div>
                <div class="about-us-description">
                    <img src="img/pepper.svg" alt="Spices" class="about-us-icon">
                    <h2>Drinks and smokes</h2>
                    <p>Young, wild and free</p>
                </div>
                <div class="about-us-description">
                    <img src="img/maps-and-flags.svg" class="about-us-icon" alt="Worldwide company">
                    <h2>Entrance by invite</h2>
                    <p>Shhh...</p>
                </div>
            </div>
        </div>
    `
    return content
}

export {getTab}