# Shut the Box | Dice Game! 

<!-- My idea for this project was to develop a concept website for the Sub30s Buddhist Group which I regularly attend. The purpose of the website is to provide some general information on the group (including What we do?, When we meet?, Where we meet?), an introduction into Buddhism and Meditation, and an opportunity to get in touch to request further information. -->

![Am I Responsive Image](assets/readme-images/am-i-responsive.jpg)

# Table of contents
- [Design](#design)
- [Features](#features)
  - [Existing Features](#existing-features)
    - [Languages Used](#languages-used)
    - [Navigation](#navigation)
    - [Home Page Hero Image](#home-page-hero-image)
    - [Home Page](#home-page)
    - [Footer](#footer)
    - [Buddhism and Meditation](#buddhism-and-meditation)
    - [Get in Touch](#get-in-touch)
  - [Future Features](#future-features)
- [Testing](#testing)
  - [Validator Testing](#validator-testing)
  - [Unfixed Bugs](#unfixed-bugs)
  - [Libraries & Programs Used](#libraries-and-programs-used)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)

# Design

**Text & Background Color**

<!-- Google Fonts: Font-family 'Mouse Memoirs' and 'Ubuntu' -->

<!-- I selected both the text and background colors to keep the website simple. I wanted to keep the main background white and introduce color into the website through the images used. I decided to use a light grey for the header and the footer to provide some contrast from the main sections. -->

**Game Area Design**

Based on the design of the Shut the Box board (see image).

- Wireframing. 

After intially developing the game board area to exactly reflect the wireframing design, it was noted that by stacking the number blocks, dice and buttons, instead of having the dice and buttons next to each other, this significantly reduced on the changes required when adding the media queries and meant that the design remained consistent for the user across all screen sizes.

**Game Process Planning - Flow Chart**


After the site was developed inline with the inital flow chart planning, as seen above, after testing of the site, it was noted that further conditional checking was required to prevent game faults: details of these faults have been 

# Features

## Existing Features:

### Languages Used

- HTML5
- CSS3
- JavaScript

### Header (including Navigation)

<!-- Logo text and icon... -->

Although there is only a single page with the 'How to play?' game rules loacted under the game area, it was noted during testing that on screens sizes with a smaller height, it was not immediately evident that these rules were available. By adding this button to the header, this solved this problem and also provided the user which a shortcut to this section of the page.

![Logo and Navigation Bar](assets/readme-images/header.jpg)

### Landing Page (Game Area)

- Game Board
- Number Blocks
- Dice Area (2 x Dice)
- Roll and Reset Buttons

<!-- A Hero Image is used on the Home Page (only) under the Header. The text over the Hero Image, 'Buddha - Dharma - Sangha', has been added to break up the image and has been included to improve the design. 'Buddha - Dharma - Sangha' are the Three Jewels of Buddhism and are an important part of the teachings.

![Hero Image](assets/readme-images/hero-image.jpg) -->

### Pop-up messages (Game Won, Game Bust, and Alerts)

<!-- This page provides all the information a user will need about the group. Each of the questions a user may have about the group have been broken into sections to make it easy to read. This section has been kept simple and to the point. -->

#### How to play?

<!-- This section has been placed first to provide some context about the page and what the group is about. -->

<!-- ![Who we are?](assets/readme-images/who-we-are-section.jpg) -->

### Footer

The footer section features a note that this site is for educational purposes only and details the name of the creator.

The note regarding this site being for educational purposes only has been included as I do not have the rights to some of the content and media used on the website. The content and media has been credited in this document.

<!-- ![Footer](assets/readme-images/footer.jpg) -->

### Other Features

- Favicon
- Other ...

## Future Features

- Highlighting
- Animations (Dice, card flip and Won Screen)
- Event listener for keyboard use of dice and numbers

# Testing

Testing of the website has been complete by myself and a few friends and family on various devices (Laptop, Tablet and Mobile). It is noted that all of the links, videos, and the contact form (including the input fields requiring information before submitting) functioned as expected.

To ensure that the website worked on a different browser that what was used for the development (Google Chrome), testing also took place on Microsoft Edge.

- Event Listeners and removing event listeners
- Reset Game (Template Literal)

- Roll exactly the same number.

- The game would not notify the user that they had bust if a combination of their remaining number blocks did not total to the dice total.

<!-- (Add image) -->

The solution to this was to use some code which created a new array of all combinations of an array of numbers. The original code used concatenated all cominations of a list of letters. This was update to collate an array of the remaining number blocks and then to add (instead of concatenate) all combinations of these numbers.

- If a user accidentally selected a number higher that the value of the dice...

Feedback from testing of friends and family noted that using two dice with both a value of one as the starting position was slightly confusing as if the game had already started. 

- How to Play? Section covering the game area on smaller screens - block elements not stacking. The initial thought was that the above sections "position" or "display" setting was preventing the blocks from stacking. Solution: The game-area section height was detailed using "vh". Changing this to pixels fixed this bug.

Comment on CSS Media Queries testing.

Useful techniques used during the testing process:
- Writing pseudo code
- console.log()s

## Validator Testing

- HTML: No errors were returned when passing through the official W3C validator:

![W3C HTML Validator](assets/readme-images/html-checker.jpg)

- CSS: No errors were found when passing through the official (Jigsaw) validator:

![W3C CSS Validator](assets/readme-images/css-checker.jpg)

- JSHint: ???:

![W3C JS](asset)

- WebAim Contrast Checker: ???:

![W3C JS](asset)

- Lighthouse (Accessibility Audit): The page achieved a great accessibility performance:

![Lighthouse Accessibility Audit](assets/readme-images/lighthouse-checker.jpg)

NB: Although the above screenshots only shows the results of the home page, no errors were found on the other pages of the site and they also achieved great accessibility performance.

## Unfixed Bugs

<!-- I have found that the spacing below some of the text sections of the 'Buddhism & Meditation' page are quite large. I think that due to the way that I have designed the page by using similar classes for the text tiles to reduce on CSS coding, I had not anticipated that where there are larger blocks of text, that these sections needed to be larger for smaller screens.

I do not think that this takes too much away from the design of the website, and I am happy with how it is, but I do plan to spend some more time on website design in the the future, so I can better plan before a project to avoid this.

It is also noted that the 'Performance' measure from the Lighthouse Accessibility Audit was relatively low (63/100). This is something which I am going to look into so I can improve on it for the future. -->

## Libraries and Programs Used

- Github: Store Repository
- Gitpod: Create the html and css files
- Google Fonts: Font-family 'Mouse Memoirs' and 'Ubuntu'
<!-- - Google Chrome Dev Tools: To aid the initial styling for media queries and testing at various screen sizes -->
<!-- - Microsoft Edge, Mozilla Firefox, Safari: Site testing on alternative browsers -->
- Microsoft OneNote: Planning notes for the project
<!-- - Font Awesome: Social media icons -->
- JavaScript coding tutor:
- Microsoft Whiteboard: Wireframing design and flow chart for game process planning
- Am I Responsive: Screenshots of the final project for the README file

# Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 

  1. In the GitHub repository, navigate to the Settings tab. 
  2. From the settings tab, select the 'Pages' tab in the 'Code and Automation' section.
  3. From the source section drop-down menu, select the 'Main' branch.
  4. Once the 'Main' branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link for the site can be found here - https://tuckerfaulk.github.io/shut-the-box-project/

# Credits

<!-- I have really enjoyed the Code Institute course up till now, and I am looking forward to the next units of the course. I wanted to thank the Slack Community for their support learning the content and my Mentor Martina for her guidance with this project and assurances that creating a website is not as scary as I initially thought.

As a starting point I looked at the Coders Coffee and Love Running projects.

- From the Love Running Project, I took inspiration for the header, hero banner, footer and form.
- From the Coders Coffee Project, I took inspiration from in my 'What we do?' section. -->

## Content



## Media

Images:



