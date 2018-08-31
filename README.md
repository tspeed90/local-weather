# REAL-TIME WEATHER DISPLAY | FINANCIAL TIMES

## Tammy Speed

[Live Heroku site](https://local-weather-forecast.herokuapp.com)

The website should:

- Display weather for the user's current location
- Allow the user to choose the city you're getting the weather from
- Not rely heavily on client-side frameworks (ie. Angular, React) or libraries like jQuery

For bonus points, the website could:

- [x] Be accessible
- [x] Be responsive
- [x] Be server side rendered
- [ ] Be progressively enhanced
- [x] Be built using javascript and node.js
- [x] Be deployed on Heroku
- [ ] Be performant over 3G networks
- [x] Use Origami Components
- [ ] Work offline

## DESIGN PROCESS

Used Figma to create mock ups of the weather site, trying various color schemes. I found a green-blue color that I liked a lot, but after using the [WebAIM contrast checker tool](https://webaim.org/resources/contrastchecker/)
decided against it because it failed WCAG AA and AAA. I ended up settling on a simple white/navy combination that passed all levels of WCAG standards and now, I had a basic design to follow!
My actual implementation was slightly different from this design as I decided this design might have been TOO minimalist. I felt that a little more instruction for the page would be beneficial and a heading that spanned both pages would be more consistent.

![Figma mock-up](http://res.cloudinary.com/dp6beg5nw/image/upload/v1535669115/weatherAppNavy_xdb1bs.png)

## BONUSES

### Accessibility:

This application accounts for accessibility in several ways:

- Semantic HTML, larger than average font size, attention to color contrast
- Testing with Lighthouse and aXe accessibility tools (Scores 100 on Lighthouse, no issues on aXe)
- Manual testing with ChromeVox screen reader
- Loads quickly over fast 3G (2.5 seconds), 8-9 seconds on slow 3G
- Works without javascript enabled if user enters city name

![accessibility audit](http://res.cloudinary.com/dp6beg5nw/image/upload/v1535669098/a11CheckSearch_ldmjat.png)

![accessibility audit](http://res.cloudinary.com/dp6beg5nw/image/upload/v1535669092/a11yCheckWeather_r5d8zl.png)

### Responsiveness

The project responds to 3 device sizes. The styling is mobile first and contains two media queries. 1 for tablet size and 1 for laptop size. The breakpoints transition smoothly as the screen size grows.

### Origami Components

I looked through FT's Origami Components library and couldn't figure out a great way to use most of them for a weather application, but wanted to try using the library. I incorporated one of the secondary buttons into the project as my search button.

### Server Side Rendering

After discussing the position with Laura, I decided to use Handlebars for the project. Laura mentioned the Internal Products team uses Handlebars on some of their products, so I thought it would be fitting for me to use it for this project, plus it was an opportunity to get a refresher.

## Additional Notes:

### BEM class names

I decided to use BEM style class naming after looking at FT's home page code in DevTools. It appears that FT uses BEM for a lot of their classes so I decided to stick with that as well. I found it fairly useful and also sort of nice that I didn't have to be terribly creative in my names. They came naturally from the BEM methodology.

### Error handling

I wanted to ensure that if there was a problem with the search the user wouldn't be left with a broken site. Early on, my page would allow an empty search to be performed, I prevented this later with a required input field. I also put some error handling in place so that if the user searches for a city that can't be found, they would be routed to a page letting them know there was a problem instead of showing an empty weather page with no information. The error page also routes them back to the search page.

### Tests

I included a few tests using Jest and Supertest for testing my routes. I also had to use Jest-Fetch-Mock in order to mock my fetch function. The testing was mainly for the getWeather and getIcon functions which are integral in getting and displaying the weather info.
