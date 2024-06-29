# ExpenseTracker
This is a expense tracking website
This project was build keeping in mind the issue when a teenager/bachelor is living away from his/her family in a new city and need to make his/her monthly expenses so that he/she can save some money at the end of the month and avoid unnecessary spendings.

I haved developed this website under different sections in order to maintain the cleanliness of the code.

I have divided my project into 3 files index.html, styles.css, index.js and an image folder to hold all my images together.



In the index.html file first I have provided some links of google fonts since I have been using the font family of Ubuntu and Outfit through out my project. I have also linked font awesome cdn and boostrap framework cdn aswell.
Also the css file is linked in the head of the html and javascript at the body of the html file.

The whole project is a one page site with different section : Navbar,Title,About,Tracker,Footer
# Navbar
The Navigation bar is basically the header from where we can travel to the various sections of the website. It consist of the brand name as well various buttons.It was been explicitly build using the bootstrap framework which is very scalable.
# Title
The title section consists of a flip image animation which flips to a different image upon hovering. The styling of this section is done in styles.css using  by rotating it along y-axis.
# About
The about section provides us how easy to use the tracker use and how easily you can manage your expenses using it. It has icons which bounces along the y-axis upon hovering along it.
# Tracker
Next up we have the tracker section which defines our project. It uses the javascript technology as well to add the functionality. The header div of the tracker displays the total amount, expenses and income as well and updates it whenever we add or remove transactions. We have provided a hardcoded object named transactions to display whenever our website is reloaded. This object displays the transactions made under id, name, amount, date and type. Also the transactions made will also be updated in our local storage as a JSON file. Also we have created a toggler which divides the transactions in the sub-category of expense and income. And accordingly the lists are rendered and changes are made as you can see in the color of the amount and the sign. Inputs are taken as name , amount and date inorder to list down the transactions and the submit button will make it visible on the screen next to the transactions. Also we can delete unnecessary transactions if we want just by hovering over it we will get a cancel button.
Along side I have provided some instructions to use the tracker incase you are new to the website. The rotating dollar images have been styled using css and a animation of making the instructions visible when we visit the section has been done using javascript.
# Footer/Contact
This section consists of icons of the various social media and mark the end of the page as well the website. Links to the various social media handles will be updated later.

This is all about my expense tracker website I hope you like it :)

