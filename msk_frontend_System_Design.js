/*
1 => Documentation is important. Write down all the edge cases that will lead to the breakdown of the website
2 => https://www.youtube.com/watch?v=gttSJA-kDmQ

? What is a good design??
    if it doesn't break
    performs well
    sustainable in the long run
    can be scaled properly
    with all edge cases covered

? Selecting the right platform
    # Choose between mobile/desktop
        mobile => most commonly used by public
        desktop => mostly for company specific internal tools / editors such as canva, google docs etc
    # What is my pricing model
        to find out whether  SPA is enough or should we go to PWA

? Single page Applications(SPA)
    https://huspi.com/blog-open/definitive-guide-to-spa-why-do-we-need-single-page-applications
    SPA is an app that doesn't need to reload it's page during its use => github, google, facebook etc.
    Prefer SPA for web apps and prefer MPA(Multi Page Application) for blogs, amazon, movie booking sites
    Pros of SPA:
        #Dynamic => no reloading is required
        #Caching is efficient => Since we are not reloading the page the cached data remains until we disperse it
    Cons of SPA:
        #SEO becomes difficult
        #Security concerns => Since JS does all the things it isprone to cross site scripting attacks(XSS Attack) 
                                                (where the users enter JS code in the input of our website )

? Progressive Web App(PWA)
    https://web.dev/what-are-pwas/
    # Provides offline support where the data can be cached.
    # They use service workers.
    # Performance is far more better

? Web Sockets:
    Used for real time update.
    
? SEO
    https://www.greengeeks.in/blog/html-tags-for-seo/
    # Key factor of making the websie to reach the audience
    # Tags: Title, meta.
    # use Semantic HTML.
    # Build links related to your website. If we try to link websites irrelevant to our topics it results in search penalities .
    # Open Graph Tags
        https://ogp.me/
        OGP makes our website easily identifiable by all the social media websites

? Micro Frontend Architecture
    https://martinfowler.com/articles/micro-frontends.html
    # A front-end app is decomposed into individual, semi-independent “microapps” working loosely together.
    # Shorter build Time => Parallel Development is possible
    # Break the websites into Components. Figure out the static and the dynamic components(DC are used in different pages with different values).
            The dynamic components(DC) can be used in the micro frontend architecture (the static components are separated in the file system itself). 
                These dynamic components are deployed separately, they have their build mechanism etc.
    # Improves performance.

? UI Logic vs the Business Logic
    Always separate the UI Logic and the business logic using a middle layer.
    
? MVP
    Minimum viable Product
    Eg: Text Chat in whatsapp(not calls, payments etc)
    Inject analytics(Like how fast the page loads, performance etc) in the MVP
    Find out the MVP of your product.

? Performance
    https://medium.com/@inverita/frontend-optimization-8-tips-to-improve-web-performance-29af4b00efe7
    15 seconds is the average time a user spends on a website.
    Performance depends on Fast Loading & Smooth Operation(Once the page is loaded)
        *Caching :
            Caching stores a copy of the asset that a user has requested and later accesses the cached copy instead of the original copy. 
                There are different types of caching that help to improve delivery speed:
                -> Browser cache: Files are stored in the browser local cache so when one wants to access them, there is no need to download them 
                                                                                                                                        from a server.
                -> Cache server: Cache servers are located in different geographic regions so that the user’s requests don’t have to travel far.
                -> Memory cache: Memory cache helps to speed up the data delivery process within an application by storing certain parts of data in SRAM.
                -> Disc cache: Like a memory cache, disc cache stores data for it to be accessed faster within an application though it makes use of 
                                                                                                                                conventional RAM.
        * Pagination & Infinite Scroll
            Pagination is similar to Flipkart(Eg: When we search for a fan, only 10 fans are displayed in the first page and we have to go to the 
                next page for the next 10 fans and so on)
            Infinite scrolling is like Instagram where we the content gets loaded as we scroll
        * SSR - Initial data feed 
            Server side rendering
            Here the server sends a fully rendered page to the client
        * First Contentful Paint
            First Contentful Paint (FCP) is when the browser renders the first bit of content from the DOM, providing the first feedback 
            to the user that the page is actually loading.
        * First Meaningful Paint
            First Meaningful Paint is the time it takes for a page's primary content to appear on the screen. 
            It could be the headline and visible text for blog pages
        * First CPU idle time 
                Lowest time to provide minimum user interactivity 
        * Menaningful animations
                Distracts the user during the loading time

    ? Optimizing images
        https://www.shopify.in/blog/7412852-10-must-know-image-optimization-tips
        name you images properly and also use the "alt" option in the img tag.
        make sure the images are compressed(jpeg2) and are of the right dimensions(ie. prevent resizing)
    
    ? Handling APIs
        # Polling 
            Use polling for cases such as instagram "likes" where we need the data can be updated after few seconds and not immediately
        # Web Sockets
                we use these in stock markets etc where we want the data changes to be reflected immediately
        # Batching Requests
                Instead of sending one data at a time the data are batched and then sent
        # GraphQL
        # Caching GET APIs

    ? Debouncer
        https://www.freecodecamp.org/news/javascript-debounce-example/
        The debounce() function forces a function to wait a certain amount of time before running again
        In JavaScript, a debounce function makes sure that your code is only triggered once per user input. Eg: Search box suggestions

    ? Lazy Load
        Lazy loading is a strategy to identify resources which are non-critical and load them only when needed

    ? Localization (L10N)
        https://www.w3.org/International/questions/qa-i18n
        Make an app compatible in the local region( This can be currencies, items(selling of guns is banned in India), time formats, languages)

    ? Internationalization(I18N)
        Internationalization is the process of designing a software application so that it can be adapted to various languages 
                                                                                                and regions without much of engineering changes
    
    ? Accessibility
        https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility
        Our websie should work almost the same for people with slow internet, Color blindness etc.
        Use Semantic HTML which allows screen read-outs etc 

    ? Quality Assurance
        # Git Hooks
        # Linters/Static Analyzers
        # Unit Testing
        # Workflow Testing => Can use Syprus Tool
        # Same org Intergration Testing => components developed wihin a team are tested
        # Cross org intergration Testing => the entire product is tested before production
        # Automation suit

    ? Problem-1
        Design a frontend for a product that enables the uers to list down all the local movies playing in a 
        nearby theater and allows them to book tickets?
        * Answer:
               # End Users: Real World Customer
               # MVP : Displaying movies + ticket booking + Confirmation Email
               # SPA/MPA/PWA : People tend to search by movie names so go with MPA.Also SEO is better in MPA
               # Platform : Mostly mobile
               # Infinite Scroll/Pagenation : Infinite Scroll

               # Home Page:
                    -> Log In Button, Logo, navbar
                    -> Nav Bar => Profile, About, Help Desk, Log out
                    -> Location Input bar
                    -> Empty movie Cards
                    *First Contentful Paint completed
                    -> Either we can use the geolocation API or we can request the user to enter the zip code manually(Try using a debouncer)
                    -> Inorder to display the movies I need an API which takes in the zip code.
                            GET API => www.bookMyMovies.com/api/movies/zipCode => returns only movie name and poster
                    -> We use grids  to display the movie Cards.
                    *First Meaningful Paint completed

               # Movie Cards:
                    -> small movie poster
                    -> movie name
                    -> "Book Now" / "Booked" button

               # Movies Page:
                    -> Inorder to display the movie description, ratings and other details I need 
                        to make a separate API call to which the movie e/id would be passed
                            GET API => www.bookMyMovies.com/api/movieDetails/movieID 
                    -> Movie Title
                    -> Movie Description
                    -> Ratings
                    -> Reviews
                    -> Cast 
                    -> Book Now. Once the user clicks "Book Now" display a Booking Dialog Box 

               # Booking Dialog Box :
                    -> Movie Name
                    -> Time Available and date selection
                    -> Seats
                    -> Total Amount
                    -> Promo Codes
                    -> Confirm Button. Once the user clicks "Confirm" redirect him to the payments page
                            Post API => www.bookMyMovies.com/payment-api/customerDetails
                                customerDetails = {
                                    name: qwerty,
                                    email : qwerty@gmail.com,
                                    movieName : asdf,
                                    noOfTickets : 2,
                                    totalPrice : 500
                                }
                                
               # After payment gets succeded the payment platform gives a response such as "200 Bking passed" then
                    redirect to the home page and in the movie card change "Book Now" to "Booked"
               
               # State => {
                   userContex:{
                       name: qwerty,
                       email : qwerty@gmail.com
                   }
                   movies: [
                       {
                           title: asdf,
                           imgUrl: img@jcb.com,
                           booked: true
                       },
                       {
                           title: fdnbdff,
                           imgUrl: img2@jcb.com,
                           booked: false
                       }
                   ]
               }

               # Confirmation E-Mail : In the State if booked is true send an email using 3rd party 
                                        email builder such as "sendGrid" to send email
                                            Post API => www.bookMyMovies.com/sendGrid/movies[0]    
                    
               # Accessiblity : On pressing tab selection should go from one movie to another
               # Cached data => Cache the first 10 movies


    ? Interview
        speak about
            # Performance
            # volume of operation 
            # MVP Phase
    
*/
